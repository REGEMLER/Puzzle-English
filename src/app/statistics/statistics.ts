import { getAllRounds, getRound } from '../levels/round';

export function getStatistics() {
    const givenUpSentences = localStorage.getItem('givenUpSentences');
    if (givenUpSentences) {
        const sentences = JSON.parse(givenUpSentences);
        return sentences;
    }
    return [];
}

export function clearStatistics() {
    localStorage.removeItem('givenUpSentences');
}

export function setStatistics(sectence: string) {
    const givenUpSentences = getStatistics();
    givenUpSentences.push(sectence);
    localStorage.setItem('givenUpSentences', JSON.stringify(givenUpSentences));
}

export function sortStatistics() {
    const rounds = getAllRounds();
    const round = Number(getRound()) - 1;
    const currentRound = rounds[round].words;
    const allRoundWords = currentRound.map((item) => item.textExample);
    const givenUpWords = getStatistics();
    allRoundWords.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = item;
        if (givenUpWords.includes(item)) {
            const redList = document.querySelector('.red-list');
            if (redList) {
                redList.append(li);
            }
        } else {
            const greenList = document.querySelector('.green-list');
            if (greenList) {
                greenList.append(li);
            }
        }
    });
}
