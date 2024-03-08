import './logout.css';
import { onLogout } from './onLogout';

export function logoutCreator() {
    const root: HTMLElement | null = document.getElementById('root');
    if (root) {
        const button = document.createElement('button');
        button.classList.add('logout_btn');
        button.classList.add('btn');
        button.id = 'logout';
        button.textContent = 'LOGOUT';
        root.prepend(button);
        const logoutButton: HTMLElement | null = document.getElementById('logout');
        if (logoutButton) {
            logoutButton.addEventListener('click', onLogout);
        }
    }
}
