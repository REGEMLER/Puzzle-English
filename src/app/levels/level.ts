import { ILevel } from '../../public/data/ILevel';
import { level1 } from '../../public/data/wordCollectionLevel1';
import { level2 } from '../../public/data/wordCollectionLevel2';
import { level3 } from '../../public/data/wordCollectionLevel3';
import { level4 } from '../../public/data/wordCollectionLevel4';
import { level5 } from '../../public/data/wordCollectionLevel5';
import { level6 } from '../../public/data/wordCollectionLevel6';
import { roundCreator } from '../mainGame/roundCreator';
import { getAllRounds, setRound } from './round';

export function getAllLevels(): ILevel[] {
    return [level1, level2, level3, level3, level4, level5, level6];
}

export function getLevel(): string {
    const level = localStorage.getItem('level');
    if (!level) return '1';
    return level;
}

export function setLevel(level: string) {
    localStorage.setItem('level', level);
}

export function cleanResultBlock() {
    const sentenceElements = [...document.querySelectorAll('.sentence_block')];
    sentenceElements.forEach((item) => {
        const newItem = item;
        newItem.innerHTML = '';
    });
}

export function createRoundOptions() {
    const roundElement = document.getElementById('round');
    const numberOfRounds = getAllRounds().length;
    if (roundElement) {
        roundElement.innerHTML = '<option value="">Round</option>';
        for (let i = 1; i < numberOfRounds + 1; i += 1) {
            const option = document.createElement('option');
            option.value = String(i);
            option.textContent = String(i);
            roundElement.append(option);
        }
    }
}

export function onLevel(event: Event) {
    if (event.target instanceof HTMLSelectElement) {
        const value = event.target.value;
        if (value === '') return;
        setLevel(value);
        getLevel();
        cleanResultBlock();
        createRoundOptions();
        setRound('1');
        roundCreator(0);
    }
}

export function createLevelListener() {
    const levelElement = document.getElementById('level');
    if (levelElement) {
        levelElement.addEventListener('change', onLevel);
    }
}

export function markLevel() {
    const levelSelector = document.getElementById('level');
    if (levelSelector) {
        const levelElements = [...levelSelector.querySelectorAll('option')];
        const currentRound = levelElements.find((_, index) => index === Number(getLevel()));
        currentRound?.classList.add('option-complete');
    }
}
