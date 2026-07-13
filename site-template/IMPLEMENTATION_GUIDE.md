# Implementation Guide

Use this guide when adapting the portfolio website standard to an existing repository.

## 1. Confirm scope

Before editing a repository, identify which public artifacts already exist:

- README
- dashboard or static page
- figures
- tables
- paper or report
- methodology documentation
- validation reports
- CITATION.cff
- LICENSE

Do not regenerate data, models, results, figures or dashboards unless a later phase explicitly authorizes analytical work.

## 2. Create project-content.json

Create a `project-content.json` file that follows `project-content.schema.json`. Use only verifiable information from the repository.

Recommended fields:

- title
- subtitle
- repository_url
- dashboard_url
- paper_url
- portfolio_url
- labs
- tags
- executive_summary
- key_metrics
- key_findings
- data_sources
- workflow
- methodology
- limitations
- reproducibility
- citation
- related_projects

## 3. Generate or adapt index.html

Use `index.template.html` as the starting point. Replace placeholders with repository-specific content.

Keep these sections in this order:

1. Hero
2. Executive Summary
3. Key Metrics
4. Key Findings
5. Dashboard
6. Main Figures
7. Executive Tables
8. Data Sources
9. Analytical Workflow
10. Methodology
11. Paper and Reports
12. Limitations
13. Reproducibility
14. Citation
15. Author
16. Related Projects
17. Back to Portfolio

## 4. Copy assets

Copy the template CSS and JavaScript into the repository's public site folder:

```text
docs/assets/css/site.css
docs/assets/js/site.js
```

Use only images already present in the repository or already published by the project.

## 5. Validate before commit

Check:

- public links;
- relative paths;
- image paths;
- mobile layout;
- keyboard navigation;
- contrast;
- local path leakage;
- private data leakage;
- large files;
- `git diff --check`.

## 6. Publish

For GitHub Pages, the expected setting is:

```text
Source: Deploy from a branch
Branch: main
Folder: /docs
```

Do not create releases or DOI unless the specific repository phase requests it.
