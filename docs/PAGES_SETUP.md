# GitHub Pages Setup

## Expected Configuration

Repository:

```text
MonicaCT/MonicaCT
```

GitHub Pages settings:

```text
Source: Deploy from a branch
Branch: main
Folder: /docs
```

Expected public URL:

```text
https://monicact.github.io/
```

## Entry Points

- `docs/index.html`
- `docs/projects.html`
- `docs/publications.html`
- `docs/cv.html`

## Required Assets

- `docs/assets/css/site.css`
- `docs/assets/js/site.js`
- `docs/assets/images/profile-banner.svg`
- `docs/assets/images/profile-banner.png`
- `docs/assets/data/projects.json`

## Notes

- The site is static HTML, CSS and JavaScript.
- No build step is required.
- No pipeline, model, data processing or dashboard regeneration is required.
- The reusable repository template is stored in `site-template/`.
- If the URL returns 404 after enabling Pages, wait for GitHub Pages deployment to complete and then refresh the Pages settings page.
