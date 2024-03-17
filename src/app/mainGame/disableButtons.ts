export function disableButtons() {
    const checkButton = document.getElementById('check');
    const resultButton = document.getElementById('result');
    const GiveUpButton = document.getElementById('giveUp');
    if (checkButton instanceof HTMLButtonElement) {
        checkButton.disabled = true;
        checkButton.textContent = 'Check';
    }
    if (resultButton instanceof HTMLButtonElement) {
        resultButton.disabled = true;
    }
    if (GiveUpButton instanceof HTMLButtonElement) {
        GiveUpButton.disabled = false;
    }
}
