import './startScreen.css';
import { greetingCreator } from './createGreeting';
import { logoutCreator } from '../logout/logoutCreator';
import { onStart } from './onStart';
import { rootElementCreator } from '../root/rootElementCreator';

export function startScreenCreator() {
    const root: HTMLElement = rootElementCreator();
    const inner: string = `
    <main class="start">
        <h1 class="start_title title">ENGLISH PUZZLE</h1>
        <h2 class="start_subtitle">ENGLISH PUZZLE is an effective service for learning language. Click on words and collect phrases!</h2>
        <h2 class="start_greeting"></h2>
        <button id="start" class="btn start_btn">START</button>
    </main>`;
    root.innerHTML = inner;
    greetingCreator();
    logoutCreator();
    const startButton: HTMLElement | null = document.getElementById('start');
    if (startButton) {
        startButton.addEventListener('click', onStart);
    }
}
