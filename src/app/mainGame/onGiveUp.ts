import { createWord } from './createWord';
import { onContinue } from './onContinue';
import { showTranslation } from '../hints/onTranslation';
import { selector } from './selector';
import { enableResultButton } from '../statistics/enableResultButton';

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
        const { sentenceElement, sourceElements, trueSentence } = selector(sectence);
        showTranslation();
        if (sourceElements) sourceElements.innerHTML = '';
        sentenceElement.innerHTML = '';
        const trueWordsArray = trueSentence.split(' ');
        for (let i = 0; i < trueWordsArray.length; i += 1) {
            const wordElement = createWord(trueWordsArray[i], sectence);
            sentenceElement.append(wordElement);
        }
        transformButton(sectence);
        enableResultButton(sectence);
    };
}
