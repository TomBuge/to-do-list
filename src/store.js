import { Project } from './project.js';
import { Task } from './task.js';

export class Store {

    #projects
    #currentProjectId 

    constructor () {
        this.#projects = this.loadFromStorage();
        const currentId = this.#projects.map(project => project.id);
        this.#currentProjectId = this.#projects[0].id;
        this.projectCount = Math.max(...currentId) + 1;
        console.log(`project count is ${this.projectCount}`);
        this.listeners = []; 
    }

    loadFromStorage() {
        const saved = localStorage.getItem('data');
        if(saved) {
            return JSON.parse(saved);
        }
        const defaultProject = new Project("Default Project");
        defaultProject.id = 1;
        return [defaultProject];
    }

    saveToStorage() {
        const projects = JSON.stringify(this.#projects);
        localStorage.setItem('data', projects);
    }

    addProject(name) {
        const newProject = new Project(name);
        newProject.id = this.projectCount;
        this.projectCount++;
        this.#projects.push(newProject);
        this.#currentProjectId = newProject.id;
        this.saveToStorage();
        this.notify();
        console.log(newProject);     
    }

    getCurrentProject () {
        return this.#projects.find(project => project.id === this.#currentProjectId);
    }

    setCurrentProject (id) {
        this.#currentProjectId = id;
        this.notify();
    }

    getProjects() {
        return this.#projects;
    }

    deleteProject(id) {
        console.log("delete project function executed");
        this.#projects = this.#projects.filter(project => project.id !== id);
        this.#currentProjectId = this.getProjects()[0].id;
        if (this.#projects.length < 0) {
            this.addProject("Default Project");
        }
        console.log(this.#projects);
        this.saveToStorage();
        this.notify();
    }

    subscribe(callback) {
        this.listeners.push(callback);
    }

    notify() {
        this.listeners.forEach((listener) => {
            listener();
        })
    }


}


// let data = [
       
//         {
//             'name': 'projectName',
//             'id' : 345,
//             'tasks' : [
//                 {
//                     'taskTitle' : 'name',
//                     'taskId' : 123,
//                     'taskDescription' : "",
//                     'taskDate:' : Date,
//                     'taskPriority' : 3 
//                 },
//                 {
//                     'taskTitle' : 'name',
//                     'taskId' : 123,
//                     'taskDescription' : "",
//                     'taskDate:' : Date,
//                     'taskPriority' : 3
//                 }
//             ]
//         },
//         {
//             'name': 'projectName',
//             'id' : 345,
//             'tasks' : [
//                 {
//                     'taskTitle' : 'name',
//                     'taskId' : 123,
//                     'taskDescription' : "",
//                     'taskDate:' : Date,
//                     'taskPriority' : 3 
//                 },
//                 {
//                     'taskTitle' : 'name',
//                     'taskId' : 123,
//                     'taskDescription' : "",
//                     'taskDate:' : Date,
//                     'taskPriority' : 3
//                 }
//             ]
//         }
                        
//     ]

