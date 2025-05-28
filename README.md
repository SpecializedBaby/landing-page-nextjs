# Flat Roof Specialist Landing Page (Next.js)

This project is a multi-language (English/Dutch) landing page for a flat roof specialist business, built with Next.js and styled with a modern, Tesla-inspired aesthetic. It features internationalization using `next-international`.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have the following installed:

* [Node.js](https://nodejs.org/) (version 18.x or later recommended)
* [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) (or [pnpm](https://pnpm.io/))

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <your-repository-url>
    cd <repository-directory-name>
    ```

2.  **Install dependencies:**
    Choose your preferred package manager:

    * Using npm:
        ```bash
        npm install
        ```
    * Using yarn:
        ```bash
        yarn install
        ```
    * Using pnpm:
        ```bash
        pnpm install
        ```

3.  **Set up environment variables (if any):**
    If your project requires environment variables (e.g., API keys, specific configurations), create a `.env.local` file in the root of the project by copying the example file (if you have one like `.env.example`):
    ```bash
    cp .env.example .env.local
    ```
    Then, update `.env.local` with your specific values. (Initially, for this project, we haven't defined any, but it's good practice to include this step).

### Running the Development Server

Once the dependencies are installed, you can start the development server:

* Using npm:
    ```bash
    npm run dev
    ```
* Using yarn:
    ```bash
    yarn dev
    ```
* Using pnpm:
    ```bash
    pnpm dev
    ```

This will typically start the application on `http://localhost:3000`. Open this URL in your web browser to see the application running. The application will automatically reload if you change any of the source files.

---

This provides a solid foundation for your README. You can expand it later with sections on:

* Project Structure
landing-page-nextjs/
```bash
├── app/
│   └── [locale]/                     # Динамический сегмент для локалей (например, /en, /nl)
│       ├── (client)/                 # Группа роутов для страниц с клиентским рендерингом
│       │   ├── layout.tsx            # Лейаут для группы (client) (здесь I18nProviderClient)
│       │   └── page.tsx              # Основная страница лендинга (собирает секции)
│       ├── layout.tsx                # Корневой лейаут для [locale] (html, body, шрифт, async params)
│       └── globals.css               # Ваши глобальные стили

├── components/
│   ├── ui/                           # Папка для мелких UI-компонентов (примитивов)
│   │   └── Button.tsx                # Ваш упрощенный компонент Button
│   │
│   ├── sections/                     # Предлагаемая папка для крупных секций страницы
│   │   ├── Header.tsx
│   │   ├── HeroSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── PortfolioSection.tsx
│   │   ├── AboutSection.tsx
│   │   └── ContactSection.tsx
│   │
│   └── (другие общие компоненты...)
│
├── locales/                          # Все, что связано с next-international
│   ├── client.ts                     # Настройка для клиентских компонентов (I18nProviderClient, хуки)
│   ├── server.ts                     # (Опционально) Настройка для серверных компонентов (getI18n)
│   ├── en.ts                         # Файл с английскими переводами
│   └── nl.ts                         # Файл с голландскими переводами
│
├── lib/                              # Вспомогательные функции
│   └── utils.ts                      # Функция cn для объединения классов Tailwind
│
├── public/                           # Статические ассеты
│   ├── images/                       # Папка для изображений
│   │   └── your-hero-image.jpg       # Пример вашего hero-изображения
│   └── favicon.ico                   # Иконка сайта
│
├── middleware.ts                     # Middleware для next-international (определение локали, редиректы)
├── tailwind.config.ts                # Конфигурация Tailwind CSS
├── postcss.config.js                 # Конфигурация PostCSS (нужна для Tailwind)
├── tsconfig.json                     # Конфигурация TypeScript
├── next.config.mjs                   # Конфигурация Next.js
├── package.json                      # Список зависимостей и скрипты проекта
└── README.md                         # Описание проекта
```

* Available Scripts (build, lint, etc.)
* Technologies Used
* Deployment
* Contributing
* License