export function createElement(tag, className) {
    const element = document.createElement(tag);

    if (className) {
        className.split(" ").forEach(cls => {
            element.classList.add(cls);
        });
    }

    return element;
}