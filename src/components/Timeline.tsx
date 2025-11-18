import React, { useState } from 'react';
import type { CultureItem, PlacedItem } from '../types';

interface TimelineProps {
  minYear: number;
  maxYear: number;
  placedItems: PlacedItem[];
  onYearSelect: (year: number) => void;
  currentItem: CultureItem | null;
}

export const Timeline: React.FC<TimelineProps> = ({
  minYear,
  maxYear,
  placedItems,
  onYearSelect,
  currentItem
}) => {
  const [hoverYear, setHoverYear] = useState<number | null>(null);

  const years = Array.from({ length: maxYear - minYear + 1 }, (_, i) => minYear + i);

  const getYearPosition = (year: number) => {
    return ((year - minYear) / (maxYear - minYear)) * 100;
  };

  const handleTimelineClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const percentage = x / rect.width;
    const year = Math.round(minYear + percentage * (maxYear - minYear));
    onYearSelect(Math.max(minYear, Math.min(maxYear, year)));
  };

  const handleTimelineMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const percentage = x / rect.width;
    const year = Math.round(minYear + percentage * (maxYear - minYear));
    setHoverYear(Math.max(minYear, Math.min(maxYear, year)));
  };

  return (
    <div className="w-full space-y-4">
      {/* Current item card */}
      {currentItem && (
        <div className="card p-6 text-center">
          <div className="text-sm text-gray-400 uppercase tracking-wider mb-2">
            {currentItem.type === 'film' ? '🎬 Film' :
             currentItem.type === 'album' ? '💿 Album' :
             currentItem.type === 'song' ? '🎵 Utwór' : '📺 Serial'}
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">{currentItem.title}</h2>
          {currentItem.artist && (
            <p className="text-lg text-gray-300">{currentItem.artist}</p>
          )}
          {currentItem.director && (
            <p className="text-lg text-gray-300">reż. {currentItem.director}</p>
          )}
          {currentItem.description && (
            <p className="text-sm text-gray-400 mt-2">{currentItem.description}</p>
          )}
          {currentItem.trivia && (
            <div className="mt-4 p-4 bg-purple-900/20 border border-purple-500/30 rounded-lg">
              <div className="flex items-start gap-2">
                <span className="text-xl">💡</span>
                <div>
                  <p className="text-xs text-purple-300 font-semibold uppercase tracking-wide mb-1">
                    Ciekawostka
                  </p>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {currentItem.trivia}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Timeline */}
      <div className="card p-6">
        <div className="mb-4 text-center">
          <p className="text-gray-400 text-sm">
            Kliknij na osi czasu, aby wskazać rok premiery
          </p>
          {hoverYear && (
            <p className="text-purple-400 text-xl font-bold mt-2">
              {hoverYear}
            </p>
          )}
        </div>

        <div
          className="relative h-32 bg-gray-800 rounded-lg cursor-pointer overflow-hidden"
          onClick={handleTimelineClick}
          onMouseMove={handleTimelineMove}
          onMouseLeave={() => setHoverYear(null)}
        >
          {/* Year markers */}
          {years.filter((_, i) => i % 5 === 0).map(year => (
            <div
              key={year}
              className="absolute top-0 bottom-0 flex flex-col items-center justify-between"
              style={{ left: `${getYearPosition(year)}%` }}
            >
              <div className="w-px h-full bg-gray-700" />
              <span className="absolute bottom-2 text-xs text-gray-500 -translate-x-1/2">
                {year}
              </span>
            </div>
          ))}

          {/* Hover indicator */}
          {hoverYear && (
            <div
              className="absolute top-0 bottom-0 w-0.5 bg-purple-500 transition-all"
              style={{ left: `${getYearPosition(hoverYear)}%` }}
            />
          )}

          {/* Placed items */}
          {placedItems.map((placed, index) => (
            <div
              key={index}
              className="absolute top-1/2 -translate-y-1/2 transition-all"
              style={{ left: `${getYearPosition(placed.item.year)}%` }}
            >
              <div
                className={`w-4 h-4 rounded-full border-2 -translate-x-1/2 ${
                  placed.yearDifference === 0
                    ? 'bg-green-500 border-green-300'
                    : placed.yearDifference <= 2
                    ? 'bg-yellow-500 border-yellow-300'
                    : 'bg-red-500 border-red-300'
                }`}
                title={`${placed.item.title} (${placed.item.year})`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Decade selector (alternative input) */}
      <div className="card p-4">
        <p className="text-gray-400 text-sm text-center mb-2">lub wybierz dekadę</p>
        <div className="grid grid-cols-3 md:grid-cols-7 gap-2">
          {['1960', '1970', '1980', '1990', '2000', '2010', '2020'].map(decade => (
            <button
              key={decade}
              onClick={() => onYearSelect(parseInt(decade) + 5)}
              className="btn-secondary py-2 text-sm"
            >
              {decade}s
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
