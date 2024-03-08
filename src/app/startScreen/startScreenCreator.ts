import './startScreen.css';

export function startScreenCreator() {
    let root: HTMLElement | null = document.getElementById('root');
    if (!root) {
        root = document.createElement('DIV');
    }
    root.id = 'root';
    root.innerHTML = '';
    document.body.append(root);
    const inner: string = `
    <main class="start">
        <h1 class="start_title">ENGLISH PUZZLE</h1>
        <h2 class="start_subtitle">ENGLISH PUZZLE is an effective service for learning language. Click on words and collect phrases!</h2>
        <button id="start" class="start_btn">START</button>
    </main>`;
    root.innerHTML = inner;
}
