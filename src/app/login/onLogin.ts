import { validateLetters, validateCapitalLetters, validateLength } from './validators';

export function onLogin(e: SubmitEvent) {
    e.preventDefault();
    if (e.target instanceof HTMLFormElement) {
        const name = e.target.querySelector('#name');
        const surname = e.target.querySelector('#surname');
        if (name instanceof HTMLInputElement && surname instanceof HTMLInputElement) {
            const hint1 = e.target.querySelector('.login_message1');
            const hint2 = e.target.querySelector('.login_message2');
            if (hint1 && hint2) {
                hint1.textContent = '';
                hint2.textContent = '';
            }
            if (!validateLetters(name.value) && hint1) {
                hint1.textContent = 'You can use only English alphabet letters and the hyphen symbol';
            }
            if (!validateLetters(surname.value) && hint2) {
                hint2.textContent = 'You can use only English alphabet letters and the hyphen symbol';
            }
            if (!validateCapitalLetters(name.value) && hint1) {
                hint1.textContent = 'The first letter of your name should be in uppercase';
            }
            if (!validateCapitalLetters(surname.value) && hint2) {
                hint2.textContent = 'The first letter of your surname should be in uppercase';
            }
            if (!validateLength(name.value, 3) && hint1) {
                hint1.textContent = 'Minimum length of the name should be 3 characters';
            }
            if (!validateLength(surname.value, 4) && hint2) {
                hint2.textContent = 'Minimum length of the surname should be 4 characters';
            }
            if (hint1 && hint2 && hint1.textContent === '' && hint2.textContent === '') {
                console.log('SUCCES!');
            }
        }
    }
}
