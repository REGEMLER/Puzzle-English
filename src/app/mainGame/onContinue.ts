import { getAllRounds, getRound, setRound, markRound, pushRoundToLocaleStorage } from '../levels/round';
import { cleanResultBlock, markLevel, getLevel, setLevel } from '../levels/level';
import { createRoundOptions, createLevelOptions } from '../levels/level';
import { roundCreator, createWord } from './roundCreator';

export function completeLastLevel() {
    markLevel();
    setLevel('1');
    setRound('1');
    cleanResultBlock();
    roundCreator(0);
}

export function completeLevel(level: number) {
    markLevel();
    const newLevel = level + 1;
    setLevel(String(newLevel));
    const newRound = 1;
    cleanResultBlock();
    createLevelOptions();
    createRoundOptions();
    setRound(String(newRound));
    roundCreator(0);
}

export function completeRound(round: number) {
    pushRoundToLocaleStorage();
    markRound();
    let newRound = round + 1;
    cleanResultBlock();
    newRound += 1;
    createLevelOptions();
    createRoundOptions();
    setRound(String(newRound));
    roundCreator(0);
}

export function onContinue(sectence: number) {
    return () => {
        const rounds = getAllRounds();
        const round = Number(getRound()) - 1;
        const sentenceElements = [...document.querySelectorAll('.sentence_block')];
        const sentenceElement = sentenceElements[sectence];
        sentenceElement.innerHTML = '';
        const trueSentence = rounds[round].words[sectence].textExample;
        const words = trueSentence.split(' ');
        for (let i = 0; i < words.length; i += 1) {
            const wordElement = createWord(words[i], sectence);
            sentenceElement.append(wordElement);
        }
        const level = Number(getLevel());
        if (level === 6) {
            completeLastLevel();
            return;
        }
        if (round >= rounds.length - 1) {
            completeLevel(level);
            return;
        }

        if (sectence >= rounds[round].words.length - 1) {
            completeRound(round);
            return;
        }
        let newSectenceNumber = sectence;
        newSectenceNumber += 1;
        roundCreator(newSectenceNumber);
    };
}
