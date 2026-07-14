# Master UX Blueprint

Status: DESIGN BLUEPRINT ONLY
Repository: `MonicaCT/MonicaCT`
Date: 2026-07-14
Scope: future UX/UI architecture for the public portfolio platform.

This document defines the target user experience for Monica Cueto Tapia's research and analytics portfolio. It is not an implementation specification for the current phase. No HTML, CSS, JavaScript, data, figures, dashboards, scientific results or flagship repositories are modified by this blueprint.

## 1. Strategic UX Goal

Transform the portfolio from a profile page into an integrated professional research and analytics platform.

The platform should let a recruiter, researcher, doctoral committee member or international-organization reviewer answer five questions quickly:

1. Who is Monica professionally?
2. What roles is she ready for?
3. Which public projects prove each skill?
4. Which dashboards, papers, reports, SQL assets and reproducibility artifacts can be inspected?
5. How does the portfolio fit together as a coherent analytical system?

## 2. Target Audiences

| Audience | Primary question | Preferred route |
|---|---|---|
| International data recruiter | Can she perform in a professional analytics role? | Recruiter Mode |
| BI hiring manager | Can she design KPI systems and stakeholder dashboards? | Explore by Tool, BI Analyst role |
| Development organization | Can she convert socioeconomic data into policy evidence? | Research Mode, Explore by Sector |
| Research unit | Can she produce rigorous, reproducible applied research? | Research Mode, Case Studies |
| Doctoral committee | Does she have independent research readiness? | Research Timeline, Research Impact |
| Technical reviewer | Can she document methods, quality and reproducibility? | Skills Matrix, project detail routes |

## 3. Global Navigation Architecture

The future portal should use one consistent global navigation layer:

```text
Home
Recruiter Mode
Research Mode
Case Studies
Skills Matrix
Timeline
Impact
Explore
CV
Contact
```

The `Explore` item should open structured paths:

```text
Explore by Tool
Explore by Sector
Explore by Role
Explore by Output
```

Recommended persistent utility links:

- GitHub profile;
- downloadable CV or Web CV;
- publications;
- contact;
- repository catalog;
- privacy and reproducibility statement.

## 4. Home Page Information Architecture

The homepage should function as the front door to a platform, not a long profile page.

Recommended first-screen hierarchy:

1. Professional identity: Applied Economist and Data Analyst.
2. One-sentence value proposition: socioeconomic, financial and policy data into reproducible analytics and decision products.
3. Three primary calls to action:
   - Recruiter Mode;
   - Research Mode;
   - View Case Studies.
4. Evidence strip:
   - flagship projects;
   - public dashboards/reports;
   - papers and DOI;
   - reproducibility and validation.

Second-screen hierarchy:

- Role cards;
- tool evidence;
- flagship case studies;
- research labs;
- timeline and impact.

## 5. Recruiter Mode

Recruiter Mode should be a fast, evidence-first route for hiring contexts.

### Recruiter Mode Goals

- Reduce first-impression friction.
- Connect each skill to inspectable public evidence.
- Distinguish strong, moderate, planned and not-yet-demonstrated skills.
- Present projects by professional role rather than academic domain only.

### Recommended Sections

1. "What I can do"
2. "Roles I fit"
3. "Best evidence in 5 minutes"
4. "Flagship case studies"
5. "Technical stack by evidence strength"
6. "Dashboards and reports"
7. "Reproducibility and quality"
8. "CV and contact"

### Five-Minute Recruiter Path

| Minute | Action | Evidence |
|---:|---|---|
| 1 | Read role summary | Home hero and role cards |
| 2 | Open strongest BI evidence | Inclusive Credit Risk |
| 3 | Open strongest development analytics evidence | Poverty and Social Protection |
| 4 | Open strongest research evidence | Economic Complexity |
| 5 | Verify skills and reproducibility | Skills Matrix and validation links |

## 6. Research Mode

Research Mode should foreground intellectual coherence, methods and policy relevance.

### Research Mode Goals

- Show a coherent research agenda.
- Connect papers, policy briefs, dashboards and datasets.
- Explain methodological strengths without overclaiming causality.
- Make reproducibility and limitations visible.

### Recommended Sections

1. Research agenda
2. Research Labs
3. Publications and working papers
4. Policy briefs and reports
5. Methods and data infrastructure
6. Reproducibility and open science
7. Research impact
8. Future research directions

### Research Labs

| Lab | Role in platform | Example evidence |
|---|---|---|
| Applied Economics Lab | Trade, finance, poverty and structural transformation | Economic Complexity, Financial Development |
| Development Analytics Lab | Policy indicators, survey analytics and territorial vulnerability | Poverty, Rural Housing, Structural Vulnerability |
| Business Intelligence Lab | KPI systems and executive dashboards | Inclusive Credit Risk |
| Data Science Lab | Python, validation, documentation and requirements | Breast Cancer Requirements |
| Research Methods Lab | Econometrics, spatial analysis and methodological depth | Structural Vulnerability, Spatial Econometrics |
| Open Science Lab | Reproducibility, privacy and citation infrastructure | DOI, validation reports, privacy pages |

