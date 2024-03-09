import './mainGame.css';
import { rootCreator } from '../root/rootCreator';
import { roundCreator } from './roundCreator';

export function mainGameCreator() {
    const root: HTMLElement = rootCreator();
    const inner: string = `
    <main class="game">
        <h1 class="game_title title">ENGLISH PUZZLE</h1>
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
    </main>`;
    root.innerHTML = inner;
    roundCreator(0);
}
