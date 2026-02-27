/* =========================================
   PORTFOLIO PROJECT MODALS
   ========================================= */

const PORTFOLIO_PROJECTS = [
  {
    id: 'fleet-management',
    title: 'Fleet Management System',
    titleRu: 'Система управления автопарком',
    tag: 'Web App',
    description: 'Full-featured fleet management system for tracking vehicles, drivers, income, expenses, and generating financial reports.',
    descriptionRu: 'Полноценная система управления автопарком для учёта автомобилей, водителей, доходов, расходов и формирования финансовой отчётности.',
    what_done: [
      'Dashboard with financial dynamics chart (6/12/24 month toggle)',
      'Vehicle fleet management with filtering by status and type',
      'Driver directory with full personal info and work details',
      'Income and expense tracking with date-range filtering',
      'Reports and profitability analytics with ROI per vehicle',
      'DOCX export for all sections',
      'All data persisted in localStorage (no server needed)',
    ],
    what_doneRu: [
      'Дашборд с графиком финансовой динамики (переключение 6/12/24 месяца)',
      'Управление автопарком с фильтрацией по статусу и типу',
      'Справочник водителей с полными персональными данными',
      'Учёт доходов и расходов с фильтрацией по датам',
      'Отчёты и аналитика рентабельности с расчётом ROI по авто',
      'Экспорт в формат .doc для всех разделов',
      'Хранение данных в localStorage (работает без сервера)',
    ],
    tech: ['HTML5', 'CSS3', 'Vanilla JS', 'Chart.js', 'localStorage', 'DOCX Export'],
    thumb: '--1',
    images: [
      'assets/img/portfolio-img/fleet-management/fleet_management_1.webp',
      'assets/img/portfolio-img/fleet-management/fleet_management_2.webp',
      'assets/img/portfolio-img/fleet-management/fleet_management_3.webp',
      'assets/img/portfolio-img/fleet-management/fleet_management_4.webp',
    ],
  },
  {
    id: 'crm-clinic',
    title: 'Clinic CRM',
    titleRu: 'CRM-система для клиники',
    tag: 'CRM',
    description: 'Patient and appointment management CRM for a medical clinic, with authentication, patient records, and visit history.',
    descriptionRu: 'CRM-система для управления пациентами и записями в медицинской клинике: авторизация, карточки пациентов и история приёмов.',
    what_done: [
      'Login / authentication screen',
      'Patient directory with search and filtering',
      'Appointment scheduling and visit history',
      'Patient profile cards with medical notes',
      'Statistics overview on the dashboard',
      'Demo data seeding for quick preview',
    ],
    what_doneRu: [
      'Экран входа и авторизации',
      'Справочник пациентов с поиском и фильтрацией',
      'Запись на приём и история посещений',
      'Карточки пациентов с медицинскими заметками',
      'Сводная статистика на дашборде',
      'Автоматическая генерация тестовых данных',
    ],
    tech: ['HTML5', 'CSS3', 'Vanilla JS', 'localStorage'],
    thumb: '--2',
    images: [
      'assets/img/portfolio-img/crm-clinic/crm_clinic_1.png',
      'assets/img/portfolio-img/crm-clinic/crm_clinic_2.png',
      'assets/img/portfolio-img/crm-clinic/crm_clinic_3.png',
      'assets/img/portfolio-img/crm-clinic/crm_clinic_4.png',
    ],
  },
  {
    id: 'pharma-erp',
    title: 'Pharma ERP',
    titleRu: 'ERP-система для фармацевтики',
    tag: 'ERP',
    description: 'End-to-end ERP system for a pharmaceutical warehouse: purchase orders, receiving, inventory (FEFO), order picking, delivery to pharmacies, and reporting.',
    descriptionRu: 'Полноциклическая ERP-система для фармацевтического склада: закупки, приёмка, склад (FEFO), комплектация, доставка в аптеки и отчётность.',
    what_done: [
      'Purchase order management',
      'Goods receiving and quality control',
      'Inventory tracking with FEFO (First Expired, First Out) logic',
      'Order picking and shipping to pharmacies',
      'Delivery tracking module',
      'Financial and inventory reports',
      'Multi-page SPA architecture with sidebar navigation',
    ],
    what_doneRu: [
      'Управление заказами на закупку',
      'Приёмка товара и контроль качества',
      'Учёт склада по принципу FEFO (первым истекает — первым уходит)',
      'Комплектация и отгрузка заказов в аптеки',
      'Модуль отслеживания доставок',
      'Финансовые отчёты и отчёты по складу',
      'Многостраничная SPA-архитектура с навигацией через sidebar',
    ],
    tech: ['HTML5', 'CSS3', 'Vanilla JS', 'localStorage', 'SPA'],
    thumb: '--3',
    images: [
      'assets/img/portfolio-img/pharma-erp/pharma_erp_1.png',
      'assets/img/portfolio-img/pharma-erp/pharma_erp_2.png',
      'assets/img/portfolio-img/pharma-erp/pharma_erp_3.png',
      'assets/img/portfolio-img/pharma-erp/pharma_erp_4.png',
    ],
  },
  {
    id: 'school-system',
    title: 'School ERP',
    titleRu: 'ERP-система для школы',
    tag: 'ERP',
    description: 'Role-based ERP system for educational institutions with authentication, student and staff management, attendance, and grade tracking.',
    descriptionRu: 'ERP-система с ролевым доступом для учебных заведений: авторизация, управление учениками и сотрудниками, посещаемость и успеваемость.',
    what_done: [
      'Login system with role-based access control (admin, teacher, student)',
      'Student directory with profiles and academic records',
      'Staff and teacher management',
      'Attendance tracking module',
      'Grade and assessment management',
      'Clean dashboard with key metrics',
      'Remixicon icon set for polished UI',
    ],
    what_doneRu: [
      'Система входа с ролевым доступом (администратор, учитель, ученик)',
      'Справочник учеников с профилями и успеваемостью',
      'Управление сотрудниками и преподавателями',
      'Модуль учёта посещаемости',
      'Управление оценками и аттестациями',
      'Дашборд с ключевыми метриками',
      'Иконки Remixicon для качественного интерфейса',
    ],
    tech: ['HTML5', 'CSS3', 'Vanilla JS', 'localStorage', 'Remixicon'],
    thumb: '--4',
    images: [
      'assets/img/portfolio-img/school-erp/school_system_1.png',
      'assets/img/portfolio-img/school-erp/school_system_2.png',
      'assets/img/portfolio-img/school-erp/school_system_3.png',
      'assets/img/portfolio-img/school-erp/school_system_4.png',
    ],
  },
  {
    id: 'goods-shop',
    title: 'Mini ERP — Retail Store',
    titleRu: 'Mini ERP — Розничный магазин',
    tag: 'ERP',
    description: 'Compact ERP system for a small retail store: cashier POS, warehouse management with expiry tracking, and a business dashboard.',
    descriptionRu: 'Компактная ERP-система для небольшого розничного магазина: касса (POS), управление складом с контролем сроков годности и дашборд.',
    what_done: [
      'POS cashier interface for processing sales',
      'Warehouse module with product categories and stock levels',
      'Expiry date tracking with per-category thresholds',
      'Dashboard with key financial and stock indicators',
      'Operations log for all cash transactions',
      'Full localStorage persistence',
    ],
    what_doneRu: [
      'Кассовый интерфейс POS для проведения продаж',
      'Складской модуль с категориями и остатками товаров',
      'Контроль сроков годности с порогами по категориям',
      'Дашборд с ключевыми финансовыми и складскими показателями',
      'Журнал всех кассовых операций',
      'Полное сохранение данных в localStorage',
    ],
    tech: ['HTML5', 'CSS3', 'Vanilla JS', 'localStorage'],
    thumb: '--5',
    images: [
      'assets/img/portfolio-img/goods-shop-erp/goods_shop_erp_1.png',
      'assets/img/portfolio-img/goods-shop-erp/goods_shop_erp_2.png',
      'assets/img/portfolio-img/goods-shop-erp/goods_shop_erp_3.png',
      'assets/img/portfolio-img/goods-shop-erp/goods_shop_erp_4.png',
    ],
  },
  {
    id: 'clothes-shop',
    title: 'VESTO — Online Clothes Store',
    titleRu: 'VESTO — Интернет-магазин одежды',
    tag: 'E-Commerce',
    description: 'Full-featured online clothing store with a product catalog, filters, cart, favorites, and a checkout flow.',
    descriptionRu: 'Полноценный интернет-магазин одежды с каталогом товаров, фильтрацией, корзиной, избранным и оформлением заказа.',
    what_done: [
      'Product catalog with category, gender, size and price filters',
      'Sorting by price, rating and novelty',
      'Product detail modal with image gallery, color & size picker',
      'Cart with quantity management and total calculation',
      'Favorites (wishlist) with localStorage persistence',
      'Multi-step checkout flow with card / cash payment',
      'Customer reviews with star rating system',
      'Search across product titles and categories',
      'Responsive layout built with Webpack',
    ],
    what_doneRu: [
      'Каталог товаров с фильтрацией по категории, полу, размеру и цене',
      'Сортировка по цене, рейтингу и новизне',
      'Модальное окно товара с галереей, выбором цвета и размера',
      'Корзина с управлением количеством и итоговой суммой',
      'Избранное с сохранением в localStorage',
      'Многошаговое оформление заказа (карта / наличные)',
      'Отзывы покупателей с системой звёздного рейтинга',
      'Поиск по названиям и категориям товаров',
      'Адаптивная вёрстка, сборка через Webpack',
    ],
    tech: ['HTML5', 'CSS3', 'Vanilla JS', 'Webpack', 'localStorage'],
    thumb: '--6',
    images: [
      'assets/img/portfolio-img/clothes-shop/clothes_shop_1.png',
      'assets/img/portfolio-img/clothes-shop/clothes_shop_2.png',
      'assets/img/portfolio-img/clothes-shop/clothes_shop_3.png',
      'assets/img/portfolio-img/clothes-shop/clothes_shop_4.png',
    ],
  },
];

