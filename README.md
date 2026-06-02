# Talks

Slidev decks for Seeed talks.

## Structure

Each `20xx-*` directory is one deck and also its public route slug:

```text
2026-05-21-mcv-first-route/
2026-03-14-ha-agent/
2025-11-28-watcher/
2025-06-14-meshtastic/
theme/
```

The shared Slidev theme lives in `theme/`.

## Develop

```bash
pnpm install
cd 2026-05-21-mcv-first-route
pnpm dev
```

## Build

```bash
pnpm build
```

The root build writes:

```text
dist/index.html
dist/<deck-slug>/
```

For GitHub Pages, the build script derives the repository base path from `GITHUB_REPOSITORY`, so a repo named `talks` publishes routes like:

```text
https://<user>.github.io/talks/
https://<user>.github.io/talks/2026-05-21-mcv-first-route/
```

To override the base path locally or in another host:

```bash
BASE_PATH=/talks pnpm build
```

## Deploy

GitHub Actions deploys `dist/` through `.github/workflows/deploy.yml`.

Enable it in GitHub:

```text
Settings -> Pages -> Build and deployment -> Source: GitHub Actions
```
