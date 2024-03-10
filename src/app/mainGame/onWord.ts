import { roundCreator, createWord } from './roundCreator';
let sectenceNumber = 0;

export function onWordBack(event: MouseEvent) {
    const target = event.target;
    const sentenceElements = [...document.querySelectorAll('.sentence_block')][sectenceNumber];
    const sourceBlock = document.querySelector('.source_block') as HTMLElement;
    if (target instanceof HTMLDivElement && target.parentElement === sentenceElements) {
        target.classList.add(`word_down${sectenceNumber}`);
        target.addEventListener('transitionend', () => {
            const word = createWord(target.textContent);
            sourceBlock.append(word);
            target.remove();
        });
    }
}

export function onWord(event: MouseEvent) {
    const target = event.target;
    const sentenceElements = [...document.querySelectorAll('.sentence_block')][sectenceNumber];
    const sourceBlock = document.querySelector('.source_block') as HTMLElement;
    if (target instanceof HTMLDivElement && target.parentElement === sourceBlock) {
        target.classList.add(`word_up${sectenceNumber}`);
        target.addEventListener('transitionend', () => {
            const word = createWord(target.textContent);
            sentenceElements.append(word);
            target.remove();
            if (sourceBlock.children.length === 0) {
                sectenceNumber += 1;
                roundCreator(sectenceNumber);
            }
        });
    }
}
