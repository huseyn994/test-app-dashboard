import { Games } from './types';
import { data } from './mockData';

export const getGames = async (): Promise<Games> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(data), 500);
  });
};

export const getGamesBySport = async (sport: keyof Games) => {
  const allGames = await getGames();
  return allGames[sport] || [];
};
