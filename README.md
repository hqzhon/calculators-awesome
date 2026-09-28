# CalcDelta: Free Online Calculators for Everyday Decisions

<p align="center">
  <a href="https://calcdelta.com/">
    <img src="assets/calcdelta-cover.png" alt="CalcDelta — practical calculators for everyday decisions" width="1200">
  </a>
</p>

Find a practical calculator for the numbers behind everyday decisions. [CalcDelta](https://calcdelta.com/) brings together **734 free online calculators across 33 categories**—including finance, health, math, unit conversion, cooking, home projects, travel, and more. Search by name or browse a category, enter your details, and see a result with its calculation explained.

This repository contains the searchable directory website and a catalog snapshot. It links to calculators on the CalcDelta website; it does not contain the calculator implementation.

## Contents

- [Browse by category](#browse-by-calculator-category)
- [Featured calculators](#featured-calculators)
- [Preview locally](#preview-locally)
- [Keep the catalog current](#keep-the-catalog-current)
- [Deploy](#deploy)
- [Project and attribution](#project-and-attribution)

## Browse by calculator category

Browse all 33 calculator categories on [CalcDelta](https://calcdelta.com/). Each category link opens its full collection of related tools.

| Category | What you can calculate |
| --- | --- |
| [Automotive][category-automotive] | Fuel costs, mileage, vehicle performance, and ownership estimates. |
| [Cleaning][category-cleaning] | Estimate cleaning costs, laundry costs, supplies, and household needs. |
| [Construction][category-construction] | Concrete, flooring, roofing, and other building material estimates. |
| [Conversion][category-conversion] | Convert common units for length, area, volume, weight, temperature, and more. |
| [Cooking][category-cooking] | Scale recipes and convert ingredients, cooking times, and kitchen measurements. |
| [Crypto][category-crypto] | Explore cryptocurrency amounts, prices, and return scenarios. |
| [Date & time][category-date-time] | Work with dates, durations, time zones, countdowns, and calendars. |
| [DIY & craft][category-diy-craft] | Plan craft materials, project dimensions, and do-it-yourself costs. |
| [Education][category-education] | Calculate grades and support everyday academic planning. |
| [Electrical][category-electrical] | Plan solar panel capacity and estimate voltage drop in a wire run. |
| [Everyday][category-everyday] | Handle practical daily math, bill splitting, and personal planning. |
| [Fashion][category-fashion] | Compare clothing and accessory sizes and fit measurements. |
| [Finance][category-finance] | Estimate mortgage and loan payments, interest, savings, and budgets. |
| [Fun][category-fun] | Try lighthearted quizzes, generators, and just-for-fun calculations. |
| [Gaming][category-gaming] | Explore game-related stats, outcomes, and gameplay scenarios. |
| [Gardening][category-gardening] | Plan garden beds, planting, watering, and growing projects. |
| [Geometry][category-geometry] | Calculate shape dimensions, angles, areas, and volumes. |
| [Health][category-health] | Explore BMI, calorie, fitness, and other general health estimates. |
| [Household][category-household] | Estimate home energy, appliance use, water, and household needs. |
| [Math][category-math] | Solve common problems with percentages, fractions, averages, and more. |
| [Moving][category-moving] | Estimate moving costs, packing needs, and space for a move. |
| [Music][category-music] | Work with notes, tempo, intervals, and other music measurements. |
| [Party][category-party] | Plan event budgets, food, drinks, and guest quantities. |
| [Pets][category-pets] | Estimate pet age, food portions, care needs, and ownership costs. |
| [Photography][category-photography] | Calculate exposure, image sizes, lenses, and photography settings. |
| [Productivity][category-productivity] | Calculate reading, writing, work time, and digital project estimates. |
| [Science][category-science] | Explore practical calculations from physics and other sciences. |
| [Shopping][category-shopping] | Compare discounts, prices, quantities, and shopping costs. |
| [Social media][category-social-media] | Estimate engagement rates, creator metrics, and campaign scenarios. |
| [Sports][category-sports] | Calculate pace, performance, scores, and training measurements. |
| [Statistics][category-statistics] | Work with averages, distributions, percentiles, and statistical scores. |
| [Travel][category-travel] | Estimate trip times, travel costs, routes, and accommodation trade-offs. |
| [Weather][category-weather] | Explore weather-related conversions and planning estimates. |

## Featured calculators

Explore 20 useful free online calculators selected from the directory:

- [Mortgage Calculator][calc-mortgage] — Estimate a monthly payment with taxes, insurance, PMI, HOA, and extra payments.
- [Compound Interest Calculator][calc-compound-interest] — Project growth with flexible compounding frequency.
- [Loan Calculator][calc-loan] — See monthly payments, total repayment, and interest for a fixed-rate loan.
- [Savings Calculator][calc-savings] — Project savings with a starting balance, regular deposits, and interest.
- [Percentage Calculator][calc-percentage] — Find what percent one number is of another.
- [Fraction Calculator][calc-fraction] — Calculate with fractions.
- [BMI Calculator][calc-bmi] — Calculate body mass index; it is a screening measure, not a diagnosis.
- [Calorie Calculator][calc-calorie] — Estimate basal metabolic rate and daily calories for weight maintenance.
- [Date Calculator][calc-date] — Add or subtract days, weeks, months, and years from a date.
- [Date Difference Calculator][calc-date-difference] — Find the time between two dates in days, weeks, months, and years.
- [Time Duration Calculator][calc-time-duration] — Calculate the duration between times.
- [Age Calculator][calc-age] — Calculate exact age from a date of birth.
- [Cooking Measurement Converter][calc-cooking-measurement] — Convert common cooking measurements.
- [Recipe Scaler][calc-recipe-scaler] — Scale ingredient quantities to a different serving size.
- [Area Converter][calc-area] — Convert area units including square metres, acres, and square feet.
- [Fuel Cost Calculator][calc-fuel-cost] — Estimate trip fuel cost from distance, fuel economy, and price.
- [Concrete Slab Calculator][calc-concrete] — Estimate concrete volume and bag count for a slab or pad.
- [Paint Calculator][calc-paint] — Estimate paint needed for a project.
- [Tip Calculator][calc-tip] — Calculate a tip and split the bill between people.
- [GPA Calculator][calc-gpa] — Calculate a grade point average from grades and credit hours.

## Preview locally

The directory is a dependency-free static site. To preview it locally, serve the repository root over HTTP:

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

## Project and attribution

The calculator product is [CalcDelta](https://calcdelta.com/), maintained by [Jackie Zhong](https://github.com/hqzhon). Its project repository is [github.com/hqzhon/calc](https://github.com/hqzhon). This repository hosts the separate directory site and catalog snapshot, not an independent calculator engine. CalcDelta's calculator implementation is not open source.

The catalog snapshot in this repository lists 734 English calculators across 33 categories. Counts and calculator links can change as the catalog is refreshed.

[category-automotive]: https://calcdelta.com/automotive/
[category-cleaning]: https://calcdelta.com/cleaning/
[category-construction]: https://calcdelta.com/construction/
[category-conversion]: https://calcdelta.com/conversion/
[category-cooking]: https://calcdelta.com/cooking/
[category-crypto]: https://calcdelta.com/crypto/
[category-date-time]: https://calcdelta.com/date-time/
[category-diy-craft]: https://calcdelta.com/diy-craft/
[category-education]: https://calcdelta.com/education/
[category-electrical]: https://calcdelta.com/electrical/
[category-everyday]: https://calcdelta.com/everyday/
[category-fashion]: https://calcdelta.com/fashion/
[category-finance]: https://calcdelta.com/finance/
[category-fun]: https://calcdelta.com/fun/
[category-gaming]: https://calcdelta.com/gaming/
[category-gardening]: https://calcdelta.com/gardening/
[category-geometry]: https://calcdelta.com/geometry/
[category-health]: https://calcdelta.com/health/
[category-household]: https://calcdelta.com/household/
[category-math]: https://calcdelta.com/math/
[category-moving]: https://calcdelta.com/moving/
[category-music]: https://calcdelta.com/music/
[category-party]: https://calcdelta.com/party/
[category-pets]: https://calcdelta.com/pets/
[category-photography]: https://calcdelta.com/photography/
[category-productivity]: https://calcdelta.com/productivity/
[category-science]: https://calcdelta.com/science/
[category-shopping]: https://calcdelta.com/shopping/
[category-social-media]: https://calcdelta.com/social-media/
[category-sports]: https://calcdelta.com/sports/
[category-statistics]: https://calcdelta.com/statistics/
[category-travel]: https://calcdelta.com/travel/
[category-weather]: https://calcdelta.com/weather/

[calc-mortgage]: https://calcdelta.com/mortgage-calculator/
[calc-compound-interest]: https://calcdelta.com/compound-interest-calculator/
[calc-loan]: https://calcdelta.com/loan-calculator/
[calc-savings]: https://calcdelta.com/savings-calculator/
[calc-percentage]: https://calcdelta.com/percentage-calculator/
[calc-fraction]: https://calcdelta.com/fraction-calculator/
[calc-bmi]: https://calcdelta.com/bmi-calculator/
[calc-calorie]: https://calcdelta.com/calorie-calculator/
[calc-date]: https://calcdelta.com/date-calculator/
[calc-date-difference]: https://calcdelta.com/date-difference-calculator/
[calc-time-duration]: https://calcdelta.com/time-duration-calculator/
[calc-age]: https://calcdelta.com/age-calculator/
[calc-cooking-measurement]: https://calcdelta.com/cooking-measurement-converter/
[calc-recipe-scaler]: https://calcdelta.com/recipe-scaler-calculator/
[calc-area]: https://calcdelta.com/area-calculator/
[calc-fuel-cost]: https://calcdelta.com/fuel-cost-calculator/
[calc-concrete]: https://calcdelta.com/concrete-calculator/
[calc-paint]: https://calcdelta.com/paint-calculator/
[calc-tip]: https://calcdelta.com/tip-calculator/
[calc-gpa]: https://calcdelta.com/gpa-calculator/
