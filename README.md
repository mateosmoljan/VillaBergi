

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).



## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Internal GA4 Dashboard (Server-side)

Route: `/internal/analytics`

This dashboard pulls GA4 data with the Google Analytics Data API on the server only (service account). It does **not** replace or modify existing frontend tracking (`NEXT_PUBLIC_MEASUREMENT_ID`).

### Required env vars

Add to `.env.local`:

```env
GA4_PROPERTY_ID=123456789
GA4_CLIENT_EMAIL=ga4-dashboard@your-project.iam.gserviceaccount.com
GA4_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
```

### Least-privilege auth setup

1. In Google Cloud, create a dedicated service account for read-only analytics access.
2. Enable **Google Analytics Data API** in that project.
3. In GA4 Admin → Property Access Management, add the service account email as **Viewer** (or Analyst if required).
4. Copy the private key once and store it in server env vars only.
5. Never expose `GA4_CLIENT_EMAIL` / `GA4_PRIVATE_KEY` to public runtime vars (`NEXT_PUBLIC_*`).

If these vars are missing, `/internal/analytics` shows setup instructions instead of crashing.

<!-- Fonts -->
-- Arbutus Slab 
-- Poppins

<!-- Colors -->
-- brown: #755B3E
-- LightBrown: #9c8973
-- yellow: #FFCC29
-- Light Blue: #91D8F7
-- Blue: #0098DA