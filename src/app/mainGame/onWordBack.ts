import { createWord } from './createWord';
import { disableButtons } from './disableButtons';
import { checkSectence } from './checkSectence';

export function onWordBack(element: HTMLElement, sectence: number) {
    element.addEventListener('click', (event: MouseEvent) => {
        const target = event.target;
        const sentenceElements = [...document.querySelectorAll('.sentence_block')][sectence];
        const sourceBlock = document.querySelector('.source_block');
        if (target instanceof HTMLDivElement && target.parentElement === sentenceElements && sourceBlock) {
            target.classList.add(`word_down${sectence}`);
            target.addEventListener('transitionend', () => {
                const word = createWord(target.textContent, sectence, 'up');
                sourceBlock.append(word);
                target.remove();
                if (sourceBlock.children.length > 0 || !checkSectence(sectence)) {
                    disableButtons();
                }
            });
        }
    });
}
