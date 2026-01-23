import './styles.css';
import loadSideBar from './sideBar';
import newTaskModal from './newTaskModal';
import newProjectModal from './newProjectModal';
import editProjectModal from './editProjectModal';

const nav = document.querySelector('.nav');

nav.addEventListener('click', (e) => {   

    const burgerMenu = e.target.closest('#menu');
    const newTaskButton = e.target.closest('#new-task-button');

    if (burgerMenu){
        loadSideBar();
        console.log("menu button pressed");

        const addProject = document.getElementById('add-project-button');
        const editProject = document.getElementById('edit-project-button');

        addProject.addEventListener('click', () => {
            console.log("add project button pressed");
            newProjectModal();
        });

        editProject.addEventListener('click', () => {
            console.log("add project button pressed");
            editProjectModal();
        });
    }
    if (newTaskButton) {
        newTaskModal();
        console.log("task button pressed") ;
    }
});

