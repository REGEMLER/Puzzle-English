import { getAllRounds, getRound } from '../levels/round';
import { createWord } from './roundCreator';
import { onContinue } from './onContinue';
import { showTranslation } from '../hints/onTranslation';

export function onGiveUp(sectence: number) {
    return () => {
        showTranslation();
        const rounds = getAllRounds();
        const round = Number(getRound()) - 1;
        const sentenceElements = [...document.querySelectorAll('.sentence_block')];
        const roundsElements = document.querySelector('.source_block') as HTMLElement;
        roundsElements.innerHTML = '';
        const sentenceElement = sentenceElements[sectence];
        sentenceElement.innerHTML = '';
        const trueSentence = rounds[round].words[sectence].textExample;
        const trueWordsArray = trueSentence.split(' ');
        for (let i = 0; i < trueWordsArray.length; i += 1) {
            const wordElement = createWord(trueWordsArray[i], sectence);
            sentenceElement.append(wordElement);
        }
        const checkButton = document.getElementById('check');
        if (checkButton instanceof HTMLButtonElement) {
            checkButton.disabled = false;
            checkButton.textContent = 'Continue';
            checkButton.addEventListener('click', onContinue(sectence), {
                once: true,
            });
        }
    };
}
