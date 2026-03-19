# Contributing to GradeBoundaries 🎓

Thanks for helping make grade boundary data more accessible to students everywhere! This guide covers everything you need to get started.

> **Important:** All contributions go to [`GradeBoundaries-dev`](https://github.com/Grade-Boundaries/GradeBoundaries-dev) only.  
> Pull requests to [`GradeBoundaries-stable`](https://github.com/Grade-Boundaries/GradeBoundaries-stable) will be **closed without review** — that repo hosts the live site at [gradeboundaries.com](https://gradeboundaries.com) and is managed exclusively by maintainers.

---

## Table of Contents

- [Ways to Contribute](#ways-to-contribute)
- [Getting Started](#getting-started)
- [Contributing Data (CSV)](#contributing-data-csv)
- [Contributing Code](#contributing-code)
- [Submitting a Pull Request](#submitting-a-pull-request)
- [Issue Labels](#issue-labels)
- [Code of Conduct](#code-of-conduct)

---

## Ways to Contribute

| Type | Description |
|------|-------------|
| 📊 **Data** | Add missing grade boundaries (sessions, years, exam boards) |
| 🐛 **Bug Report** | Report broken pages, wrong data, or display issues |
| ✨ **Feature** | Suggest or build new site functionality |
| 🎨 **UI/Design** | Improve the look and usability of the site |

---

## Getting Started

1. **Fork** [`GradeBoundaries-dev`](https://github.com/Grade-Boundaries/GradeBoundaries-dev) and clone your fork:
   ```bash
   git clone https://github.com/YOUR-USERNAME/GradeBoundaries-dev.git
   cd GradeBoundaries-dev
   ```

2. **Install dependencies** (only needed if you're touching HTML or CSS):
   ```bash
   npm install
   ```

3. **Compile Tailwind** so styles render locally:
   ```bash
   npm run build
   ```
   This runs `tailwindcss -i ./src/input.css -o ./dist/output.css --minify`.  

4. Open `index.html` directly in your browser — no dev server required for most changes.

5. Make your changes on a **new branch**:
   ```bash
   git checkout -b your-branch-name
   ```

6. Commit, push, and open a Pull Request against `GradeBoundaries-dev`.

---

## Contributing Data (CSV)

This is the most impactful way to help. Each exam board has its own CSV file with a slightly different structure — match the correct one exactly.

### Exam Board Files & Formats

#### Edexcel — `Edexcel/Edexcel.csv`

| Column | Description | Example |
|--------|-------------|---------|
| `year` | 4-digit year | `2025` |
| `session` | Session name | `Jan`, `Jun`, `Oct` |
| `code` | Unit code | `WPH14` |
| `unit` | Unit name | `Unit 4: Further Mechanics...` |
| `max_mark` | Maximum mark | `90` |
| `a*`–`u` | Grade boundaries | `80` |

#### CIE — `CIE/CIE.csv`

| Column | Description | Example |
|--------|-------------|---------|
| `SubjectCode` | Subject code | `9702` |
| `Subject` | Subject name | `Physics` |
| `Series` | Exam series | `june-2025` |
| `Component` | Component number | `11` |
| `MaxRawMark` | Maximum mark | `40` |
| `A`–`E` | Grade boundaries | `29` |

#### Oxford AQA — `OxfordAqa/OxfordAqa.csv`

| Column | Description | Example |
|--------|-------------|---------|
| `year` | 4-digit year | `2025` |
| `session` | Session name | `June`, `January` |
| `code` | Unit code | `CH01` |
| `unit` | Unit name | `CHEMISTRY UNIT 1` |
| `max_mark` | Maximum mark | `70` |
| `UMS_CAP` | UMS cap (gold line on chart) | `69` |
| `A*`–`E` | Grade boundaries | `55` |

#### OCR — `OCR/OCR.csv`

Similar structure to Edexcel. Open the existing file to confirm exact column names and casing before adding rows.

---

### Data Checklist

- [ ] Data sourced directly from the **official exam board PDF** (link it in your PR)
- [ ] No rows duplicated from what's already in the CSV
- [ ] All columns present and in the correct order
- [ ] Session/series casing matches existing rows (e.g. `Jun` not `june` for Edexcel; `june-2025` for CIE)
- [ ] File opens without parse errors in a plain text editor

---

## Contributing Code

### Tech Stack

| Layer | Technology |
|-------|-----------|
| Markup | Plain HTML5 |
| Styling | Custom CSS (`style.css`) + Tailwind CSS v3 → `dist/output.css` |
| Tables | jQuery 3.7 + DataTables 1.13 |
| Charts | Chart.js (CDN) |
| CSV parsing | PapaParse (CDN) |
| Build | `npm run build` (Tailwind CLI) |
| Testing | Playwright |
| Analytics | Plausible + GoatCounter |

### File Structure

```
/
├── index.html              # Homepage
├── dashboard-engine.js     # Shared chart + table logic (all 4 board pages)
├── style.css               # Design tokens, components, dark mode
├── src/input.css           # Tailwind entry point
├── dist/output.css         
├── tailwind.config.js
├── postcss.config.js
├── Edexcel/
│   ├── index.html
│   └── Edexcel.csv
├── CIE/
│   ├── index.html
│   └── CIE.csv
├── OxfordAqa/
│   ├── index.html
│   └── OxfordAqa.csv
├── OCR/
│   ├── index.html
│   └── OCR.csv
├── Contact/index.html
└── Privacy/index.html
```

### Guidelines

- Keep it vanilla — no npm runtime packages or JS frameworks
- `dashboard-engine.js` is shared across all four board pages — changes there affect everything, so test all four boards after editing it
- Run `npm run build` locally to verify Tailwind styles, but do not commit `dist/`
- Test in Chrome and Firefox before submitting
- Comment non-obvious logic

---

## Submitting a Pull Request

1. Make sure your branch is up to date with `main` on `GradeBoundaries-dev`
2. Fill in the PR template completely
3. Link related issues with `Closes #123`
4. Be responsive to feedback — PRs with no activity for 2 weeks may be closed

Maintainers review, then promote approved changes to `GradeBoundaries-stable` for live deployment.

---

## Issue Labels

| Label | Meaning |
|-------|---------|
| `good first issue` | Great for new contributors |
| `help wanted` | Maintainers welcome a PR |
| `data-needed` | Missing CSV data for a specific board/session |
| `bug` | Something is broken |
| `enhancement` | New feature or improvement |
| `board: Edexcel` / `board: CIE` / `board: OCR` / `board: OxfordAQA` | Board-specific issue |

---

## Code of Conduct

Be kind and constructive. This project was built by students, for students — keep that spirit in everything you do.

Questions? Join us on [Discord](https://discord.gg/ta9sneWWDQ) or email [allgradeboundaries@gmail.com](mailto:allgradeboundaries@gmail.com).
