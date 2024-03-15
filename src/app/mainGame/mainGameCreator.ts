import './mainGame.css';
import { rootCreator } from '../root/rootCreator';
import { setTranslationHint } from '../hints/setTranslationHint';
import { createTranslationListener } from '../hints/onTranslation';
import { createLevelListener, getLevel, setLevel } from '../levels/level';
import { createRoundListener, getAllRounds, getRound, setRound } from '../levels/round';
import { completeLastLevel, completeLevel, completeRound } from './onContinue';
import { roundCreator } from './roundCreator';
import { createRoundOptions, createLevelOptions } from '../levels/level';

function startGame() {
    setTranslationHint();
    createLevelListener();
    createRoundListener();
    createTranslationListener();
    const isRound = localStorage.getItem('round');
    if (!isRound) {
        setLevel('1');
        setRound('1');
        createLevelOptions();
        createRoundOptions();
        roundCreator(0);
        return;
    }
    const rounds = getAllRounds();
    const round = Number(getRound()) - 1;
    const level = Number(getLevel());

    if (level === 6 && round >= rounds.length - 1) {
        completeLastLevel();
        return;
    }
    if (round >= rounds.length - 1) {
        completeLevel(level);
        return;
    }
    completeRound(round);
}

export function mainGameCreator() {
    const root: HTMLElement = rootCreator();
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
        </div>
    </main>`;
    root.innerHTML = inner;
    startGame();
}
