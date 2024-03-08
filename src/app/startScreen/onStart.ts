import { mainGameCreator } from '../mainGame/mainGameCreator';

export function onStart(e: MouseEvent) {
    e.preventDefault();
    mainGameCreator();
}
