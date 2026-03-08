import { BetaAnalyticsDataClient } from '@google-analytics/data';

export type MetricCard = {
  key: string;
  label: string;
  value: string;
  hint: string;
};

export type TrendPoint = {
  date: string;
  pageviews: number;
  sessions: number;
  users: number;
};

export type BreakdownItem = {
  label: string;
  value: number;
  share: number;
};

export type GaDashboardData = {
  metricCards: MetricCard[];
  trend: TrendPoint[];
  topPages: BreakdownItem[];
  topCountries: BreakdownItem[];
  deviceSplit: BreakdownItem[];
  sourceMedium: BreakdownItem[];
  periodLabel: string;
  totals: {
    sessions: number;
    totalUsers: number;
    newUsers: number;
    screenPageViews: number;
    bounceRate: number;
    engagementRate: number;
    averageSessionDuration: number;
  };
};

export type GaDashboardResult =
  | { configured: false; missingVars: string[] }
  | { configured: true; ok: false; error: string }
  | { configured: true; ok: true; data: GaDashboardData };

const requiredEnv = ['GA4_PROPERTY_ID', 'GA4_CLIENT_EMAIL', 'GA4_PRIVATE_KEY'] as const;
const numberFmt = new Intl.NumberFormat('en-US');
const percentFmt = new Intl.NumberFormat('en-US', {
  style: 'percent',
  minimumFractionDigits: 1,
  maximumFractionDigits: 1,
});

const asNumber = (value?: string | null) => Number(value ?? 0);

function formatDuration(seconds: number) {
  if (seconds < 60) return `${Math.round(seconds)}s`;
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.round(seconds % 60);
  return `${minutes}m ${remainingSeconds}s`;
}

function formatDateFromGa(yyyymmdd: string): string {
  if (yyyymmdd.length !== 8) return yyyymmdd;
  return `${yyyymmdd.slice(0, 4)}-${yyyymmdd.slice(4, 6)}-${yyyymmdd.slice(6, 8)}`;
}

function mapBreakdown(rows: any[] | null | undefined): BreakdownItem[] {
  if (!rows?.length) return [];
  const items = rows.map((row) => ({
    label: row.dimensionValues?.[0]?.value || '(not set)',
    value: asNumber(row.metricValues?.[0]?.value),
  }));
  const total = items.reduce((sum, item) => sum + item.value, 0);
  return items.map((item) => ({
    ...item,
    share: total > 0 ? item.value / total : 0,
  }));
}

function formatMetricCards(totals: GaDashboardData['totals']): MetricCard[] {
  const sessionsPerUser = totals.totalUsers > 0 ? totals.sessions / totals.totalUsers : 0;

  return [
    {
      key: 'sessions',
      label: 'Sessions',
      value: numberFmt.format(totals.sessions),
      hint: 'Traffic volume over the last 30 days',
    },
    {
      key: 'users',
      label: 'Users',
      value: numberFmt.format(totals.totalUsers),
      hint: 'Unique active visitors',
    },
    {
      key: 'pageviews',
      label: 'Pageviews',
      value: numberFmt.format(totals.screenPageViews),
      hint: 'Total viewed pages/screens',
    },
    {
      key: 'newUsers',
      label: 'New users',
      value: numberFmt.format(totals.newUsers),
      hint: 'First-time visitors acquired',
    },
    {
      key: 'engagementRate',
      label: 'Engagement rate',
      value: percentFmt.format(totals.engagementRate),
      hint: 'Share of engaged sessions',
    },
    {
      key: 'bounceRate',
      label: 'Bounce rate',
      value: percentFmt.format(totals.bounceRate),
      hint: 'Single-page / low-engagement exits',
    },
    {
      key: 'avgSessionDuration',
      label: 'Avg session duration',
      value: formatDuration(totals.averageSessionDuration),
      hint: 'Average time visitors stay',
    },
    {
      key: 'sessionsPerUser',
      label: 'Sessions per user',
      value: sessionsPerUser.toFixed(2),
      hint: 'Repeat visitation intensity',
    },
  ];
}

