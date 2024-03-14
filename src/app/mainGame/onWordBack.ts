import { createWord, disableButtons } from './roundCreator';
import { checkSectence } from './checkSectence';

export function onWordBack(element: HTMLElement, sectenceNumber: number) {
    element.addEventListener('click', (event: MouseEvent) => {
        const target = event.target;
        const sentenceElements = [...document.querySelectorAll('.sentence_block')][sectenceNumber];
        const sourceBlock = document.querySelector('.source_block') as HTMLElement;
        if (target instanceof HTMLDivElement && target.parentElement === sentenceElements) {
            target.classList.add(`word_down${sectenceNumber}`);
            target.addEventListener('transitionend', () => {
                const word = createWord(target.textContent, sectenceNumber, 'up');
                sourceBlock.append(word);
                target.remove();
                if (sourceBlock.children.length > 0 || !checkSectence(sectenceNumber)) {
                    disableButtons();
                }
            });
        }
    });
}
