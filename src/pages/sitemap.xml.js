import { getPosts } from '../lib/posts.js';

export async function GET({ site }) {
  const posts = await getPosts();
  const paths = [
    '/', '/research/', '/projects/', '/other/', '/search/', '/categories/', '/tags/',
    '/nntl/', '/rgbd-comparison/', '/pykuka/', '/pyur/',
    ...posts.filter((post) => !post.data.redirect).map((post) => post.href),
  ];
  const locations = paths.map((path) => `<url><loc>${new URL(path, site).href}</loc></url>`).join('');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${locations}</urlset>`, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}
