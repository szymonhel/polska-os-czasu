export type ContentType = 'film' | 'album' | 'song' | 'serial';

export type GameMode = 'year' | 'interval' | 'thematic' | 'daily';

export type Decade = '1960s' | '1970s' | '1980s' | '1990s' | '2000s' | '2010s' | '2020s';

export interface CultureItem {
  id: string;
  title: string;
  year: number;
  type: ContentType;
  category?: string;
  artist?: string;
  director?: string;
  description?: string;
  trivia?: string;
  imageUrl?: string;
  spotifyUrl?: string;
  youtubeUrl?: string;
  decade: Decade;
}

export interface GameState {
  mode: GameMode;
  currentItem: CultureItem | null;
  score: number;
  round: number;
  totalRounds: number;
  items: CultureItem[];
  placedItems: PlacedItem[];
  isGameOver: boolean;
  showResult: boolean;
}

export interface PlacedItem {
  item: CultureItem;
  guessedYear: number;
  points: number;
  yearDifference: number;
}

export interface ThematicSet {
  id: string;
  name: string;
  description: string;
  items: string[]; // IDs of culture items
}
