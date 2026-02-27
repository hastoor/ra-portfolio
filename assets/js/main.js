/* =========================================
   SCROLL REVEAL
   ========================================= */
const scrollRevealOption = {
	distance: "40px",
	origin: "bottom",
	duration: 900,
	easing: "cubic-bezier(0.5, 0, 0, 1)",
	interval: 120,
};


/* =========================================
   i18n (EN/RU) + Language dropdown
   ========================================= */
const I18N = {
	en: {
		nav_services: "Services",
		nav_portfolio: "Portfolio",
		nav_about: "About",
		nav_contact: "Contact",
		hire_me: "Hire Me",
		open_to_work: "Open to Work",
		hero_tag: "Web Developer",
		hero_h2: "I build fast & conversion‑focused websites for businesses",
		hero_p: "Modern, responsive, and performance-optimized web solutions designed to turn visitors into clients.",
		cta_discuss_html: "Discuss <span>Your</span> Project",
		cta_learn: "Learn More",
		services_title: "Services",
		services_tag: "What You Get",
		services_sub: "What I can do for your business",
		services_card1_title: "Modern Responsive Design",
		services_card1_desc: "Your website works flawlessly on all devices and screen sizes — from phones to ultra‑wide monitors.",
		services_card2_title: "High Performance",
		services_card2_desc: "Optimized code and assets for blazing fast loading speeds and top Lighthouse scores.",
		services_card3_title: "Clean Architecture",
		services_card3_desc: "Structured and scalable codebase that is maintainable, readable, and future‑proof.",
		services_card4_title: "Integrations & Forms",
		services_card4_desc: "Contact forms, CRM integrations, analytics setup, and full deployment support.",
		portfolio_title: "Portfolio Projects",
		portfolio_tag: "My Work",
		portfolio_sub: "A selection of my recent work",
		about_title: "About Me",
		about_tag: "Who I Am",
		hero_h1_prefix: "Hi, I am",
		about_p1: "I am a web developer specializing in modern, high-performance websites. I work with small and medium-sized businesses to create structured, scalable, and reliable web solutions.",
		about_p2: "I value clean code, transparent communication, and meeting deadlines. Every project gets my full attention — from design to deployment.",
		skills_tag: "Tech Stack",
		skills_title: "Expertise",
		skills_frontend_h: "Frontend",
		skills_frontend_p: "HTML5, CSS3, JavaScript, responsive development, performance optimization",
		skills_tools_h: "Tools",
		skills_tools_p: "Git, Figma, Vite / Webpack, API integration",
		skills_additional_h: "Additional",
		skills_additional_p: "Basic SEO setup, form configuration, deployment",
		about_sub: "A bit of my background and how I work",
		contact_title: "Contact Me",
		contact_sub: "Let’s build something awesome together",
		modal_tag: "Let's talk",
		modal_title: "Start Your Project",
		modal_sub: "Fill in the details and I'll get back to you within 24 hours.",
		form_firstname_ph: "First name",
		form_lastname_ph: "Last name",
		form_middlename_ph: "Middle name",
		form_phone_ph: "90 123 45 67",
		form_email_ph: "Email (optional)",
		form_desc_ph: "Tell me about your project (optional)",
		form_submit: "Send request",
		sending: "Sending...",
		err_send: "Error sending request. Please try again.",
		err_network: "Network error. Please try again."
	},
	ru: {
		nav_services: "Услуги",
		nav_portfolio: "Портфолио",
		nav_about: "Обо мне",
		nav_contact: "Контакты",
		hire_me: "Нанять меня",
		open_to_work: "Открыт к работе",
		hero_tag: "Веб‑разработчик",
		hero_h2: "Делаю быстрые и конверсионные сайты для бизнеса",
		hero_p: "Современные, адаптивные и оптимизированные по скорости сайты, которые превращают посетителей в клиентов.",
		cta_discuss_html: "Обсудить <span>ваш</span> проект",
		cta_learn: "Подробнее",
		services_title: "Услуги",
		services_tag: "Что вы получите",
		services_sub: "Чем могу быть полезен вашему бизнесу",
		services_card1_title: "Современный адаптивный дизайн",
		services_card1_desc: "Сайт отлично работает на всех устройствах и размерах экранов — от телефонов до ультрашироких мониторов.",
		services_card2_title: "Высокая производительность",
		services_card2_desc: "Оптимизированный код и ресурсы для молниеносной загрузки и высоких оценок Lighthouse.",
		services_card3_title: "Чистая архитектура",
		services_card3_desc: "Структурированный и масштабируемый код, который легко поддерживать, читать и развивать.",
		services_card4_title: "Интеграции и формы",
		services_card4_desc: "Формы заявок, интеграции с CRM, подключение аналитики и помощь с деплоем.",
		portfolio_title: "Проекты",
		portfolio_sub: "Несколько примеров моих работ",
		about_title: "Обо мне",
		about_tag: "Кто я",
		hero_h1_prefix: "Привет, я",
		about_p1: "Я веб‑разработчик, делаю современные и быстрые сайты. Помогаю малому и среднему бизнесу получать структурированные и надёжные веб‑решения.",
		about_p2: "Ценю чистый код, прозрачное общение и сроки. Каждый проект делаю внимательно — от идеи до деплоя.",
		skills_tag: "Тех стек",
		skills_title: "Навыки",
		skills_frontend_h: "Фронтенд",
		skills_frontend_p: "HTML5, CSS3, JavaScript, адаптивная вёрстка, оптимизация скорости",
		skills_tools_h: "Инструменты",
		skills_tools_p: "Git, Figma, Vite / Webpack, интеграция API",
		skills_additional_h: "Дополнительно",
		skills_additional_p: "Базовая настройка SEO, формы, деплой",
		about_sub: "Коротко о моём опыте и подходе",
		contact_title: "Связаться со мной",
		contact_sub: "Давайте сделаем крутой сайт 🙂",
		modal_tag: "Давайте обсудим",
		modal_title: "Заявка на проект",
		modal_sub: "Заполните детали — отвечу в течение 24 часов.",
		form_firstname_ph: "Имя",
		form_lastname_ph: "Фамилия",
		form_middlename_ph: "Отчество",
		form_phone_ph: "90 123 45 67",
		form_email_ph: "Почта (необязательно)",
		form_desc_ph: "Кратко о проекте (необязательно)",
		form_submit: "Отправить",
		sending: "Отправка...",
		err_send: "Ошибка отправки. Попробуйте ещё раз.",
		err_network: "Ошибка сети. Попробуйте ещё раз."
	}
};

