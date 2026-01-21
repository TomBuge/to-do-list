export const makeDiv = (className, text = "") => {
    const el = document.createElement('div');
    el.classList.add(className);
    el.textContent = text;
    return el;
    }

