import { getCollection } from 'astro:content';

export async function getPosts() {
  const entries = await getCollection('posts');
  const seen = new Set();
  return entries.map((entry) => {
    const [category, filename, ...extra] = entry.id.split('/');
    const match = filename?.match(/^(\d{4}-\d{2}-\d{2})-([a-z0-9]+(?:-[a-z0-9]+)*)$/);
    if (extra.length || !['research', 'projects', 'other'].includes(category) || !match) {
      throw new Error(`Invalid post path "${entry.id}". Use category/YYYY-MM-DD-slug.md.`);
    }
    const [, date, slug] = match;
    const href = `/${category}/${slug}/`;
    if (seen.has(href)) throw new Error(`Duplicate post URL: ${href}`);
    seen.add(href);
    const target = entry.data.redirect;
    if (target) {
      if (/\s/.test(target) || !(target.startsWith('/') && !target.startsWith('//')) && !/^https?:\/\/[^/]+/i.test(target)) {
        throw new Error(`Invalid redirect in ${entry.id}: use an absolute path or HTTP(S) URL without spaces.`);
      }
      const url = new URL(target, 'https://lukasrustler.cz');
      if (url.origin === 'https://lukasrustler.cz' && url.pathname.replace(/\/+$/, '') === href.replace(/\/+$/, '')) {
        throw new Error(`Redirect points to itself: ${href}`);
      }
    }
    return { ...entry, category, date, slug, href };
  }).sort((a, b) => b.date.localeCompare(a.date) || a.href.localeCompare(b.href));
}

export async function postsIn(category) {
  return (await getPosts()).filter((post) => post.category === category);
}