export async function getGaDashboardData(): Promise<GaDashboardResult> {
  const missingVars = requiredEnv.filter((name) => !process.env[name]);
  if (missingVars.length > 0) {
    return { configured: false, missingVars: [...missingVars] };
  }

  try {
    const client = new BetaAnalyticsDataClient({
      credentials: {
        client_email: process.env.GA4_CLIENT_EMAIL,
        private_key: process.env.GA4_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
    });

    const property = `properties/${process.env.GA4_PROPERTY_ID}`;
    const dateRanges = [{ startDate: '30daysAgo', endDate: 'today' }];

    const [overviewRes, trendRes, pagesRes, countriesRes, devicesRes, sourceMediumRes] = await Promise.all([
      client.runReport({
        property,
        dateRanges,
        metrics: [
          { name: 'sessions' },
          { name: 'totalUsers' },
          { name: 'newUsers' },
          { name: 'screenPageViews' },
          { name: 'bounceRate' },
          { name: 'engagementRate' },
          { name: 'averageSessionDuration' },
        ],
      }),
      client.runReport({
        property,
        dateRanges,
        dimensions: [{ name: 'date' }],
        metrics: [{ name: 'screenPageViews' }, { name: 'sessions' }, { name: 'totalUsers' }],
        orderBys: [{ dimension: { dimensionName: 'date' }, desc: false }],
      }),
      client.runReport({
        property,
        dateRanges,
        dimensions: [{ name: 'pagePath' }],
        metrics: [{ name: 'screenPageViews' }],
        orderBys: [{ metric: { metricName: 'screenPageViews' }, desc: true }],
        limit: 8,
      }),
      client.runReport({
        property,
        dateRanges,
        dimensions: [{ name: 'country' }],
        metrics: [{ name: 'sessions' }],
        orderBys: [{ metric: { metricName: 'sessions' }, desc: true }],
        limit: 8,
      }),
      client.runReport({
        property,
        dateRanges,
        dimensions: [{ name: 'deviceCategory' }],
        metrics: [{ name: 'sessions' }],
        orderBys: [{ metric: { metricName: 'sessions' }, desc: true }],
        limit: 8,
      }),
      client.runReport({
        property,
        dateRanges,
        dimensions: [{ name: 'sessionSourceMedium' }],
        metrics: [{ name: 'sessions' }],
        orderBys: [{ metric: { metricName: 'sessions' }, desc: true }],
        limit: 6,
      }),
    ]);

    const overviewRow = overviewRes[0].rows?.[0];
    const totals = {
      sessions: asNumber(overviewRow?.metricValues?.[0]?.value),
      totalUsers: asNumber(overviewRow?.metricValues?.[1]?.value),
      newUsers: asNumber(overviewRow?.metricValues?.[2]?.value),
      screenPageViews: asNumber(overviewRow?.metricValues?.[3]?.value),
      bounceRate: asNumber(overviewRow?.metricValues?.[4]?.value),
      engagementRate: asNumber(overviewRow?.metricValues?.[5]?.value),
      averageSessionDuration: asNumber(overviewRow?.metricValues?.[6]?.value),
    };

    const trend: TrendPoint[] = (trendRes[0].rows ?? []).map((row) => ({
      date: formatDateFromGa(row.dimensionValues?.[0]?.value ?? ''),
      pageviews: asNumber(row.metricValues?.[0]?.value),
      sessions: asNumber(row.metricValues?.[1]?.value),
      users: asNumber(row.metricValues?.[2]?.value),
    }));

    return {
      configured: true,
      ok: true,
      data: {
        metricCards: formatMetricCards(totals),
        trend,
        topPages: mapBreakdown(pagesRes[0].rows),
        topCountries: mapBreakdown(countriesRes[0].rows),
        deviceSplit: mapBreakdown(devicesRes[0].rows),
        sourceMedium: mapBreakdown(sourceMediumRes[0].rows),
        periodLabel: 'Last 30 days',
        totals,
      },
    };
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown GA4 Data API error';
    return {
      configured: true,
      ok: false,
      error: message,
    };
  }
}
