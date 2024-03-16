import { selector } from '../mainGame/selector';
import { createStatisticsPage } from './createStatisticsPage';

export function enableResultButton(sectence: number) {
    const { rounds, round } = selector(sectence);
    const resultButton = document.getElementById('result');
    if (sectence >= rounds[round].words.length - 1 && resultButton instanceof HTMLButtonElement) {
        resultButton.disabled = false;
        resultButton.addEventListener('click', createStatisticsPage(sectence), {
            once: true,
        });
    }
}
