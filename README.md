# www

Personal website, projects, blogs and everything. Visit the website at [abhin.dev](https://www.abhin.dev/).

This website is powered by Nextjs 14, Typescript & TailwindCSS and deployed on Vercel.

![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) ![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)

## Content

- **Local**: localised content such as metadata, timeline and other is sourced from the [content](/src/content) folder.
- **Blog**: fetched from my [blog](https://www.github.com/AbhinRustagi/blog) repository, which is the root for all posts for this website and publishing on different platforms. On each post published, the website is re-built and deployed via Vercel webhooks.
- **Projects**: sourced from my source-of-truth [projects](https://www.github.com/AbhinRustagi/projects) repository. On each project added, the website is re-built and deployed via Vercel webhooks.

## Development

Start the local server:

```
yarn dev
```

## Folder Structure

```
src/
  |- app/
  |   |- (home)/
  |   |- about/
  |   |- blog/
  |       |- [slug]/
  |   |- timeline/
  |   |- favicon.ico
  |   |- globals.css
  |   |- layout.tsx
  |   |- sitemap.ts
  |- components/
  |- content/
  |- lib/
```

## License

[MIT](/LICENSE) © [Abhin Rustagi](https://www.abhin.dev/)
