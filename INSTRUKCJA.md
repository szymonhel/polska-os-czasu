# 🎮 Polska Oś Czasu - Instrukcja Uruchomienia

## ✅ Projekt został pomyślnie stworzony!

Twoja interaktywna gra edukacyjna o polskim filmie i muzyce jest gotowa do użycia.

## 🚀 Jak uruchomić projekt

### 1. Sprawdź, czy masz zainstalowane Node.js
```bash
node --version
npm --version
```

### 2. Zainstaluj zależności (jeśli jeszcze nie zrobione)
```bash
cd polska-os-czasu
npm install
```

### 3. Uruchom serwer deweloperski
```bash
npm run dev
```

Aplikacja będzie dostępna pod adresem: **http://localhost:5173/**

### 4. Zbuduj wersję produkcyjną
```bash
npm run build
```

Zbudowane pliki znajdziesz w folderze `dist/`

### 5. Podgląd wersji produkcyjnej
```bash
npm run preview
```

## 🎮 Funkcjonalności Zaimplementowane

### ✅ Tryby Gry
- **Tryb Rok** - Wskazywanie dokładnego roku premiery
- **Tryb Dekady** - Dopasowanie do właściwej dekady
- **Wyzwanie Dnia** - 5 nowych tytułów każdego dnia
- **Tryb Tematyczny** - Zestawy tematyczne (klasyka kina, polski rock, itd.)

### ✅ System Punktacji
- Idealnie (0 lat różnicy): 100 punktów
- 1 rok różnicy: 80 punktów
- 2 lata różnicy: 60 punktów
- 3 lata różnicy: 40 punktów
- 4 lata różnicy: 20 punktów
- 5+ lat różnicy: 10 punktów

### ✅ Interfejs Użytkownika
- Nowoczesny, minimalistyczny design
- Responsywny layout (działa na mobile i desktop)
- Interaktywna oś czasu
- Animacje i feedback wizualny
- Ciemny motyw (dark mode)

### ✅ Baza Danych Kulturowych
- **50+ tytułów** z lat 1960-2025
- Polskie filmy (Sami Swoi, Seksmisja, Bogowie, Ida...)
- Polska muzyka (Perfect, Maanam, Dawid Podsiadło...)
- Seriale (Czterdziestolatek, Alternatywy 4...)
- Możliwość łatwego rozszerzania bazy

## 📁 Struktura Projektu

```
polska-os-czasu/
├── src/
│   ├── components/          # Komponenty React
│   │   ├── GameModeSelector.tsx  # Ekran wyboru trybu gry
│   │   ├── GameScreen.tsx        # Ekran rozgrywki
│   │   ├── Timeline.tsx          # Komponent osi czasu
│   │   └── ResultScreen.tsx      # Ekran wyników
│   ├── data/
│   │   └── polishCulture.ts      # Baza danych tytułów
│   ├── hooks/
│   │   └── useGame.ts            # Logika gry (hook)
│   ├── types/
│   │   └── index.ts              # TypeScript typy
│   ├── utils/
│   │   └── scoring.ts            # System punktacji
│   ├── App.tsx                   # Główny komponent
│   ├── index.css                 # Style globalne
│   └── main.tsx                  # Entry point
├── public/                       # Pliki statyczne
├── index.html                    # HTML template
├── package.json                  # Konfiguracja npm
├── tailwind.config.js           # Konfiguracja Tailwind CSS
├── tsconfig.json                # Konfiguracja TypeScript
└── vite.config.ts              # Konfiguracja Vite

```

## 🎨 Technologie Użyte

- **React 18** - Framework UI
- **TypeScript** - Statyczne typowanie
- **Vite** - Szybki build tool
- **Tailwind CSS 3** - Utility-first CSS framework
- **PostCSS** - CSS processing

## 📝 Jak Dodać Nowe Tytuły

Otwórz plik `src/data/polishCulture.ts` i dodaj nowy obiekt do tablicy:

```typescript
{
  id: 'film-XXX',
  title: 'Nazwa Filmu',
  year: 2020,
  type: 'film', // lub 'album', 'song', 'serial'
  category: 'Kino Współczesne',
  director: 'Imię Nazwisko',
  description: 'Opis filmu',
  decade: '2020s'
}
```

## 🔮 Możliwości Rozbudowy

1. **Więcej trybów gry**
   - Tryb multiplayer
   - Tryb czasowy (time trial)
   - Tryb nieskończony

2. **System osiągnięć**
   - Badges za perfekcyjne rundy
   - Statystyki gracza
   - Ranking

3. **Integracje**
   - API Filmweb/IMDb
   - Spotify API
   - YouTube trailers

4. **Social features**
   - Dzielenie się wynikami
   - Wyzwania między znajomymi
   - Turniere szkolne

## 🐛 Rozwiązywanie Problemów

### Serwer nie chce się uruchomić
```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Błędy TypeScript
```bash
npm run build
# Sprawdź błędy w konsoli
```

### Style nie ładują się poprawnie
```bash
# Upewnij się, że Tailwind CSS jest poprawnie skonfigurowany
npx tailwindcss init -p
```

## 📞 Wsparcie

Jeśli napotkasz problemy:
1. Sprawdź dokumentację w `README.md`
2. Przejrzyj kod w folderze `src/`
3. Każdy komponent jest dobrze skomentowany

## 🎓 Dalszy Rozwój

Projekt jest otwarty na rozbudowę. Możesz:
- Dodawać nowe tytuły do bazy
- Tworzyć nowe tryby gry
- Ulepszać interfejs użytkownika
- Dodawać nowe funkcjonalności

---

**Powodzenia z rozwojem projektu! 🇵🇱**

Projekt stworzony z myślą o promowaniu polskiej kultury audiowizualnej i muzycznej.