const LANG_KEY = "site_lang";
let currentLang = "en";

function t(key) {
	return (I18N[currentLang] && I18N[currentLang][key]) || (I18N.en && I18N.en[key]) || key;
}

function applyLang(lang) {
	currentLang = (lang === "ru") ? "ru" : "en";

	// text nodes
	document.querySelectorAll("[data-i18n]").forEach((el) => {
		const key = el.dataset.i18n;
		if (I18N[currentLang][key] != null) el.textContent = I18N[currentLang][key];
	});

	// HTML nodes (for <span> etc.)
	document.querySelectorAll("[data-i18n-html]").forEach((el) => {
		const key = el.dataset.i18nHtml;
		if (I18N[currentLang][key] != null) el.innerHTML = I18N[currentLang][key];
	});

	// placeholders
	document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
		const key = el.dataset.i18nPlaceholder;
		if (I18N[currentLang][key] != null) el.setAttribute("placeholder", I18N[currentLang][key]);
	});

	document.documentElement.lang = currentLang;
}

function initLangDropdown(rootId, ids) {
	const root = document.getElementById(rootId);
	if (!root) return;

	const btn = document.getElementById(ids.btn);
	const menu = document.getElementById(ids.menu);
	const label = document.getElementById(ids.label);
	const flagWrap = document.getElementById(ids.flag);
	const code = document.getElementById(ids.code);

	const meta = {
		ru: { label: "Русский", code: "RU", iso: "ru" },
		en: { label: "English", code: "EN", iso: "us" } // change to 'gb' if you want 🇬🇧
	};

	function flagUrl(iso) { return `https://flagcdn.com/20x15/${iso}.png`; }

	function setOpen(open) {
		root.classList.toggle("is-open", open);
		btn.setAttribute("aria-expanded", open ? "true" : "false");
	}

	function setActive(lang) {
		const m = meta[lang] || meta.en;
		label.textContent = m.label;
		code.textContent = m.code;
		const img = flagWrap?.querySelector("img");
		if (img) img.src = flagUrl(m.iso);

		menu?.querySelectorAll(".lang__item").forEach((item) => {
			item.classList.toggle("is-active", item.dataset.lang === lang);
		});
	}

	btn.addEventListener("click", () => setOpen(!root.classList.contains("is-open")));

	menu.addEventListener("click", (e) => {
		const item = e.target.closest(".lang__item");
		if (!item) return;
		const lang = item.dataset.lang === "ru" ? "ru" : "en";
		localStorage.setItem(LANG_KEY, lang);
		applyLang(lang);
		setActive(lang);
		setOpen(false);
	});

	document.addEventListener("click", (e) => {
		if (!root.contains(e.target)) setOpen(false);
	});

	document.addEventListener("keydown", (e) => {
		if (e.key === "Escape") setOpen(false);
	});

	// initial
	setActive(currentLang);
}

// init language early
(function initLanguage() {
	const saved = localStorage.getItem(LANG_KEY);
	const browser = (navigator.language || "").toLowerCase().startsWith("ru") ? "ru" : "en";
	applyLang(saved || browser);
})();

const isMobile = window.innerWidth <= 768;

