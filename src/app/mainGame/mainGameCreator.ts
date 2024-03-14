import './mainGame.css';
import { rootCreator } from '../root/rootCreator';
import { roundCreator } from './roundCreator';
import { createTranslationListener } from '../hints/onTranslation';
import { createLevelListener } from '../levels/level';
import { createRoundListener } from '../levels/round';

export function mainGameCreator() {
    const root: HTMLElement = rootCreator();
    const inner: string = `
    <main class="game">
        <h1 class="game_title title">ENGLISH PUZZLE</h1>
        <div class="hints">
            <select name="level" id="level">
                <option value="">Level</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <select name="round" id="round">
                <option value="">Round</option>
                <option value="all">1</option>
                <option value="all">2</option>
                <option value="all">3</option>
            </select>
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
    createLevelListener();
    createRoundListener();
    roundCreator(0);
}
