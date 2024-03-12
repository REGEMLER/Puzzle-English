import './mainGame.css';
import { rootCreator } from '../root/rootCreator';
import { roundCreator } from './roundCreator';
import { createTranslationListener } from '../hints/onTranslation';

export function mainGameCreator() {
    const root: HTMLElement = rootCreator();
    const inner: string = `
    <main class="game">
        <h1 class="game_title title">ENGLISH PUZZLE</h1>
        <div class="hints">
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
        </div>
    </main>`;
    root.innerHTML = inner;
    createTranslationListener();
    roundCreator(0, 0);
}