ScrollReveal().reveal("#hero__img", {
	duration: 1200,
	origin: isMobile ? 'bottom' : 'left',
	distance: isMobile ? '40px' : '60px',
});

ScrollReveal().reveal("#hero__description", {
	...scrollRevealOption,
	duration: 1200,
	origin: isMobile ? 'bottom' : 'right',
	distance: isMobile ? '40px' : '60px',
	delay: 150,
});

ScrollReveal().reveal(".service__card", {
	...scrollRevealOption,
	interval: 100,
});

ScrollReveal().reveal(".portfolio__card", {
	...scrollRevealOption,
	interval: 120,
});

ScrollReveal().reveal(".about__text, .skills__block", {
	...scrollRevealOption,
	interval: 150,
});

ScrollReveal().reveal(".cta__inner", {
	...scrollRevealOption,
});


/* =========================================
   BURGER MENU
   ========================================= */
const burgerBtn  = document.getElementById('burger');
const mobileNav  = document.getElementById('mobile__nav');

burgerBtn.addEventListener('click', () => {
	burgerBtn.classList.toggle('active');
	mobileNav.classList.toggle('open');
});

// Close mobile nav on link click
document.querySelectorAll('.mobile__nav__link').forEach(link => {
	link.addEventListener('click', () => {
		burgerBtn.classList.remove('active');
		mobileNav.classList.remove('open');
	});
});

// Close mobile nav on scroll down
window.addEventListener('scroll', () => {
	if (mobileNav.classList.contains('open')) {
		burgerBtn.classList.remove('active');
		mobileNav.classList.remove('open');
	}
}, { passive: true });

// Close mobile nav on click outside
document.addEventListener('click', (e) => {
	if (
		mobileNav.classList.contains('open') &&
		!mobileNav.contains(e.target) &&
		!burgerBtn.contains(e.target)
	) {
		burgerBtn.classList.remove('active');
		mobileNav.classList.remove('open');
	}
});


/* =========================================
   MODAL
   ========================================= */
let lastModalTrigger = null;

function openModal(modalId, triggerEl = null) {
	const modal = document.getElementById(modalId);
	if (!modal) return;

	lastModalTrigger = triggerEl;

	modal.classList.add('open');
	modal.setAttribute('aria-hidden', 'false');
	modal.removeAttribute('inert');

	document.body.style.overflow = 'hidden';

	// focus something inside the modal (close button is safe)
	setTimeout(() => {
		modal.querySelector('.modal__close')?.focus();
	}, 0);
}

function closeAllModals() {
	document.querySelectorAll('.modal.open').forEach(m => {
		m.classList.remove('open');
		m.setAttribute('aria-hidden', 'true');
		m.setAttribute('inert', '');
	});

	document.body.style.overflow = '';

	// return focus to the element that opened the modal
	if (lastModalTrigger && typeof lastModalTrigger.focus === 'function') {
		setTimeout(() => lastModalTrigger.focus(), 0);
	}
	lastModalTrigger = null;
}

// Open modal buttons
document.querySelectorAll('.open-modal').forEach(btn => {
	btn.addEventListener('click', () => {
		const modalId = btn.dataset.modal;
		openModal(modalId, btn);
	});
});

// Close modal — X button
document.querySelectorAll('.close-modal').forEach(btn => {
	btn.addEventListener('click', closeAllModals);
});

// Close modal — overlay click
document.querySelectorAll('.close-modal-overlay').forEach(overlay => {
	overlay.addEventListener('click', () => {
		// Check if any form field in the open modal has content
		const openModal = document.querySelector('.modal.open');
		if (openModal) {
			const fields = openModal.querySelectorAll('input, select, textarea');
			const hasContent = Array.from(fields).some(f => f.value.trim() !== '');
			if (hasContent) return; // block close if form has content
		}
		closeAllModals();
	});
});

// Close modal — Escape key
document.addEventListener('keydown', (e) => {
	if (e.key === 'Escape') {
		const openModal = document.querySelector('.modal.open');
		if (openModal) {
			const fields = openModal.querySelectorAll('input, select, textarea');
			const hasContent = Array.from(fields).some(f => f.value.trim() !== '');
			if (hasContent) return;
		}
		closeAllModals();
	}
});


/* =========================================
   FORM VALIDATION & SUBMIT
   ========================================= */
const orderForm   = document.getElementById('order__form');
const successToast = document.getElementById('success__toast');

function showToast() {
	successToast.classList.remove('hiding');
	successToast.classList.add('visible');

	// Start fade-out after 2.6s, fully gone at ~3s
	setTimeout(() => {
		successToast.classList.add('hiding');
		setTimeout(() => {
			successToast.classList.remove('visible', 'hiding');
		}, 400);
	}, 2600);
}

