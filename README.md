# AlgoFlow — CSS Architecture & Project Structure

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | React 18 + Vite |
| Routing | React Router v6 |
| Fonts | Syne (display) · DM Sans (body) via Google Fonts |
| Icons | Font Awesome 6 (CDN) |
| Toasts | react-toastify |
| Styling | Vanilla CSS with custom properties (no preprocessor) |

---

## Project Folder Structure

```
algoflow/
├── public/
│   └── favicon.ico
│
├── src/
│   ├── main.jsx                        ← Entry point; imports Base.css globally
│   ├── App.jsx                         ← Router setup (BrowserRouter + routes)
│   │
│   ├── Base.css                        ← 🌐 GLOBAL — design tokens, reset, reveal
│   │                                      animations, scrollbar, selection styles.
│   │                                      Imported once in main.jsx.
│   │
│   ├── assets/
│   │   ├── hero-img.png
│   │   ├── algoflow_icon.png
│   │   ├── leetcode.png
│   │   └── GeeksForGeeks.png
│   │
│   ├── data/
│   │   ├── data.js                     ← Problem sets keyed by slug
│   │   └── data_topics.js              ← DSA_TOPICS array (carousel data)
│   │
│   └── components/
│       ├── Navbar.jsx
│       ├── Home.jsx
│       ├── Problems.jsx
│       ├── ProblemType.jsx
│       ├── Profile.jsx
│       ├── Login.jsx
│       ├── ProtectedRoute.jsx
│       ├── Notfound.jsx
│       │
│       └── all_css_codes/              ← 🎨 Per-component stylesheets
│           ├── Navbar.css              ← Glass sticky navbar, logo, nav links, auth pill
│           ├── Home.css                ← Hero, orbs, stats, features grid, carousel
│           ├── Problems.css            ← Topic list page (clickable h1 rows)
│           ├── ProblemType.css         ← Per-topic problem table with checkbox
│           ├── Login.css               ← Auth card, inputs, toast overrides
│           ├── Profile.css             ← (to be added)
│           └── Notfound.css            ← (to be added)
```

---

## CSS Architecture

### Token hierarchy

```
Base.css  ←  single source of truth
    │
    ├── color tokens        --blue-*, --gray-*, --white
    ├── semantic tokens     --color-bg, --color-border, --color-accent …
    ├── gradient tokens     --gradient-primary, --gradient-soft, --gradient-mesh
    ├── typography tokens   --font-display, --font-body, --text-*
    ├── spacing tokens      --space-1 … --space-32
    ├── radius tokens       --radius-sm … --radius-full
    ├── shadow tokens       --shadow-xs … --shadow-blue-lg
    ├── easing tokens       --ease-out, --ease-spring, --duration-*
    └── footer tokens       --footer-bg, --footer-text, --footer-link …
```

Every component CSS file imports `Base.css` at the top and consumes only tokens — no hard-coded hex values except where unavoidable (e.g. toast overrides, footer dark palette locals).

---

### Per-component stylesheet responsibilities

| File | Owns |
|---|---|
| `Navbar.css` | Sticky glass bar · logo lockup · nav link active states · auth pill button · mobile collapse |
| `Home.css` | Hero two-column layout · floating orbs · gradient heading · CTA button · stats bar · feature cards grid · infinite carousel track |
| `Problems.css` | Full-page topic list · staggered row entrance animations · hover slide + accent bar · CSS counter row numbers |
| `ProblemType.css` | Problem table grid · custom checkbox · checked row green tint + strikethrough · difficulty badge colours · platform icon buttons · mobile 2-row reflow |
| `Login.css` | Centered auth card · ambient orbs · input focus rings · native validation states · submit shimmer button · toast skin overrides · mobile full-screen layout |
| `Footer.css` | Dark navy shell · brand column · four-link columns grid · social icon buttons · bottom bar · heartbeat animation |
| `cta-section.css` | Blue gradient CTA banner · pure-CSS orb decorations · white pill button |

---

## Route → Component → CSS map

| Route | Component | CSS file |
|---|---|---|
| `/` | `Home.jsx` | `Home.css` |
| `/problems` | `Problems.jsx` | `Problems.css` |
| `/problems/:slug` | `ProblemType.jsx` | `ProblemType.css` |
| `/profile` | `Profile.jsx` | `Profile.css` |
| `/login` | `Login.jsx` | `Login.css` |
| `*` | `Notfound.jsx` | `Notfound.css` |

> `/problems`, `/profile`, and `/problems/:slug` are behind `ProtectedRoute` — unauthenticated users are redirected to `/login`.

---

## Naming conventions

| Pattern | Usage |
|---|---|
| `.component-name` | Top-level wrapper per page/component |
| `.component-name__element` | Child elements (loose BEM, no strict nesting) |
| `.reveal .fade-left/right/up .zoom-in` | Scroll-triggered entrance animations (JS `IntersectionObserver`) |
| `.delay-1` … `.delay-6` | Stagger delays on reveal children |
| `.easy` `.medium` `.hard` | Difficulty colour modifiers on problem rows |

---

## Animation inventory

| Name | File | Trigger |
|---|---|---|
| `slide-in` | `Problems.css` | Page load — topic rows cascade in |
| `row-in` | `ProblemType.css` | Page load — problem rows cascade in |
| `orb-float` | `Home.css` | Continuous — hero background orbs |
| `hero-float` | `Home.css` | Continuous — hero image levitation |
| `scroll-left` | `Home.css` | Continuous — topic carousel marquee |
| `card-in` | `Login.css` | Mount — auth card scale+fade in |
| `heartbeat` | `Footer.css` | Continuous — ❤ icon in footer |
| `.reveal` classes | `Base.css` | `IntersectionObserver` in `Home.jsx` |
| `shimmer sweep` | `Login.css` | Hover — button light sweep |

---

## Responsive breakpoints

| Breakpoint | Behaviour |
|---|---|
| `> 1024px` | Full desktop layout — all columns visible |
| `≤ 1024px` | Hero stacks vertically · feature grid → 2 col · heading wrapper stacks |
| `≤ 768px` | Navbar links go static · problem rows → 2-row mobile card |
| `≤ 640px` | Footer → single column · bottom bar stacks |
| `≤ 480px` | Login card → full-screen · features grid → 1 col |
| `≤ 380px` | Problem rows — topic tag hidden · ultra-compact padding |
