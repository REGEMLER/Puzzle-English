import { validateLetters, validateCapitalLetters, validateLength } from './validators';
import { onSuccess } from './onSuccess';

function validateName(fuild: HTMLInputElement, hint: Element, name: string, length: number) {
    let isValid = true;
    const currentHint = hint;
    currentHint.textContent = '';
    if (!validateLetters(fuild.value)) {
        const currentContent = currentHint.textContent;
        const errorMessage = 'You can use only English alphabet letters and the hyphen symbol.';
        currentHint.textContent = `${currentContent} ${errorMessage}`;
        isValid = false;
    }
    if (!validateCapitalLetters(fuild.value)) {
        const currentContent = currentHint.textContent;
        const errorMessage = `The first letter of your ${name} should be in uppercase.`;
        currentHint.textContent = `${currentContent} ${errorMessage}`;
        isValid = false;
    }
    if (!validateLength(fuild.value, length)) {
        const currentContent = currentHint.textContent;
        const errorMessage = `Minimum length of the ${name} should be ${length} characters.`;
        currentHint.textContent = `${currentContent} ${errorMessage}`;
        isValid = false;
    }
    return isValid;
}

export function onLogin(e: SubmitEvent) {
    e.preventDefault();
    if (e.target instanceof HTMLFormElement) {
        const name = e.target.querySelector('#name');
        const surname = e.target.querySelector('#surname');
        if (name instanceof HTMLInputElement && surname instanceof HTMLInputElement) {
            name.classList.remove('login_input-error');
            surname.classList.remove('login_input-error');
            const hint1 = e.target.querySelector('.login_message1');
            const hint2 = e.target.querySelector('.login_message2');
            let isValidName: boolean | null = null;
            let isValidSurname: boolean | null = null;
            if (hint1) isValidName = validateName(name, hint1, 'name', 3);
            if (hint2) isValidSurname = validateName(surname, hint2, 'surname', 4);
            if (!isValidName) name.classList.add('login_input-error');
            if (!isValidSurname) surname.classList.add('login_input-error');
            if (isValidName && isValidSurname) {
                onSuccess(name.value, surname.value);
            }
        }
    }
}
