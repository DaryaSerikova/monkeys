## Стэк
Next.js
Typascript
Redux-toolkit
SCSS, css-modules

- визуал по фигме [https://www.figma.com/file/XIYVl8ICFkdl3HJZcc8o8B/тестовое?type=design&node-id=0%3A1&mode=design&t=6xUI2e3VtlUzDocD-1](https://www.figma.com/file/XIYVl8ICFkdl3HJZcc8o8B/%D1%82%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B5?type=design&node-id=0%3A1&mode=design&t=6xUI2e3VtlUzDocD-1)
- адаптирован под мобильные устройства и планшеты
- наполнение контентом отзывов из html обернутого в json (использовала html-react-parser)
наполнение контентом товары по апи
- при нажатии на кнопку "купить", меняться на кнопки + и - (counter) и поле для ввода кол-ва товара, значение поля  1, кнопки меняют количество товара
- при изменении кол-ва какого-либо из товаров меняется информация в корзине (над полем с телефоном)
- введенный номер телефона должны сохраняться при перезагрузки страницы
- маска в поле для телефона
- при нажатии кнопки "заказать" идет проверка того что телефон полностью введен. Eсли нет, то выводится сообщение в консоль, что не полностью введен и выводится сообщение в консоль 'НЕ ЗАКАЗАНО'. Если все ок, то подготавливаются данные для отправки в json-формате и выводится сообщение в консоль 'ЗАКАЗАНО'


This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
