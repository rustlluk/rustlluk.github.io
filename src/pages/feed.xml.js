import { getPosts } from '../lib/posts.js';

const escapeXml = (value) => String(value).replace(/[&<>"']/g, (character) => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;',
})[character]);

export async function GET({ site }) {
  const posts = await getPosts();
  const entries = await Promise.all(posts.map(async (post) => {
    const url = new URL(post.href, site).href;
    const link = new URL(post.data.redirect || post.href, site).href;
    const date = `${post.date}T00:00:00Z`;
    const content = post.data.redirect
      ? `<a href="${escapeXml(post.data.redirect)}">Continue to ${escapeXml(post.data.title)}</a>`
      : post.rendered?.html;
    if (content === undefined) throw new Error(`Missing rendered content for ${post.id}`);
    return `<entry><title>${escapeXml(post.data.title)}</title><id>${escapeXml(url)}</id><link href="${escapeXml(link)}"/><published>${date}</published><updated>${date}</updated><content type="html">${escapeXml(content)}</content></entry>`;
  }));
  const updated = posts.length ? `${posts[0].date}T00:00:00Z` : '1970-01-01T00:00:00Z';
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><feed xmlns="http://www.w3.org/2005/Atom"><title>Lukáš Rustler</title><id>${escapeXml(site.href)}</id><link href="${escapeXml(site.href)}"/><link rel="self" href="${escapeXml(new URL('/feed.xml', site).href)}"/><updated>${updated}</updated>${entries.join('')}</feed>`, {
    headers: { 'Content-Type': 'application/atom+xml; charset=utf-8' },
  });
}
