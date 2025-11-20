import React from 'react';
import type { GameState } from '../types';
import { Timeline } from './Timeline';

interface GameScreenProps {
  gameState: GameState;
  onSubmitGuess: (year: number) => void;
}

export const GameScreen: React.FC<GameScreenProps> = ({ gameState, onSubmitGuess }) => {
  const { currentItem, score, round, totalRounds, placedItems, showResult } = gameState;

  if (!currentItem) return null;

  return (
    <div className="min-h-screen p-4 py-8">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">Polska Oś Czasu</h1>
            <p className="text-gray-400">
              Runda {round} / {totalRounds}
            </p>
          </div>
          <div className="text-right">
            <div className="text-3xl md:text-4xl font-bold text-purple-400">
              {score}
            </div>
            <div className="text-sm text-gray-500">punktów</div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-full bg-gray-800 rounded-full h-2">
          <div
            className="bg-purple-500 h-2 rounded-full transition-all duration-500"
            style={{ width: `${(round / totalRounds) * 100}%` }}
          />
        </div>

        {/* Result feedback */}
        {showResult && placedItems.length > 0 && (
          <div className="card p-6 animate-fade-in">
            <div className="text-center">
              {(() => {
                const lastPlaced = placedItems[placedItems.length - 1];
                const diff = lastPlaced.yearDifference;

                if (diff === 0) {
                  return (
                    <>
                      <div className="text-6xl mb-4">🎯</div>
                      <div className="text-2xl font-bold text-green-400 mb-2">
                        Idealnie!
                      </div>
                      <div className="text-gray-300">
                        {lastPlaced.item.title} - {lastPlaced.item.year}
                      </div>
                      <div className="text-3xl font-bold text-green-400 mt-2">
                        +{lastPlaced.points} punktów
                      </div>
                    </>
                  );
                } else if (diff === 1) {
                  return (
                    <>
                      <div className="text-6xl mb-4">🔥</div>
                      <div className="text-2xl font-bold text-yellow-400 mb-2">
                        Bardzo blisko!
                      </div>
                      <div className="text-gray-300">
                        {lastPlaced.item.title} - {lastPlaced.item.year}
                        <span className="text-gray-500"> (pomyłka o {diff} rok)</span>
                      </div>
                      <div className="text-3xl font-bold text-yellow-400 mt-2">
                        +{lastPlaced.points} punktów
                      </div>
                    </>
                  );
                } else if (diff <= 3) {
                  return (
                    <>
                      <div className="text-6xl mb-4">👍</div>
                      <div className="text-2xl font-bold text-blue-400 mb-2">
                        Dobrze!
                      </div>
                      <div className="text-gray-300">
                        {lastPlaced.item.title} - {lastPlaced.item.year}
                        <span className="text-gray-500"> (pomyłka o {diff} lata)</span>
                      </div>
                      <div className="text-3xl font-bold text-blue-400 mt-2">
                        +{lastPlaced.points} punktów
                      </div>
                    </>
                  );
                } else {
                  return (
                    <>
                      <div className="text-6xl mb-4">📚</div>
                      <div className="text-2xl font-bold text-gray-400 mb-2">
                        Trzeba jeszcze popracować
                      </div>
                      <div className="text-gray-300">
                        {lastPlaced.item.title} - {lastPlaced.item.year}
                        <span className="text-gray-500"> (pomyłka o {diff} lat)</span>
                      </div>
                      <div className="text-3xl font-bold text-gray-400 mt-2">
                        +{lastPlaced.points} punktów
                      </div>
                    </>
                  );
                }
              })()}

              {/* Music links */}
              {(() => {
                const lastPlaced = placedItems[placedItems.length - 1];
                const hasLinks = lastPlaced.item.spotifyUrl || lastPlaced.item.youtubeUrl;

                if (hasLinks && (lastPlaced.item.type === 'song' || lastPlaced.item.type === 'album')) {
                  return (
                    <div className="mt-4 pt-4 border-t border-gray-700">
                      <div className="text-sm text-gray-400 mb-2">Posłuchaj:</div>
                      <div className="flex gap-3 justify-center">
                        {lastPlaced.item.spotifyUrl && (
                          <a
                            href={lastPlaced.item.spotifyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
                          >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                            </svg>
                            Spotify
                          </a>
                        )}
                        {lastPlaced.item.youtubeUrl && (
                          <a
                            href={lastPlaced.item.youtubeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
                          >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                            </svg>
                            YouTube
                          </a>
                        )}
                      </div>
                    </div>
                  );
                }
                return null;
              })()}
            </div>
          </div>
        )}

        {/* Timeline */}
        {!showResult && (
          <Timeline
            minYear={1960}
            maxYear={2025}
            placedItems={placedItems}
            onYearSelect={onSubmitGuess}
            currentItem={currentItem}
          />
        )}

        {/* Placed items summary */}
        {placedItems.length > 0 && !showResult && (
          <div className="card p-4">
            <h3 className="text-sm text-gray-400 mb-2">Poprzednie odpowiedzi:</h3>
            <div className="flex flex-wrap gap-2">
              {placedItems.map((placed, index) => (
                <div
                  key={index}
                  className="px-3 py-1 rounded-full text-xs bg-gray-800 border border-gray-700"
                >
                  {placed.item.title.length > 20
                    ? placed.item.title.substring(0, 20) + '...'
                    : placed.item.title}{' '}
                  <span
                    className={
                      placed.yearDifference === 0
                        ? 'text-green-400'
                        : placed.yearDifference <= 2
                        ? 'text-yellow-400'
                        : 'text-red-400'
                    }
                  >
                    ({placed.item.year})
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
