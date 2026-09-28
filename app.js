const categoryNames = {
  automotive: 'Automotive', 'diy-craft': 'DIY & craft', health: 'Health', math: 'Math', cooking: 'Cooking', conversion: 'Conversion', 'date-time': 'Date & time', everyday: 'Everyday', party: 'Party', productivity: 'Productivity', household: 'Household', travel: 'Travel', finance: 'Finance', pets: 'Pets', geometry: 'Geometry', fun: 'Fun', shopping: 'Shopping', weather: 'Weather', sports: 'Sports', fashion: 'Fashion', music: 'Music', construction: 'Construction', cleaning: 'Cleaning', moving: 'Moving', statistics: 'Statistics', gaming: 'Gaming', gardening: 'Gardening', photography: 'Photography', crypto: 'Crypto', science: 'Science', education: 'Education', 'social-media': 'Social media', electrical: 'Electrical'
};
const featuredSlugs = ['mortgage-calculator', 'compound-interest-calculator', 'bmi-calculator', 'date-calculator', 'unit-converter', 'percentage-calculator'];
const grid = document.querySelector('#calculator-grid');
const filters = document.querySelector('#category-filters');
const searchInput = document.querySelector('#search-input');
const resultCount = document.querySelector('#result-count');
const totalCount = document.querySelector('#total-count');
const emptyState = document.querySelector('#empty-state');
const clearButton = document.querySelector('#clear-filters');
let calculators = [];
let activeCategory = 'all';

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
}

function categoryCount(category) {
  return category === 'all' ? calculators.length : calculators.filter(item => item.category === category).length;
}

function renderFilters() {
  const ordered = ['all', ...Object.keys(categoryNames).filter(category => categoryCount(category) > 0)];
  filters.innerHTML = ordered.map(category => {
    const label = category === 'all' ? 'All calculators' : categoryNames[category];
    return `<button class="filter-chip" type="button" data-category="${category}" aria-pressed="${activeCategory === category}">${escapeHTML(label)} <span>${categoryCount(category)}</span></button>`;
  }).join('');
}

function render() {
  const query = searchInput.value.trim().toLocaleLowerCase();
  const shown = calculators.filter(item => {
    const inCategory = activeCategory === 'all' || item.category === activeCategory;
    const text = `${item.title} ${item.description} ${item.category}`.toLocaleLowerCase();
    return inCategory && (!query || text.includes(query));
  });
  grid.innerHTML = shown.map((item, index) => {
    const description = item.description || `${categoryNames[item.category] || item.category} calculator with an instant result and a worked explanation.`;
    const category = categoryNames[item.category] || item.category;
    return `<a class="calc-card" href="${escapeHTML(item.url)}" target="_blank" rel="noopener"><div class="calc-card-top"><span class="calc-category">${escapeHTML(category)}</span><span class="calc-arrow" aria-hidden="true">↗</span></div><h3>${escapeHTML(item.title)}</h3><p>${escapeHTML(description)}</p></a>`;
  }).join('');
  resultCount.textContent = `${shown.length.toLocaleString()} ${shown.length === 1 ? 'calculator' : 'calculators'}${query || activeCategory !== 'all' ? ' found' : ' in the directory'}`;
  emptyState.hidden = shown.length !== 0;
  grid.hidden = shown.length === 0;
  clearButton.hidden = !query && activeCategory === 'all';
}

filters.addEventListener('click', event => {
  const button = event.target.closest('[data-category]');
  if (!button) return;
  activeCategory = button.dataset.category;
  renderFilters();
  render();
});
searchInput.addEventListener('input', render);
clearButton.addEventListener('click', () => {
  searchInput.value = '';
  activeCategory = 'all';
  renderFilters();
  render();
  searchInput.focus();
});
document.addEventListener('keydown', event => {
  if (event.key === '/' && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
    event.preventDefault();
    searchInput.focus();
  }
  if (event.key === 'Escape' && document.activeElement === searchInput) {
    searchInput.value = '';
    render();
    searchInput.blur();
  }
});

fetch('data/calculators.json')
  .then(response => { if (!response.ok) throw new Error('Catalog data is unavailable'); return response.json(); })
  .then(data => {
    calculators = data;
    totalCount.textContent = calculators.length.toLocaleString();
    renderFilters();
    render();
  })
  .catch(() => {
    resultCount.textContent = 'The directory could not load.';
    emptyState.hidden = false;
    emptyState.querySelector('h3').textContent = 'Catalog unavailable';
    emptyState.querySelector('p').textContent = 'Refresh this page to try again.';
  });
