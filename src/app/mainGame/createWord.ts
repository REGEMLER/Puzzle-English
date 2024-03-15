import { onWord } from './onWord';
import { onWordBack } from './onWordBack';

export function createWord(word: string | null, sectence: number, listener?: string) {
    const wordElement = document.createElement('div');
    wordElement.classList.add('word');
    wordElement.textContent = word;
    if (listener === 'back') {
        onWordBack(wordElement, sectence);
    }
    if (listener === 'up') {
        onWord(wordElement, sectence);
    }
    return wordElement;
}