## 7. Case Studies

Case Studies should replace a flat project list for the strongest repositories.

### Case Study Template

Each project case study card should expose:

- problem statement;
- audience;
- data sources;
- methods;
- tools;
- public products;
- quality checks;
- limitations;
- recruiter signal;
- links to repository, website, dashboard/report, paper and reproducibility assets.

### Recommended First Case Studies

| Case study | Main professional signal | Primary route |
|---|---|---|
| Inclusive Credit Risk Analytics Bolivia | BI, KPI design, SQL-ready financial analytics | Recruiter Mode, BI Analyst |
| Poverty, Informality and Social Protection LAC | Development Data Analyst, Python/web dashboard, policy indicators | Research Mode, Development Data Analyst |
| Economic Complexity and Structural Transformation LAC | Applied economics, Product Space, reproducible research, DOI | Research Mode, Research Analyst |

### Supporting Case Studies

| Project | Role |
|---|---|
| Latin America Financial Development Lab | Finance/development support evidence |
| Structural Vulnerability LAC | Research-methods support evidence |
| Rural Bolivia Housing Analytics | Privacy-first survey analytics evidence |
| Data Science Requirements - Breast Cancer | Requirements engineering and EDA evidence |

## 8. Interactive Skills Matrix

The future Skills Matrix should let users filter skills by role, tool, evidence strength and project.

### Skill Evidence Levels

Use the existing standard:

```text
STRONG
MODERATE
LIMITED
PLANNED
NOT DEMONSTRATED
```

### Matrix Dimensions

| Dimension | Values |
|---|---|
| Role | Data Analyst, BI Analyst, Development Data Analyst, Research Analyst, Analytics Engineer |
| Tool | Python, SQL, Power BI, Tableau, R, Stata, GitHub, Quarto, LaTeX |
| Evidence | dashboard, report, paper, SQL, data model, validation, reproducibility, DOI |
| Domain | poverty, finance, trade, housing, vulnerability, health/data science |
| Strength | strong, moderate, limited, planned |

### Interaction Model

Users should be able to click:

- a role and see required skills;
- a skill and see projects proving it;
- a project and see all skills it proves;
- a tool and see public artifacts using it.

## 9. Research Timeline

The Research Timeline should show progression from early research/publications to current flagship analytics.

### Timeline Structure

| Period | Narrative function |
|---|---|
| Early research foundation | Applied economics and development policy base |
| Publications and policy reports | Public research credibility |
| Reproducible portfolio phase | GitHub, validation, open science and project pages |
| Flagship analytics phase | BI, development analytics and economic complexity |
| Future platform phase | Power BI/Tableau integration and public analytics infrastructure |

Timeline entries should link only to public evidence already available.

## 10. Research Impact

Research Impact should communicate depth without overclaiming.

Recommended indicators:

- peer-reviewed publications;
- policy reports;
- public repositories;
- public websites/reports;
- DOI-backed project;
- validation reports;
- reproducibility assets;
- sectors covered;
- methods covered;
- countries/regions covered when public evidence supports it.

Impact should avoid unsupported metrics such as user counts, citations or institutional endorsements unless verified.

## 11. Explore by Tool

Tool navigation should make technical evidence easy to inspect.

| Tool | Evidence route | Current evidence status |
|---|---|---|
| Python | Poverty, rural housing, data science requirements | Strong |
| SQL | Credit, rural housing, economic complexity, household architecture | Moderate to strong depending project |
| Power BI | Credit flagship handoff/model documentation | Planned/manual artifact pending |
| Tableau | Poverty/economic complexity storytelling plan | Planned/manual artifact pending |
| R | Economic complexity, Shiny, econometrics, reports | Strong |
| GitHub Pages | Portfolio and repository websites | Strong |
| Quarto/Markdown/LaTeX | Papers, reports and reproducibility docs | Strong |

Each tool page should use evidence cards, not generic skill claims.

## 12. Explore by Sector

Sector navigation should map the portfolio to development and analytics domains.

| Sector | Projects |
|---|---|
| Poverty and social protection | Poverty, Household Survey private development |
| Finance and inclusion | Inclusive Credit Risk, Financial Development |
| Trade and productive transformation | Economic Complexity |
| Housing and territorial inequality | Rural Housing |
| Vulnerability and resilience | Structural Vulnerability |
| Health/data science requirements | Breast Cancer Requirements |

Sector pages should clarify whether the evidence is a flagship, support project, secondary project or private development workstream.

## 13. Explore by Role

Role navigation should translate the portfolio into hiring language.

