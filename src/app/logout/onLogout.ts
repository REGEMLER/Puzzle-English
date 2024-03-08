import { loginCreator } from '../login/loginCreator';
export function onLogout(event: MouseEvent) {
    event.preventDefault();
    localStorage.removeItem('name');
    localStorage.removeItem('surname');
    loginCreator();
}
