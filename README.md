# Lukáš Rustler's website

A static [Astro](https://astro.build/) portfolio inspired by [Darkminimal](https://github.com/Gothsec/dark-minimal).

## Run locally

Use Node.js 22.18 or newer, then:

```sh
npm install
npm run dev
```

Open the address printed by Astro, normally <http://localhost:4321/>. For a production build:

```sh
npm run build
npm test
npm run preview
```

The finished site is in `dist/`. Redirect pages include a meta-refresh and a clickable link as a fallback.

## Where things go

| Path | Purpose |
| --- | --- |
| `src/content/news.md` | Homepage news |
| `src/content/posts/research/` | Publications and research links |
| `src/content/posts/projects/` | Student projects |
| `src/content/posts/other/` | Other projects |
| `public/assets/images/` | Images used by the portfolio |
| `public/nntl/`, `public/rgbd-comparison/`, etc. | Complete standalone websites, served at those same URL paths |
| `src/pages/` | Astro routes and generated feed and sitemap |
| `src/components/`, `src/layouts/`, `src/styles/` | Portfolio design |

Everything in `public/` is copied into the build unchanged. Keep relative asset paths intact when adding a standalone website. Existing `/nntl/`, `/rgbd-comparison/`, `/roboprox/`, `/pykuka/`, and `/pyur/` addresses remain available.

## Add news

Add a Markdown list item to `src/content/news.md`, usually at the top:

```md
- **13.11.2026** Our [new paper](https://example.com/paper) was published!
```

## Add a research or project entry

Create a Markdown file in the corresponding directory, named `YYYY-MM-DD-slug.md`. The date controls ordering and the slug controls the URL. For example, `src/content/posts/research/2026-11-13-my-paper.md` creates `/research/my-paper/`:

```md
---
title: "My paper"
venue: "ICRA 2026"
authors: "Lukas Rustler, Co-author"
paper-link: "https://example.com/paper"
---

Describe the paper here using Markdown.
```

`venue`, `authors`, `paper-link`, `arxiv-link`, `code-link`, `data-link`, `docs-link`, `demo-link`, `abstract`, `bibtex`, `video-id`, `tags`, and `header.teaser` are optional. Images can be referenced as `/assets/images/filename.jpg`. Astro validates the frontmatter when it loads the collection. Changing a published filename's slug changes its URL; retain the old URL with a redirect when needed.

For a **redirect entry**, put its destination in the frontmatter instead of writing a page body:

```md
---
title: "My research project"
venue: "ICRA 2026"
redirect: "/my-project/"
---
```

Place a locally hosted site in `public/my-project/` with an `index.html`, or use an external destination such as `https://example.com/my-project/`. The Research listing links directly to the destination, while `/research/my-paper/` remains available for existing links via a meta-refresh and a clickable fallback. GitHub Pages serves this as an HTML page, not an HTTP redirect. Avoid linking a redirect to itself.

The existing standalone `/roboprox/` redirect is served from `public/roboprox/`.

The existing `/research/adaptive-sensitivity/` entry points to `/adaptive-sensitivity/`, served by a separate GitHub Pages project. That project's `rustlluk.github.io/adaptive-sensitivity/` URL redirects back to the custom domain, so make sure its output remains available at `/adaptive-sensitivity/` on `lukasrustler.cz`.

## GitHub Pages

`.github/workflows/deploy.yml` builds and deploys the site to GitHub Pages when changes are pushed to `master`; it can also be run manually from the Actions tab. In the repository settings, set **Pages → Build and deployment → Source** to **GitHub Actions** and set the custom domain to `lukasrustler.cz` if it is not already configured. The build outputs to `dist/`, and `public/CNAME` preserves the custom domain in each deployment. `astro.config.mjs` already sets the canonical site URL, and this `rustlluk.github.io` repository is served from the domain root, so no Astro `base` setting is needed.

The canonical URL is set in `astro.config.mjs`. Google Analytics is enabled in production builds; post comments use the existing Disqus site. Their integrations are in `src/layouts/Base.astro` and `src/pages/[section]/[slug].astro`.
