import { loginCreator } from './login/loginCreator';
import { startScreenCreator } from './startScreen/startScreenCreator';

export function launcher() {
    const name = localStorage.getItem('name');
    const surname = localStorage.getItem('surname');
    if (!name || !surname) {
        loginCreator();
    } else {
        startScreenCreator();
    }
}
