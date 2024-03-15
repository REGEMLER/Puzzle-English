import { onGiveUp } from './onGiveUp';

export function createGiveUpButton(sectence: number) {
    const giveUpButton = document.getElementById('giveUp');
    const newGiveUpButton = document.createElement('button');
    newGiveUpButton.id = 'giveUp';
    newGiveUpButton.classList.add('btn');
    newGiveUpButton.textContent = 'Give up';
    if (giveUpButton instanceof HTMLButtonElement) {
        giveUpButton.replaceWith(newGiveUpButton);
        newGiveUpButton.addEventListener('click', onGiveUp(sectence), {
            once: true,
        });
    }
}