/* =========================================
   BUILD & INJECT MODAL HTML
   ========================================= */

function buildProjectModals() {
  const container = document.createElement('div');
  container.id = 'portfolio-modals-container';

  PORTFOLIO_PROJECTS.forEach(proj => {
    const modal = document.createElement('div');
    modal.className = 'modal pmodal';
    modal.id = `pmodal-${proj.id}`;
    modal.setAttribute('aria-hidden', 'true');
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');

    modal.innerHTML = `
      <div class="modal__overlay pmodal__overlay" data-pmodal-close></div>
      <div class="modal__content pmodal__content">
        <button class="modal__close pmodal__close" data-pmodal-close aria-label="Close">
          <i class="ri-close-line"></i>
        </button>

        <div class="pmodal__header">
          <span class="pmodal__tag">${proj.tag}</span>
          <h2 class="pmodal__title" data-en="${proj.title}" data-ru="${proj.titleRu}">${proj.title}</h2>
          <p class="pmodal__desc" data-en="${proj.description}" data-ru="${proj.descriptionRu}">${proj.description}</p>
        </div>

        <!-- Gallery -->
        <div class="pmodal__gallery">
          <div class="pmodal__gallery-main">
            <img src="${proj.images[0]}" alt="${proj.title} screenshot" class="pmodal__main-img" data-index="0" />
            <div class="pmodal__fullscreen-hint"><i class="ri-fullscreen-line"></i></div>
          </div>
          <div class="pmodal__gallery-thumbs">
            ${proj.images.map((img, i) => `
              <div class="pmodal__thumb ${i === 0 ? 'active' : ''}" data-index="${i}">
                <img src="${img}" alt="Screenshot ${i + 1}" />
              </div>
            `).join('')}
          </div>
        </div>

        <!-- What was done -->
        <div class="pmodal__section">
          <h4 class="pmodal__section-title" data-en="What was done" data-ru="Что было сделано">What was done</h4>
          <ul class="pmodal__list">
            ${proj.what_done.map((item, i) => `
              <li data-en="${item}" data-ru="${proj.what_doneRu[i]}">${item}</li>
            `).join('')}
          </ul>
        </div>

        <!-- Tech stack -->
        <div class="pmodal__section">
          <h4 class="pmodal__section-title" data-en="Technologies used" data-ru="Использованные технологии">Technologies used</h4>
          <div class="pmodal__tech-tags">
            ${proj.tech.map(t => `<span class="tech__tag pmodal__tech">${t}</span>`).join('')}
          </div>
        </div>
      </div>
    `;

    container.appendChild(modal);
  });

  // Fullscreen lightbox
  const lightbox = document.createElement('div');
  lightbox.id = 'pmodal-lightbox';
  lightbox.className = 'pmodal-lightbox';
  lightbox.innerHTML = `
    <div class="pmodal-lightbox__overlay" id="pmodal-lightbox-close"></div>
    <div class="pmodal-lightbox__inner">
      <button class="pmodal-lightbox__close" id="pmodal-lightbox-close-btn" aria-label="Close fullscreen">
        <i class="ri-close-line"></i>
      </button>
      <img src="" alt="Fullscreen view" id="pmodal-lightbox-img" />
    </div>
  `;
  container.appendChild(lightbox);

  document.body.appendChild(container);
}

