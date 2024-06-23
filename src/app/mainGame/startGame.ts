import { setTranslationHint } from '../hints/setTranslationHint';
import { createTranslationListener } from '../hints/onTranslation';
import { createLevelListener, getLevel, setLevel } from '../levels/level';
import { createRoundListener, getAllRounds, getRound, setRound, createRoundOptions } from '../levels/round';
import { completeLastLevel, completeLevel, continueRound } from './complete';
import { sectenceCreator } from './sectenceCreator';
import { createLevelOptions } from '../levels/level';
import { createAudioListener } from '../hints/onAudio';

export function startGame() {
    setTranslationHint();
    createLevelListener();
    createRoundListener();
    createTranslationListener();
    createAudioListener();
    const isRound = localStorage.getItem('round');
    if (!isRound) {
        setLevel('1');
        setRound('1');
        createLevelOptions();
        createRoundOptions();
        sectenceCreator(0);
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
    continueRound(round);
}
