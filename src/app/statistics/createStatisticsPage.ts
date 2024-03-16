import { onContinue } from '../mainGame/onContinue';
import { sortStatistics } from './statistics';
import './statistics.css';

export function closeModal() {
    const modal = document.querySelector('.modal');
    if (modal) {
        modal.remove();
        document.body.style.overflowY = '';
    }
    const resultButton = document.getElementById('result');
    if (resultButton instanceof HTMLButtonElement) {
        resultButton.disabled = true;
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
        <h2 class="subtitle subtitle-green">I know</h2>
        <ul class="list green-list"></ul>
        <h2 class=" subtitle subtitle-red">I do not know</h2>
        <ul class= "list red-list"></ul>
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
                continueButton.addEventListener('click', onContinue(sectence));
                continueButton.addEventListener('click', closeModal);
            }
        }
        sortStatistics();
    };
}
