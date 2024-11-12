import { Games } from './types';

const data: Games = {
    football: [
        {
            id: '1',
            sport: 'football',
            home: 'Team A',
            away: 'Team B',
            oddsHome: 1.5,
            oddsAway: 2.3,
            betsHome: 100,
            betsAway: 150,
        },
        {
            id: '2',
            sport: 'football',
            home: 'Team C',
            away: 'Team D',
            oddsHome: 1.5,
            oddsAway: 2.3,
            betsHome: 100,
            betsAway: 150,
        },
    ],
    basketball: [
        {
            id: '3',
            sport: 'basketball',
            home: 'Team D',
            away: 'Team E',
            oddsHome: 1.8,
            oddsAway: 2.0,
            betsHome: 120,
            betsAway: 180,
        },
    ],
    tennis: [
        {
            id: '4',
            sport: 'tennis',
            home: 'Player F',
            away: 'Player G',
            oddsHome: 2.5,
            oddsAway: 1.5,
            betsHome: 200,
            betsAway: 180,
        },
    ]
};


export { data };
