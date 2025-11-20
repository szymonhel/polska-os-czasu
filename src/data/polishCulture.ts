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
    trivia: 'Film obejrzało w kinach ponad 15 milionów widzów! Scena z koniem w studni była improwizacją. Wacław Kowalski (Kargul) i Władysław Hańcza (Pawlak) nie lubili się w życiu prywatnym.',
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
    trivia: 'Najbardziej kasowy polski film wszech czasów - 13 mln widzów! Jerzy Stuhr i Olgierd Łukaszewicz improwizowali większość dialogów. Machulski ukończył film w zaledwie 28 dni zdjęciowych.',
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
    trivia: 'Film powstał jako quasi-dokument z obserwacji prawdziwego rejsu. Większość aktorów to amatorzy, których Piwowski spotkał na statku. Cenzura początkowo zakazała emisji filmu.',
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
    trivia: 'Pierwszy polski film z Oscarem za najlepszy film nieanglojęzyczny! Pawlikowski celowo użył formatu 4:3 i czarno-białej fotografii, by oddać klimat lat 60. Film kręcono w Łodzi i okolicach.',
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
    trivia: 'Kulty "miodku malutki" pochodzi właśnie stąd! Bareja ukrywał satyry na komunizm w komedii. Film był zakazany w telewizji aż do 1987 roku. Stanisław Tym improwizował wiele scen.',
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
    trivia: 'Album sprzedał się w nakładzie ponad miliona egzemplarzy! "Nie płacz Ewą" to jedna z najczęściej coverowanych polskich piosenek. Zbigniew Hołdys napisał ten utwór mając zaledwie 22 lata.',
    spotifyUrl: 'https://open.spotify.com/album/3pKlDXlb6AvJJHJJzYEYCZ',
    youtubeUrl: 'https://www.youtube.com/watch?v=REiAXkIU9D0',
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
    spotifyUrl: 'https://open.spotify.com/track/1bLWKbCHVgQzYzYJgQhLu8',
    youtubeUrl: 'https://www.youtube.com/watch?v=86_s16dxsOY',
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
    spotifyUrl: 'https://open.spotify.com/track/4fqVDC3OxVVvqHdLSKQPSX',
    youtubeUrl: 'https://www.youtube.com/watch?v=j0bLQ-X3iXE',
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
    trivia: 'Był to przebój, który rozpoczął karierę Maanamu! Kora początkowo śpiewała w zespole jako hobby - była absolwentką ASP. Marek Jackowski komponował muzykę, inspirując się brzmieniem Talking Heads.',
    spotifyUrl: 'https://open.spotify.com/track/0bxEjLkJhOEXxZN3HqYvhN',
    youtubeUrl: 'https://www.youtube.com/watch?v=CGAQh46XX4w',
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
    trivia: 'Ryszard Riedel napisał ten utwór w zaledwie 15 minut! Piosenka została nagrana jednym ujęciem. Wokalista Dżemu często improwizował podczas koncertów, więc żadna wersja nie brzmiała tak samo.',
    spotifyUrl: 'https://open.spotify.com/track/1wLfYKCcShYLZzZvAGL1iX',
    youtubeUrl: 'https://www.youtube.com/watch?v=HKQHXh-LqTA',
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
    spotifyUrl: 'https://open.spotify.com/track/5q4tUKJMJMCqQ1GKz1WvDK',
    youtubeUrl: 'https://www.youtube.com/watch?v=A9Tp6wnXNXI',
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
    trivia: 'Album pobił wszelkie rekordy streamingu w Polsce! Koncerty wyprzedawały się w kilka minut. Podsiadło sam produkuje swoją muzykę w domowym studio. "Let You Down" miał premierę o północy i od razu stał się viralem.',
    spotifyUrl: 'https://open.spotify.com/album/5eP2hEUnbQYZuI3Z0RIwN6',
    youtubeUrl: 'https://www.youtube.com/watch?v=sRYzwF_wVCQ',
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
    spotifyUrl: 'https://open.spotify.com/track/2S9W1QNnpSLwdOjYFY0VtR',
    youtubeUrl: 'https://www.youtube.com/watch?v=kgfLsm6sMsE',
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
    spotifyUrl: 'https://open.spotify.com/track/2aHB1fFPF2bRXrfQcGqXqr',
    youtubeUrl: 'https://www.youtube.com/watch?v=B2ZlXjAXUng',
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
    spotifyUrl: 'https://open.spotify.com/album/3jNYYQ5LYPczWjhpKzJqnr',
    youtubeUrl: 'https://www.youtube.com/watch?v=nweMTMQo0O4',
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
    spotifyUrl: 'https://open.spotify.com/album/3WgJdUfAECDYxXB0D0bqn9',
    youtubeUrl: 'https://www.youtube.com/watch?v=qJY47KI9P20',
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
    spotifyUrl: 'https://open.spotify.com/track/6QRZcWvhvqpKnWjTq7yDhv',
    youtubeUrl: 'https://www.youtube.com/watch?v=vBj4N_Rd9F0',
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
    spotifyUrl: 'https://open.spotify.com/track/63u9WHqC4IrbnhYPqjXMX8',
    youtubeUrl: 'https://www.youtube.com/watch?v=QVcY8BqjlaQ',
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
    spotifyUrl: 'https://open.spotify.com/track/5h6FKE1LdAXGGLYk0jDECb',
    youtubeUrl: 'https://www.youtube.com/watch?v=_5IhKKvOh7w',
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
    spotifyUrl: 'https://open.spotify.com/track/6zeeWid2sgw4lap2LV6KTT',
    youtubeUrl: 'https://www.youtube.com/watch?v=IcjSDZNbMs0',
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
    trivia: 'Serial oglądało 80% Polaków przy telewizorach! Bronisław Pawlik napisał ponad 200 utworów do serialu. Powstały 3 sezony: o 20-latku, 40-latku i 60-latku rozciągające się na 27 lat!',
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
    trivia: 'Bareja ukrywał w serialu brutalne satyry na realia PRL. Zdjęcia kręcono w prawdziwym bloku przy ul. Filtrowej. Serial został wycofany z anteny po zamachu stanu - uznano go za "podżegający".',
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
    spotifyUrl: 'https://open.spotify.com/track/3pLJAnFDSY5sU4Y0vD2WTY',
    youtubeUrl: 'https://www.youtube.com/watch?v=MNcnMWIvvPE',
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
    spotifyUrl: 'https://open.spotify.com/track/5MzvK8qBgfOzN8TW2vE8KR',
    youtubeUrl: 'https://www.youtube.com/watch?v=Bh24U9cMIhA',
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
    spotifyUrl: 'https://open.spotify.com/album/4BW7F9tCiVSuYYZtfVYZ4n',
    youtubeUrl: 'https://www.youtube.com/watch?v=9sYRDLH6uVY',
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
