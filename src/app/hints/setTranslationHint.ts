import { checkTranslationHint } from './checkTranslationHint';
export function setTranslationHint() {
    const translationButton = document.getElementById('translation');
    const translationElement = document.querySelector('.translation');
    const isTransition = checkTranslationHint();
    if (translationButton && translationElement) {
        if (isTransition) {
            translationElement.classList.remove('translation-hidden');
            translationButton.textContent = 'Hide text';
            translationButton.classList.remove('translation_active');
        } else {
            translationElement.classList.add('translation-hidden');
            translationButton.textContent = 'Show text';
            translationButton.classList.add('translation_active');
        }
    }
}
