import './statistics.css';

function closeModal(event: MouseEvent) {
    event.stopPropagation();
    const modal = document.querySelector('.modal');
    if (modal) {
        modal.remove();
        document.body.style.overflowY = '';
    }
}

export function createStatisticsPage() {
    const root: HTMLElement | null = document.getElementById('root');
    const modal = document.createElement('DIV');
    modal.classList.add('modal');
    modal.innerHTML = `
    <div class="modal_inner modal_bg">
    <span class="X">X</span>
    </div>
    `;
    if (root) {
        root.append(modal);
        root.style.overflowY = 'hidden';
        modal.addEventListener('click', closeModal);
    }
}
