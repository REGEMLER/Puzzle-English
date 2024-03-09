import { roundCreator, createWord } from './roundCreator';
let sectenceNumber = 0;

export function onWord(event: MouseEvent) {
    const target = event.target;
    const sentenceElements = [...document.querySelectorAll('.sentence_block')][sectenceNumber];
    const sourceBlock = document.querySelector('.source_block') as HTMLElement;
    if (target instanceof HTMLDivElement) {
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
