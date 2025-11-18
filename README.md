# 🎮 Polska Oś Czasu

Interaktywna gra edukacyjna o polskim filmie i muzyce.

## 📖 Opis

„Polska Oś Czasu" to nowoczesna gra mobilna i webowa, w której użytkownicy zgadują daty premier polskich filmów, albumów i utworów muzycznych, umieszczając je na osi czasu. Projekt łączy rozrywkę z edukacją kulturową, promuje dorobek polskich twórców audiowizualnych i muzycznych, a także wzmacnia świadomość historyczną odbiorców.

## ✨ Funkcje

- **Tryb Rok** - Wskaż dokładny rok premiery tytułu
- **Tryb Dekady** - Dopasuj tytuł do właściwej dekady (lata 60., 70., 80., itd.)
- **Wyzwanie Dnia** - Codziennie nowe 5 tytułów do odgadnięcia
- **Tryb Tematyczny** - Zestawy tematyczne: klasyka kina, polski rock, seriale kultowe

## 🎯 Baza Kulturalna

Gra zawiera:
- Kultowe polskie filmy (Sami Swoi, Seksmisja, Bogowie, Ida...)
- Polską muzykę rockową i popową (Perfect, Maanam, Dawid Podsiadło...)
- Kultowe seriale (Czterdziestolatek, Alternatywy 4...)
- Ponad 50 tytułów z lat 1960-2025

## 🚀 Instalacja i Uruchomienie

```bash
# Instalacja zależności
npm install

# Uruchomienie w trybie deweloperskim
npm run dev

# Build produkcyjny
npm run build

# Podgląd buildu produkcyjnego
npm run preview
```

## 🎨 Technologie

- **React 18** - biblioteka UI
- **TypeScript** - typowanie
- **Vite** - build tool
- **Tailwind CSS** - stylowanie
- **Mobile-first design** - responsywność

## 🎮 Jak Grać

1. Wybierz tryb gry
2. Przeczytaj informacje o tytule (film, album, utwór)
3. Kliknij na osi czasu, aby wskazać rok premiery
4. Otrzymaj punkty za dokładność:
   - Idealnie: 100 punktów
   - 1 rok różnicy: 80 punktów
   - 2 lata różnicy: 60 punktów
   - 3 lata różnicy: 40 punktów
   - 4 lata różnicy: 20 punktów
   - 5+ lat różnicy: 10 punktów

## 📊 Struktura Projektu

```
src/
├── components/       # Komponenty React
│   ├── GameModeSelector.tsx
│   ├── GameScreen.tsx
│   ├── Timeline.tsx
│   └── ResultScreen.tsx
├── data/            # Baza danych kulturowa
│   └── polishCulture.ts
├── hooks/           # Custom React hooks
│   └── useGame.ts
├── types/           # TypeScript types
│   └── index.ts
├── utils/           # Utility functions
│   └── scoring.ts
├── App.tsx          # Main app component
└── index.css        # Global styles
```

## 🎓 Wartość Edukacyjna

Projekt:
- Popularyzuje polską kulturę audiowizualną i muzyczną
- Promuje twórców i ich dorobek
- Wzmacnia świadomość historyczną
- Łączy edukację z rozrywką
- Wykorzystuje współczesne technologie do prezentacji treści kulturowych

## 🔮 Przyszły Rozwój

- Więcej tytułów w bazie danych
- System rankingów i osiągnięć
- Tryb multiplayer
- Integracja z API muzycznymi/filmowymi
- Pakiety tematyczne premium
- Współpraca z muzeami i festiwalami

## 📝 Licencja

Projekt edukacyjny - promuje polską kulturę.

## 🤝 Współpraca

Projekt otwarty na współpracę z:
- Muzeami
- Festiwalami filmowymi i muzycznymi
- Szkołami i bibliotekami
- Domami kultury
- Instytucjami kultury

---

**🇵🇱 Made with ❤️ for Polish Culture**
