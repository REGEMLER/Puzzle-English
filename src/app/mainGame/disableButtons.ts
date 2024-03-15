export function disableButtons() {
    const checkButton = document.getElementById('check');
    if (checkButton instanceof HTMLButtonElement) {
        checkButton.disabled = true;
        checkButton.textContent = 'Check';
    }
}
