import { level1 } from '../../public/data/wordCollectionLevel1';

export function checkSectence(sectenceNumber: number, roundNumber: number) {
    const rounds = level1.rounds;
    const sectence = rounds[roundNumber].words[sectenceNumber].textExample;
    const sentenceElement = [...document.querySelectorAll('.sentence_block')][sectenceNumber];
    const wordElements = [...sentenceElement.querySelectorAll('.word')];
    const userSentance: string[] = [];
    wordElements.forEach((item) => {
        if (item.textContent) userSentance.push(item.textContent);
    });
    const userResultString = userSentance.join(' ');
    return userResultString === sectence;
}
