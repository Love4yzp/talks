# slidev-theme-seeed

Seeed Studio branded theme for [Slidev](https://sli.dev) presentations.

## Layouts

| Layout | Use for |
|--------|---------|
| `cover` | Title slide with full-bleed background |
| `intro` | Speaker introduction |
| `section` | Section divider between topics |
| `default` | Standard content slide |
| `two-cols` | Side-by-side content |
| `two-cols-header` | Two columns with a shared header |
| `end` | Closing / thank-you slide |

## Components

### SeeedBadge

Pill-shaped label for dates, tags, status indicators.

```html
<SeeedBadge>2026.03.14 · Shenzhen</SeeedBadge>
<SeeedBadge icon="i-carbon:calendar">March 2026</SeeedBadge>
```

### SeeedCard

Branded card with optional icon and title. Colors: `green` (default), `navy`, `white`.

```html
<SeeedCard icon="i-carbon:chip" title="Hardware" color="green">
  Description text here
</SeeedCard>
```

## Brand Colors

| Color | Hex |
|-------|-----|
| Seeed Green | `#8FC31F` |
| Studio Navy | `#003A4A` |

## License

MIT
