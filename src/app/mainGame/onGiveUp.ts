import { createWord } from './createWord';
import { onContinue } from './onContinue';
import { showTranslation } from '../hints/onTranslation';
import { selector } from './selector';
import { enableResultButton } from '../statistics/enableResultButton';
import { setStatistics } from '../statistics/statistics';

function transformButton(sectence: number) {
    const checkButton = document.getElementById('check');
    if (checkButton instanceof HTMLButtonElement) {
        checkButton.disabled = false;
        checkButton.textContent = 'Continue';
        checkButton.addEventListener('click', onContinue(sectence), {
            once: true,
        });
    }
}

export function onGiveUp(sectence: number) {
    return () => {
        const GiveUpButton = document.getElementById('giveUp');
        if (GiveUpButton instanceof HTMLButtonElement) {
            GiveUpButton.disabled = true;
        }
        const { sentenceElement, sourceElements, trueSentence } = selector(sectence);
        showTranslation();
        sentenceElement.innerHTML = '';
        if (sourceElements) {
            const sourceWords = [...sourceElements.querySelectorAll('.word')];
            sourceWords.forEach((wordElement) => {
                wordElement.classList.add(`word_up${sectence}`);
                wordElement.addEventListener('transitionend', () => {
                    wordElement.remove();
                });
            });
        }
        setTimeout(() => {
            const trueWordsArray = trueSentence.split(' ');
            for (let i = 0; i < trueWordsArray.length; i += 1) {
                const wordElement = createWord(trueWordsArray[i], sectence);
                sentenceElement.append(wordElement);
            }
            transformButton(sectence);
            enableResultButton(sectence);
            setStatistics(trueSentence);
        }, 800);
    };
}
