# Быстрое развертывание на GitHub Pages

## Шаг 1: Подготовка репозитория

1. Создайте новый репозиторий на GitHub
2. Клонируйте этот проект в репозиторий:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Wedding invitation website"
   git branch -M main
   git remote add origin https://github.com/USERNAME/REPO_NAME.git
   git push -u origin main
   ```

## Шаг 2: Настройка GitHub Pages

1. Перейдите в настройки репозитория: Settings → Pages
2. В разделе "Build and deployment":
   - Source: выберите "GitHub Actions"
3. Workflow автоматически запустится при следующем push

## Шаг 3: Настройка базового пути (если используете repo name)

Если ваш сайт будет доступен по адресу `username.github.io/repo-name/`, обновите `vite.config.ts`:

```typescript
export default defineConfig({
  base: '/repo-name/',  // Добавьте эту строку
  plugins: [
    react(),
    tailwindcss(),
  ],
  // ... остальное
})
```

Затем:
```bash
git add vite.config.ts
git commit -m "Configure base path for GitHub Pages"
git push
```

## Шаг 4: Проверка

После завершения workflow (обычно 1-2 минуты):
- Перейдите в Actions, чтобы увидеть статус развертывания
- Ваш сайт будет доступен по адресу:
  - `https://username.github.io/` (для username.github.io репозитория)
  - `https://username.github.io/repo-name/` (для обычного репозитория)

## Обновление сайта

Просто внесите изменения и запушьте:
```bash
git add .
git commit -m "Update wedding website"
git push
```

Сайт автоматически обновится в течение нескольких минут.

## Собственный домен (опционально)

1. Создайте файл `public/CNAME` с вашим доменом:
   ```
   wedding.example.com
   ```
2. В настройках вашего DNS добавьте:
   - CNAME запись, указывающую на `username.github.io`
3. В настройках GitHub Pages введите ваш домен в поле "Custom domain"

## Решение проблем

### Сайт не отображается

- Проверьте, что GitHub Actions workflow завершился успешно
- Убедитесь, что в настройках Pages выбран правильный источник
- Проверьте, что `base` в `vite.config.ts` настроен правильно

### Стили не загружаются

- Убедитесь, что `.nojekyll` файл присутствует в папке `public`
- Проверьте консоль браузера на наличие 404 ошибок
- Проверьте, что базовый путь настроен правильно

### 404 при переходе по страницам

Это одностраничное приложение, поэтому все маршруты обрабатываются на клиенте.
