import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { getGames } from 'services/gameService';
import { Games, Game, SportName } from 'services/gameService/types';

interface GameState {
  games: Games | {};
  selectedSport?: SportName;
}

const initialState: GameState = {
  games: {}
};

export const fetchGames = createAsyncThunk('games/fetchGames', async () => {
  const games = await getGames();
  return games;
});

const gameSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    setGames: (state, action: PayloadAction<Games>) => {
      state.games = action.payload;
    },
    setSelectedSport: (state, action: PayloadAction<GameState['selectedSport']>) => {
      state.selectedSport = action.payload;
    },

    placeBet: (
      state,
      action: PayloadAction<{ id: Game['id']; team: 'home' | 'away'; amount: number, sport: SportName }>
    ) => {
      const { id, team, amount, sport } = action.payload;
      const gamesBySport = state.games as Games;  // Type assertion
      const selectedGame = gamesBySport[sport].find(game => game.id === id);
      if (selectedGame) {
        if (team === 'home') {
          selectedGame.betsHome += amount;
        } else {
          selectedGame.betsAway += amount;
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGames.fulfilled, (state, action) => {
      state.games = action.payload;
    });
  },
});

export const { setSelectedSport, placeBet } = gameSlice.actions;
export default gameSlice.reducer;
