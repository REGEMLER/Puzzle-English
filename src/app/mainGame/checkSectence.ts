import { getAllRounds, getRound } from '../levels/round';

export function checkSectence(sectenceNumber: number) {
    const rounds = getAllRounds();
    const round = Number(getRound()) - 1;
    const sectence = rounds[round].words[sectenceNumber].textExample;
    const sentenceElement = [...document.querySelectorAll('.sentence_block')][sectenceNumber];
    const wordElements = [...sentenceElement.querySelectorAll('.word')];
    const userSentance: string[] = [];
    wordElements.forEach((item) => {
        if (item.textContent) userSentance.push(item.textContent);
    });
    const userResultString = userSentance.join(' ');
    return userResultString === sectence;
}
