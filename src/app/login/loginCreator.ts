import './login.css';
import { onLogin } from './onLogin';

export function loginCreator() {
    let root: HTMLElement | null = document.getElementById('root');
    if (!root) {
        root = document.createElement('DIV');
    }
    root.id = 'root';
    root.innerHTML = '';
    document.body.append(root);
    const inner: string = `
    <main class="login">
        <h1 class="login_title">ENGLISH PUZZLE</h1>
        <form action="#" class="login_form">
            <div class="login_form__inner">
                <h2 class="login_form__title">LOGIN</h2>
                <div class="login_field">
                    <input id="name" class="login_input" type="text" placeholder="Your name" required>
                    <span class="login_message login_message1"></span>
                </div>
                <div class="login_field">
                    <input id="surname" class="login_input" type="text" placeholder="Your surname" required>
                    <span class="login_message login_message2"></span>
                </div>
            </div>
            <button id="login" class="login_btn">LOGIN</button>
        </form>
    </main>`;
    root.innerHTML = inner;
    const form: HTMLFormElement | null = root.querySelector('.login_form');
    if (form) {
        form.addEventListener('submit', onLogin);
    }
}
