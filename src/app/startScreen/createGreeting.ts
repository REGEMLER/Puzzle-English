export function greetingCreator() {
    const name = localStorage.getItem('name');
    const surname = localStorage.getItem('surname');
    const greetingElement = document.body.querySelector('.start_greeting');
    if (greetingElement) {
        greetingElement.textContent = `Hello, ${name} ${surname}! It is time to improve your English skills!`;
    }
}
