import { store } from './index'
import { makeElement } from './domUtils';
import { format, parseISO } from 'date-fns';

export const displayTasks = () => {
    const currentProject = store.getCurrentProject(); 
    const display = document.querySelector('.display-container');
    display.innerHTML = "";
    const titleContainer = makeElement('div', 'title-container');
    const currentProjectTitle = makeElement('h2', 'currentProject')
    titleContainer.append(currentProjectTitle);
    display.appendChild(titleContainer);

    currentProject.tasks.forEach(task => {
        const taskCard = makeElement('div', 'task-card');
        const textContainer = makeElement('div', 'task-text-container');
        const checkbox = makeElement('input', 'task-complete');
        checkbox.type = 'checkbox';
        const title = makeElement('div', 'task-title');
        const description = makeElement('div', 'task-description');
        const priority = makeElement('span', 'material-symbols-outlined', 'flag');
        priority.classList.add(task.priority);
        const date = makeElement('div', 'task-date');

        title.textContent = task.title;
        description.textContent = task.description;
        date.textContent = format(parseISO(task.date), "MMM dd");
        textContainer.append(title, description);
        taskCard.append(checkbox, textContainer, date, priority);
        display.appendChild(taskCard);

    })
    
};

