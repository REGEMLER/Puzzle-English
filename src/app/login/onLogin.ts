export function onLogin(e: SubmitEvent) {
    e.preventDefault();
    const target = e.target;
    if (target instanceof HTMLFormElement) {
        const name = target.querySelector('#name');
        const surname = target.querySelector('#surname');
        if (name instanceof HTMLInputElement && surname instanceof HTMLInputElement) {
            console.log(name.value);
            console.log(surname.value);
        }
    }
}
