import { level1 } from '../../public/data/wordCollectionLevel1';
import { onWord, onWordBack } from './onWord';

export function createWord(word: string | null) {
    const wordElement = document.createElement('div');
    wordElement.classList.add('word');
    wordElement.textContent = word;
    wordElement.addEventListener('click', onWord);
    wordElement.addEventListener('click', onWordBack);
    return wordElement;
}

export function roundCreator(sectenceNumber: number) {
    const rounds = level1.rounds;
    if (sectenceNumber > rounds[0].words.length - 1) {
        console.log('WIN');
        return;
    }
    const sectence = rounds[0].words[sectenceNumber].textExample;
    const roundsElements = document.querySelector('.source_block') as HTMLElement;
    const words = sectence.split(' ');
    const wordsSorted = words.sort(() => Math.random() - 0.5);
    for (let i = 0; i < wordsSorted.length; i += 1) {
        const wordElement = createWord(wordsSorted[i]);
        roundsElements.append(wordElement);
        wordElement.addEventListener('click', onWord);
    }
}
