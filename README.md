# Awesome CalcDelta Calculators

<p align="center">
  <a href="https://calcdelta.com/">
    <img src="assets/calcdelta-en-social-card.webp" alt="CalcDelta — Free online calculators" width="1200">
  </a>
</p>

> A searchable directory for the calculators offered by [CalcDelta](https://calcdelta.com/), the product maintained in the [CalcDelta project repository](https://github.com/hqzhon/calc).

**Project relationship:** this directory is affiliated with CalcDelta and links directly to its calculator pages. CalcDelta's calculator implementation is **not open source**. This repository contains the directory website and a catalog snapshot; it is not a source-code mirror and does not include the calculator implementation.

## Project links

- **Product:** [CalcDelta](https://calcdelta.com/)
- **CalcDelta project repository:** [github.com/hqzhon/calc](https://github.com/hqzhon/calc) — project source is private.
- **Directory site repository:** [github.com/hqzhon/calculators-awesome](https://github.com/hqzhon/calculators-awesome).

## Browse the directory

The site lists 734 English calculators across 33 categories in this snapshot. Search by name or description, filter by category, and open each calculator on the official [CalcDelta website](https://calcdelta.com/).

The directory site is a dependency-free static page. To preview it locally, serve the repository root over HTTP:

```sh
python3 -m http.server 4173
```

Then open <http://localhost:4173>.

## Keep the catalog current

The catalog is generated from CalcDelta's private source checkout. From the CalcDelta repository, run:

```sh
node /path/to/calc-awesome/scripts/refresh-catalog.mjs
```

The script reads `data/calculators/*.json` and refreshes this repository's `data/calculators.json` with English titles, descriptions, categories, input counts, and official calculator URLs. Review the resulting changes before publishing.

## Deploy

This repository includes a GitHub Actions workflow for publishing to GitHub Pages from `main`. Enable Pages with GitHub Actions as the source to publish it; the Pages URL is not live yet. It can also be hosted on another static file service. There is no package install, build step, tracking script, or calculator API in this directory site.

## Community list

The intended upstream listing is [xxczaki/awesome-calculators](https://github.com/xxczaki/awesome-calculators), under its `Web` section. A single-entry proposal is saved in [`submissions/awesome-calculators/entry.md`](submissions/awesome-calculators/entry.md), with an apply-ready patch beside it. The upstream pull request has not been filed or accepted yet.

## Featured calculators

- [Mortgage Calculator](https://calcdelta.com/mortgage-calculator/) — Estimate a monthly housing payment with taxes, insurance, PMI, HOA, and extra payments.
- [Compound Interest Calculator](https://calcdelta.com/compound-interest-calculator/) — Explore how principal, rate, time, and compounding frequency affect growth.
- [BMI Calculator](https://calcdelta.com/bmi-calculator/) — Calculate adult BMI and review its limits as a screening measure, not a diagnosis.
- [Date Difference Calculator](https://calcdelta.com/date-difference-calculator/) — Calculate the time between two dates.

## Attribution

CalcDelta is maintained by [Jackie Zhong](https://github.com/hqzhon). The calculator product is at [calcdelta.com](https://calcdelta.com/); its project repository is [github.com/hqzhon/calc](https://github.com/hqzhon/calc). The directory is a separate index for that product, not an independent calculator engine.
