import { level1 } from '../../public/data/wordCollectionLevel1';

export function onCheck(sectence: number, round: number) {
    return (event: MouseEvent) => {
        const target = event.target;
        const rounds = level1.rounds;
        const sentenceElements = [...document.querySelectorAll('.sentence_block')];
        const sentenceElement = sentenceElements[sectence];
        const userWords = [...sentenceElement.querySelectorAll('.word')];

        const trueSentence = rounds[round].words[sectence].textExample;
        const trueWordsArray = trueSentence.split(' ');
        userWords.forEach((word, index) => {
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
