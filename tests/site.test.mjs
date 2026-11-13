import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';

const read = (path) => readFile(`dist/${path}`, 'utf8');

test('build contains portfolio pages and standalone assets', async () => {
  for (const path of [
    'index.html', 'research/index.html', 'projects/index.html', 'other/index.html',
    'nntl/index.html', 'nntl/static/videos/nntl_video.mp4',
    'rgbd-comparison/index.html', 'pykuka/index.html', 'pyur/index.html',
    'assets/images/me.jpg',
  ]) await access(`dist/${path}`);
  assert.match(await read('research/index.html'), /Empirical Comparison of Four/);
});

test('redirect pages include HTML fallbacks and are excluded from the sitemap', async () => {
  for (const [path, target] of [
    ['research/rgbd-comparison/index.html', '/rgbd-comparison/'],
    ['research/adaptive-sensitivity/index.html', '/adaptive-sensitivity/'],
    ['roboprox/index.html', 'https://roboprox-v3s.iid.ciirc.cvut.cz/'],
  ]) {
    const page = await read(path);
    assert.ok(page.includes(`content="0; url=${target}"`));
    assert.ok(page.includes(`href="${target}"`));
  }
  const sitemap = await read('sitemap.xml');
  assert.ok(sitemap.includes('/rgbd-comparison/'));
  assert.ok(!sitemap.includes('/research/rgbd-comparison/'));
});

test('site links to redirect destinations directly', async () => {
  for (const path of ['research/index.html', 'search/index.html', 'categories/index.html']) {
    const page = await read(path);
    assert.ok(page.includes('href="/adaptive-sensitivity/"'));
    assert.ok(!page.includes('href="/research/adaptive-sensitivity/"'));
  }
  const feed = await read('feed.xml');
  assert.ok(feed.includes('<link href="https://lukasrustler.cz/adaptive-sensitivity/"/>'));
});

test('main navigation and homepage omit project and utility links', async () => {
  const homepage = await read('index.html');
  const navigation = homepage.match(/<nav aria-label="Main navigation">([\s\S]*?)<\/nav>/)?.[1];
  assert.ok(navigation);
  for (const href of ['/projects/', '/other/', '/search/', '/#contact']) {
    assert.ok(!navigation.includes(`href="${href}"`));
  }
  assert.ok(!homepage.includes('Student projects'));
  assert.ok(!homepage.includes('Other projects'));
});
