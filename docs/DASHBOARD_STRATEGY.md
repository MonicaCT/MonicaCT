# Dashboard Strategy

The dashboard strategy is selective. The portfolio should not create three identical dashboards for every project. Each tool must prove a different professional capability.

## Tool Roles

### Python / Web

Use for reproducible analytical exploration, public interactivity and transparent code. Suitable tools include Plotly, Altair, Dash, Streamlit or static HTML with JavaScript when the data are already public.

Python/web should demonstrate:

- filters;
- reproducible data preparation;
- interactive charts;
- transparent public deployment when viable;
- method notes and limitations.

### Power BI

Use for business intelligence evidence: dimensional model, relationships, DAX measures, KPI cards, drill-down, tooltips, stakeholder navigation and executive design.

If Power BI cannot be published interactively, provide:

- source file when safe;
- PDF export;
- screenshots;
- model diagram;
- DAX measure documentation.

### Tableau

Use for visual storytelling: map-based comparison, dashboard actions, parameters, story points and executive exploration. Do not use Tableau only to duplicate an existing Python dashboard.

If Tableau cannot be published interactively, provide:

- workbook or packaged workbook when safe;
- PDF export;
- screenshots;
- short model/story documentation.

## Flagship Dashboard Plan

| flagship | Python/web | Power BI | Tableau | main recruiter dashboard | alternative product | public data needed | privacy risk | effort |
|---|---|---|---|---|---|---|---|---|
| InclusiveCreditRiskAnalytics-Bolivia | RECOMMENDED | REQUIRED | NOT NEEDED | Power BI executive credit-risk model | existing web report and screenshots | aggregate branch-month indicators | medium | MEDIUM |
| poverty-informality-social-protection-lac | REQUIRED | NOT NEEDED | REQUIRED | Python/web policy dashboard | Tableau story for regional comparisons | public country-year panel | low | MEDIUM |
| economic-complexity-structural-transformation-lac | REQUIRED | NOT NEEDED | RECOMMENDED | Python/web complexity and opportunity explorer | Tableau static story only if lightweight | existing processed/public aggregates | low | MEDIUM |

## Non-Flagship Dashboard Plan

| repository | Python/web | Power BI | Tableau | recommendation |
|---|---|---|---|---|
| latin-america-financial-development-lab | RECOMMENDED | RECOMMENDED | NOT NEEDED | Use only after flagship wave; finance KPIs may fit Power BI. |
| structural-vulnerability-lac-research | RECOMMENDED | NOT NEEDED | RECOMMENDED | Keep as research site; Tableau only if maps/story add value. |
| rural-bolivia-housing-analytics | RECOMMENDED | NOT NEEDED | NOT NEEDED | Preserve privacy-first analytical report. |
| data-science-requirements-breast-cancer | NOT NEEDED | NOT NEEDED | NOT NEEDED | No dashboard required; report is the product. |
| lac-household-survey-labor-poverty-analytics | PLANNED | PLANNED | PLANNED | Private development only; no dashboard until public release boundary exists. |

## Stage 1 Dashboard Evidence

- Inclusive Credit Risk: Power BI should prove dimensional modeling and stakeholder KPIs.
- Poverty/Informality: Python/web should remain the public interactive policy dashboard.
- Poverty/Informality or Economic Complexity: Tableau should prove storytelling, not repeat charts.

## Publication Rule

Do not claim public interactivity for Power BI or Tableau unless the public viewer actually works. If not, label the product as PDF, screenshot, source workbook or model documentation.
