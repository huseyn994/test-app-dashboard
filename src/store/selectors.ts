import { SportName } from 'services/gameService/types';
import { RootState } from './index';

export const selectGames = (state: RootState) => state.games.games;

export const selectSelectedSport = (state: RootState) => state.games.selectedSport;

export const selectSportsNames = (state: RootState) => Object.keys(state.games.games) as (SportName)[]