function validateField(field) {
	if (field.hasAttribute('required') && !field.value.trim()) {
		field.classList.add('invalid');
		return false;
	}
	if (field.type === 'email' && field.value.trim()) {
		const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRe.test(field.value.trim())) {
			field.classList.add('invalid');
			return false;
		}
	}
	if (field.type === 'tel' && field.hasAttribute('required')) {
		const telRe = /^[+\d\s\-()]{7,20}$/;
		if (!telRe.test(field.value.trim())) {
			field.classList.add('invalid');
			return false;
		}
	}
	field.classList.remove('invalid');
	return true;
}

// Live validation — remove error on input
orderForm.querySelectorAll('input, select, textarea').forEach(field => {
	field.addEventListener('input', () => {
		if (field.value.trim()) field.classList.remove('invalid');
	});
});

orderForm.addEventListener('submit', async (e) => {
	e.preventDefault();

	const requiredFields = orderForm.querySelectorAll('[required]');
	let valid = true;

	requiredFields.forEach(field => {
		if (!validateField(field)) valid = false;
	});

	if (!valid) return;

	// Забираем значения по твоим id из index.html
	const lastName = document.getElementById('client__lname').value.trim();
	const firstName = document.getElementById('client__fname').value.trim();
	const middleName = document.getElementById('client__mname').value.trim();
	const phone = document.getElementById('client__phone__full').value.trim();
	const email = document.getElementById('client__email').value.trim();
	const projectTypeEl = document.getElementById('project__type');
	const description = document.getElementById('project__description').value.trim();

	// Берём читаемый текст из выбранного option (чтобы в Телеграме было "Small Business", а не "small_business")
	const projectTypeLabel = projectTypeEl.options[projectTypeEl.selectedIndex]?.text?.trim() || '';
	const projectTypeValue = projectTypeEl.value.trim();

	// Payload: опциональные поля отправляем только если заполнены
	const payload = {
		firstName,
		phone,
		projectType: projectTypeLabel || projectTypeValue,
	};

	if (lastName) payload.lastName = lastName;
	if (middleName) payload.middleName = middleName;
	if (email) payload.email = email;
	if (description) payload.description = description;

	// UI: блокируем кнопку, чтобы не спамили
	const submitBtn = orderForm.querySelector('button[type="submit"]');
	const prevBtnText = submitBtn.textContent;
	submitBtn.disabled = true;
	submitBtn.textContent = t('sending');

	try {
		const res = await fetch('http://localhost:3000/api/order', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(payload),
		});

		const json = await res.json().catch(() => ({}));

		if (!res.ok || !json.ok) {
			// Если сервер вернул ошибку — подсветим/покажем
			alert(json.error || t('err_send'));
			return;
		}

		// Успех: закрыть модалку + toast (как у тебя было)
		closeAllModals();
		setTimeout(showToast, 200);
	} catch (err) {
		alert(t('err_network'));
	} finally {
		submitBtn.disabled = false;
		submitBtn.textContent = prevBtnText;
	}
});

// Reset form when modal closes
const modal = document.getElementById('modal__order__window');
const observer = new MutationObserver(() => {
	if (!modal.classList.contains('open')) {
		setTimeout(() => {
			orderForm.reset();
			orderForm.querySelectorAll('.invalid').forEach(f => f.classList.remove('invalid'));
			orderForm.hidden = false;
		}, 300);
	}
});
observer.observe(modal, { attributes: true, attributeFilter: ['class'] });


/* =========================================
   PORTFOLIO MOBILE SWIPE SNAP (assist)
   ========================================= */
(function () {
	const grid = document.querySelector('.portfolio__grid');
	if (!grid) return;

	const mq = window.matchMedia('(max-width: 768px)');
	let scrollTimer = null;

	function getCards() {
		return Array.from(grid.querySelectorAll('.portfolio__card'));
	}

	function snapToNearest() {
		const cards = getCards();
		if (!cards.length) return;

		const left = grid.scrollLeft;
		let best = cards[0];
		let bestDist = Infinity;

		for (const card of cards) {
			const dist = Math.abs(card.offsetLeft - left);
			if (dist < bestDist) {
				bestDist = dist;
				best = card;
			}
		}

		grid.scrollTo({ left: best.offsetLeft, behavior: 'smooth' });
	}

	function onScroll() {
		if (!mq.matches) return;
		clearTimeout(scrollTimer);
		scrollTimer = setTimeout(snapToNearest, 80);
	}

	// keep it light
	grid.addEventListener('scroll', onScroll, { passive: true });
})();


/* =========================================
   PHONE PICKER
   ========================================= */
