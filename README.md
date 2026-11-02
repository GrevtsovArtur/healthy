# Healthy Food Almaty

Next.js 14 (App Router) · React · JavaScript · Tailwind CSS · lucide-react.

## Запуск
```bash
npm install
npm run dev     # http://localhost:3000
npm run build && npm start
```

## Структура
- `src/app` — страницы: `/`, `/menu`, `/build-bowl`, `/programs`, `/subscriptions`, `/about`, `/delivery`, `/contacts`, `/cart`, `/checkout`, основы `/account`, `/admin`.
- `src/components` — переиспользуемые компоненты.
- `src/context/CartContext.js` — корзина (Context + localStorage).
- `src/data` — единый источник данных блюд, ингредиентов, рационов и тарифов.
- `src/lib` — расчёт КБЖУ (`nutrition.js`), форматирование, слой данных `api.js`.
- `src/config/site.js` — контакты, навигация (демо-данные, редактируйте).
- `prisma/schema.prisma` — черновик схемы PostgreSQL.

## Заметки
- QR-меню: направьте QR-код на `/menu`, отдельного каталога нет.
- Фото блюд: положите файлы в `public/images` и укажите путь в поле `image` в `src/data/dishes.js`. Пока вместо фото - цветная заглушка.
- Заказ и оплата демонстрационные: `createOrder` в `src/lib/api.js` ничего не отправляет.
