# Flagship Implementation Roadmap

This roadmap defines a low-credit, high-impact implementation sequence. It does not authorize implementation.

## Selected Flagships

1. InclusiveCreditRiskAnalytics-Bolivia.
2. poverty-informality-social-protection-lac.
3. economic-complexity-structural-transformation-lac.

## Stage 1 - Minimum Flagship Evidence

Goal: make each flagship recruiter-readable without rebuilding analysis.

| order | repository | file or artifact | task | effort | impact | dependency | relative credits |
|---:|---|---|---|---|---|---|---|
| 1 | InclusiveCreditRiskAnalytics-Bolivia | docs/RECRUITER_GUIDE.md | Explain skills, KPIs, risk analytics and BI relevance | LOW | HIGH | none | Very Low |
| 2 | InclusiveCreditRiskAnalytics-Bolivia | docs/VARIABLE_CATALOG.md | Catalog branch/month indicators and KPI definitions | LOW | HIGH | existing outputs | Very Low |
| 3 | InclusiveCreditRiskAnalytics-Bolivia | docs/DATA_QUALITY_REPORT.md | Summarize validation, privacy and data checks | LOW | HIGH | existing docs | Very Low |
| 4 | InclusiveCreditRiskAnalytics-Bolivia | sql/ | Surface SQL/DuckDB model evidence and dimensional plan | MEDIUM | HIGH | safe public data model | Low |
| 5 | poverty-informality-social-protection-lac | docs/RECRUITER_GUIDE.md | Map Python, policy analytics, validation and dashboard evidence | LOW | HIGH | existing outputs | Very Low |
| 6 | poverty-informality-social-protection-lac | docs/VARIABLE_CATALOG.md | Standardize variable definitions and missingness notes | LOW | HIGH | existing codebook/catalog | Very Low |
| 7 | poverty-informality-social-protection-lac | docs/DATA_QUALITY_REPORT.md | Convert existing validation into recruiter-facing data-quality proof | LOW | HIGH | existing validation | Very Low |
| 8 | poverty-informality-social-protection-lac | sql/ | Add simple SQL marts only if public processed data supports it | MEDIUM | MEDIUM | public panel | Low |
| 9 | economic-complexity-structural-transformation-lac | docs/RECRUITER_GUIDE.md | Explain trade analytics, reproducibility, DOI and policy products | LOW | HIGH | existing outputs | Very Low |
| 10 | economic-complexity-structural-transformation-lac | docs/VARIABLE_CATALOG.md | Catalog RCA, ECI, PCI, Product Space and opportunity metrics | LOW | HIGH | existing docs | Very Low |
| 11 | economic-complexity-structural-transformation-lac | docs/DATA_QUALITY_REPORT.md | Summarize validation outputs without rerunning pipeline | LOW | HIGH | existing validation | Very Low |
| 12 | economic-complexity-structural-transformation-lac | sql/ | Optional SQL/data-model explanation for processed panel | MEDIUM | MEDIUM | no recalculation | Low |

## Stage 2 - Dashboard Products

Goal: demonstrate each BI tool once, with different purposes.

| order | repository | artifact | task | effort | impact | dependency | relative credits |
|---:|---|---|---|---|---|---|---|
| 13 | InclusiveCreditRiskAnalytics-Bolivia | dashboard/powerbi/ | Build Power BI model with KPIs, relationships, DAX and executive navigation | MEDIUM | HIGH | Stage 1 data model | Medium |
| 14 | InclusiveCreditRiskAnalytics-Bolivia | docs/POWER_BI_MODEL.md | Document measures, relationships and screenshots/PDF | LOW | HIGH | Power BI artifact | Low |
| 15 | poverty-informality-social-protection-lac | existing web dashboard | Improve only links/docs if needed; do not rebuild | LOW | MEDIUM | Stage 1 docs | Very Low |
| 16 | poverty-informality-social-protection-lac | dashboard/tableau/ | Create Tableau story for regional poverty/informality/social protection | MEDIUM | HIGH | public panel and variable catalog | Medium |
| 17 | economic-complexity-structural-transformation-lac | existing dashboard/gallery | Keep Python/web as main research explorer | LOW | HIGH | Pages configuration | Very Low |
| 18 | economic-complexity-structural-transformation-lac | optional Tableau story | Add only if it communicates product-space opportunity better than existing web | MEDIUM | MEDIUM | Stage 1 docs | Medium |

## Stage 3 - Portal Integration

Goal: turn the main portal into an evidence-driven research and analytics platform.

| order | repository | file or artifact | task | effort | impact | dependency | relative credits |
|---:|---|---|---|---|---|---|---|
| 19 | MonicaCT/MonicaCT | docs or data config | Define Recruiter Mode routes by role, tool, sector and capability | MEDIUM | HIGH | Stage 1 evidence | Low |
| 20 | MonicaCT/MonicaCT | portal data | Add Skills Matrix driven by evidence levels | MEDIUM | HIGH | Stage 1 and 2 | Low |
| 21 | MonicaCT/MonicaCT | case-study pages | Convert three flagships into case studies | MEDIUM | HIGH | dashboard products | Medium |
| 22 | MonicaCT/MonicaCT | CV page | Update CV only after Power BI/Tableau evidence exists | LOW | HIGH | Stage 2 | Low |

## Stop Conditions

- Do not run private or incomplete survey pipelines.
- Do not publish microdata.
- Do not claim Power BI or Tableau public interactivity before evidence exists.
- Do not rebuild scientific results that are already validated.
