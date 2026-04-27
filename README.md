# oOhyeahh.github.io

Personal portfolio built with Next.js App Router and exported as a static site for GitHub Pages.

## Tech stack

- Next.js (static export)
- React
- TypeScript

## Local development

```sh
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build for production

```sh
npm run build
```

This generates the static output in `out/`.

## Deployment

Deployment is automated using GitHub Actions through `.github/workflows/deploy-pages.yml`.

1. In repository settings, enable GitHub Pages and set source to **GitHub Actions**.
2. Push to `master`.
3. The workflow builds the Next.js export and deploys `out/` to Pages.

## Formatting hooks

Husky + Prettier are configured for local commit hygiene:

```sh
npm run prepare
```
