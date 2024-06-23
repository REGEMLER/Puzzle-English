import { setRound, getRound, createRoundOptions } from '../levels/round';
import { pushRoundToLocaleStorage } from '../levels/localeStorage';
import { cleanResultBlock, getLevel, setLevel } from '../levels/level';
import { createLevelOptions } from '../levels/level';
import { markOption } from '../levels/markOption';
import { sectenceCreator } from './sectenceCreator';

export function completeLastLevel() {
    markOption('level', getLevel);
    setLevel('1');
    setRound('1');
    cleanResultBlock();
    sectenceCreator(0);
}

export function completeLevel(level: number) {
    markOption('level', getLevel);
    const newLevel = level + 1;
    setLevel(String(newLevel));
    const newRound = 1;
    cleanResultBlock();
    createLevelOptions();
    createRoundOptions();
    setRound(String(newRound));
    sectenceCreator(0);
}

export function completeRound(round: number) {
    pushRoundToLocaleStorage();
    markOption('round', getRound);
    let newRound = round + 1;
    cleanResultBlock();
    newRound += 1;
    createLevelOptions();
    createRoundOptions();
    setRound(String(newRound));
    sectenceCreator(0);
}

export function continueRound(round: number) {
    const newRound = round + 1;
    createLevelOptions();
    createRoundOptions();
    setRound(String(newRound));
    sectenceCreator(0);
}
