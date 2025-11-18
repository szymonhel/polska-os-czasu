import type { Decade } from '../types';

/**
 * Calculate points based on year difference
 * Perfect guess: 100 points
 * 1 year off: 80 points
 * 2 years off: 60 points
 * 3 years off: 40 points
 * 4 years off: 20 points
 * 5+ years off: 10 points
 */
export const calculateYearPoints = (actualYear: number, guessedYear: number): number => {
  const difference = Math.abs(actualYear - guessedYear);

  if (difference === 0) return 100;
  if (difference === 1) return 80;
  if (difference === 2) return 60;
  if (difference === 3) return 40;
  if (difference === 4) return 20;
  return 10;
};

/**
 * Calculate points for interval/decade mode
 * Correct decade: 100 points
 * Adjacent decade: 50 points
 * Wrong: 0 points
 */
export const calculateDecadePoints = (actualDecade: Decade, guessedDecade: Decade): number => {
  if (actualDecade === guessedDecade) return 100;

  const decades: Decade[] = ['1960s', '1970s', '1980s', '1990s', '2000s', '2010s', '2020s'];
  const actualIndex = decades.indexOf(actualDecade);
  const guessedIndex = decades.indexOf(guessedDecade);

  const difference = Math.abs(actualIndex - guessedIndex);

  if (difference === 1) return 50;
  return 0;
};

/**
 * Convert decade string to year range
 */
export const getDecadeYearRange = (decade: Decade): { start: number; end: number } => {
  const decadeMap: Record<Decade, { start: number; end: number }> = {
    '1960s': { start: 1960, end: 1969 },
    '1970s': { start: 1970, end: 1979 },
    '1980s': { start: 1980, end: 1989 },
    '1990s': { start: 1990, end: 1999 },
    '2000s': { start: 2000, end: 2009 },
    '2010s': { start: 2010, end: 2019 },
    '2020s': { start: 2020, end: 2029 },
  };

  return decadeMap[decade];
};

/**
 * Get decade from year
 */
export const getDecadeFromYear = (year: number): Decade => {
  if (year >= 1960 && year <= 1969) return '1960s';
  if (year >= 1970 && year <= 1979) return '1970s';
  if (year >= 1980 && year <= 1989) return '1980s';
  if (year >= 1990 && year <= 1999) return '1990s';
  if (year >= 2000 && year <= 2009) return '2000s';
  if (year >= 2010 && year <= 2019) return '2010s';
  return '2020s';
};

/**
 * Format score with encouragement message
 */
export const getScoreMessage = (score: number, maxScore: number): string => {
  const percentage = (score / maxScore) * 100;

  if (percentage === 100) return 'Perfekcja! Jesteś ekspertem polskiej kultury!';
  if (percentage >= 90) return 'Znakomicie! Świetna znajomość polskiej kultury!';
  if (percentage >= 75) return 'Bardzo dobrze! Masz imponującą wiedzę!';
  if (percentage >= 60) return 'Dobrze! Znasz polską kulturę!';
  if (percentage >= 40) return 'Nieźle! Jest miejsce na rozwój!';
  return 'To był dobry trening! Spróbuj jeszcze raz!';
};
