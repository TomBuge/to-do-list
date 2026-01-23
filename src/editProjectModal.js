import { makeElement, addModalListeners } from "./domUtils";

const editProjectModal = () => {

    const overlay = makeElement('div', 'modal-overlay');
    const modal = makeElement('div', 'modal-content'); 

    const closeIcon = makeElement('span', "material-symbols-outlined", 'close', 'modal-close');
    const modalHeading = makeElement('div', 'modal-heading', 'Default Project');
    const form = makeElement('form', 'modal-form');
    const projectName = makeElement('input', 'form-input');
    projectName.placeholder = "Edit Project Name";
    const btnContainer = makeElement('div', 'btn-container');
    const submitButton = makeElement('button', 'submit-btn', 'Edit Name');
    const deleteButton = makeElement('button', 'delete-btn', 'Delete Project');
    btnContainer.append(deleteButton, submitButton);
    form.append(projectName, btnContainer);
    
    modal.append(closeIcon, modalHeading, form);
    overlay.appendChild(modal);

    addModalListeners(overlay);
    

    document.body.appendChild(overlay);

};

export default editProjectModal;