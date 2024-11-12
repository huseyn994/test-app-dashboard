import React, { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGames, setSelectedSport } from 'store/gameSlice';
import { selectGames, selectSelectedSport, selectSportsNames } from 'store/selectors';
import { AppDispatch } from 'store';
import { GameCard } from 'components/GameCard';

export const Dashboard: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const selectedSport = useSelector(selectSelectedSport);
  const sportNames = useSelector(selectSportsNames);
  const games = useSelector(selectGames);

  const filteredGames = useMemo(() => {
    if (!selectedSport) {
      return Object.entries(games);
    }
    return Object.entries(games).filter(([sport]) => sport === selectedSport);
  }, [games, selectedSport]);

  useEffect(() => {
    dispatch(fetchGames());
  }, [dispatch]);

  return (
    <div className="dashboard">
      <div className="sports-buttons">
        <button
          className={selectedSport === undefined ? 'selected' : ''}
          onClick={() => dispatch(setSelectedSport(undefined))}
        >
          All Sports
        </button>
        {sportNames.map((sportName) => (
          <button
            className={selectedSport === sportName ? 'selected' : ''}
            key={sportName}
            onClick={() => dispatch(setSelectedSport(sportName))}
          >
            {sportName}
          </button>
        ))}
      </div>

      {filteredGames.map(([sport, gameList]) => (
        <div key={sport}>
          <h3>{sport}</h3>
          <div className="game-list">
            {gameList.map((game) => <GameCard key={game.id} game={game} />)}
          </div>
        </div>
      ))}
    </div>
  );
};
