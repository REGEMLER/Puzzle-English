import { mainGameCreator } from '../mainGame/mainGameCreator';
import { logoutCreator } from '../logout/logoutCreator';

export function onStart(e: MouseEvent) {
    e.preventDefault();
    mainGameCreator();
    logoutCreator();
}
