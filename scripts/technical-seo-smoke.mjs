const testOrigin = process.env.TEST_BASE_URL || "http://127.0.0.1:3005";
const canonicalOrigin = "https://www.villabergi.com";
const locales = ["en", "de", "hr", "it"];
const paths = ["", "/villa-bergi", "/pricelist", "/photogallery", "/surroundings", "/contact", "/privacy"];

const failures = [];
let checkedPages = 0;

function check(condition, message) {
  if (!condition) failures.push(message);
}

for (const locale of locales) {
  for (const path of paths) {
    const route = `/${locale}${path}`;
    const response = await fetch(`${testOrigin}${route}`);
    const html = await response.text();
    const expectedCanonical = `${canonicalOrigin}${route}`;

    check(response.status === 200, `${route}: expected 200, received ${response.status}`);
    check(
      html.includes(`<link rel="canonical" href="${expectedCanonical}"`),
      `${route}: missing canonical ${expectedCanonical}`,
    );

    for (const alternateLocale of locales) {
      const expectedAlternate = `${canonicalOrigin}/${alternateLocale}${path}`;
      check(
        html.includes(`hrefLang="${alternateLocale}" href="${expectedAlternate}"`) ||
          html.includes(`hreflang="${alternateLocale}" href="${expectedAlternate}"`),
        `${route}: missing ${alternateLocale} alternate ${expectedAlternate}`,
      );
    }

    const expectedDefault = `${canonicalOrigin}/en${path}`;
    check(
      html.includes(`hrefLang="x-default" href="${expectedDefault}"`) ||
        html.includes(`hreflang="x-default" href="${expectedDefault}"`),
      `${route}: missing x-default alternate ${expectedDefault}`,
    );

    const h1Count = (html.match(/<h1\b/gi) || []).length;
    check(h1Count === 1, `${route}: expected exactly one h1, received ${h1Count}`);
    check(!/<p[^>]*>\s*<p\b/i.test(html), `${route}: contains invalid nested paragraph markup`);
    check(!html.includes("Villa Relax"), `${route}: contains stale Villa Relax branding`);
    check(
      !new RegExp(`href=["'][^"']*/${locale}/${locale}(?:/|["'])`, "i").test(html),
      `${route}: contains a duplicated /${locale}/${locale} link`,
    );

    checkedPages += 1;
  }
}

const duplicateResponse = await fetch(`${testOrigin}/en/en/pricelist?source=smoke`, { redirect: "manual" });
check(duplicateResponse.status === 308, `duplicate locale route: expected 308, received ${duplicateResponse.status}`);
check(
  new URL(duplicateResponse.headers.get("location"), testOrigin).pathname === "/en/pricelist",
  `duplicate locale route: unexpected location ${duplicateResponse.headers.get("location")}`,
);

const sitemap = await (await fetch(`${testOrigin}/sitemap.xml`)).text();
const sitemapUrls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
check(sitemapUrls.length === locales.length * paths.length, `sitemap: expected ${locales.length * paths.length} URLs, received ${sitemapUrls.length}`);
check(sitemapUrls.every((url) => url.startsWith(`${canonicalOrigin}/`)), "sitemap: found a non-WWW URL");

const robots = await (await fetch(`${testOrigin}/robots.txt`)).text();
check(robots.includes(`Host: ${canonicalOrigin}`), "robots.txt: incorrect host");
check(robots.includes(`Sitemap: ${canonicalOrigin}/sitemap.xml`), "robots.txt: incorrect sitemap URL");

if (failures.length) {
  console.error(`Technical SEO smoke test failed (${failures.length} issue${failures.length === 1 ? "" : "s"}):`);
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log(`Technical SEO smoke test passed: ${checkedPages} localized pages, duplicate-locale redirect, sitemap and robots.txt.`);
