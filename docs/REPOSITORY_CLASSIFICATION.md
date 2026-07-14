# Repository Classification

This classification covers only the eight authorized repositories. It is a portfolio architecture decision, not a scientific reassessment.

## Summary Classification

| repository | class | priority | recommendation |
|---|---|---:|---|
| InclusiveCreditRiskAnalytics-Bolivia | FLAGSHIP | 1 | Use as the BI and SQL-ready financial analytics flagship. |
| poverty-informality-social-protection-lac | FLAGSHIP | 2 | Use as the Development Data Analyst and policy dashboard flagship. |
| economic-complexity-structural-transformation-lac | FLAGSHIP | 3 | Use as the applied economics and research flagship. |
| latin-america-financial-development-lab | SUPPORT | 4 | Keep strong; use selectively as finance/development evidence. |
| structural-vulnerability-lac-research | SUPPORT | 5 | Keep as research methods and vulnerability evidence. |
| rural-bolivia-housing-analytics | SUPPORT | 6 | Keep as privacy-first survey analytics and open science evidence. |
| data-science-requirements-breast-cancer | SECONDARY | 7 | Keep as data science requirements and EDA evidence. |
| lac-household-survey-labor-poverty-analytics | PRIVATE DEVELOPMENT | 8 | Keep private until Phase 4A is complete and public boundary is mature. |

## Exact First-Wave Flagship Selection

The first implementation should use exactly these three repositories:

1. InclusiveCreditRiskAnalytics-Bolivia.
2. poverty-informality-social-protection-lac.
3. economic-complexity-structural-transformation-lac.

Rationale: together they cover SQL/data modeling, Python/web analytics, applied economics, development policy, executive communication, dashboards, reproducibility and public-facing analytical products without selecting only the most complex projects.

## Repository Details

### InclusiveCreditRiskAnalytics-Bolivia

- Class: FLAGSHIP.
- Professional role demonstrated: Data Analyst, BI Analyst, risk analytics analyst.
- Audience: recruiters in analytics, finance, development finance and BI.
- Main product: credit-risk and inclusion analytical report/dashboard.
- Strengths: KPI design, forecasting, stress scenarios, executive reporting, privacy review, SQL-ready evidence.
- Gaps: Power BI artifact, dimensional model documentation, DAX measures and recruiter guide.
- Estimated effort: MEDIUM.
- Recommendation: first BI implementation target.

### poverty-informality-social-protection-lac

- Class: FLAGSHIP.
- Professional role demonstrated: Development Data Analyst, Policy Data Analyst, Research Data Analyst.
- Audience: development organizations, policy teams, NGOs, research units.
- Main product: interactive policy dashboard and panel documentation.
- Strengths: Python, panel construction, data validation, missingness, policy communication, dashboard.
- Gaps: SQL/DuckDB evidence, variable catalog upgrade, Tableau storytelling artifact.
- Estimated effort: LOW to MEDIUM.
- Recommendation: first development analytics flagship.

### economic-complexity-structural-transformation-lac

- Class: FLAGSHIP.
- Professional role demonstrated: Applied Economist, Research Data Analyst, Development Data Analyst.
- Audience: international organizations, academic programs, trade/development policy teams.
- Main product: paper, policy brief, dashboard gallery and Zenodo DOI release.
- Strengths: large panel, ECI/PCI/RCA/Product Space, reproducibility, DOI, policy communication.
- Gaps: recruiter guide, SQL/data model evidence, web/Python exploration upgrade if Pages is fully enabled.
- Estimated effort: MEDIUM.
- Recommendation: research flagship; avoid unnecessary recalculation.

### latin-america-financial-development-lab

- Class: SUPPORT.
- Professional role demonstrated: financial development analyst, applied economics analyst.
- Audience: finance/development research teams.
- Main product: public website with dashboard and reports.
- Strengths: PCA, clustering, financial indicators, executive reporting.
- Gaps: repo name history, SQL/BI evidence, dashboard/public path verification.
- Estimated effort: LOW.
- Recommendation: keep strong but do not include in first flagship wave.

### structural-vulnerability-lac-research

- Class: SUPPORT.
- Professional role demonstrated: research data analyst, applied economics researcher.
- Audience: development research teams and doctoral committees.
- Main product: vulnerability research site with figures, tables and paper.
- Strengths: econometric reporting, limitations, structural vulnerability framing.
- Gaps: overlap with poverty-informality, BI artifacts, SQL/data model evidence.
- Estimated effort: LOW.
- Recommendation: use as supporting research evidence.

### rural-bolivia-housing-analytics

- Class: SUPPORT.
- Professional role demonstrated: privacy-first survey analyst, open science analyst.
- Audience: survey analytics, responsible data, reproducibility reviewers.
- Main product: public synthetic-data analytical report.
- Strengths: privacy discipline, synthetic public data, validation, uncertainty reporting.
- Gaps: synthetic data limits policy interpretation; not first-screen flagship.
- Estimated effort: LOW.
- Recommendation: keep as responsible-data proof.

### data-science-requirements-breast-cancer

- Class: SECONDARY.
- Professional role demonstrated: data science requirements analyst, EDA analyst.
- Audience: data science program reviewers and technical documentation reviewers.
- Main product: final technical report.
- Strengths: dataset selection, data-quality assessment, requirements documentation.
- Gaps: no predictive model claimed, no BI stack, less aligned with development analytics.
- Estimated effort: LOW.
- Recommendation: retain as specialized support, not homepage flagship.

### lac-household-survey-labor-poverty-analytics

- Class: PRIVATE DEVELOPMENT.
- Professional role demonstrated: future analytics engineering and household survey platform.
- Audience: not public until private microdata boundary and Phase 4A are complete.
- Main product: architecture and governance checkpoint.
- Strengths: regional design, harmonization framework, survey design thinking, privacy boundary.
- Gaps: incomplete loader, no public dashboard, private microdata risk, unfinished Phase 4A.
- Estimated effort: HIGH.
- Recommendation: keep private; do not promote until a public synthetic/aggregate release is ready.
