# Сайт-приглашение на свадьбу

Адаптивный сайт-приглашение на свадьбу с поддержкой мобильных и десктопных устройств.

## Особенности

- 📱 Адаптивный дизайн (мобильная версия до 800px, десктопная от 800px)
- ⏱️ Живой счетчик обратного отсчета до свадьбы
- 🎨 Элегантный дизайн с использованием шрифтов Playfair Display и Open Sans
- 🚀 Готов к публикации на GitHub Pages

## Разработка

```bash
# Установка зависимостей
pnpm install

# Запуск dev-сервера (обычно не требуется в Make, но можно использовать)
pnpm run build
```

## Публикация на GitHub Pages

### Вариант 1: Использование корневого домена (username.github.io)

1. Создайте репозиторий с именем `username.github.io` (замените `username` на ваше имя пользователя GitHub)
2. Соберите проект:
   ```bash
   pnpm run build
   ```
3. Скопируйте содержимое папки `dist` в корень репозитория
4. Создайте файл `.nojekyll` в корне репозитория:
   ```bash
   touch .nojekyll
   ```
5. Закоммитьте и запушьте изменения:
   ```bash
   git add .
   git commit -m "Deploy wedding website"
   git push origin main
   ```
6. Сайт будет доступен по адресу `https://username.github.io`

### Вариант 2: Использование поддомена проекта (username.github.io/repo-name)

1. Создайте репозиторий на GitHub
2. Обновите `vite.config.ts`, добавив базовый путь:
   ```typescript
   export default defineConfig({
     base: '/repo-name/', // Замените на имя вашего репозитория
     // ... остальные настройки
   })
   ```
3. Соберите проект:
   ```bash
   pnpm run build
   ```
4. Создайте файл `.nojekyll` в папке `dist`:
   ```bash
   touch dist/.nojekyll
   ```
5. Опубликуйте содержимое папки `dist` в ветку `gh-pages`:
   ```bash
   # Создайте ветку gh-pages
   git checkout --orphan gh-pages
   
   # Удалите все файлы из индекса
   git rm -rf .
   
   # Скопируйте файлы из dist
   cp -r dist/* .
   cp dist/.nojekyll .
   
   # Закоммитьте и запушьте
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin gh-pages
   ```
6. В настройках репозитория (Settings > Pages) выберите ветку `gh-pages` как источник
7. Сайт будет доступен по адресу `https://username.github.io/repo-name/`

### Автоматическое развертывание с GitHub Actions

Создайте файл `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
    
    - name: Setup pnpm
      uses: pnpm/action-setup@v2
      with:
        version: 8
    
    - name: Install dependencies
      run: pnpm install
    
    - name: Build
      run: pnpm run build
    
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
        cname: your-custom-domain.com  # Опционально: если используете собственный домен
```

## Настройка даты свадьбы

Дата свадьбы установлена в компоненте `App.tsx`:

```typescript
const weddingDate = new Date('2026-08-30T16:00:00');
```

Измените эту дату на нужную вам.

## Структура проекта

```
src/
├── app/
│   ├── App.tsx                 # Главный компонент с адаптивной логикой
│   └── components/
│       └── Countdown.tsx       # Компонент счетчика обратного отсчета
├── imports/
│   ├── СайтПриглашениеНаСвадьбуМобилка/  # Мобильная версия из Figma
│   └── СайтПриглашениеНаСвадьбуДесктоп/  # Десктопная версия из Figma
└── styles/
    ├── fonts.css              # Импорт шрифтов
    └── theme.css              # Основные стили
```

## Технологии

- React 18
- Vite
- Tailwind CSS v4
- TypeScript

## Лицензия

MIT
