export const makeElement = (element, className, text = "", id) => {
    const el = document.createElement(element);
    el.classList.add(className);
    el.textContent = text;
    el.id = id;
    return el;
    }

 export const addModalListeners = (overlay) => {
    const button = overlay.querySelector('#modal-close'); 
    

    const hide  = () => {
        overlay.classList.add('hidden');
    }
    
    if (button) {
        button.addEventListener('click', hide);
    }
    

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) hide();
    });

    
}   
