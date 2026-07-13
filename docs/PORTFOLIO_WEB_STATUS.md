# Portfolio Web Status

Date: 2026-07-13

| repository | docs_index_exists | main_product | dashboard_type | dashboard_file | paper_or_report | figures_visible | tables_visible | readme_links | pages_configuration_required | status |
|---|---|---|---|---|---|---|---|---|---|---|
| MonicaCT/MonicaCT | Yes | Main portfolio portal | NOT_APPLICABLE | Not applicable | Portfolio profile and project catalog | Yes | Not applicable | Yes | PENDING HUMAN PAGES CONFIGURATION | WARNING - local files valid; Pages requires human configuration |
| InclusiveCreditRiskAnalytics-Bolivia | Yes | Public analytical report | ANALYTICAL_REPORT | docs/index.html | docs/technical-report.html | Yes | Yes | Yes | main / docs | PASS |
| economic-complexity-structural-transformation-lac | Yes | Scientific website, paper, policy brief and static dashboard gallery | STATIC_GALLERY | docs/index.html | paper/main.pdf; paper/policy_brief.html | Yes | Yes | Yes | PENDING HUMAN PAGES CONFIGURATION | WARNING - technical content complete; repository phase paused; common template CSS/JS files not present but local links are valid |
| poverty-informality-social-protection-lac | Yes | Portfolio website with interactive dashboard | INTERACTIVE_WEB | docs/dashboard/index.html | docs/ANALYTICAL_ARTIFACT_CATALOG.md | Yes | Yes | Yes | main / docs | PASS |
| latin-america-financial-development-lab | Yes | Public website with dashboard and reports | INTERACTIVE_WEB | dashboard/index.html | report/financial_development_report.pdf; report/executive_report.html | Yes | Yes | Yes | main / docs; verify dashboard/report paths if Pages serves only docs | WARNING - local links valid; dashboard/report directories are outside docs |
| structural-vulnerability-lac-research | Yes | Public website with static dashboard, figures and paper page | STATIC_DASHBOARD | docs/dashboard.html | docs/paper.html | Yes | Yes | Yes | main / docs | PASS |
| rural-bolivia-housing-analytics | Yes | Public analytical report | ANALYTICAL_REPORT | docs/index.html | docs/research-paper.html | Yes | Yes | Yes | main / docs | PASS |
| data-science-requirements-breast-cancer | Yes | Public website with final technical report | ANALYTICAL_REPORT | docs/index.html | report/final_report.html; report/final_report.pdf | Yes | Yes | Yes | main / docs | PASS |

## Verification notes

- Checks were local and performed once per repository.
- `git diff --check` returned PASS for all included repositories.
- No pipelines, models, data rebuilds, figures, tables or reports were regenerated.
- Public GitHub Pages URLs were not repeatedly queried; Pages availability should be treated as a repository setting issue when local files are valid.
- Poverty publication issue was resolved by creating `docs/index.html` and preserving the existing non-empty rendered dashboard under `docs/dashboard/index.html`.
