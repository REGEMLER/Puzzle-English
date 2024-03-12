import { createWord } from './roundCreator';
import { checkSectence } from './checkSectence';
import { onContinue } from './onContinue';
import { onCheck } from './onCheck';
import { showTranslation } from '../hints/onTranslation';

export function onWord(element: HTMLElement, sectenceNumber: number, roundNumber: number) {
    element.addEventListener('click', (event: MouseEvent) => {
        const target = event.target;
        const sentenceElements = [...document.querySelectorAll('.sentence_block')][sectenceNumber];
        const sourceBlock = document.querySelector('.source_block') as HTMLElement;
        if (target instanceof HTMLDivElement && target.parentElement === sourceBlock) {
            target.classList.add(`word_up${sectenceNumber}`);
            target.addEventListener('transitionend', () => {
                const word = createWord(target.textContent, sectenceNumber, roundNumber, 'back');
                sentenceElements.append(word);
                target.remove();
                if (sourceBlock.children.length === 0) {
                    const checkButton = document.getElementById('check');
                    if (checkButton instanceof HTMLButtonElement) {
                        checkButton.disabled = false;
                        if (!checkSectence(sectenceNumber, roundNumber)) {
                            checkButton.addEventListener('click', onCheck(sectenceNumber, roundNumber), {
                                once: true,
                            });
                        } else {
                            showTranslation();
                            checkButton.textContent = 'Continue';
                            checkButton.addEventListener('click', onContinue(sectenceNumber, roundNumber), {
                                once: true,
                            });
                        }
                    }
                }
            });
        }
    });
}
