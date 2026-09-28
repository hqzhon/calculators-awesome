# CalcDelta Calculator Directory

A lightweight, searchable directory of free online calculators from [CalcDelta](https://calcdelta.com/). Browse by category or search titles and descriptions; each card links to the calculator itself.

The catalog snapshot includes 734 English calculator pages across 33 categories, based on the CalcDelta source data on September 28, 2026. It is a handoff/discovery page for the product, not an independent calculation service. Calculations run on CalcDelta in the visitor's browser. The site's finance, health, and general purpose tools are for information only and are not professional advice.

## Run locally

This is a dependency-free static site. Serve the repository root over HTTP so the catalog JSON can load:

```sh
python3 -m http.server 4173
```

Then open <http://localhost:4173>.

## Refresh the catalog

From the CalcDelta source repository, run:

```sh
node /path/to/calc-awesome/scripts/refresh-catalog.mjs
```

The script reads `data/calculators/*.json` and refreshes `data/calculators.json` with English names, descriptions, category, input count, and canonical calculator URL. Review the generated diff before committing.

## Deploy

The folder can be hosted by GitHub Pages or any static file host. No build step, package install, tracking script, or server-side calculator API is required.

## Attribution

CalcDelta is built and maintained by [Jackie Zhong](https://github.com/hqzhon). This directory presents a snapshot of its calculator catalog. See the [source project](https://github.com/hqzhon/calc) and [product website](https://calcdelta.com/).
