export type SportName = 'football' | 'tennis' | 'basketball'

export type Games = {
    [key in SportName]: Game[]
}

export interface Game {
    id: string;
    sport: SportName;
    home: string;
    away: string;
    oddsHome: number;
    oddsAway: number;
    betsHome: number;
    betsAway: number;
}
