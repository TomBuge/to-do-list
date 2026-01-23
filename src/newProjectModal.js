import { makeElement, addModalListeners } from "./domUtils";

const newProjectModal = () => {

    const overlay = makeElement('div', 'modal-overlay');
    const modal = makeElement('div', 'modal-content'); 

    const closeIcon = makeElement('span', "material-symbols-outlined", 'close', 'modal-close');
    const modalHeading = makeElement('div', 'modal-heading', 'Create New Project');
    const form = makeElement('form', 'modal-form');
    const projectName = makeElement('input', 'form-input');
    projectName.required = true;
    projectName.placeholder = "New Project Name";
    const submitButton = makeElement('button', 'submit-btn', 'Create Project');
    form.append(projectName, submitButton);
    
    modal.append(closeIcon, modalHeading, form);
    overlay.appendChild(modal);

    addModalListeners(overlay);

    document.body.appendChild(overlay);

};

export default newProjectModal;