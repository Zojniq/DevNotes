# DevNotes 🚀

> Thoughts, hacks, and technical essays. Written by a developer, for developers.

**DevNotes** — це мінімалістичний вебзастосунок для ведення технічного блогу, створений з акцентом на чисту інженерну естетику («hacker-minimalist») та високу продуктивність. Інтерфейс виконаний у монохромній темній темі з теплими акцентними деталями.

---

## ✨ Особливості (Features)

- **Повноцінний CRUD**: створення, перегляд списку, редагування та видалення технічних нотаток.
- **Мінімалістичний інтерфейс**: темна тема за замовчуванням, продумана типографіка та відсутність зайвого візуального шуму.
- **Модульна структура шаблонів**: розбиття інтерфейсу на EJS-partials (`header`, `footer`) для легкого перевикористання.
- **Розподілена архітектура CSS**:
  - `layout.css` — глобальний каркас, CSS-змінні, шапка, контейнер і футер.
  - `content.css` — стилі для списку есе, полів форми та сторінки About.
- **Динамічний роутинг**: параметризовані URL-адреси (`/edit/:id`, `/delete/:id`) для роботи з конкретними записами.

---

## 🛠 Стек технологій (Tech Stack)

- **Backend**: [Node.js](https://nodejs.org/), [Express.js](https://expressjs.com/)
- **Шаблонізатор**: [EJS (Embedded JavaScript templates)](https://ejs.co/)
- **Парсинг форм**: [body-parser](https://www.npmjs.com/package/body-parser)
- **Стилізація**: Custom CSS3 (Flexbox, CSS Variables), [Font Awesome](https://fontawesome.com/) для іконок

---

## 📁 Структура проєкту (Project Structure)

```text
FinalProject_EJS/
├── public/
│   ├── images/         # Статичні зображення та логотип
│   └── styles/
│       ├── layout.css  # Скелет сайту, глобальні змінні, header/footer
│       └── content.css # Стилі карток статей, форм та сторінок
├── views/
│   ├── partials/
│   │   ├── header.ejs  # Верхня панель навігації та підключення стилів
│   │   └── footer.ejs  # Нижній колонтитул
│   ├── main.ejs        # Головна сторінка зі списком статей
│   ├── newpost.ejs     # Форма для створення та редагування статті
│   └── about.ejs       # Інформація про автора та стек
├── index.js            # Вхідна точка сервера Express та обробники роутів
├── package.json        # Залежності та конфігурація проєкту
└── .gitignore          # Ігнорування node_modules та системних файлів
