import { level1 } from '../../public/data/wordCollectionLevel1';
import { onWord } from './onWord';
import { onWordBack } from './onWordBack';
import { onGiveUp } from './onGiveUp';
import { createTranslation } from '../hints/createTranslation';

export function createWord(word: string | null, sectenceNumber: number, roundNumber: number, listener?: string) {
    const wordElement = document.createElement('div');
    wordElement.classList.add('word');
    wordElement.textContent = word;
    if (listener === 'back') {
        onWordBack(wordElement, sectenceNumber, roundNumber);
    }
    if (listener === 'up') {
        onWord(wordElement, sectenceNumber, roundNumber);
    }
    return wordElement;
}

export function disableButtons() {
    const checkButton = document.getElementById('check');
    if (checkButton instanceof HTMLButtonElement) {
        checkButton.disabled = true;
        checkButton.textContent = 'Check';
    }
}

export function roundCreator(sectenceNumber: number, roundNumber: number) {
    const rounds = level1.rounds;
    disableButtons();
    const sectence = rounds[roundNumber].words[sectenceNumber].textExample;
    const translation = rounds[roundNumber].words[sectenceNumber].textExampleTranslate;
    createTranslation(translation);
    console.log(sectence);
    const roundsElements = document.querySelector('.source_block') as HTMLElement;
    roundsElements.innerHTML = '';
    const words = sectence.split(' ');
    const wordsSorted = words.sort(() => Math.random() - 0.5);
    for (let i = 0; i < wordsSorted.length; i += 1) {
        const wordElement = createWord(wordsSorted[i], sectenceNumber, roundNumber, 'up');
        roundsElements.append(wordElement);
    }
    const giveUpButton = document.getElementById('giveUp');
    if (giveUpButton instanceof HTMLButtonElement) {
        giveUpButton.addEventListener('click', onGiveUp(sectenceNumber, roundNumber), {
            once: true,
        });
    }
}
