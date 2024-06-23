import { createTranslation } from '../hints/createTranslation';
import { disableButtons } from './disableButtons';
import { createWord } from './createWord';
import { createGiveUpButton } from './createGiveUpButton';
import { selector } from './selector';
import { createAUDIO } from '../hints/onAudio';

export function sectenceCreator(sectence: number) {
    const { trueSentence, sourceElements, translation, audioSRC } = selector(sectence);
    disableButtons();
    createTranslation(translation);
    createAUDIO(audioSRC);
    console.log(trueSentence);
    const words = trueSentence.split(' ');
    const wordsSorted = words.sort(() => Math.random() - 0.5);

    if (sourceElements) {
        sourceElements.innerHTML = '';
        for (let i = 0; i < wordsSorted.length; i += 1) {
            const wordElement = createWord(wordsSorted[i], sectence, 'up');
            sourceElements.append(wordElement);
        }
    }
    createGiveUpButton(sectence);
}
