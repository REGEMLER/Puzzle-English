import { getAllRounds, getRound } from '../levels/round';
import { onWord } from './onWord';
import { onWordBack } from './onWordBack';
import { onGiveUp } from './onGiveUp';
import { createTranslation } from '../hints/createTranslation';

export function createWord(word: string | null, sectenceNumber: number, listener?: string) {
    const wordElement = document.createElement('div');
    wordElement.classList.add('word');
    wordElement.textContent = word;
    if (listener === 'back') {
        onWordBack(wordElement, sectenceNumber);
    }
    if (listener === 'up') {
        onWord(wordElement, sectenceNumber);
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

export function roundCreator(sectenceNumber: number) {
    const rounds = getAllRounds();
    const round = Number(getRound()) - 1;
    disableButtons();
    const sectence = rounds[round].words[sectenceNumber].textExample;
    const translation = rounds[round].words[sectenceNumber].textExampleTranslate;
    createTranslation(translation);
    console.log(sectence);
    const roundsElements = document.querySelector('.source_block') as HTMLElement;
    roundsElements.innerHTML = '';
    const words = sectence.split(' ');
    const wordsSorted = words.sort(() => Math.random() - 0.5);
    for (let i = 0; i < wordsSorted.length; i += 1) {
        const wordElement = createWord(wordsSorted[i], sectenceNumber, 'up');
        roundsElements.append(wordElement);
    }
    const giveUpButton = document.getElementById('giveUp');
    const newGiveUpButton = document.createElement('button');
    newGiveUpButton.id = 'giveUp';
    newGiveUpButton.classList.add('btn');
    newGiveUpButton.textContent = 'Give up';
    if (giveUpButton instanceof HTMLButtonElement) {
        giveUpButton.replaceWith(newGiveUpButton);
        newGiveUpButton.addEventListener('click', onGiveUp(sectenceNumber), {
            once: true,
        });
    }
}
