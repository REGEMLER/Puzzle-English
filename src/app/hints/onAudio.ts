export function createAUDIO(src: string) {
    const audioElement = document.querySelector('.audio');
    const newTranslationElement = document.createElement('audio');
    newTranslationElement.classList.add('audio');
    if (audioElement) {
        newTranslationElement.src = `https://raw.githubusercontent.com/rolling-scopes-school/rss-puzzle-data/main/${src}`;
        audioElement.replaceWith(newTranslationElement);
    }
}

export function onTranslation() {
    const audio = document.querySelector('.audio') as HTMLAudioElement;
    audio.play();
}

export function createAudioListener() {
    const auidonButton = document.getElementById('audio');
    if (auidonButton) auidonButton.addEventListener('click', onTranslation);
}
