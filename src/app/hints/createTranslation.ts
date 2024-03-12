import { checkTranslationHint } from './checkTranslationHint';

export function createTranslation(text: string) {
    const translationElement = document.querySelector('.translation');
    const newTranslationElement = document.createElement('div');
    const isVisible = checkTranslationHint();
    if (translationElement) {
        newTranslationElement.textContent = text;
        newTranslationElement.classList.add('translation');
        if (!isVisible) newTranslationElement.classList.add('translation-hidden');
        translationElement.replaceWith(newTranslationElement);
    }
}
