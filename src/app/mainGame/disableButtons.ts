export function disableButtons() {
    const checkButton = document.getElementById('check');
    const resultButton = document.getElementById('result');
    if (checkButton instanceof HTMLButtonElement) {
        checkButton.disabled = true;
        checkButton.textContent = 'Check';
    }
    if (resultButton instanceof HTMLButtonElement) {
        resultButton.disabled = true;
    }
}
