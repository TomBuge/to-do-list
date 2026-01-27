import { makeElement, addModalListeners } from "./domUtils"
import { store } from "./index" 


const newTaskModal = () => {

    let modalExists = document.getElementById('new-task-modal');

    if (!modalExists) {
        const overlay = makeElement('div', 'modal-overlay', '', 'new-task-modal');
        const modal = makeElement('div', 'modal-content');
        const closeButton = makeElement('span', 'material-symbols-outlined', 'close', 'modal-close');
        const heading = makeElement('div', 'modal-heading', '', 'new-task-heading');
        const form = makeElement('form', 'modal-form');
        
        const titleInput = makeElement('input', 'form-input');
        titleInput.placeholder = "Task Title (e.g. Buy Groceries)";
        titleInput.required = true; 

        const descInput = makeElement('textarea', 'form-text-area');
        descInput.placeholder = "Description...";

        const dateInput = makeElement('input', 'form-date');
        dateInput.type = 'date';

        const priorities = [
            {level: 'high', color: 'red'},
            {level: 'medium', color: 'orange'},
            {level: 'low', color: 'green'}
        ];

        const priorityContainer = makeElement('div', 'priority-selector');
        const priorityLabel = makeElement('div', 'form-label', 'Priority:');
        priorityContainer.appendChild(priorityLabel);

        priorities.forEach((p) => {
            const label = makeElement('label', 'priority-label');

            const radio = makeElement('input', 'priority-radio');
            radio.type = 'radio';
            radio.name = 'priority-group';
            radio.value = p.level;
            if (p.level === 'low') radio.checked = true;

            const flagIcon = makeElement('span', 'material-symbols-outlined', 'flag',);
            flagIcon.classList.add(`flag-${p.color}`);
            flagIcon.classList.add('flag-icon');
            label.append(radio, flagIcon);
            priorityContainer.append(label);
        });

        const submitButton = makeElement('button', 'submit-btn', 'Create');


        form.append(titleInput, descInput, dateInput, priorityContainer, submitButton);
        modal.append(closeButton, heading, form);
        overlay.appendChild(modal);

        addModalListeners(overlay);

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const priority = document.querySelector('input[name="priority-group"]:checked').value;
            store.addTask(titleInput.value, descInput.value, priority, dateInput.value);
            overlay.classList.add('hidden');
        });

        document.body.appendChild(overlay);
    } 
    
    const modal = document.getElementById('new-task-modal');
    modal.classList.remove('hidden');
}

export default newTaskModal;