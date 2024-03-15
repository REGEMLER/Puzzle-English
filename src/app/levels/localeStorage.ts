import { getLevel } from './level';
import { getRound } from './round';

export function getRoundFromLocaleStorage() {
    const savedRounds = localStorage.getItem('savedRounds');
    if (savedRounds) {
        const levels = JSON.parse(savedRounds);
        return levels;
    }
    const levels = {
        level1: [],
        level2: [],
        level3: [],
        level4: [],
        level5: [],
        level6: [],
    };
    return levels;
}

export function pushRoundToLocaleStorage() {
    const round = getRound();
    const level = getLevel();
    const oldRounds = getRoundFromLocaleStorage();
    const levelName = `level${level}`;
    const currentLevel = oldRounds[levelName];
    const newCurrentLevel = [...currentLevel, ...round];
    const newRounds = {
        ...oldRounds,
        [levelName]: newCurrentLevel,
    };
    localStorage.setItem('savedRounds', JSON.stringify(newRounds));
}
