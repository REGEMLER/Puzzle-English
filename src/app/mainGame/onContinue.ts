import { sectenceCreator } from './sectenceCreator';
import { createWord } from './createWord';
import { completeLastLevel, completeLevel, completeRound } from './complete';
import { getLevel } from '../levels/level';
import { selector } from './selector';

export function onContinue(sectence: number) {
    return () => {
        const { rounds, round, trueSentence, sentenceElement } = selector(sectence);
        sentenceElement.innerHTML = '';
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
        sectenceCreator(newSectenceNumber);
    };
}
