import { onContinue } from '../mainGame/onContinue';
import './statistics.css';

export function closeModal() {
    const modal = document.querySelector('.modal');
    if (modal) {
        modal.remove();
        document.body.style.overflowY = '';
    }
}

export function createStatisticsPage(sectence: number) {
    return () => {
        const root: HTMLElement | null = document.getElementById('root');
        const modal = document.createElement('DIV');
        modal.classList.add('modal');
        modal.innerHTML = `
        <div class="modal_inner modal_bg">
        <span class="X">X</span>
        <button class="btn" id="continue">Continue</button>
        </div>
        `;
        if (root) {
            root.append(modal);
            root.style.overflowY = 'hidden';
            const closeIcon = modal.querySelector('.X');
            if (closeIcon) {
                closeIcon.addEventListener('click', closeModal);
            }
            const continueButton = document.getElementById('continue');
            if (continueButton) {
                console.log(continueButton);
                continueButton.addEventListener('click', onContinue(sectence));
                continueButton.addEventListener('click', closeModal);
            }
        }
    };
}
