import './mainGame.css';
import { rootCreator } from '../root/rootCreator';

export function mainGameCreator() {
    const root: HTMLElement = rootCreator();
    const inner: string = `
    <main class="game">
        <h1 class="game_title title">ENGLISH PUZZLE</h1>
        <div class="result_field"></div>
        <div class="word_field"></div>
    </main>`;
    root.innerHTML = inner;
}
