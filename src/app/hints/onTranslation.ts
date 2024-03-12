import { checkTranslationHint } from './checkTranslationHint';

export function showTranslation() {
    const translationElement = document.querySelector('.translation');
    if (translationElement) {
        translationElement.classList.remove('translation-hidden');
    }
}

export function onTranslation(event: MouseEvent) {
    const target = event.target;
    const translationElement = document.querySelector('.translation');
    let translationHint: boolean | string = checkTranslationHint();
    if (!translationHint) {
        translationHint = 'on';
    } else {
        translationHint = 'off';
    }
    if (translationElement && target instanceof HTMLButtonElement) {
        if (translationHint === 'off') {
            translationElement.classList.add('translation-hidden');
            target.textContent = 'Show text';
            target.classList.add('translation_active');
        } else {
            translationElement.classList.remove('translation-hidden');
            target.textContent = 'Hide text';
            target.classList.remove('translation_active');
        }
    }
    localStorage.setItem('translationHint', translationHint);
}

export function createTranslationListener() {
    const translationButton = document.getElementById('translation');
    if (translationButton) translationButton.addEventListener('click', onTranslation);
}
