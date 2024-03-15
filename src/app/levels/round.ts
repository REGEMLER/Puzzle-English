import { getAllLevels, getLevel, cleanResultBlock } from './level';
import { roundCreator } from '../mainGame/roundCreator';

export function getRoundToLocaleStorage() {
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

export function getRound(): string {
    const round = localStorage.getItem('round');
    if (!round) return '1';
    return round;
}

export function pushRoundToLocaleStorage() {
    const round = getRound();
    const level = getLevel();
    const oldRounds = getRoundToLocaleStorage();
    const levelName = `level${level}`;
    const currentLevel = oldRounds[levelName];
    const newCurrentLevel = [...currentLevel, ...round];
    const newRounds = {
        ...oldRounds,
        [levelName]: newCurrentLevel,
    };
    localStorage.setItem('savedRounds', JSON.stringify(newRounds));
}

export function getAllRounds() {
    const AllLevels = getAllLevels();
    const currentLevel = Number(getLevel()) - 1;
    const level = AllLevels[currentLevel];
    const rounds = level.rounds;
    return rounds;
}

export function setRound(round: string) {
    localStorage.setItem('round', round);
}

export function onRound(event: Event) {
    if (event.target instanceof HTMLSelectElement) {
        const value = event.target.value;
        if (value === '') return;
        setRound(value);
        cleanResultBlock();
        roundCreator(0);
    }
}

export function createRoundListener() {
    const roundElement = document.getElementById('round');
    if (roundElement) {
        roundElement.addEventListener('change', onRound);
    }
}

export function markRound() {
    const roundSelector = document.getElementById('round');
    if (roundSelector) {
        const roundElements = [...roundSelector.querySelectorAll('option')];
        const currentRound = roundElements.find((_, index) => index === Number(getRound()));
        currentRound?.classList.add('option-complete');
    }
}