(function () {
	// iso: ISO 3166-1 alpha-2 code for flagcdn.com SVG flags
	// placeholder: realistic local number format (without country code)
	const COUNTRIES = [
		{ code: '+1',   iso: 'us', name: 'USA / Canada',       placeholder: '201 555 0123' },
		{ code: '+7',   iso: 'ru', name: 'Russia',              placeholder: '912 345 67 89' },
		{ code: '+20',  iso: 'eg', name: 'Egypt',               placeholder: '100 123 4567' },
		{ code: '+27',  iso: 'za', name: 'South Africa',        placeholder: '71 234 5678' },
		{ code: '+30',  iso: 'gr', name: 'Greece',              placeholder: '694 123 4567' },
		{ code: '+31',  iso: 'nl', name: 'Netherlands',         placeholder: '6 12345678' },
		{ code: '+32',  iso: 'be', name: 'Belgium',             placeholder: '470 12 34 56' },
		{ code: '+33',  iso: 'fr', name: 'France',              placeholder: '6 12 34 56 78' },
		{ code: '+34',  iso: 'es', name: 'Spain',               placeholder: '612 345 678' },
		{ code: '+36',  iso: 'hu', name: 'Hungary',             placeholder: '20 123 4567' },
		{ code: '+39',  iso: 'it', name: 'Italy',               placeholder: '312 345 6789' },
		{ code: '+40',  iso: 'ro', name: 'Romania',             placeholder: '712 345 678' },
		{ code: '+41',  iso: 'ch', name: 'Switzerland',         placeholder: '78 123 45 67' },
		{ code: '+43',  iso: 'at', name: 'Austria',             placeholder: '664 123456' },
		{ code: '+44',  iso: 'gb', name: 'United Kingdom',      placeholder: '7911 123456' },
		{ code: '+45',  iso: 'dk', name: 'Denmark',             placeholder: '32 12 34 56' },
		{ code: '+46',  iso: 'se', name: 'Sweden',              placeholder: '70 123 45 67' },
		{ code: '+47',  iso: 'no', name: 'Norway',              placeholder: '406 12 345' },
		{ code: '+48',  iso: 'pl', name: 'Poland',              placeholder: '512 345 678' },
		{ code: '+49',  iso: 'de', name: 'Germany',             placeholder: '151 23456789' },
		{ code: '+51',  iso: 'pe', name: 'Peru',                placeholder: '912 345 678' },
		{ code: '+52',  iso: 'mx', name: 'Mexico',              placeholder: '222 123 4567' },
		{ code: '+54',  iso: 'ar', name: 'Argentina',           placeholder: '11 2345-6789' },
		{ code: '+55',  iso: 'br', name: 'Brazil',              placeholder: '11 91234-5678' },
		{ code: '+56',  iso: 'cl', name: 'Chile',               placeholder: '9 1234 5678' },
		{ code: '+57',  iso: 'co', name: 'Colombia',            placeholder: '321 234 5678' },
		{ code: '+58',  iso: 've', name: 'Venezuela',           placeholder: '412 123 4567' },
		{ code: '+60',  iso: 'my', name: 'Malaysia',            placeholder: '12-345 6789' },
		{ code: '+61',  iso: 'au', name: 'Australia',           placeholder: '412 345 678' },
		{ code: '+62',  iso: 'id', name: 'Indonesia',           placeholder: '812-3456-7890' },
		{ code: '+63',  iso: 'ph', name: 'Philippines',         placeholder: '912 345 6789' },
		{ code: '+64',  iso: 'nz', name: 'New Zealand',         placeholder: '21 123 4567' },
		{ code: '+65',  iso: 'sg', name: 'Singapore',           placeholder: '8123 4567' },
		{ code: '+66',  iso: 'th', name: 'Thailand',            placeholder: '81 234 5678' },
		{ code: '+81',  iso: 'jp', name: 'Japan',               placeholder: '90-1234-5678' },
		{ code: '+82',  iso: 'kr', name: 'South Korea',         placeholder: '10-1234-5678' },
		{ code: '+84',  iso: 'vn', name: 'Vietnam',             placeholder: '91 234 56 78' },
		{ code: '+86',  iso: 'cn', name: 'China',               placeholder: '131 2345 6789' },
		{ code: '+90',  iso: 'tr', name: 'Turkey',              placeholder: '532 123 45 67' },
		{ code: '+91',  iso: 'in', name: 'India',               placeholder: '98765 43210' },
		{ code: '+92',  iso: 'pk', name: 'Pakistan',            placeholder: '301 2345678' },
		{ code: '+93',  iso: 'af', name: 'Afghanistan',         placeholder: '70 123 4567' },
		{ code: '+94',  iso: 'lk', name: 'Sri Lanka',           placeholder: '71 234 5678' },
		{ code: '+95',  iso: 'mm', name: 'Myanmar',             placeholder: '9 212 345 678' },
		{ code: '+98',  iso: 'ir', name: 'Iran',                placeholder: '912 345 6789' },
		{ code: '+212', iso: 'ma', name: 'Morocco',             placeholder: '612-345678' },
		{ code: '+213', iso: 'dz', name: 'Algeria',             placeholder: '551 23 45 67' },
		{ code: '+216', iso: 'tn', name: 'Tunisia',             placeholder: '20 123 456' },
		{ code: '+218', iso: 'ly', name: 'Libya',               placeholder: '91-2345678' },
		{ code: '+220', iso: 'gm', name: 'Gambia',              placeholder: '301 2345' },
		{ code: '+221', iso: 'sn', name: 'Senegal',             placeholder: '70 123 45 67' },
		{ code: '+234', iso: 'ng', name: 'Nigeria',             placeholder: '802 123 4567' },
		{ code: '+254', iso: 'ke', name: 'Kenya',               placeholder: '712 345 678' },
		{ code: '+255', iso: 'tz', name: 'Tanzania',            placeholder: '612 345 678' },
		{ code: '+256', iso: 'ug', name: 'Uganda',              placeholder: '712 345 678' },
		{ code: '+260', iso: 'zm', name: 'Zambia',              placeholder: '955 123456' },
		{ code: '+263', iso: 'zw', name: 'Zimbabwe',            placeholder: '71 234 5678' },
		{ code: '+351', iso: 'pt', name: 'Portugal',            placeholder: '912 345 678' },
		{ code: '+352', iso: 'lu', name: 'Luxembourg',          placeholder: '628 123 456' },
		{ code: '+353', iso: 'ie', name: 'Ireland',             placeholder: '85 123 4567' },
		{ code: '+354', iso: 'is', name: 'Iceland',             placeholder: '611 1234' },
		{ code: '+355', iso: 'al', name: 'Albania',             placeholder: '66 212 3456' },
		{ code: '+356', iso: 'mt', name: 'Malta',               placeholder: '9696 1234' },
		{ code: '+357', iso: 'cy', name: 'Cyprus',              placeholder: '96 123456' },
		{ code: '+358', iso: 'fi', name: 'Finland',             placeholder: '41 234 5678' },
		{ code: '+359', iso: 'bg', name: 'Bulgaria',            placeholder: '87 123 4567' },
		{ code: '+370', iso: 'lt', name: 'Lithuania',           placeholder: '612 34567' },
		{ code: '+371', iso: 'lv', name: 'Latvia',              placeholder: '21 234 567' },
		{ code: '+372', iso: 'ee', name: 'Estonia',             placeholder: '5123 4567' },
		{ code: '+373', iso: 'md', name: 'Moldova',             placeholder: '621 23 456' },
		{ code: '+374', iso: 'am', name: 'Armenia',             placeholder: '77 123456' },
		{ code: '+375', iso: 'by', name: 'Belarus',             placeholder: '29 123-45-67' },
		{ code: '+376', iso: 'ad', name: 'Andorra',             placeholder: '312 345' },
		{ code: '+380', iso: 'ua', name: 'Ukraine',             placeholder: '50 123 45 67' },
		{ code: '+381', iso: 'rs', name: 'Serbia',              placeholder: '60 1234567' },
		{ code: '+382', iso: 'me', name: 'Montenegro',          placeholder: '67 622 901' },
		{ code: '+385', iso: 'hr', name: 'Croatia',             placeholder: '91 234 5678' },
		{ code: '+386', iso: 'si', name: 'Slovenia',            placeholder: '31 234 567' },
		{ code: '+387', iso: 'ba', name: 'Bosnia',              placeholder: '61 123 456' },
		{ code: '+389', iso: 'mk', name: 'North Macedonia',     placeholder: '72 345 678' },
		{ code: '+420', iso: 'cz', name: 'Czech Republic',      placeholder: '601 234 567' },
		{ code: '+421', iso: 'sk', name: 'Slovakia',            placeholder: '912 123 456' },
		{ code: '+423', iso: 'li', name: 'Liechtenstein',       placeholder: '660 1234' },
		{ code: '+501', iso: 'bz', name: 'Belize',              placeholder: '622-1234' },
		{ code: '+502', iso: 'gt', name: 'Guatemala',           placeholder: '5123 4567' },
		{ code: '+503', iso: 'sv', name: 'El Salvador',         placeholder: '7012 3456' },
		{ code: '+504', iso: 'hn', name: 'Honduras',            placeholder: '9123-4567' },
		{ code: '+505', iso: 'ni', name: 'Nicaragua',           placeholder: '8123 4567' },
		{ code: '+506', iso: 'cr', name: 'Costa Rica',          placeholder: '8312 3456' },
		{ code: '+507', iso: 'pa', name: 'Panama',              placeholder: '6123-4567' },
		{ code: '+591', iso: 'bo', name: 'Bolivia',             placeholder: '71234567' },
		{ code: '+593', iso: 'ec', name: 'Ecuador',             placeholder: '99 123 4567' },
		{ code: '+595', iso: 'py', name: 'Paraguay',            placeholder: '961 456789' },
		{ code: '+598', iso: 'uy', name: 'Uruguay',             placeholder: '94 231 234' },
		{ code: '+852', iso: 'hk', name: 'Hong Kong',           placeholder: '5123 4567' },
		{ code: '+853', iso: 'mo', name: 'Macau',               placeholder: '6612 3456' },
		{ code: '+855', iso: 'kh', name: 'Cambodia',            placeholder: '91 234 567' },
		{ code: '+856', iso: 'la', name: 'Laos',                placeholder: '20 23 123 456' },
		{ code: '+880', iso: 'bd', name: 'Bangladesh',          placeholder: '1812-345678' },
		{ code: '+886', iso: 'tw', name: 'Taiwan',              placeholder: '912 345 678' },
		{ code: '+960', iso: 'mv', name: 'Maldives',            placeholder: '771-2345' },
		{ code: '+961', iso: 'lb', name: 'Lebanon',             placeholder: '71 123 456' },
		{ code: '+962', iso: 'jo', name: 'Jordan',              placeholder: '79 123 4567' },
		{ code: '+963', iso: 'sy', name: 'Syria',               placeholder: '944 567 890' },
		{ code: '+964', iso: 'iq', name: 'Iraq',                placeholder: '791 234 5678' },
		{ code: '+965', iso: 'kw', name: 'Kuwait',              placeholder: '500 12345' },
		{ code: '+966', iso: 'sa', name: 'Saudi Arabia',        placeholder: '51 234 5678' },
		{ code: '+967', iso: 'ye', name: 'Yemen',               placeholder: '712 345 678' },
		{ code: '+968', iso: 'om', name: 'Oman',                placeholder: '9212 3456' },
		{ code: '+971', iso: 'ae', name: 'UAE',                 placeholder: '50 123 4567' },
		{ code: '+972', iso: 'il', name: 'Israel',              placeholder: '52-123-4567' },
		{ code: '+973', iso: 'bh', name: 'Bahrain',             placeholder: '3600 1234' },
		{ code: '+974', iso: 'qa', name: 'Qatar',               placeholder: '3312 3456' },
		{ code: '+975', iso: 'bt', name: 'Bhutan',              placeholder: '17 123 456' },
		{ code: '+976', iso: 'mn', name: 'Mongolia',            placeholder: '8812 3456' },
		{ code: '+977', iso: 'np', name: 'Nepal',               placeholder: '984-1234567' },
		{ code: '+992', iso: 'tj', name: 'Tajikistan',          placeholder: '917 12 3456' },
		{ code: '+993', iso: 'tm', name: 'Turkmenistan',        placeholder: '65 012345' },
		{ code: '+994', iso: 'az', name: 'Azerbaijan',          placeholder: '40 123 45 67' },
		{ code: '+995', iso: 'ge', name: 'Georgia',             placeholder: '555 12 34 56' },
		{ code: '+996', iso: 'kg', name: 'Kyrgyzstan',          placeholder: '700 123 456' },
		{ code: '+998', iso: 'uz', name: 'Uzbekistan',          placeholder: '90 123 45 67' },
	].sort((a, b) => parseInt(a.code) - parseInt(b.code));

	function flagUrl(iso) {
		return `https://flagcdn.com/20x15/${iso}.png`;
	}

	let selectedCountry = COUNTRIES.find(c => c.code === '+998') || COUNTRIES[0];

	const picker      = document.getElementById('phone__picker');
	const flagBtn     = document.getElementById('phone__flag__btn');
	const flagEl      = document.getElementById('phone__flag');
	const dialEl      = document.getElementById('phone__dial');
	const dropdown    = document.getElementById('phone__dropdown');
	const searchInput = document.getElementById('phone__search');
	const listEl      = document.getElementById('phone__list');
	const phoneInput  = document.getElementById('client__phone');
	const fullInput   = document.getElementById('client__phone__full');

	if (!picker) return;

	function setFlagBtn(country) {
		flagEl.innerHTML = `<img src="${flagUrl(country.iso)}" alt="${country.name}" width="20" height="15" style="border-radius:2px;display:block;">`;
		dialEl.textContent = country.code;
	}

	function updatePlaceholder(country) {
		phoneInput.placeholder = country.placeholder || '000 000 0000';
	}

	function renderList(filter = '') {
		const q = filter.toLowerCase().replace(/\s/g, '');
		const filtered = COUNTRIES.filter(c =>
			c.name.toLowerCase().includes(q) ||
			c.code.replace('+', '').includes(q) ||
			c.code.includes(q)
		);

		listEl.innerHTML = filtered.map(c => `
			<li role="option" data-code="${c.code}" class="${c.code === selectedCountry.code ? 'active' : ''}">
				<span class="item__flag"><img src="${flagUrl(c.iso)}" alt="${c.name}" width="20" height="15" style="border-radius:2px;display:block;"></span>
				<span class="item__name">${c.name}</span>
				<span class="item__code">${c.code}</span>
			</li>
		`).join('');

		listEl.querySelectorAll('li').forEach(li => {
			li.addEventListener('click', () => {
				const country = COUNTRIES.find(c => c.code === li.dataset.code);
				if (country) selectCountry(country);
			});
		});
	}

	function selectCountry(country) {
		selectedCountry = country;
		setFlagBtn(country);
		updatePlaceholder(country);
		closeDropdown();
		phoneInput.focus();
		updateFullPhone();
	}

	function updateFullPhone() {
		// keep only digits; send as +998901234567 (no spaces)
		const digits = phoneInput.value.replace(/[^\d]/g, '');
		fullInput.value = digits ? `${selectedCountry.code}${digits}` : '';
	}

	function openDropdown() {
		dropdown.classList.add('open');
		flagBtn.setAttribute('aria-expanded', 'true');
		searchInput.value = '';
		renderList();
		setTimeout(() => {
			searchInput.focus();
			const active = listEl.querySelector('.active');
			if (active) active.scrollIntoView({ block: 'nearest' });
		}, 50);
	}

	function closeDropdown() {
		dropdown.classList.remove('open');
		flagBtn.setAttribute('aria-expanded', 'false');
	}

	flagBtn.addEventListener('click', (e) => {
		e.stopPropagation();
		dropdown.classList.contains('open') ? closeDropdown() : openDropdown();
	});

	searchInput.addEventListener('input', () => renderList(searchInput.value));

	// Auto-detect country code while typing in phone input
	phoneInput.addEventListener('input', () => {
		updateFullPhone();
		const raw = phoneInput.value.trim();
		if (raw.startsWith('+')) {
			const match = COUNTRIES
				.filter(c => raw.startsWith(c.code))
				.sort((a, b) => b.code.length - a.code.length)[0];
			if (match && match.code !== selectedCountry.code) {
				selectedCountry = match;
				setFlagBtn(match);
				updatePlaceholder(match);
			}
		}
	});

	// Close on outside click
	document.addEventListener('click', (e) => {
		if (!picker.contains(e.target)) closeDropdown();
	});

	// Close on Escape
	document.addEventListener('keydown', (e) => {
		if (e.key === 'Escape' && dropdown.classList.contains('open')) {
			closeDropdown();
			flagBtn.focus();
		}
	});

	// Form submit: prepend country code to phone value
	const origForm = document.getElementById('order__form');
	phoneInput.addEventListener('change', updateFullPhone);

	origForm.addEventListener('submit', () => {
		updateFullPhone();
		if (phoneInput.value.trim() && !phoneInput.value.startsWith('+')) {
			phoneInput.dataset.original = phoneInput.value;
			phoneInput.value = selectedCountry.code + ' ' + phoneInput.value.trim();
		}
	}, true);

	origForm.addEventListener('submit', () => {
		setTimeout(() => {
			if (phoneInput.dataset.original !== undefined) {
				phoneInput.value = phoneInput.dataset.original;
				delete phoneInput.dataset.original;
			}
		}, 0);
	});

	// Sync invalid class to picker wrapper
	const pickerObserver = new MutationObserver(() => {
		picker.classList.toggle('invalid', phoneInput.classList.contains('invalid'));
	});
	pickerObserver.observe(phoneInput, { attributes: true, attributeFilter: ['class'] });

	// Init
	setFlagBtn(selectedCountry);
	updatePlaceholder(selectedCountry);
	renderList();
})();


