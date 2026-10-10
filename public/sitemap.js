import { Fragment, RawHtml } from 'essex';

export const meta = {
  title: 'GDB Privacy Policy',
  url: '/sitemap.xml',
  wrapper: ({ children }) => children,
};

export default function SitemapXML () {
  const { languages, CANONICAL_ROOT } = this;

  return (
    <>
      <RawHtml>{'<?xml version="1.0" encoding="UTF-8"?>'}</RawHtml>
      <RawHtml>{'<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'}</RawHtml>
        {Object.values(languages).map((lang) => lang.pages.map((page) => (
          <url>
            <loc>{new URL(page.url, CANONICAL_ROOT).href}</loc>
            {/* <lastmod>{{ date dateModified "yyyy-MM-dd'T'HH:mm:ss.SSSxxx"}}</lastmod> */}
            <lastmod>{page.mtime.toISOString()}</lastmod>
          </url>
        )))}
      <RawHtml>{'</urlset>'}</RawHtml>
    </>
  );
}
