document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    const ul = document.querySelector('ul'); // Получаем элемент ul
    const initialHeaderStyle = {
        backgroundColor: header.style.backgroundColor,
        boxShadow: header.style.boxShadow,
        top: header.style.top
    };
    const initialUlStyle = {
        backgroundColor: ul.style.backgroundColor // Сохраняем исходный цвет ul
    };

    window.addEventListener('scroll', function() {
        if (window.scrollY > 0) {
            // Изменение стилей хедера и ul при прокрутке вниз
            header.style.backgroundColor = '#181736'; // Цвет фона хедера
            ul.style.backgroundColor = '#181736'; // Цвет фона ul
            header.style.boxShadow = '0 4px 10px rgba(255, 255, 255, 0.6)'; // Тень
            header.style.top = '0'; // Прилипание к верху
        } else {
            // Возвращение исходных стилей при прокрутке вверх
            header.style.backgroundColor = initialHeaderStyle.backgroundColor;
            ul.style.backgroundColor = initialUlStyle.backgroundColor; // Возвращаем исходный цвет ul
            header.style.boxShadow = initialHeaderStyle.boxShadow;
            header.style.top = initialHeaderStyle.top;
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    // Показываем/скрываем кнопку при прокрутке
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) { // Показываем кнопку, если прокрутка больше 300px
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }
    });

    // Плавная прокрутка вверх при клике
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Плавная прокрутка
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Находим все элементы с data-target
    const menuItems = document.querySelectorAll('li[data-target]');

    // Добавляем обработчик клика для каждого элемента
    menuItems.forEach(function(item) {
        item.addEventListener('click', function() {
            const targetId = item.getAttribute('data-target'); // Получаем значение data-target
            const targetElement = document.querySelector(targetId); // Находим целевой элемент

            if (targetElement) {
                // Плавная прокрутка к целевому элементу
                targetElement.scrollIntoView({
                    behavior: 'smooth', // Плавная прокрутка
                    block: 'start'      // Прокрутка к началу элемента
                });
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Находим все элементы с data-target
    const menuItems = document.querySelectorAll('li[data-target]');

    // Добавляем обработчик клика для каждого элемента
    menuItems.forEach(function(item) {
        item.addEventListener('click', function() {
            const targetId = item.getAttribute('data-target'); // Получаем значение data-target
            const targetElement = document.querySelector(targetId); // Находим целевой элемент

            if (targetElement) {
                // Плавная прокрутка к целевому элементу
                targetElement.scrollIntoView({
                    behavior: 'smooth', // Плавная прокрутка
                    block: 'start'      // Прокрутка к началу элемента
                });
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const aboutSection = document.getElementById('about'); // Получаем раздел #about
    const aboutMenuItem = document.querySelector('li[data-target=".about"]'); // Получаем пункт меню "About"

    window.addEventListener('scroll', function() {
        // Получаем координаты раздела #about
        const aboutSectionTop = aboutSection.offsetTop;
        const aboutSectionBottom = aboutSectionTop + aboutSection.offsetHeight;

        // Получаем текущую позицию прокрутки
        const scrollPosition = window.scrollY;

        // Проверяем, находится ли пользователь в разделе #about
        if (scrollPosition >= aboutSectionTop && scrollPosition < aboutSectionBottom) {
            aboutMenuItem.classList.add('active'); // Добавляем класс active
        } else {
            aboutMenuItem.classList.remove('active'); // Убираем класс active
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Находим все элементы с data-target
    const menuItems = document.querySelectorAll('li[data-target]');

    // Добавляем обработчик клика для каждого элемента
    menuItems.forEach(function(item) {
        item.addEventListener('click', function() {
            const targetSelector = item.getAttribute('data-target'); // Получаем значение data-target
            const targetElement = document.querySelector(targetSelector); // Находим целевой элемент

            if (targetElement) {
                // Плавная прокрутка к целевому элементу
                targetElement.scrollIntoView({
                    behavior: 'smooth', // Плавная прокрутка
                    block: 'start'      // Прокрутка к началу элемента
                });
            }
        });
    });

    // Находим раздел с классом services
    const servicesSection = document.querySelector('.services');

    // Отслеживаем прокрутку страницы
    window.addEventListener('scroll', function() {
        // Получаем координаты раздела services
        const servicesSectionTop = servicesSection.offsetTop;
        const servicesSectionBottom = servicesSectionTop + servicesSection.offsetHeight;

        // Получаем текущую позицию прокрутки
        const scrollPosition = window.scrollY;

        // Проверяем, находится ли пользователь в разделе services
        if (scrollPosition >= servicesSectionTop && scrollPosition < servicesSectionBottom) {
            // Находим пункт меню "Services"
            const servicesMenuItem = document.querySelector('li[data-target=".services"]');

            // Добавляем класс active к пункту меню "Services"
            servicesMenuItem.classList.add('active');
        } else {
            // Находим пункт меню "Services"
            const servicesMenuItem = document.querySelector('li[data-target=".services"]');

            // Убираем класс active у пункта меню "Services"
            servicesMenuItem.classList.remove('active');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Находим все элементы с data-target
    const menuItems = document.querySelectorAll('li[data-target]');

    // Добавляем обработчик клика для каждого элемента
    menuItems.forEach(function(item) {
        item.addEventListener('click', function() {
            const targetSelector = item.getAttribute('data-target'); // Получаем значение data-target
            const targetElement = document.querySelector(targetSelector); // Находим целевой элемент

            if (targetElement) {
                // Плавная прокрутка к целевому элементу
                targetElement.scrollIntoView({
                    behavior: 'smooth', // Плавная прокрутка
                    block: 'start'      // Прокрутка к началу элемента
                });
            }
        });
    });

    // Находим раздел с классом portfolio
    const portfolioSection = document.querySelector('.portfolio');

    // Отслеживаем прокрутку страницы
    window.addEventListener('scroll', function() {
        // Получаем координаты раздела portfolio
        const portfolioSectionTop = portfolioSection.offsetTop;
        const portfolioSectionBottom = portfolioSectionTop + portfolioSection.offsetHeight;

        // Получаем текущую позицию прокрутки
        const scrollPosition = window.scrollY;

        // Проверяем, находится ли пользователь в разделе portfolio
        if (scrollPosition >= portfolioSectionTop && scrollPosition < portfolioSectionBottom) {
            // Находим пункт меню "Portfolio"
            const portfolioMenuItem = document.querySelector('li[data-target=".portfolio"]');

            // Добавляем класс active к пункту меню "Portfolio"
            portfolioMenuItem.classList.add('active');
        } else {
            // Находим пункт меню "Portfolio"
            const portfolioMenuItem = document.querySelector('li[data-target=".portfolio"]');

            // Убираем класс active у пункта меню "Portfolio"
            portfolioMenuItem.classList.remove('active');
        }
    });
});

const portfolioSection = document.querySelector('.skils');

// Отслеживаем прокрутку страницы
window.addEventListener('scroll', function() {
    // Получаем координаты раздела portfolio
    const portfolioSectionTop = portfolioSection.offsetTop;
    const portfolioSectionBottom = portfolioSectionTop + portfolioSection.offsetHeight;

    // Получаем текущую позицию прокрутки
    const scrollPosition = window.scrollY;

    // Проверяем, находится ли пользователь в разделе portfolio
    if (scrollPosition >= portfolioSectionTop && scrollPosition < portfolioSectionBottom) {
        // Находим пункт меню "Portfolio"
        const portfolioMenuItem = document.querySelector('li[data-target=".skils"]');

        // Добавляем класс active к пункту меню "Portfolio"
        portfolioMenuItem.classList.add('active');
    } else {
        // Находим пункт меню "Portfolio"
        const portfolioMenuItem = document.querySelector('li[data-target=".skils"]');

        // Убираем класс active у пункта меню "Portfolio"
        portfolioMenuItem.classList.remove('active');
    }
});




document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.image-galary2 .card-1');
    const indicators = document.querySelectorAll('.image-galary2 .indicator');
    const prevBtn = document.querySelector('.image-galary2 .prev-btn');
    const nextBtn = document.querySelector('.image-galary2 .next-btn');

    let currentIndex = 0;

    function showCard(index) {
        // Скрываем все карточки
        cards.forEach(card => card.classList.remove('active'));
        // Показываем текущую карточку
        cards[index].classList.add('active');

        // Обновляем индикаторы
        indicators.forEach((indicator, i) => {
            indicator.classList.toggle('active', i === index);
        });
    }

    // Кнопка "Назад"
    prevBtn.addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
        showCard(currentIndex);
    });

    // Кнопка "Вперед"
    nextBtn.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % cards.length;
        showCard(currentIndex);
    });

    // Клик по индикаторам
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', function() {
            currentIndex = index;
            showCard(currentIndex);
        });
    });

    // Показываем первую карточку при загрузке
    showCard(currentIndex);
});

document.addEventListener('DOMContentLoaded', function() {
    const contactLink = document.querySelector('li[data-target=".contact"]');
    const contactSection = document.querySelector('.contact');
  
    window.addEventListener('scroll', function() {
      const contactSectionTop = contactSection.offsetTop;
      const contactSectionBottom = contactSectionTop + contactSection.offsetHeight;
      const scrollPosition = window.scrollY;
  
      if (scrollPosition >= contactSectionTop && scrollPosition < contactSectionBottom) {
        contactLink.classList.add('active');
      } else {
        contactLink.classList.remove('active');
      }
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");
  
    const observerOptions = {
      threshold: 0.2, // 20% видимой части карточки
    };
  
    const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // Оптимизация: прекращаем наблюдение
        }
      });
    };
  
    const observer = new IntersectionObserver(observerCallback, observerOptions);
  
    cards.forEach(card => observer.observe(card));
  });
  

  document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.getElementById("menu-button");
    const sidebar = document.getElementById("sidebar");
  
    // Открытие и закрытие меню
    menuButton.addEventListener("click", () => {
      sidebar.classList.toggle("open");
    });
  
    // Плавная прокрутка до секции
    const links = sidebar.querySelectorAll("li[data-target]");
    links.forEach(link => {
      link.addEventListener("click", (e) => {
        const target = document.querySelector(e.target.getAttribute("data-target"));
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
          sidebar.classList.remove("open"); // Закрыть меню после клика
        }
      });
    });
  });
  