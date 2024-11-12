import React, { useState } from 'react';
import { Game } from 'services/gameService/types';
import { BetModal } from 'components/BetModal';

interface GameCardProps {
  game: Game;
}

export const GameCard: React.FC<GameCardProps> = ({ game }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="game-card">
      <h4>{game.home} vs {game.away}</h4>
      <p>Odds: {game.home} ({game.oddsHome}) - {game.away} ({game.oddsAway})</p>
      <p>Bets: {game.home} ({game.betsHome}) - {game.away} ({game.betsAway})</p>
      <button onClick={() => setShowModal(true)}>Place a Bet</button>
      
      {showModal && (
        <BetModal game={game} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};
