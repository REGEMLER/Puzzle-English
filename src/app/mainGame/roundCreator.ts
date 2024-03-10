import { level1 } from '../../public/data/wordCollectionLevel1';
import { onWord } from './onWord';
import { onWordBack } from './onWordBack';

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

export function roundCreator(sectenceNumber: number, roundNumber: number) {
    const rounds = level1.rounds;
    const continueButton = document.getElementById('continue');
    if (continueButton instanceof HTMLButtonElement) {
        continueButton.disabled = true;
    }
    const sectence = rounds[roundNumber].words[sectenceNumber].textExample;
    console.log(sectence);
    const roundsElements = document.querySelector('.source_block') as HTMLElement;
    roundsElements.innerHTML = '';
    const words = sectence.split(' ');
    const wordsSorted = words.sort(() => Math.random() - 0.5);
    for (let i = 0; i < wordsSorted.length; i += 1) {
        const wordElement = createWord(wordsSorted[i], sectenceNumber, roundNumber, 'up');
        roundsElements.append(wordElement);
    }
}
