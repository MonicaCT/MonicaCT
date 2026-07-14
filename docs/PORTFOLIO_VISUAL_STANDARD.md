# Portfolio Visual Standard

The portfolio visual system should feel editorial, scientific and modern: clear like high-quality policy journalism, precise like scientific publishing and structured like a serious technology product. It must not copy brands, logos, proprietary fonts or exact layouts.

## Palette

| name | color | use |
|---|---|---|
| Ink | `#1F2933` | primary text, axes, strong labels |
| Warm background | `#F7F5F0` | page background and quiet sections |
| Accent red | `#B23A48` | primary action, warnings, key emphasis |
| Research blue | `#2F5F8F` | research sections, methodology, charts |
| Technology teal | `#1F7A8C` | dashboards, data products, interaction |
| Warm orange | `#E58F2A` | highlights, secondary callouts |
| Muted green | `#5E7D68` | validation, sustainability, policy notes |
| Light gray | `#D9DDE3` | borders, table rules |
| Medium gray | `#7A828E` | captions, metadata |

Rules:

- use a maximum of three relevant colors per visual;
- use accent red sparingly;
- reserve green for validation or positive status;
- keep backgrounds warm and quiet;
- avoid one-color dashboards.

## Typography

- Use system fonts or open-source web-safe fonts.
- Titles should be concise and finding-based.
- Subtitles should state unit, period, source or method.
- Avoid oversized headings inside dashboards and compact panels.
- Do not use negative letter spacing.

## Layout

- Content max width: 1080-1180 px for text-heavy pages.
- Analytical dashboards may use wider layouts up to 1280 px.
- Avoid cards inside cards.
- Use cards only for repeated project summaries, KPI groups or product links.
- Use full-width bands for major sections.
- Keep navigation predictable across all repos.

## Navigation

Common flagship navigation:

- Overview;
- Research Question;
- Executive Summary;
- Dashboard;
- Data;
- Figures;
- Tables;
- Data Quality;
- Methodology;
- SQL/Data Model;
- Reports;
- Reproducibility;
- Citation;
- Back to Portfolio.

## Buttons

- Buttons should link to real destinations only.
- Use concise labels: Website, Dashboard, Report, Methodology, Data, SQL, Repository, Portfolio.
- Do not create dead buttons for Power BI/Tableau before artifacts exist.

## KPI Cards

- KPI cards should show metric, value, unit and period.
- Use no more than 4-6 KPI cards in a first viewport.
- Avoid decorative metrics without analytical purpose.

## Tables

- Prefer compact tables with clear units.
- Right-align numeric values.
- Include source or method notes below tables.
- Avoid excessive decimals.

## Charts

- Avoid 3D charts.
- Avoid gauges and speedometers.
- Prefer line, bar, dot plot, heatmap, scatter, map and small multiples.
- Titles should state the takeaway, not only the variable names.
- Subtitles should state method, sample and time coverage.
- Sources must be visible near the figure or in a linked methodology note.

## Maps

- Use maps only when geography matters.
- Include legend, source, year and classification method.
- Avoid precise small-area maps when privacy risk exists.

## Tooltips

Tooltips should explain:

- metric definition;
- source;
- unit;
- year;
- uncertainty or missingness when relevant.

## Responsive Design

- Mobile layout should show summary, KPIs and primary actions first.
- Tables should scroll horizontally or collapse responsibly.
- Charts should not require tiny hover targets on mobile.
- Avoid text overlap at small widths.

## Accessibility

- Maintain strong contrast.
- Do not encode meaning only by color.
- Provide alt text for key figures.
- Use semantic headings.
- Keep keyboard navigation possible.

## Cross-Tool Consistency

Python, Power BI and Tableau versions should use the same metric names, units, colors and limitations. Visual consistency matters more than visual novelty.

