import React from 'react';
import type { PlacedItem } from '../types';
import { getScoreMessage } from '../utils/scoring';

interface ResultScreenProps {
  placedItems: PlacedItem[];
  totalScore: number;
  maxScore: number;
  onPlayAgain: () => void;
  onBackToMenu: () => void;
}

export const ResultScreen: React.FC<ResultScreenProps> = ({
  placedItems,
  totalScore,
  maxScore,
  onPlayAgain,
  onBackToMenu
}) => {
  const percentage = Math.round((totalScore / maxScore) * 100);
  const message = getScoreMessage(totalScore, maxScore);

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-4xl w-full space-y-8">
        {/* Score card */}
        <div className="card p-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Wyniki</h2>
          <div className="text-6xl md:text-8xl font-bold text-purple-400 mb-4">
            {totalScore}
            <span className="text-3xl text-gray-500">/{maxScore}</span>
          </div>
          <div className="text-2xl text-gray-300 mb-2">{percentage}%</div>
          <p className="text-xl text-gray-400">{message}</p>
        </div>

        {/* Detailed results */}
        <div className="card p-6">
          <h3 className="text-2xl font-bold mb-4">Szczegóły</h3>
          <div className="space-y-4">
            {placedItems.map((placed, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-gray-800 rounded-lg"
              >
                <div className="flex-1">
                  <div className="font-medium">{placed.item.title}</div>
                  <div className="text-sm text-gray-400">
                    {placed.item.artist || placed.item.director}
                  </div>
                </div>
                <div className="text-center px-4">
                  <div className="text-2xl font-bold">
                    {placed.item.year}
                  </div>
                  <div className="text-xs text-gray-500">prawdziwy rok</div>
                </div>
                <div className="text-center px-4">
                  <div className="text-xl text-gray-400">
                    {placed.guessedYear}
                  </div>
                  <div className="text-xs text-gray-500">twoja odpowiedź</div>
                </div>
                <div className="text-center px-4">
                  <div className={`text-2xl font-bold ${
                    placed.yearDifference === 0
                      ? 'text-green-400'
                      : placed.yearDifference <= 2
                      ? 'text-yellow-400'
                      : 'text-red-400'
                  }`}>
                    {placed.points}
                  </div>
                  <div className="text-xs text-gray-500">punktów</div>
                </div>
                <div className="text-center px-4 w-24">
                  {placed.yearDifference === 0 ? (
                    <span className="text-2xl">🎯</span>
                  ) : placed.yearDifference === 1 ? (
                    <span className="text-2xl">🔥</span>
                  ) : placed.yearDifference <= 3 ? (
                    <span className="text-2xl">👍</span>
                  ) : (
                    <span className="text-2xl">📚</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-4 justify-center">
          <button onClick={onPlayAgain} className="btn-primary">
            🔄 Zagraj Ponownie
          </button>
          <button onClick={onBackToMenu} className="btn-secondary">
            🏠 Menu Główne
          </button>
        </div>

        {/* Share encouragement */}
        <div className="text-center text-gray-500 text-sm">
          <p>Podziel się wynikiem z przyjaciółmi! 🎮</p>
        </div>
      </div>
    </div>
  );
};
