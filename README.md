# Vite React Project

Небольшое приложение на React, собранное с помощью Vite.

Приложение содержит компоненты для отображения списка покемонов, карточек, поиска и страницы деталей (`PokemonList`, `PokemonCard`, `SearchBar`, `PokemonDetails`). Предназначено как демонстрационный пример работы с компонентами, маршрутами и простыми стилями.

**Технологии**
- Vite
- React
- react-router-dom
- CSS

**Быстрый старт**
1. Убедитесь, что установлен Node.js (рекомендуется версия LTS).
2. В корне проекта выполните:

```bash
npm install
npm run dev
```

3. Откройте в браузере: http://localhost:5173 (по умолчанию).

**Доступные скрипты**
- `npm run dev` — запускает dev-сервер
- `npm run build` — собирает приложение для продакшена
- `npm run preview` — просматривает собранный билд локально

**Структура проекта (важное)**
- `index.html` — HTML-шаблон
- `vite.config.js` — конфигурация Vite
- `src/main.jsx` — точка входа
- `src/App.jsx` — основной компонент и маршруты
- `src/components/` — компоненты приложения:
  - `PokemonList.jsx`
  - `PokemonCard.jsx`
  - `PokemonDetails.jsx`
  - `SearchBar.jsx`
  - `all.css` (стили)

**Использование**
- Введите текст в поисковой строке — список отфильтруется.
- Клик по карточке открывает страницу с деталями покемона (react-router).

**Настройка и переменные окружения**
- Если приложение использует внешний API, добавьте ключи/URL в `.env` (в проекте по умолчанию нет обязательных переменных).

**Вклад в проект**
- Fork → ветка feature → Pull Request.

**Лицензия**
- MIT
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
