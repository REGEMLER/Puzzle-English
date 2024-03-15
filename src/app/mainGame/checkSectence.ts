import { selector } from './selector';

export function checkSectence(sectence: number) {
    const { trueSentence, wordElements } = selector(sectence);
    const userSentance: string[] = [];
    wordElements.forEach((item) => {
        if (item.textContent) userSentance.push(item.textContent);
    });
    const userResultString = userSentance.join(' ');
    return userResultString === trueSentence;
}
