import { loginCreator } from '../login/loginCreator';
export function onLogout(event: MouseEvent) {
    event.preventDefault();
    localStorage.clear();
    loginCreator();
}