| Role | Strongest evidence | Secondary evidence |
|---|---|---|
| Data Analyst | Poverty, Credit Risk, Economic Complexity | Breast Cancer Requirements |
| BI Analyst | Credit Risk | Financial Development |
| Development Data Analyst | Poverty, Economic Complexity | Structural Vulnerability, Rural Housing |
| Research Analyst | Economic Complexity, Structural Vulnerability | Financial Development |
| Analytics Engineer | Credit SQL/model documentation, Household Survey architecture | Economic Complexity SQL contracts |

Each role page should include:

- role summary;
- top three projects;
- skill evidence matrix;
- suggested review path;
- limitations and planned evidence.

## 14. Reusable Project Card System

Every project card should use a common data schema so the portal can be filtered later.

### Project Card Fields

```text
repository_name
display_title
classification
primary_role
secondary_roles
primary_lab
secondary_labs
sector
tools
methods
data_type
public_products
dashboard_status
paper_status
policy_brief_status
sql_status
powerbi_status
tableau_status
reproducibility_status
privacy_status
evidence_strength
recommended_audience
main_link
website_link
dashboard_link
paper_link
doi_link
cv_relevance
```

### Card Variants

| Variant | Use |
|---|---|
| Flagship card | Homepage and case studies |
| Role evidence card | Recruiter Mode |
| Tool evidence card | Explore by Tool |
| Sector card | Explore by Sector |
| Compact card | Timeline and related-project links |
| CV evidence card | Web CV support sections |

## 15. Navigation Consistency Across Repositories

The main portal should define the navigation pattern that all repository websites eventually mirror.

Required cross-links:

- Back to Portfolio;
- Repository;
- Website/report;
- Dashboard/explorer when available;
- Paper/report/policy brief when available;
- Methodology;
- Data quality;
- Reproducibility;
- Citation/DOI when available.

Repository pages should not invent unavailable products. Missing products should be hidden or labelled planned only when documented.

## 16. Future Dashboard Integration

Dashboard integration should be selective and evidence-based.

### Dashboard Hub

A future Dashboard Hub page should group:

- Web/Python dashboards;
- Power BI products;
- Tableau products;
- static reports;
- screenshots when live embedding is not available.

### Power BI Rule

Use Power BI only where it proves BI-specific capabilities:

- model relationships;
- DAX measures;
- KPI cards;
- drill-downs;
- stakeholder navigation;
- PDF or screenshot fallback when public embed is unavailable.

### Tableau Rule

Use Tableau only where it proves visual storytelling:

- story points;
- map-based exploration;
- parameters;
- dashboard actions;
- narrative comparison.

### Web Dashboard Rule

Use Python/web/static JS when the value is reproducible public exploration and transparent code.

## 17. CV Web Improvements

The Web CV should become an evidence-linked professional CV.

Allowed future improvements, based only on published evidence:

- add role-fit summary blocks;
- link selected projects to specific skills;
- add "selected analytical products" section;
- add "research and policy outputs" section;
- add "technical evidence" section for Python, SQL, R, BI, reproducibility and validation;
- keep contact information privacy-safe;
- avoid claims not backed by public artifacts.

The CV should not become a second project catalog. It should remain concise and evidence-linked.

## 18. Privacy and Evidence Rules

The platform must maintain the existing privacy discipline:

- no local paths;
- no raw restricted microdata;
- no private datasets;
- no phone number unless explicitly approved;
- no secret tokens or credentials;
- no unverifiable institutional claims;
- no "live dashboard" label unless the public link works.

Evidence labels should be explicit:

```text
LIVE
PUBLIC REPORT
PUBLIC REPOSITORY
PDF/SNAPSHOT
SOURCE FILE AVAILABLE
PLANNED
PRIVATE DEVELOPMENT
```

## 19. Recommended Future Implementation Order

This order prioritizes maximum professional impact with minimum future credit use.

1. Create structured project metadata file for the portal.
2. Build Recruiter Mode using existing evidence.
3. Build Research Mode using existing publications and flagship case studies.
4. Convert project list into reusable project cards.
5. Add Skills Matrix filters using the existing evidence matrix.
6. Add Explore by Role.
7. Add Explore by Tool.
8. Add Explore by Sector.
9. Add Timeline and Impact.
10. Update Web CV with evidence-linked sections.

No flagship repository should be modified during this portal-first implementation unless a broken link or public evidence correction is strictly required.

## 20. Definition of Done

The future integrated platform is complete when:

- the homepage has clear mode-based entry points;
- Recruiter Mode answers role fit in under five minutes;
- Research Mode shows the research agenda and publications coherently;
- every flagship has a case-study card;
- every skill claim links to evidence;
- every dashboard/report link is labelled accurately;
- project cards are generated from one reusable metadata structure;
- CV web content is evidence-linked and privacy-safe;
- navigation back to the portal is consistent across public repository websites.

## 21. Explicit Non-Implementation Statement

This blueprint does not implement the portal. It does not change design, navigation, HTML, CSS, JavaScript, dashboards, repositories, models, papers, data, figures or results. It is the architectural decision layer for a later implementation phase.
