export function markOption(element: string, cb: () => string) {
    const selector = document.getElementById(element);
    if (selector) {
        const options = [...selector.querySelectorAll('option')];
        const currentOption = options.find((_, index) => index === Number(cb()));
        if (currentOption) currentOption.classList.add('option-complete');
    }
}
