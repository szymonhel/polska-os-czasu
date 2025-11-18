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
