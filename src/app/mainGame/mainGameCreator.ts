import './mainGame.css';

export function mainGameCreator() {
    let root: HTMLElement | null = document.getElementById('root');
    if (!root) {
        root = document.createElement('DIV');
    }
    root.id = 'root';
    root.innerHTML = '';
    document.body.append(root);
    const inner: string = `
    <main class="game">
        <h1 class="game_title">ENGLISH PUZZLE</h1>
        <div class="result_field"></div>
        <div class="word_field"></div>
    </main>`;
    root.innerHTML = inner;
}
