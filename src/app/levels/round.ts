import { getAllLevels, getLevel, cleanResultBlock } from './level';
import { sectenceCreator } from '../mainGame/sectenceCreator';
import { getRoundFromLocaleStorage } from './localeStorage';

export function getRound(): string {
    const round = localStorage.getItem('round');
    if (!round) return '1';
    return round;
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

export function createRoundOptions() {
    const level = getLevel();
    const completedRounds = getRoundFromLocaleStorage();
    const currentLevelStrings = completedRounds[`level${level}`];
    const currentLevel = currentLevelStrings.map((item: string) => Number(item));
    const roundElement = document.getElementById('round');
    const numberOfRounds = getAllRounds().length;
    if (roundElement) {
        roundElement.innerHTML = '<option value="">Round</option>';
        for (let i = 1; i < numberOfRounds + 1; i += 1) {
            const option = document.createElement('option');
            option.value = String(i);
            option.textContent = String(i);
            if (currentLevel.includes(i)) option.classList.add('option-complete');
            roundElement.append(option);
        }
    }
}

export function onRound(event: Event) {
    if (event.target instanceof HTMLSelectElement) {
        const value = event.target.value;
        if (value === '') return;
        setRound(value);
        cleanResultBlock();
        sectenceCreator(0);
    }
}

export function createRoundListener() {
    const roundElement = document.getElementById('round');
    if (roundElement) {
        roundElement.addEventListener('change', onRound);
    }
}
