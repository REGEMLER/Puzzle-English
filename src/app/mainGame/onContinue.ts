import { level1 } from '../../public/data/wordCollectionLevel1';
import { roundCreator } from './roundCreator';
import { createWord } from './roundCreator';

export function onContinue(sectenceNumber: number, roundNumber: number) {
    return () => {
        const rounds = level1.rounds;
        const sentenceElements = [...document.querySelectorAll('.sentence_block')];
        const sentenceElement = sentenceElements[sectenceNumber];
        sentenceElement.innerHTML = '';
        const sectence = rounds[roundNumber].words[sectenceNumber].textExample;
        const words = sectence.split(' ');
        for (let i = 0; i < words.length; i += 1) {
            const wordElement = createWord(words[i], sectenceNumber, roundNumber);
            sentenceElement.append(wordElement);
        }

        let newSectenceNumber = sectenceNumber;
        let newRoundNumber = roundNumber;
        if (sectenceNumber >= rounds[roundNumber].words.length - 1) {
            sentenceElements.forEach((item) => {
                const newItem = item;
                newItem.innerHTML = '';
            });
            newSectenceNumber = 0;
            newRoundNumber += 1;
            console.log('WIN');
            roundCreator(newSectenceNumber, newRoundNumber);
            return;
        }
        newSectenceNumber += 1;
        roundCreator(newSectenceNumber, newRoundNumber);
    };
}
