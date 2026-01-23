export const makeElement = (element, className, text = "", id) => {
    const el = document.createElement(element);
    el.classList.add(className);
    el.textContent = text;
    el.id = id;
    return el;
    }

 export const addModalListeners = (overlay) => {
    const button = overlay.querySelector('#modal-close'); 
    const form = overlay.querySelector('.modal-form');

    const destroy  = () => {
        overlay.remove()
    }
    
    if (button) {
        button.addEventListener('click', destroy);
    }
    

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) destroy();
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log("New task Created!");
        destroy();
    });
    
}   
