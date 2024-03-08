import { startScreenCreator } from '../startScreen/startScreenCreator';

export function onSuccess(name: string, surname: string) {
    localStorage.setItem('name', name);
    localStorage.setItem('surname', surname);
    startScreenCreator();
}
