const translations = {
	en: {
		collectibles: 'Collectibles',
		merchandise: 'Merchandise',
		inStock: 'In Stock',
		contacts: 'Contacts',
		search: 'Search...',
		shopMore: 'Shop more ›',
		addToCart: 'Add to Cart',
		preOrders: 'Pre-Orders',
		relatedProducts: 'Related products'
	},

	da: {
		collectibles: 'Samleobjekter',
		merchandise: 'Merchandise',
		inStock: 'På lager',
		contacts: 'Kontakt',
		search: 'Søg...',
		shopMore: 'Shop mere ›',
		addToCart: 'Tilføj til kurv',
		preOrders: 'Forudbestillinger',
		relatedProducts: 'Relaterede produkter'
	},

	sv: {
		collectibles: 'Samlarfigurer',
		merchandise: 'Merchandise',
		inStock: 'I lager',
		contacts: 'Kontakt',
		search: 'Sök...',
		shopMore: 'Shoppa mer ›',
		addToCart: 'Lägg i varukorg',
		preOrders: 'Förbeställningar',
		relatedProducts: 'Relaterade produkter'
	},

	no: {
		collectibles: 'Samleobjekter',
		merchandise: 'Merchandise',
		inStock: 'På lager',
		contacts: 'Kontakt',
		search: 'Søk...',
		shopMore: 'Handle mer ›',
		addToCart: 'Legg i handlekurv',
		preOrders: 'Forhåndsbestillinger',
		relatedProducts: 'Relaterte produkter'
	}
};

function applyLanguage(lang) {
	const selectedLanguage = translations[lang] || translations.en;

	document.documentElement.lang = lang;

	document.querySelectorAll('[data-i18n]').forEach((element) => {
		const key = element.dataset.i18n;

		if (selectedLanguage[key]) {
			element.textContent = selectedLanguage[key];
		}
	});

	document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
		const key = element.dataset.i18nPlaceholder;

		if (selectedLanguage[key]) {
			element.setAttribute('placeholder', selectedLanguage[key]);
		}
	});

	localStorage.setItem('selectedLanguage', lang);
}

function setupLanguageButtons() {
	document.querySelectorAll('[data-lang]').forEach((button) => {
		button.addEventListener('click', () => {
			const lang = button.dataset.lang;

			if (!lang) return;

			applyLanguage(lang);
		});
	});
}

const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';

applyLanguage(savedLanguage);
setupLanguageButtons();

window.applyLanguage = applyLanguage;



