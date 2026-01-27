import { makeElement } from "./domUtils";

const loadSideBar = () => {

    const container = document.getElementById('sidebar-container');
    const menuIcon = document.querySelector('.menu-icon');
    let sidebar = document.querySelector('.sidebar');
    
    if (!sidebar) {
    container.innerHTML = "";
    sidebar = makeElement('div', 'sidebar');
    container.appendChild(sidebar);
    
    const addProjectButton = makeElement('div', 'sidebar-nav', "", "add-project-button", 'add-project-button');
    const plusIcon = makeElement('span', 'material-symbols-outlined', 'Add', 'add-icon');
    const addProjectText = makeElement('span', 'text', 'New Project');
    addProjectButton.append(plusIcon, addProjectText);
    sidebar.appendChild(addProjectButton);

    const editProjectButton = makeElement('div', 'sidebar-nav', '', 'edit-project-button'); 
    const editIcon = makeElement('span', 'material-symbols-outlined', 'edit', 'edit-icon');
    const currentProjectText = makeElement('div', 'current-project-text', 'Default Project',)
    editProjectButton.append(editIcon, currentProjectText);


    const todayButton = makeElement('div', 'sidebar-nav')
    const todayIcon = makeElement('span', 'material-symbols-outlined', 'calendar_today', 'today-icon');
    const todayText = makeElement('div', 'today-text', 'Today');
    const todayCount = makeElement('div', 'count', '4', 'today-count');
    todayButton.append(todayIcon, todayText, todayCount);
    todayButton.classList.add('hidden');
    

    const calendarButton = makeElement('div', 'sidebar-nav')
    const calendarIcon = makeElement('span', 'material-symbols-outlined', 'calendar_month', 'calendar-icon');
    const calendarText = makeElement('div', 'today-text', 'Calendar');
    const calendarCount = makeElement('div', 'count', '5', 'calendar-count');
    calendarButton.append(calendarIcon, calendarText, calendarCount);
    calendarButton.classList.add('hidden');

    const myProjectsContainer = makeElement('div', 'sidebar-nav', "", 'my-projects-container');
    const myProjects = makeElement('div', 'my-projects-heading', 'My Projects' )
    const myProjectsList = makeElement('ul', 'my-projects-list')
    myProjectsContainer.append(myProjects, myProjectsList);

    
    sidebar.append(editProjectButton, addProjectButton, todayButton, calendarButton, myProjectsContainer)
    


    }
    
    else {
        const isHidden = container.classList.toggle('hidden');
        menuIcon.textContent = isHidden? "menu" : "close";
    }
}

export default loadSideBar;


