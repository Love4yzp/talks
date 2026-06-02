import { spawn } from 'node:child_process'
import { rm, readdir, readFile, mkdir, writeFile, cp } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import path from 'node:path'

const root = process.cwd()
const dist = path.join(root, 'dist')

function normalizeBasePath(value) {
  if (!value)
    return ''
  const trimmed = value.trim().replace(/\/+$/, '')
  if (!trimmed || trimmed === '/')
    return ''
  return trimmed.startsWith('/') ? trimmed : `/${trimmed}`
}

function defaultBasePath() {
  if (process.env.BASE_PATH)
    return normalizeBasePath(process.env.BASE_PATH)

  const repository = process.env.GITHUB_REPOSITORY?.split('/').at(-1)
  if (!repository || repository.endsWith('.github.io'))
    return ''

  return `/${repository}`
}

function frontmatterValue(markdown, key) {
  const match = markdown.match(new RegExp(`^${key}:\\s*(.+)$`, 'm'))
  return match?.[1]?.trim() ?? ''
}

async function run(command, args, options = {}) {
  await new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      stdio: 'inherit',
      shell: false,
      ...options,
    })
    child.on('error', reject)
    child.on('exit', (code) => {
      if (code === 0)
        resolve()
      else
        reject(new Error(`${command} ${args.join(' ')} exited with ${code}`))
    })
  })
}

async function collectDecks() {
  const entries = await readdir(root, { withFileTypes: true })
  const decks = []

  for (const entry of entries) {
    if (!entry.isDirectory() || !/^20\d{2}-/.test(entry.name))
      continue

    const deckDir = path.join(root, entry.name)
    const slidesPath = path.join(deckDir, 'slides.md')
    if (!existsSync(slidesPath))
      continue

    const markdown = await readFile(slidesPath, 'utf8')
    decks.push({
      slug: entry.name,
      title: frontmatterValue(markdown, 'title') || entry.name,
    })
  }

  return decks.sort((a, b) => b.slug.localeCompare(a.slug))
}

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
}

async function writeIndex(decks) {
  const rows = decks.map(deck => `
      <a class="deck" href="./${deck.slug}/">
        <span class="date">${escapeHtml(deck.slug.slice(0, 10))}</span>
        <span class="title">${escapeHtml(deck.title)}</span>
        <span class="slug">${escapeHtml(deck.slug)}</span>
      </a>`).join('')

  await writeFile(path.join(dist, 'index.html'), `<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Talks</title>
    <style>
      :root {
        color: #1f2933;
        background: #f6f8f7;
        font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      }
      body {
        margin: 0;
      }
      main {
        width: min(960px, calc(100vw - 40px));
        margin: 0 auto;
        padding: 64px 0;
      }
      h1 {
        margin: 0 0 12px;
        font-size: clamp(36px, 7vw, 72px);
        line-height: 0.95;
      }
      p {
        margin: 0 0 32px;
        color: #607065;
        font-size: 18px;
      }
      .list {
        display: grid;
        gap: 12px;
      }
      .deck {
        display: grid;
        grid-template-columns: 120px 1fr;
        gap: 8px 20px;
        padding: 18px 0;
        color: inherit;
        text-decoration: none;
        border-top: 1px solid #d9e0dc;
      }
      .deck:last-child {
        border-bottom: 1px solid #d9e0dc;
      }
      .date {
        color: #007a3d;
        font-weight: 700;
      }
      .title {
        font-size: 22px;
        font-weight: 700;
      }
      .slug {
        grid-column: 2;
        color: #7a877f;
        font-size: 14px;
      }
      @media (max-width: 640px) {
        main {
          width: min(100% - 28px, 960px);
          padding: 40px 0;
        }
        .deck {
          grid-template-columns: 1fr;
        }
        .slug {
          grid-column: 1;
        }
      }
    </style>
  </head>
  <body>
    <main>
      <h1>Talks</h1>
      <p>Talk decks built with Slidev.</p>
      <section class="list">
${rows}
      </section>
    </main>
  </body>
</html>
`)
}

async function copyStaticAssets(deck) {
  const source = path.join(root, deck.slug, 'assets')
  if (!existsSync(source))
    return

  await cp(source, path.join(dist, deck.slug, 'assets'), {
    recursive: true,
    force: true,
  })
}

const decks = await collectDecks()
const basePath = defaultBasePath()

await rm(dist, { recursive: true, force: true })
await mkdir(dist, { recursive: true })

for (const deck of decks) {
  const base = `${basePath}/${deck.slug}/`.replace(/\/{2,}/g, '/')
  console.log(`\nBuilding ${deck.slug} with base ${base}`)
  await run('pnpm', [
    '--dir',
    deck.slug,
    'exec',
    'slidev',
    'build',
    'slides.md',
    '--out',
    `../dist/${deck.slug}`,
    '--base',
    base,
    '--without-notes',
  ])
  await copyStaticAssets(deck)
}

await writeIndex(decks)
console.log(`\nBuilt ${decks.length} decks into dist/`)
