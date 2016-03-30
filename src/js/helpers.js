export function unescapeHTML (html) {
    const element = document.createElement('textarea');
    element.innerHTML = html;
    return element.textContent;
}

export function toFahr( celcius ) {
    return (celcius * 1.8) + 32;
}