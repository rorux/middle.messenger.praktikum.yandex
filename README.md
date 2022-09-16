## ChatJS

Приложение, написанное на JavaScript без использования фреймворков.

В качестве сборщика используется **Webpack**, в качестве шаблонизатора – **Handlebars**, препроцессор – **SCSS**.

Внедрен TypeScript. Добавлены классы Component, EventBus, HTTP, Validation. На страницах `/auth`, `/sign-up`, `/edit-profile`, `/edit-password` работает валидация по событиям _focus_, _blur_, а также при отправке формы.

Реализован роутер:

- работает при обновлении страницы;
- работают переходы "вперед", "назад".

Подключено API:

- регистрация, авторизация, выход из системы;
- изменение данных пользователя, пароля, аватара;
- список чатов пользователя, добавление и удаление чатов, добавление пользователей в чаты.

Подключены WebSocket для работы с real-time сообщениями, написаны тесты на Mocha и Chai. Произведена проверка на защиту от XSS и DOS.

Деплой проекта на хостинге – [chaatt.netlify.app](https://chaatt.netlify.app/)

### Страницы

1. `/messenger` — чаты
1. `/auth` — авторизация
1. `/sign-up` — регистрация
1. `/settings` — профиль
1. `/edit-profile` — изменение данных
1. `/edit-password` — изменение пароля
1. `/server-error` — ошибка 500

### Версии ПО

**Node**: 14.18.1

**npm**: 6.14.15

### Установка

1. `npm install` — установка библиотек,
1. `npm run build` — сборка production версии,
1. `npm run serve` — запуск проекта на 8080 порту,
1. `npm run test` — запуск тестов.

### Docker

1. `docker build . -t sandbox` — сборка образа,
1. `docker run -d -p 8082:3000 sandbox` — запуск образа,

### Pull requests

- [Sprint 1](https://github.com/rorux/middle.messenger.praktikum.yandex/pull/1)
- [Sprint 2](https://github.com/rorux/middle.messenger.praktikum.yandex/pull/2)
- [Sprint 3](https://github.com/rorux/middle.messenger.praktikum.yandex/pull/3)
- [Sprint 4](https://github.com/rorux/middle.messenger.praktikum.yandex/pull/4)
