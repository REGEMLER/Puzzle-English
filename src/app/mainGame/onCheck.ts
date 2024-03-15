import { selector } from './selector';

export function onCheck(sectence: number) {
    return (event: MouseEvent) => {
        const target = event.target;
        const { trueSentence, wordElements } = selector(sectence);
        const trueWordsArray = trueSentence.split(' ');
        wordElements.forEach((word, index) => {
            if (word.textContent !== trueWordsArray[index]) {
                word.classList.add('word-wrong');
            } else {
                word.classList.add('word-right');
                setTimeout(() => {
                    word.classList.remove('word-right');
                }, 3000);
            }
        });
        if (target instanceof HTMLButtonElement) target.disabled = true;
    };
}
