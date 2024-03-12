export function createTranslation(text: string) {
    const translationElement = document.querySelector('.translation');
    if (translationElement) {
        translationElement.textContent = '';
        translationElement.textContent = text;
    }
}
