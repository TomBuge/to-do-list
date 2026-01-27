import { makeElement, addModalListeners } from "./domUtils"
import { store } from "./index" 


export const editTaskModal = (id) => {

    const task = store.getTask(id);
    console.log(`from the task modal this is ${task}`);

   

    
    const overlay = makeElement('div', 'modal-overlay', '', 'edit-task-modal');
    const modal = makeElement('div', 'modal-content');
    const closeButton = makeElement('span', 'material-symbols-outlined', 'close', 'modal-close');
    const heading = makeElement('div', 'modal-heading', 'Edit Task', 'edit-task-heading');
    const form = makeElement('form', 'modal-form');
    
    const titleInput = makeElement('input', 'form-input', '', 'edit-task-title');
    titleInput.value = task.name;
    titleInput.required = true; 

    const descInput = makeElement('textarea', 'form-text-area', '', 'edit-task-desc');
    descInput.value = task.description;

    const dateInput = makeElement('input', 'form-date', '', 'edit-task-date');
    dateInput.type = 'date';
    dateInput.value = task.date.split('T')[0];

    const priorities = [
        {level: 'high', color: 'red'},
        {level: 'medium', color: 'orange'},
        {level: 'low', color: 'green'}
    ];

    const priorityContainer = makeElement('div', 'priority-selector',);
    const priorityLabel = makeElement('div', 'form-label', 'Priority:');
    priorityContainer.appendChild(priorityLabel);

    priorities.forEach((p) => {
        const label = makeElement('label', 'priority-label');

        const radio = makeElement('input', 'priority-radio', '', 'edit-task-priority');
        radio.type = 'radio';
        radio.name = 'priority-group';
        radio.value = p.level;
        if (p.level === task.priority) radio.checked = true;

        const flagIcon = makeElement('span', 'material-symbols-outlined', 'flag',);
        flagIcon.classList.add(`flag-${p.color}`);
        flagIcon.classList.add('flag-icon');
        label.append(radio, flagIcon);
        priorityContainer.append(label);
    });

    const submitButton = makeElement('button', 'submit-btn', 'Edit');


    form.append(titleInput, descInput, dateInput, priorityContainer, submitButton);
    modal.append(closeButton, heading, form);
    overlay.appendChild(modal);

    addModalListeners(overlay);

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const priority = document.querySelector('input[name="priority-group"]:checked').value;
        store.editTask(task.id, titleInput.value, descInput.value, priority, dateInput.value);
        overlay.remove();
    });

    document.body.appendChild(overlay);
     
}

