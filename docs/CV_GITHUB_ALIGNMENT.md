# CV and GitHub Alignment

This document proposes future alignment between the web CV and public GitHub evidence. It does not modify the CV.

## Recommended Professional Header

Recommended current formulation:

**Applied Economist & Development Data Analyst**  
**SQL | Python | R | Policy Analytics | Reproducible Research | Business Intelligence Foundations**

Future formulation after BI artifacts are public:

**Applied Economist & Development Data Analyst**  
**SQL | Python | Power BI | Tableau | R | Policy Analytics**

Power BI and Tableau should not be presented as advanced until the portfolio contains inspectable artifacts.

## Competencies That Can Be Included Now

| competency | evidence | repository evidence | safe CV wording |
|---|---|---|---|
| Python data processing | public workflows and dashboards | poverty-informality-social-protection-lac; data-science-requirements-breast-cancer | Python for data processing and analytical reporting |
| R and Quarto | papers, reports and reproducibility | economic-complexity; InclusiveCreditRiskAnalytics-Bolivia | R and Quarto for reproducible analysis |
| Applied economics | economic complexity, vulnerability and finance projects | economic-complexity; structural-vulnerability; latin financial | applied economics and development analytics |
| Policy analytics | poverty, informality, structural transformation | poverty-informality; economic-complexity | policy-oriented data communication |
| Reproducibility | documentation, validation, DOI, reports | economic-complexity; rural housing; poverty | reproducible analytical workflows |
| Data validation | validation reports and privacy checks | poverty; rural housing; lac-household | data-quality validation and governance |
| GitHub portfolio | published pages and documentation | portfolio-wide | public GitHub analytics portfolio |
| Survey analytics | synthetic and architecture evidence | rural housing; lac-household private | privacy-aware household survey analytics |

## Competencies That Should Wait

| competency | reason to wait | required evidence before CV upgrade |
|---|---|---|
| Advanced Power BI | no complete public artifact yet | PBIX/PDF/screenshots/model/DAX documentation |
| Advanced Tableau | no complete public artifact yet | workbook/screenshots/story documentation |
| Advanced DAX | no public DAX measures | documented measures in BI project |
| Dimensional modeling | not visible enough | star schema diagram and SQL model |
| Advanced SQL optimization | not visible enough | query examples, window functions and marts |
| APIs | not visible | API ingestion project or module |
| Product experimentation | not visible | A/B or experimentation project |

## Project Evidence By Skill

| skill | best current repository proof |
|---|---|
| Development data analytics | poverty-informality-social-protection-lac |
| Applied economics research | economic-complexity-structural-transformation-lac |
| Credit/risk analytics | InclusiveCreditRiskAnalytics-Bolivia |
| Privacy-first survey analytics | rural-bolivia-housing-analytics |
| Data science requirements | data-science-requirements-breast-cancer |
| Financial development analysis | latin-america-financial-development-lab |
| Structural vulnerability research | structural-vulnerability-lac-research |
| Household survey architecture | lac-household-survey-labor-poverty-analytics, private development |

## Future CV Web Structure

The future `docs/cv.html` should eventually use:

1. Summary.
2. Core Skills.
3. Selected Analytics Projects.
4. Professional Experience.
5. Research and Publications.
6. Education.
7. Technical Stack.
8. Languages.
9. Contact.

## Recruiter Mode Alignment

The CV should link to evidence by role:

- Data Analyst: SQL, Python, dashboards, validation.
- BI Analyst: Power BI, Tableau, KPI, data model once built.
- Development Analyst: poverty, labor, social protection, financial inclusion.
- Research Analyst: papers, methodology, reproducibility.
- Analytics Engineer: SQL, DuckDB, ETL, validation after Stage 1.

## Guardrail

The CV must remain evidence-based. Do not overstate tools before the portfolio contains public proof.