/* =========================================
   GALLERY LOGIC
   ========================================= */

function initGallery(modal) {
  const mainImg = modal.querySelector('.pmodal__main-img');
  const thumbs  = modal.querySelectorAll('.pmodal__thumb');
  const project = PORTFOLIO_PROJECTS.find(p => `pmodal-${p.id}` === modal.id);
  if (!project) return;

  thumbs.forEach(thumb => {
    thumb.addEventListener('click', () => {
      const idx = parseInt(thumb.dataset.index, 10);
      mainImg.src = project.images[idx];
      mainImg.dataset.index = idx;
      thumbs.forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
    });
  });

  // Open fullscreen
  const mainWrapper = modal.querySelector('.pmodal__gallery-main');
  mainWrapper.addEventListener('click', () => {
    const idx  = parseInt(mainImg.dataset.index, 10);
    const src  = project.images[idx];
    const lb   = document.getElementById('pmodal-lightbox');
    const lbImg = document.getElementById('pmodal-lightbox-img');
    lbImg.src  = src;
    lb.classList.add('open');
    document.body.classList.add('lightbox-open');
  });
}

/* =========================================
   OPEN / CLOSE PORTFOLIO MODALS
   ========================================= */

function openProjectModal(projectId) {
  const modal = document.getElementById(`pmodal-${projectId}`);
  if (!modal) return;
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
  modal.querySelector('.pmodal__close')?.focus();
}

