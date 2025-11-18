# 🚀 Deployment - Instrukcje Wdrożenia

## Opcje Hostingu dla "Polska Oś Czasu"

### 1. Vercel (Zalecane - Najłatwiejsze)

**Zalety:**
- Darmowy hosting dla projektów osobistych
- Automatyczne deployment z GitHub
- HTTPS out-of-the-box
- Świetna wydajność CDN

**Instrukcje:**

1. Załóż konto na [vercel.com](https://vercel.com)
2. Zainstaluj Vercel CLI:
```bash
npm install -g vercel
```

3. Deploy projektu:
```bash
cd polska-os-czasu
vercel
```

4. Odpowiedz na pytania CLI (użyj domyślnych wartości)
5. Twoja aplikacja będzie dostępna pod adresem `https://polska-os-czasu.vercel.app`

**Lub deploy przez GitHub:**
1. Stwórz repozytorium na GitHub
2. Push projekt do GitHub
3. Połącz Vercel z GitHub
4. Wybierz repozytorium i kliknij "Deploy"

---

### 2. Netlify

**Zalety:**
- Darmowy plan
- Łatwa integracja z GitHub
- Form handling i serverless functions

**Instrukcje:**

1. Zaloguj się na [netlify.com](https://netlify.com)
2. Kliknij "Add new site" → "Import from Git"
3. Połącz z GitHub i wybierz repozytorium
4. Ustawienia build:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Kliknij "Deploy site"

**Lub deploy przez Netlify CLI:**
```bash
npm install -g netlify-cli
netlify login
netlify init
netlify deploy --prod
```

---

### 3. GitHub Pages

**Zalety:**
- Całkowicie darmowe
- Integracja z GitHub

**Instrukcje:**

1. Zainstaluj gh-pages:
```bash
npm install -D gh-pages
```

2. Dodaj do `package.json`:
```json
{
  "homepage": "https://twoja-nazwa.github.io/polska-os-czasu",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Zbuduj i wdróż:
```bash
npm run deploy
```

4. W ustawieniach repozytorium GitHub:
   - Settings → Pages
   - Source: Deploy from branch
   - Branch: gh-pages

---

### 4. Firebase Hosting

**Zalety:**
- Darmowy SSL
- CDN globalny
- Integracja z Google Cloud

**Instrukcje:**

1. Zainstaluj Firebase CLI:
```bash
npm install -g firebase-tools
```

2. Zaloguj się:
```bash
firebase login
```

3. Inicjalizuj projekt:
```bash
firebase init hosting
```

Wybierz:
- Use existing project lub stwórz nowy
- Public directory: `dist`
- Configure as single-page app: `Yes`
- Don't overwrite `dist/index.html`

4. Zbuduj i wdróż:
```bash
npm run build
firebase deploy
```

---

### 5. Cloudflare Pages

**Zalety:**
- Świetna wydajność CDN
- Nieograniczona przepustowość
- Darmowy SSL

**Instrukcje:**

1. Zaloguj się na [dash.cloudflare.com](https://dash.cloudflare.com)
2. Przejdź do "Pages"
3. Kliknij "Create a project"
4. Połącz z Git provider
5. Ustawienia build:
   - Build command: `npm run build`
   - Build output directory: `dist`
6. Kliknij "Save and Deploy"

---

## 🔧 Konfiguracja przed Deploymentem

### Vite Base Path (dla GitHub Pages)

Jeśli deploying na GitHub Pages, dodaj do `vite.config.ts`:

```typescript
export default defineConfig({
  base: '/polska-os-czasu/',
  plugins: [react()],
})
```

### Environment Variables

Jeśli w przyszłości będziesz używać API keys:

1. Stwórz plik `.env`:
```
VITE_API_KEY=twoj_klucz
```

2. Dodaj do `.gitignore`:
```
.env
.env.local
```

3. W Vercel/Netlify dodaj env variables w dashboard

---

## 📊 Optymalizacje Produkcyjne

### 1. Kompresja obrazków

Jeśli dodasz obrazy, użyj:
```bash
npm install -D vite-plugin-imagemin
```

### 2. PWA (Progressive Web App)

Dodaj możliwość instalacji jako aplikacja:
```bash
npm install -D vite-plugin-pwa
```

### 3. Google Analytics

Dodaj tracking w `index.html`:
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
```

---

## ✅ Checklist przed Wdrożeniem

- [ ] Zbuduj projekt lokalnie: `npm run build`
- [ ] Przetestuj build: `npm run preview`
- [ ] Sprawdź responsywność na mobile
- [ ] Usuń console.logs z kodu produkcyjnego
- [ ] Zaktualizuj README.md z linkiem do live demo
- [ ] Dodaj meta tags do SEO w `index.html`
- [ ] Sprawdź performance w Chrome DevTools
- [ ] Przetestuj na różnych przeglądarkach

---

## 🔒 SEO i Meta Tags

Dodaj do `index.html`:

```html
<head>
  <!-- Podstawowe meta tags -->
  <meta name="description" content="Polska Oś Czasu - interaktywna gra edukacyjna o polskim filmie i muzyce" />
  <meta name="keywords" content="polska kultura, polski film, polska muzyka, gra edukacyjna, quiz" />
  <meta name="author" content="Twoje Imię" />

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Polska Oś Czasu" />
  <meta property="og:description" content="Zgadnij daty premier polskich filmów i muzyki" />
  <meta property="og:image" content="/og-image.jpg" />

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Polska Oś Czasu" />
  <meta name="twitter:description" content="Zgadnij daty premier polskich filmów i muzyki" />
  <meta name="twitter:image" content="/twitter-image.jpg" />
</head>
```

---

## 📈 Monitorowanie

### Google Analytics

```bash
npm install react-ga4
```

### Sentry (Error Tracking)

```bash
npm install @sentry/react
```

---

## 🎉 Gotowe!

Po wdrożeniu, twoja gra będzie dostępna globalnie i gotowa do użycia przez tysiące użytkowników!

**Powodzenia! 🇵🇱🎮**
