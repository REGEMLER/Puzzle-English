import './mainGame.css';
import { rootElementCreator } from '../root/rootElementCreator';
import { startGame } from './startGame';

export function mainGameCreator() {
    const root: HTMLElement = rootElementCreator();
    const inner: string = `
    <main class="game">
        <h1 class="game_title title">ENGLISH PUZZLE</h1>
        <div class="hints">
            <select name="level" id="level"></select>
            <select name="round" id="round"></select>
            <button class="btn" id="translation">Show text</button>
        </div>
        <div class="translation"></div>
        <div class="result_block">
            <div class="sentence_block"></div>
            <div class="sentence_block"></div>
            <div class="sentence_block"></div>
            <div class="sentence_block"></div>
            <div class="sentence_block"></div>
            <div class="sentence_block"></div>
            <div class="sentence_block"></div>
            <div class="sentence_block"></div>
            <div class="sentence_block"></div>
            <div class="sentence_block"></div>
        </div>
        <div class="source_block"></div>
        <div class="game-btns">
            <button class="btn" id="check" disabled>Check</button>
            <button class="btn" id="giveUp">Give up</button>
            <button class="btn" id="result" disabled>Results</button>
        </div>
    </main>`;
    root.innerHTML = inner;
    startGame();
}
