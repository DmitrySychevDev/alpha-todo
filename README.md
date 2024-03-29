# Alpfa todo

Этот проект представляет собой пример приложения, построенного с использованием технологий React, Vite, TypeScript и управления зависимостями с помощью Yarn.

## Описание проекта

Проект представляет собой веб-приложение для работы с карточками. В приложении реализованы следующие функциональности:

- Создание карточек: Пользователь может создавать новые карточки, отправляя запрос на фэйковое API (https://dummyjson.com). Карточка добавляется в состояние приложения на основе ответа от сервера(данные не сохраняются).

- Отрисовка карточек: Карточки отображаются на основе данных, полученных с бэкенда.

- Редактирование карточек: Пользователь может редактировать существующие карточки, внося изменения и отправляя соответствующий запрос на бэкенд.

- Удаление карточек: Пользователь может удалять карточки, отправляя запрос на бэкенд.

## Запуск проекта

1. Убедитесь, что у вас установлен Node.js и Yarn.
2. Склонируйте репозиторий:

   ```bash
   git clone https://github.com/DmitrySychevDev/alpha-todo.git
   cd alpha-todo
   ```

3. Установите зависимости

```bash
yarn install
```

4. Запустите приложение:

```bash
yarn build
yarn preview
```

## Замечание

Для взаимодействия с фэйковым API (https://dummyjson.com), необходимо убедиться, что ваше приложение имеет доступ к интернету, чтобы выполнять запросы.
