# Validation Report

Generated: 2026-07-13

## Scope

Repository: `MonicaCT/MonicaCT`

Validated outputs:

- Professional portfolio website under `docs/`.
- Central project catalog.
- Web CV.
- Publications page.
- Reusable project website template under `site-template/`.
- Updated profile README.

## Results

| Check | Status | Notes |
|---|---|---|
| Required files | PASS | All requested portal and template files are present. |
| README render | PASS | Markdown structure and badge/link syntax checked. |
| HTML structure | PASS | Pages include semantic sections, titles, meta descriptions, canonical URLs and accessible navigation. |
| Relative routes | PASS | Local CSS, JS, image and page links resolve within the repository. |
| Project catalog JSON | PASS | `docs/assets/data/projects.json` parses successfully. |
| Images | PASS | Reused profile banner locally; project cards reference existing public repository assets. |
| Badges | PASS | README badges use stable shields.io badge URLs. |
| Profile navigation | PASS | Home, Projects, Publications, CV and GitHub navigation included. |
| Portfolio navigation | PASS | Project pages link back to the main portfolio and existing repositories. |
| Privacy | PASS | No local file paths, private contact details, personal IDs, credential-like strings or private raw data added. |
| CV privacy | PASS | Original PDF was not published because the reviewed source includes private contact data. |
| Large files | PASS | No large unnecessary files added. |
| Mobile structure | PASS | Viewport metadata, responsive breakpoints and mobile navigation are present. |
| Keyboard navigation | PASS | Skip link, focus-visible states and accessible menu controls are included. |
| `git diff --check` | PASS | No whitespace errors; only repository line-ending warnings from Git. |

## Remote Link Validation

| Link group | Status | Notes |
|---|---|---|
| GitHub repositories | PASS | Main project repository links responded successfully. |
| Project GitHub Pages | PASS | Existing project Pages links responded successfully. |
| DOI | PASS | Zenodo DOI resolved successfully. |
| Public report and paper links | PASS | Existing public report and paper links responded successfully. |
| Remote project images | PASS | Project-card image URLs responded successfully. |
| Main profile Pages URL | WARNING | `https://monicact.github.io/` returns 404 until GitHub Pages is enabled for `/docs`. |
| LinkedIn | WARNING | Automated request blocked with HTTP 999; manual browser check required. |

## Pending Human Action

Enable GitHub Pages for the profile repository:

```text
Settings > Pages > Deploy from a branch > main > /docs
```

## Final Status

WARNING: implementation is complete and valid locally; public profile Pages publication requires human configuration.
## Final Portfolio Web QA - 2026-07-13

| Check | Status | Notes |
|---|---|---|
| Included repositories checked | PASS | Eight authorized repositories were checked once locally. |
| `docs/index.html` coverage | PASS | All included repositories now have a `docs/index.html` file. |
| Poverty publication repair | PASS | `poverty-informality-social-protection-lac` now has a portfolio website and a non-empty dashboard publication path. |
| Relative links | PASS | No broken local relative links were found in checked `docs/index.html` files. |
| README product links | PASS | Main product links are present in checked README files. |
| Project catalog | PASS | `projects.json` now distinguishes dashboard/report/gallery product types where needed. |
| Git diff checks | PASS | `git diff --check` passed for all included repositories. |
| GitHub Pages | WARNING | Public deployment still depends on repository Settings > Pages where not already enabled. |

Detailed matrix: `docs/PORTFOLIO_WEB_STATUS.md`.
