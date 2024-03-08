import { startScreenCreator } from '../startScreen/startScreenCreator';

function setUserInLocaleStorage(name: string, surname: string) {
    localStorage.setItem('name', name);
    localStorage.setItem('surname', surname);
}

export function onSuccess(name: string, surname: string) {
    setUserInLocaleStorage(name, surname);
    startScreenCreator();
}
