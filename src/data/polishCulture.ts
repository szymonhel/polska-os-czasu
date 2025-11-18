import type { CultureItem, ThematicSet } from '../types';

// Comprehensive database of Polish films, music, and series
export const polishCultureData: CultureItem[] = [
  // Classic Polish Cinema
  {
    id: 'film-001',
    title: 'Sami Swoi',
    year: 1967,
    type: 'film',
    category: 'Klasyka Kina Polskiego',
    director: 'Sylwester Chęciński',
    description: 'Kultowa komedia o wojnie polsko-polskiej',
    decade: '1960s'
  },
  {
    id: 'film-002',
    title: 'Krótki film o miłości',
    year: 1988,
    type: 'film',
    category: 'Klasyka Kina Polskiego',
    director: 'Krzysztof Kieślowski',
    description: 'Wzruszający dramat o obsesyjnej miłości',
    decade: '1980s'
  },
  {
    id: 'film-003',
    title: 'Seksmisja',
    year: 1984,
    type: 'film',
    category: 'Klasyka Kina Polskiego',
    director: 'Juliusz Machulski',
    description: 'Science-fiction komedia o świecie bez mężczyzn',
    decade: '1980s'
  },
  {
    id: 'film-004',
    title: 'Rejs',
    year: 1970,
    type: 'film',
    category: 'Klasyka Kina Polskiego',
    director: 'Marek Piwowski',
    description: 'Surrealistyczna komedia na statku wycieczkowym',
    decade: '1970s'
  },
  {
    id: 'film-005',
    title: 'Vabank',
    year: 1981,
    type: 'film',
    category: 'Klasyka Kina Polskiego',
    director: 'Juliusz Machulski',
    description: 'Gangsterska komedia osadzona w latach 30.',
    decade: '1980s'
  },
  {
    id: 'film-006',
    title: 'Dzień Świra',
    year: 2002,
    type: 'film',
    category: 'Kino Współczesne',
    director: 'Marek Koterski',
    description: 'Czarna komedia o depresji i samotności',
    decade: '2000s'
  },
  {
    id: 'film-007',
    title: 'Kiler',
    year: 1997,
    type: 'film',
    category: 'Kino po 1989',
    director: 'Juliusz Machulski',
    description: 'Komedia gangsterska z Cezarym Pazurą',
    decade: '1990s'
  },
  {
    id: 'film-008',
    title: 'Bogowie',
    year: 2014,
    type: 'film',
    category: 'Kino Współczesne',
    director: 'Łukasz Palkowski',
    description: 'Film biograficzny o profesorze Zbigniewie Relindze',
    decade: '2010s'
  },
  {
    id: 'film-009',
    title: 'Ida',
    year: 2013,
    type: 'film',
    category: 'Kino Współczesne',
    director: 'Paweł Pawlikowski',
    description: 'Czarno-biały dramat, laureat Oscara',
    decade: '2010s'
  },
  {
    id: 'film-010',
    title: 'Pianista',
    year: 2002,
    type: 'film',
    category: 'Kino Współczesne',
    director: 'Roman Polański',
    description: 'Dramat wojenny o Władysławie Szpilmanie',
    decade: '2000s'
  },
  {
    id: 'film-011',
    title: 'Chłopaki nie płaczą',
    year: 2000,
    type: 'film',
    category: 'Kino po 1989',
    director: 'Olaf Lubaszenko',
    description: 'Komedia o grupie przyjaciół w współczesnej Polsce',
    decade: '2000s'
  },
  {
    id: 'film-012',
    title: 'Psy',
    year: 1992,
    type: 'film',
    category: 'Kino po 1989',
    director: 'Władysław Pasikowski',
    description: 'Thriller o transformacji ustrojowej',
    decade: '1990s'
  },
  {
    id: 'film-013',
    title: 'Jak rozpętałem drugą wojnę światową',
    year: 1970,
    type: 'film',
    category: 'Klasyka Kina Polskiego',
    director: 'Tadeusz Chmielewski',
    description: 'Komedia wojenna z Franciszkiem Pieczką',
    decade: '1970s'
  },
  {
    id: 'film-014',
    title: 'Miś',
    year: 1981,
    type: 'film',
    category: 'Klasyka Kina Polskiego',
    director: 'Stanisław Bareja',
    description: 'Satyra na PRL i aparatczyków',
    decade: '1980s'
  },
  {
    id: 'film-015',
    title: 'Zimna Wojna',
    year: 2018,
    type: 'film',
    category: 'Kino Współczesne',
    director: 'Paweł Pawlikowski',
    description: 'Czarno-biały dramat muzyczny',
    decade: '2010s'
  },

  // Polish Rock Music
  {
    id: 'music-001',
    title: 'Autobiografia',
    year: 1982,
    type: 'album',
    category: 'Polski Rock',
    artist: 'Perfect',
    description: 'Kultowy album z "Nie płacz Ewą"',
    decade: '1980s'
  },
  {
    id: 'music-002',
    title: 'Telefony',
    year: 1988,
    type: 'song',
    category: 'Polski Rock',
    artist: 'Republika',
    description: 'Jeden z najbardziej rozpoznawalnych utworów polskiego rocka',
    decade: '1980s'
  },
  {
    id: 'music-003',
    title: 'Sen o Warszawie',
    year: 1967,
    type: 'song',
    category: 'Klasyka Polska',
    artist: 'Czesław Niemen',
    description: 'Ikoniczny utwór o stolicy',
    decade: '1960s'
  },
  {
    id: 'music-004',
    title: 'Boskie Buenos',
    year: 1980,
    type: 'song',
    category: 'Polski Rock',
    artist: 'Maanam',
    description: 'Kultowa piosenka Kory i Maanamu',
    decade: '1980s'
  },
  {
    id: 'music-005',
    title: 'Wehikuł czasu',
    year: 1984,
    type: 'song',
    category: 'Polski Rock',
    artist: 'Dżem',
    description: 'Ballada rockowa Ryszarda Riedla',
    decade: '1980s'
  },
  {
    id: 'music-006',
    title: 'List do M.',
    year: 2011,
    type: 'song',
    category: 'Polski Pop',
    artist: 'Artur Andrus',
    description: 'Utwór do filmu "List do M."',
    decade: '2010s'
  },
  {
    id: 'music-007',
    title: 'Małomiasteczkowy',
    year: 2018,
    type: 'album',
    category: 'Polski Pop',
    artist: 'Dawid Podsiadło',
    description: 'Jeden z najpopularniejszych polskich albumów',
    decade: '2010s'
  },
  {
    id: 'music-008',
    title: 'Pasażerka z MGM',
    year: 1988,
    type: 'song',
    category: 'Polski Rock',
    artist: 'TSA',
    description: 'Hard rockowy hit TSA',
    decade: '1980s'
  },
  {
    id: 'music-009',
    title: 'Autobiografia',
    year: 1996,
    type: 'song',
    category: 'Polski Rock',
    artist: 'Kasia Nosowska (Hey)',
    description: 'Przebój zespołu Hey',
    decade: '1990s'
  },
  {
    id: 'music-010',
    title: 'Piła Tango',
    year: 1995,
    type: 'album',
    category: 'Alternatywa',
    artist: 'Kult',
    description: 'Album z kultowym "Arahją"',
    decade: '1990s'
  },
  {
    id: 'music-011',
    title: 'Niebo',
    year: 2012,
    type: 'album',
    category: 'Polski Pop',
    artist: 'Dawid Podsiadło',
    description: 'Debiutancki album zwycięzcy X Factor',
    decade: '2010s'
  },
  {
    id: 'music-012',
    title: 'Kocham Cię kochanie moje',
    year: 1967,
    type: 'song',
    category: 'Klasyka Polska',
    artist: 'Niebiesko-Czarni',
    description: 'Kultowy przebój lat 60.',
    decade: '1960s'
  },
  {
    id: 'music-013',
    title: 'Wolność',
    year: 1990,
    type: 'song',
    category: 'Polski Rock',
    artist: 'Maanam',
    description: 'Hymn okresu transformacji',
    decade: '1990s'
  },
  {
    id: 'music-014',
    title: 'Zegarmistrz Światła Purpurowego',
    year: 1996,
    type: 'song',
    category: 'Alternatywa',
    artist: 'Myslovitz',
    description: 'Kultowy singiel Myslovitz',
    decade: '1990s'
  },
  {
    id: 'music-015',
    title: 'Outro',
    year: 2015,
    type: 'song',
    category: 'Polski Hip-Hop',
    artist: 'Taco Hemingway',
    description: 'Przebój polskiego rapu',
    decade: '2010s'
  },

  // Polish TV Series
  {
    id: 'serial-001',
    title: 'Czterdziestolatek',
    year: 1975,
    type: 'serial',
    category: 'Seriale Kultowe',
    director: 'Jerzy Gruza',
    description: 'Kultowy serial o Stefanie Karwowskim',
    decade: '1970s'
  },
  {
    id: 'serial-002',
    title: 'Alternatywy 4',
    year: 1983,
    type: 'serial',
    category: 'Seriale Kultowe',
    director: 'Stanisław Bareja',
    description: 'Satyra na PRL i życie w bloku',
    decade: '1980s'
  },
  {
    id: 'serial-003',
    title: 'Czterej Pancerni i Pies',
    year: 1966,
    type: 'serial',
    category: 'Seriale Kultowe',
    director: 'Konrad Nałęcki',
    description: 'Serial o załodze czołgu T-34',
    decade: '1960s'
  },
  {
    id: 'serial-004',
    title: 'Świat według Kiepskich',
    year: 1999,
    type: 'serial',
    category: 'Komedia',
    director: 'Okił Khamidov',
    description: 'Najdłużej emitowany polski sitcom',
    decade: '1990s'
  },
  {
    id: 'serial-005',
    title: '1983',
    year: 2018,
    type: 'serial',
    category: 'Seriale Netflix',
    description: 'Polski serial sci-fi na Netflix',
    decade: '2010s'
  },
  {
    id: 'serial-006',
    title: 'Barwy szczęścia',
    year: 2007,
    type: 'serial',
    category: 'Opera Mydlana',
    description: 'Polska telenowela',
    decade: '2000s'
  },
  {
    id: 'serial-007',
    title: 'Zmiennicy',
    year: 1986,
    type: 'serial',
    category: 'Seriale Kultowe',
    director: 'Zbigniew Chmielewski',
    description: 'Serial kryminalny o policjantach',
    decade: '1980s'
  },
  {
    id: 'serial-008',
    title: 'Kruk. Szepty słychać po zmroku',
    year: 2018,
    type: 'serial',
    category: 'Kryminał',
    description: 'Serial kryminalny z Maciejem Stuhrem',
    decade: '2010s'
  },

  // More recent content
  {
    id: 'film-016',
    title: 'Znachor',
    year: 1982,
    type: 'film',
    category: 'Klasyka Kina Polskiego',
    director: 'Jerzy Hoffman',
    description: 'Ekranizacja powieści Tadeusza Dołęgi-Mostowicza',
    decade: '1980s'
  },
  {
    id: 'film-017',
    title: 'Wszystko co kocham',
    year: 2009,
    type: 'film',
    category: 'Kino Współczesne',
    director: 'Jacek Borcuch',
    description: 'Film o młodości w latach 80.',
    decade: '2000s'
  },
  {
    id: 'music-016',
    title: 'Café Sułtan',
    year: 1987,
    type: 'song',
    category: 'Polski Rock',
    artist: 'Bajm',
    description: 'Jeden z największych hitów Bajmu',
    decade: '1980s'
  },
  {
    id: 'music-017',
    title: 'Nie pytaj o Polskę',
    year: 1996,
    type: 'song',
    category: 'Alternatywa',
    artist: 'Obywatel G.C.',
    description: 'Kultowy utwór o polskiej rzeczywistości',
    decade: '1990s'
  },
  {
    id: 'film-018',
    title: 'Popiełuszko. Wolność jest w nas',
    year: 2009,
    type: 'film',
    category: 'Kino Współczesne',
    director: 'Rafał Wieczyński',
    description: 'Film o księdzu Jerzym Popiełuszce',
    decade: '2000s'
  },
  {
    id: 'film-019',
    title: 'Kogel Mogel',
    year: 1988,
    type: 'film',
    category: 'Klasyka Kina Polskiego',
    director: 'Roman Załuski',
    description: 'Komedia romantyczna z czasów PRL',
    decade: '1980s'
  },
  {
    id: 'music-018',
    title: 'W dobrą godzinę',
    year: 2001,
    type: 'album',
    category: 'Polski Rock',
    artist: 'Myslovitz',
    description: 'Album Myslovitz nominowany do MTV Europe Music Awards',
    decade: '2000s'
  },
];

