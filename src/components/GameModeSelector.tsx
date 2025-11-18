import React from 'react';
import type { GameMode } from '../types';
import { thematicSets } from '../data/polishCulture';

interface GameModeSelectorProps {
  onSelectMode: (mode: GameMode, thematicSetId?: string) => void;
}

export const GameModeSelector: React.FC<GameModeSelectorProps> = ({ onSelectMode }) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-4xl w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Polska Oś Czasu
          </h1>
          <p className="text-gray-400 text-lg">
            Zgadnij daty premier polskich filmów i muzyki
          </p>
        </div>

        {/* Game modes */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Year mode */}
          <button
            onClick={() => onSelectMode('year')}
            className="card p-6 hover:border-purple-500 transition-all text-left group"
          >
            <div className="text-4xl mb-4">📅</div>
            <h3 className="text-2xl font-bold mb-2 group-hover:text-purple-400 transition-colors">
              Tryb Rok
            </h3>
            <p className="text-gray-400">
              Wskaż dokładny rok premiery. Im bliżej prawdy, tym więcej punktów!
            </p>
            <div className="mt-4 text-sm text-gray-500">
              Trudność: ⭐⭐⭐
            </div>
          </button>

          {/* Interval mode */}
          <button
            onClick={() => onSelectMode('interval')}
            className="card p-6 hover:border-purple-500 transition-all text-left group"
          >
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-2xl font-bold mb-2 group-hover:text-purple-400 transition-colors">
              Tryb Dekady
            </h3>
            <p className="text-gray-400">
              Dopasuj tytuł do właściwej dekady (lata 60., 70., 80., itd.)
            </p>
            <div className="mt-4 text-sm text-gray-500">
              Trudność: ⭐⭐
            </div>
          </button>

          {/* Daily challenge */}
          <button
            onClick={() => onSelectMode('daily')}
            className="card p-6 hover:border-purple-500 transition-all text-left group"
          >
            <div className="text-4xl mb-4">🗓️</div>
            <h3 className="text-2xl font-bold mb-2 group-hover:text-purple-400 transition-colors">
              Wyzwanie Dnia
            </h3>
            <p className="text-gray-400">
              Codziennie nowe 5 tytułów do odgadnięcia. Jeden zestaw dziennie!
            </p>
            <div className="mt-4 text-sm text-gray-500">
              Trudność: ⭐⭐⭐
            </div>
          </button>

          {/* Thematic mode - placeholder for expansion */}
          <div className="card p-6 opacity-50">
            <div className="text-4xl mb-4">🎭</div>
            <h3 className="text-2xl font-bold mb-2">
              Tryb Tematyczny
            </h3>
            <p className="text-gray-400 mb-4">
              Graj w zestawy tematyczne: klasyka kina, polski rock, seriale...
            </p>

            <div className="space-y-2">
              {thematicSets.map(set => (
                <button
                  key={set.id}
                  onClick={() => onSelectMode('thematic', set.id)}
                  className="w-full text-left p-3 bg-gray-800 hover:bg-gray-700 rounded transition-colors"
                >
                  <div className="font-medium text-purple-400">{set.name}</div>
                  <div className="text-xs text-gray-500">{set.description}</div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-500 text-sm">
          <p>Gra edukacyjna promująca polską kulturę audiowizualną</p>
        </div>
      </div>
    </div>
  );
};