function closeProjectModal(modal) {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
}

function closeAllProjectModals() {
  document.querySelectorAll('.pmodal.open').forEach(m => closeProjectModal(m));
}

function closeLightbox() {
  const lb = document.getElementById('pmodal-lightbox');
  lb.classList.remove('open');
  document.body.classList.remove('lightbox-open');
}

/* =========================================
   BIND PORTFOLIO CARDS → MODALS
   ========================================= */

function bindPortfolioCards() {
  const cards = document.querySelectorAll('.portfolio__card');
  const ids   = PORTFOLIO_PROJECTS.map(p => p.id);

  cards.forEach((card, i) => {
    if (i >= ids.length) return;
    card.style.cursor = 'pointer';
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `View project: ${PORTFOLIO_PROJECTS[i].title}`);

    const open = () => openProjectModal(ids[i]);
    card.addEventListener('click', open);
    card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); } });
  });
}

/* =========================================
   GLOBAL EVENT LISTENERS
   ========================================= */

function bindModalEvents() {
  // Close via [data-pmodal-close]
  document.addEventListener('click', e => {
    const trigger = e.target.closest('[data-pmodal-close]');
    if (trigger) {
      const modal = trigger.closest('.pmodal');
      if (modal) closeProjectModal(modal);
    }
  });

  // ESC key
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      if (document.getElementById('pmodal-lightbox')?.classList.contains('open')) {
        closeLightbox();
        return;
      }
      closeAllProjectModals();
    }
  });

  // Lightbox close
  document.getElementById('pmodal-lightbox-close')?.addEventListener('click', closeLightbox);
  document.getElementById('pmodal-lightbox-close-btn')?.addEventListener('click', closeLightbox);

  // Init gallery for each modal
  document.querySelectorAll('.pmodal').forEach(modal => initGallery(modal));
}

/* =========================================
   i18n SYNC — update modal text when lang changes
   ========================================= */

function syncModalLang(lang) {
  document.querySelectorAll('.pmodal [data-en][data-ru]').forEach(el => {
    el.textContent = lang === 'ru' ? el.dataset.ru : el.dataset.en;
  });
}

// Hook into existing i18n system — watch for lang changes
(function watchLang() {
  const observer = new MutationObserver(() => {
    const lang = document.documentElement.lang || 'en';
    syncModalLang(lang);
  });
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
})();

/* =========================================
   INIT
   ========================================= */

document.addEventListener('DOMContentLoaded', () => {
  buildProjectModals();
  bindPortfolioCards();
  bindModalEvents();
});
