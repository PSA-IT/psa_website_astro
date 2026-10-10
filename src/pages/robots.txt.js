// Preview copies on *.netlify.app are hidden from search engines; the real
// domain (psa-online.net) is open and points crawlers at the sitemap.
export function GET() {
  const primary = process.env.URL || '';
  const isPreview = primary !== '' && !primary.includes('psa-online.net');
  const body = isPreview
    ? 'User-agent: *\nDisallow: /\n'
    : 'User-agent: *\nAllow: /\n\nSitemap: https://psa-online.net/sitemap-index.xml\n';
  return new Response(body, { headers: { 'Content-Type': 'text/plain' } });
}
