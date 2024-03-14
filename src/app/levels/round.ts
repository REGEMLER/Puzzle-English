import { getAllLevels, getLevel, cleanResultBlock } from './level';
import { roundCreator } from '../mainGame/roundCreator';

export function getAllRounds() {
    const AllLevels = getAllLevels();
    const currentLevel = Number(getLevel()) - 1;
    const level = AllLevels[currentLevel];
    const rounds = level.rounds;
    return rounds;
}

export function getRound(): string {
    const round = localStorage.getItem('round');
    if (!round) return '1';
    return round;
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
