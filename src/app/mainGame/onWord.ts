import { createWord } from './createWord';
import { checkSectence } from './checkSectence';
import { onContinue } from './onContinue';
import { onCheck } from './onCheck';
import { showTranslation } from '../hints/onTranslation';
import { enableResultButton } from '../statistics/enableResultButton';
import { selector } from './selector';

function onLastWord(sectence: number) {
    const checkButton = document.getElementById('check');
    if (checkButton instanceof HTMLButtonElement) {
        checkButton.disabled = false;
        if (!checkSectence(sectence)) {
            checkButton.addEventListener('click', onCheck(sectence), {
                once: true,
            });
        } else {
            enableResultButton(sectence);
            showTranslation();
            checkButton.textContent = 'Continue';
            checkButton.addEventListener('click', onContinue(sectence), {
                once: true,
            });
        }
    }
}

export function onWord(element: HTMLElement, sectence: number) {
    element.addEventListener('click', (event: MouseEvent) => {
        const target = event.target;
        const { sentenceElement, sourceElements } = selector(sectence);
        if (target instanceof HTMLDivElement && target.parentElement === sourceElements) {
            target.classList.add(`word_up${sectence}`);
            target.addEventListener('transitionend', () => {
                const word = createWord(target.textContent, sectence, 'back');
                sentenceElement.append(word);
                target.remove();
                if (sourceElements && sourceElements.children.length === 0) {
                    onLastWord(sectence);
                }
            });
        }
    });
}
