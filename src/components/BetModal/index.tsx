import React, { useState } from 'react';
import { Game } from 'services/gameService/types';
import { useDispatch } from 'react-redux';
import { placeBet } from 'store/gameSlice';

interface BetModalProps {
  game: Game;
  onClose: () => void;
}

export const BetModal: React.FC<BetModalProps> = ({ game, onClose }) => {
  const [amount, setAmount] = useState<string>('');
  const [selectedTeam, setSelectedTeam] = useState<'home' | 'away' | null>(null);
  const dispatch = useDispatch();

  const handleBet = () => {
    if (selectedTeam && amount && Number(amount) > 0) {
      dispatch(placeBet({ id: game.id, team: selectedTeam, amount: Number(amount), sport: game.sport }));
      onClose();
    }
  };

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value.replace(/[^0-9]/g, '');
    setAmount(newValue);
  };
  
  const isSubmitDisabled = !selectedTeam || !amount || Number(amount) <= 0;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Place a Bet</h2>

        <p>Select a team:</p>
        <div className="team-buttons">
          <button className={selectedTeam === 'home' ? 'selected' : ''} onClick={() => setSelectedTeam('home')}>
            {game.home}
          </button>
          <button className={selectedTeam === 'away' ? 'selected' : ''} onClick={() => setSelectedTeam('away')}>
            {game.away}
          </button>
        </div>

        <input
          type="text"
          value={amount}
          onChange={handleAmountChange}
          placeholder="Enter bet amount"
        />

        <div className="actions">
          <button className="submit" onClick={handleBet} disabled={isSubmitDisabled}>
            Submit Bet
          </button>
          <button className="cancel" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