// Thematic sets for thematic game mode
export const thematicSets: ThematicSet[] = [
  {
    id: 'set-001',
    name: 'Klasyka Kina Polskiego',
    description: 'Najważniejsze polskie filmy z lat 60-80',
    items: [
      'film-001', 'film-002', 'film-003', 'film-004', 'film-005',
      'film-013', 'film-014', 'film-016', 'film-019'
    ]
  },
  {
    id: 'set-002',
    name: 'Polski Rock',
    description: 'Kultowe utwory polskiego rocka',
    items: [
      'music-001', 'music-002', 'music-004', 'music-005',
      'music-008', 'music-013', 'music-016'
    ]
  },
  {
    id: 'set-003',
    name: 'Kino po 1989',
    description: 'Polskie filmy z okresu transformacji',
    items: [
      'film-006', 'film-007', 'film-011', 'film-012'
    ]
  },
  {
    id: 'set-004',
    name: 'Seriale Kultowe',
    description: 'Kultowe polskie seriale telewizyjne',
    items: [
      'serial-001', 'serial-002', 'serial-003', 'serial-007'
    ]
  },
  {
    id: 'set-005',
    name: 'Współczesna Polska Muzyka',
    description: 'Polski pop i rock XXI wieku',
    items: [
      'music-007', 'music-011', 'music-015'
    ]
  }
];

// Helper function to get random items
export const getRandomItems = (count: number, items = polishCultureData): CultureItem[] => {
  const shuffled = [...items].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};

// Helper function to get items by thematic set
export const getItemsByThematicSet = (setId: string): CultureItem[] => {
  const set = thematicSets.find(s => s.id === setId);
  if (!set) return [];

  return polishCultureData.filter(item => set.items.includes(item.id));
};

// Helper function to get daily challenge items (based on date seed)
export const getDailyItems = (): CultureItem[] => {
  const today = new Date();
  const seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();

  // Simple seeded random
  const seededRandom = (s: number) => {
    const x = Math.sin(s) * 10000;
    return x - Math.floor(x);
  };

  const shuffled = [...polishCultureData].sort(() => seededRandom(seed) - 0.5);
  return shuffled.slice(0, 5);
};
