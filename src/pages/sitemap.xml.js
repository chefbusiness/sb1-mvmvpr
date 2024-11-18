import { defineConfig } from 'astro/config';

const pages = [
  '',
  '/servicios',
  '/proyectos',
  '/blog',
  '/pintura-viviendas',
  '/pintura-locales-comerciales',
  '/pintura-oficinas',
  '/pintura-chalets',
  '/pintura-zonas-comunes'
];

export async function get() {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages.map((page) => `
    <url>
      <loc>https://pintoreselcanaveral.pro${page}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>${page === '' ? '1.0' : '0.8'}</priority>
    </url>
  `).join('')}
</urlset>`;

  return {
    body: sitemap,
    headers: {
      'Content-Type': 'application/xml'
    }
  };
}