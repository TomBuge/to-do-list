import { makeElement } from "./domUtils";

export function setupUI(store) {

    

    const updateCurrentProject = () => {

        const currentProject = store.getCurrentProject();
        const subheading = document.querySelector('.currentProject');
        const sidebarHeading = document.querySelector('.current-project-text');
        const editProjectModalHeading = document.getElementById('edit-project-heading');
        
            subheading.textContent = currentProject.name;
            subheading.id = currentProject.id;
            sidebarHeading.textContent = currentProject.name;
            if (editProjectModalHeading) {
                 editProjectModalHeading.textContent = currentProject.name;
            }
    }

    const updateSidebarProjectList = () => {
        const projects = store.getProjects();
        const list = document.querySelector('.my-projects-list');
        list.innerHTML = "";
        projects.forEach(project => {
            console.log("working");
            const listItem = makeElement('li', 'project-list-item');
            listItem.textContent = project.name;
            list.appendChild(listItem);
        }); 

        list.addEventListener('click', (e) => {
            const projectName = e.target.textContent;
            console.log(projectName);
            const clickedProject = projects.filter(project => 
                project.name === projectName
            );
            console.log(clickedProject);
            store.setCurrentProject(clickedProject[0].id);

        });
    }


    store.subscribe(updateCurrentProject);
    store.subscribe(updateSidebarProjectList);

    updateCurrentProject();
    updateSidebarProjectList();
}

export const toggles = {

    toggleSideBar() {
    const sidebar = document.getElementById('sidebar-container');
    sidebar.classList.toggle('hidden');
    },

    toggleEditProjectModal () {
        const editProjectModal = document.getElementById('edit-project-modal');
        editProjectModal.classList.toggle('hidden');
    }

}

    


