# Portfolio Analytics and BI Standard

This document defines the central standard for Monica Cueto Tapia's GitHub portfolio. The portfolio should read as an international analytics platform: applied research, data engineering, BI communication, reproducibility and policy interpretation in one coherent system.

## Portfolio Levels

### FLAGSHIP

A flagship repository is a first-screen project and should be visible from the portfolio homepage. It should demonstrate a complete analytical workflow, not only a report.

A flagship should aspire to include:

- navigable project website;
- executive summary;
- methodology;
- variable catalog;
- data-quality report;
- recruiter guide;
- SQL evidence;
- DuckDB schema or documented data model;
- Python or web dashboard;
- Power BI product when it adds recruiter value;
- Tableau product when it adds storytelling value;
- paper, working paper or technical report;
- policy brief when the domain is policy-facing;
- reproducibility guide;
- clear navigation back to the main portfolio.

### SUPPORT

A support repository demonstrates a specific capability and can be linked from the projects page, CV or skill matrix. It does not need three dashboard products.

A support project may include:

- project website;
- report or analytical note;
- figures and tables;
- methodology;
- professional README;
- one clearly identified main product.

### ARCHIVE / SECONDARY

An archive or secondary repository is historical, small, redundant, private, incomplete or not ready for first-screen visibility. It should not be deleted automatically. It may remain available as background evidence, a development artifact or a private workstream.

## Required Flagship Repository Contract

Each flagship should eventually contain the following public contract:

```text
README.md
docs/index.html
docs/EXECUTIVE_SUMMARY.md
docs/METHODOLOGY.md
docs/VARIABLE_CATALOG.md
docs/DATA_QUALITY_REPORT.md
docs/RECRUITER_GUIDE.md
docs/REPRODUCIBILITY.md
sql/ddl/
sql/marts/
sql/validation/
data/metadata/
outputs/tables/
outputs/figures/
reports/
```

Optional by project:

```text
dashboard/python/
dashboard/powerbi/
dashboard/tableau/
paper/
policy_brief/
```

## Common Product Hierarchy

Every flagship page should answer, in this order:

1. What decision or research question does this project solve?
2. What data are used?
3. What methods are used?
4. What products can a recruiter or policy audience inspect?
5. How is quality validated?
6. How can the work be reproduced?
7. What are the limitations?
8. What role or skill does the project prove?

## Navigation Standard

A flagship website should support exploration through:

- Overview;
- Research Question;
- Executive Summary;
- Explore Dashboard;
- Explore Data;
- Figures;
- Maps;
- Tables;
- Data Quality;
- Methodology;
- SQL and Data Model;
- Python Workflow;
- Power BI;
- Tableau;
- Reports;
- Reproducibility;
- Limitations;
- Citation;
- Back to Portfolio.

Single-page sections: Overview, research question, executive summary, key metrics, limitations, citation and back navigation.

Internal pages: methodology, variable catalog, data quality, SQL/data model and recruiter guide.

External or product links: dashboards, reports, papers, Power BI/Tableau files, PDFs, GitHub repository and DOI when available.

## Recruiter Evidence Rule

Do not claim advanced competence unless a recruiter can inspect evidence. Planned skills must be labelled PLANNED. Partial skills must be labelled LIMITED or MODERATE.

## Public Data Rule

No flagship should publish private microdata, raw restricted files, local paths, secrets, access keys or individual-level real survey records. Public outputs should be aggregate, synthetic or legally redistributable.

## Minimum Credit Strategy

Future upgrades should reuse existing outputs first. Do not rerun pipelines unless a missing artifact blocks public evidence. The preferred sequence is: documentation contract, variable catalog, data-quality report, SQL evidence, one dashboard product, then portal integration.

