import { getAllRounds, getRound, setRound } from '../levels/round';
import { cleanResultBlock } from '../levels/level';
import { roundCreator } from './roundCreator';
import { createWord } from './roundCreator';

export function onContinue(sectenceNumber: number) {
    return () => {
        const rounds = getAllRounds();
        const round = Number(getRound()) - 1;
        const sentenceElements = [...document.querySelectorAll('.sentence_block')];
        const sentenceElement = sentenceElements[sectenceNumber];
        sentenceElement.innerHTML = '';
        const sectence = rounds[round].words[sectenceNumber].textExample;
        const words = sectence.split(' ');
        for (let i = 0; i < words.length; i += 1) {
            const wordElement = createWord(words[i], sectenceNumber);
            sentenceElement.append(wordElement);
        }

        let newSectenceNumber = sectenceNumber;

        if (sectenceNumber >= rounds[round].words.length - 1) {
            let newRound = round + 1;
            cleanResultBlock();
            newSectenceNumber = 0;
            newRound += 1;
            setRound(String(newRound));
            console.log('WIN');
            roundCreator(newSectenceNumber);
            return;
        }
        newSectenceNumber += 1;
        roundCreator(newSectenceNumber);
    };
}