/* =========================================
   Init language dropdowns (desktop + mobile)
   ========================================= */
document.addEventListener("DOMContentLoaded", () => {
	initLangDropdown("lang", {
		btn: "langBtn",
		menu: "langMenu",
		label: "langLabel",
		flag: "langFlag",
		code: "langCode",
	});

	initLangDropdown("langMobile", {
		btn: "langBtnMobile",
		menu: "langMenuMobile",
		label: "langLabelMobile",
		flag: "langFlagMobile",
		code: "langCodeMobile",
	});
});

/* =========================================
   Custom cursor
   ========================================= */
(function () {
	const cursor = document.getElementById('cursor');
	if (!cursor) return;

	const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
	if (!canHover) return;

	window.addEventListener('mousemove', (e) => {
		cursor.style.left = e.clientX + 'px';
		cursor.style.top = e.clientY + 'px';
	}, { passive: true });

	function setCursorColor(target) {
		const color = target?.closest?.('[data-cursor-color]')?.dataset?.cursorColor;
		if (color) cursor.style.setProperty('--cursor-color', color);
		else cursor.style.removeProperty('--cursor-color');
	}

	function isInteractive(el) {
		return !!el.closest('a, button, input, textarea, select, label, [role="button"], .open-modal');
	}

	document.addEventListener('mouseover', (e) => {
		cursor.classList.toggle('is-hover', isInteractive(e.target));
		setCursorColor(e.target);
	});

	document.addEventListener('mouseout', (e) => {
		cursor.classList.toggle('is-hover', isInteractive(e.relatedTarget || document.body));
		setCursorColor(e.relatedTarget || document.body);
	});
})();
