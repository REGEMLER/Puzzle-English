import { getAllRounds, getRound } from '../levels/round';
export function selector(sectence: number) {
    const rounds = getAllRounds();
    const round = Number(getRound()) - 1;
    const trueSentence = rounds[round].words[sectence].textExample;
    const translation = rounds[round].words[sectence].textExampleTranslate;
    const sentenceElements = [...document.querySelectorAll('.sentence_block')];
    const sourceElements = document.querySelector('.source_block');
    const sentenceElement = sentenceElements[sectence];
    const wordElements = [...sentenceElement.querySelectorAll('.word')];
    return {
        rounds,
        round,
        trueSentence,
        sentenceElements,
        sentenceElement,
        wordElements,
        sourceElements,
        translation,
    };
}
