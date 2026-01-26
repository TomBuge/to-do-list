import { makeElement, addModalListeners } from "./domUtils";
import { store } from "./index"

const editProjectModal = () => {

    let modalExists = document.getElementById('edit-project-modal');
   
    if (!modalExists) {
        const overlay = makeElement('div', 'modal-overlay', '', 'edit-project-modal');
        const modal = makeElement('div', 'modal-content'); 


        const closeIcon = makeElement('span', "material-symbols-outlined", 'close', 'modal-close');
        const modalHeading = makeElement('div', 'modal-heading', '', 'edit-project-heading');
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
        document.body.appendChild(overlay);
        addModalListeners(overlay);

        const deleteBtn = form.querySelector('.delete-btn')
        deleteBtn.addEventListener('click', (e) => {
                
            e.preventDefault();    
            const currentProjectId = document.querySelector('.currentProject').id;
            console.log(`current project id is ${currentProjectId}`);
            store.deleteProject(Number(currentProjectId));
            overlay.classList.add('hidden');   
        });     
    };

    const modal = document.getElementById('edit-project-modal');
    modal.classList.remove('hidden');
   

};

export default editProjectModal;