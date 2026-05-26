const translations = {
en: {
	search: 'Search...',
	collectibles: 'Collectibles',
	merchandise: 'Merchandise',
	inStock: 'In Stock',
	contacts: 'Contacts',

	animeCollection: 'Anime Collection',
	filter: 'Filter',
	recommendation: 'Recommendation',
	sortBy: 'Sort by',
	price: 'Price',
	status: 'Status',
	category: 'Category',
	series: 'Series',
	showMore: 'Show More',
	hideFilters: 'Hide Filters',
	showFilters: 'Show Filters',
	clearFilters: 'Clear Filters',
	applyFilters: 'Apply Filters',
	all: 'All',
	newest: 'Newest',
	oldest: 'Oldest',
	lowestPrice: 'Lowest Price',
	highestPrice: 'Highest Price',
	preOrder: 'Pre-Order',
	inStockFilter: 'In Stock',
	sale: 'Sale',
	addToCart: 'Add to Cart'
},

da: {
	search: 'Søg...',
	collectibles: 'Samlefigurer',
	merchandise: 'Merchandise',
	inStock: 'På lager',
	contacts: 'Kontakt',

	animeCollection: 'Anime kollektion',
	filter: 'Filter',
	recommendation: 'Anbefaling',
	sortBy: 'Sorter efter',
	price: 'Pris',
	status: 'Status',
	category: 'Kategori',
	series: 'Serie',
	showMore: 'Vis mere',
	hideFilters: 'Skjul filtre',
	showFilters: 'Vis filtre',
	clearFilters: 'Ryd filtre',
	applyFilters: 'Anvend filtre',
	all: 'Alle',
	newest: 'Nyeste',
	oldest: 'Ældste',
	lowestPrice: 'Laveste pris',
	highestPrice: 'Højeste pris',
	preOrder: 'Forudbestilling',
	inStockFilter: 'På lager',
	sale: 'Udsalg',
	addToCart: 'Læg i kurv'
},

sv: {
	search: 'Sök...',
	collectibles: 'Samlarfigurer',
	merchandise: 'Merchandise',
	inStock: 'I lager',
	contacts: 'Kontakt',

	animeCollection: 'Animekollektion',
	filter: 'Filter',
	recommendation: 'Rekommendation',
	sortBy: 'Sortera efter',
	price: 'Pris',
	status: 'Status',
	category: 'Kategori',
	series: 'Serie',
	showMore: 'Visa mer',
	hideFilters: 'Dölj filter',
	showFilters: 'Visa filter',
	clearFilters: 'Rensa filter',
	applyFilters: 'Använd filter',
	all: 'Alla',
	newest: 'Nyaste',
	oldest: 'Äldsta',
	lowestPrice: 'Lägsta pris',
	highestPrice: 'Högsta pris',
	preOrder: 'Förbeställning',
	inStockFilter: 'I lager',
	sale: 'Rea',
	addToCart: 'Lägg i varukorg'
},

no: {
	search: 'Søk...',
	collectibles: 'Samlefigurer',
	merchandise: 'Merchandise',
	inStock: 'På lager',
	contacts: 'Kontakt',

	animeCollection: 'Animekolleksjon',
	filter: 'Filter',
	recommendation: 'Anbefaling',
	sortBy: 'Sorter etter',
	price: 'Pris',
	status: 'Status',
	category: 'Kategori',
	series: 'Serie',
	showMore: 'Vis mer',
	hideFilters: 'Skjul filtre',
	showFilters: 'Vis filtre',
	clearFilters: 'Tøm filtre',
	applyFilters: 'Bruk filtre',
	all: 'Alle',
	newest: 'Nyeste',
	oldest: 'Eldste',
	lowestPrice: 'Laveste pris',
	highestPrice: 'Høyeste pris',
	preOrder: 'Forhåndsbestilling',
	inStockFilter: 'På lager',
	sale: 'Salg',
	addToCart: 'Legg i handlekurv'
}
};

function setLanguage(language) {
	const selectedLanguage = translations[language];

	if (!selectedLanguage) return;

	document.querySelectorAll('[data-i18n]').forEach((element) => {
		const key = element.getAttribute('data-i18n');

		if (key && selectedLanguage[key]) {
			element.textContent = selectedLanguage[key];
		}
	});

	document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
		const key = element.getAttribute('data-i18n-placeholder');

		if (key && selectedLanguage[key]) {
			element.setAttribute('placeholder', selectedLanguage[key]);
		}
	});

	localStorage.setItem('language', language);
}

document.addEventListener('DOMContentLoaded', () => {
	const savedLanguage =
		localStorage.getItem('language') || 'en';

	const languageToggle =
		document.getElementById('languageToggle');

	const languageMenu =
		document.getElementById('languageMenu');

	setLanguage(savedLanguage);

	if (languageToggle && languageMenu) {
		languageToggle.addEventListener('click', () => {
			languageMenu.classList.toggle('active');
		});
	}

	document.querySelectorAll('[data-lang]').forEach((button) => {
		button.addEventListener('click', () => {
			const language =
				button.getAttribute('data-lang');

			if (language) {
				setLanguage(language);
			}

			if (languageMenu) {
				languageMenu.classList.remove('active');
			}
		});
	});

	document.addEventListener('click', (event) => {
		const target = event.target;

		if (
			languageMenu &&
			languageToggle &&
			!languageMenu.contains(target) &&
			!languageToggle.contains(target)
		) {
			languageMenu.classList.remove('active');
		}
	});
});