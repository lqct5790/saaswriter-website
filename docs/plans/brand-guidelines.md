# Brand Guidelines — SaaSWriter

Approved from prototype v2 (Liquid Obsidian / Centered direction).

---

## Identity

**Brand name:** SaaSWriter
**Tagline:** The AI copywriter built for SaaS
**Domain:** saaswriter.app
**Logo treatment:** Wordmark only — "SaaSWriter" in Syne 800, with a small green glowing dot to the left.

---

## Color Palette

| Token | Hex | Usage |
|---|---|---|
| `green` | `#4ade80` | Primary accent — CTAs, active states, glows, highlights |
| `green-dim` | `rgba(74,222,128,0.15)` | Badge/pill backgrounds, hover states |
| `green-border` | `rgba(74,222,128,0.20)` | Borders on green-tinted elements |
| `green-glow` | `rgba(74,222,128,0.08)` | Subtle background tints |
| `bg` | `#050505` | Page background |
| `surface` | `#0a0a0a` | Cards, panels, mockup backgrounds |
| `surface-2` | `#0f0f0f` | Sidebar, secondary panels |
| `border` | `rgba(255,255,255,0.07)` | Default dividers and borders |
| `white` | `#ffffff` | Primary text |
| `white-60` | `rgba(255,255,255,0.6)` | Secondary text (body copy in cards) |
| `white-40` | `rgba(255,255,255,0.4)` | Body copy, descriptions |
| `white-20` | `rgba(255,255,255,0.2)` | Placeholders, dim labels |
| `white-10` | `rgba(255,255,255,0.1)` | Subtle borders |
| `white-06` | `rgba(255,255,255,0.06)` | Hover backgrounds |
| `white-04` | `rgba(255,255,255,0.04)` | Input fields, panel backgrounds |

**Background glow:** Three radial gradients at fixed positions using `rgba(74,222,128, 0.07/0.03/0.02)` — fixed to viewport, not scrolling.

---

## Typography

### Display — Syne
- Weight: 800 only
- Used for: H1, H2, logo, step titles, CTA titles
- Letter spacing: -0.03em on large headings, -0.02em on smaller
- Line height: 1.0 on hero, 1.05–1.1 on section headings

### Body — Inter
- Weights: 400 (body), 500 (nav), 600 (button labels), 700 (CTAs, bold UI)
- Used for: all prose, buttons, nav, captions
- Line height: 1.6–1.7 for body copy

### Mono — DM Mono
- Weights: 400, 500
- Used for: badges, eyebrows, code pills, URL bar, quality labels, footer copyright
- Letter spacing: 0.04–0.12em
- Text transform: uppercase on section eyebrows

### Responsive sizes (clamp)
- Hero H1: `clamp(2.8rem, 7vw, 5.5rem)` — lh 1.0
- Section H2: `clamp(1.8rem, 3.5vw, 2.8rem)` — lh 1.05
- Body large: `clamp(16px, 2vw, 19px)` — lh 1.65
- Body base: 14–15px

---

## Decorative Elements

### Background Glow (fixed, full-viewport)
```css
radial-gradient(ellipse 60% 40% at 50% -5%, rgba(74,222,128,0.07) 0%, transparent 65%),
radial-gradient(ellipse 30% 30% at 15% 60%, rgba(74,222,128,0.03) 0%, transparent 60%),
radial-gradient(ellipse 30% 30% at 85% 40%, rgba(74,222,128,0.02) 0%, transparent 60%)
```

### Logo dot
- 8×8px circle, `#4ade80`, `box-shadow: 0 0 8px #4ade80`
- Animated pulse: opacity 1→0.35→1 over 2s

### Green top-line accent (on cards)
```css
position: absolute; top: -1px; left: 15%; right: 15%; height: 1px;
background: linear-gradient(90deg, transparent, #4ade80, transparent);
opacity: 0.5;
```

### Card glow (behind final CTA)
```css
box-shadow: 0 0 0 1px rgba(74,222,128,0.2), 0 40px 80px rgba(0,0,0,0.6)
```

---

## Button Styles

### Primary (green fill)
- Background: `#4ade80` / hover: `#86efac`
- Text: `#000`, weight 700
- Border radius: 7px (nav), 10px (CTA form)
- Transition: background 0.15s

### Ghost
- Background: transparent / hover: `rgba(255,255,255,0.06)`
- Border: `1px solid rgba(255,255,255,0.1)`
- Text: `rgba(255,255,255,0.4)` / hover: white
- Same radius as companion primary button

### Monospace badge/pill (non-interactive)
- Background: `rgba(74,222,128,0.15)`
- Border: `1px solid rgba(74,222,128,0.2)`
- Text: `#4ade80`, DM Mono, 11–12px
- Border radius: 20px (rounded badge) or 6px (square pill)

---

## Grid & Layout

- Max content width: 1040px (sections), 960px (mockup), 680px (CTA card)
- Section padding: `100px 24px` vertical
- Grid gaps: 1px (with background color = border color, for seamless joined-grid look)
- Card border-radius: 14px (grids), 20px (featured cards), 16px (mockup)

---

## Tone of Voice

- **Confident, not arrogant** — state what it does, don't oversell
- **Technical but human** — speak like a senior SaaS marketer, not a startup bro
- **Specific over vague** — "PLG vs SLG" not "tailored to your needs"
- **Direct CTAs** — "Get access →" not "Start your journey"
- **Monospace for meta** — use code-style formatting for labels, eyebrows, footnotes to reinforce the "precision tool" feel

---

## Anti-patterns (do not use)
- Gradients on hero text (keep headings pure white + green highlights only)
- Rounded full-pill buttons (use slightly rounded rectangles instead)
- Emoji in body copy (only in differentiator cards for icon replacement)
- Blue, purple, or orange — green is the only accent
- Light backgrounds or light mode styling
