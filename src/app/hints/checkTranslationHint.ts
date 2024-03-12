export function checkTranslationHint() {
    const translationHint = localStorage.getItem('translationHint');
    if (!translationHint || translationHint === 'on') {
        return true;
    }
    return false;
}
