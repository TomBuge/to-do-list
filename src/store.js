import { Project } from './project.js';
import { Task } from './task.js';
import { format, parseISO } from 'date-fns';

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
        let saved = localStorage.getItem('data');
        if(saved) {
          return JSON.parse(saved);
        }
        const defaultProject = new Project("Example Project");
        defaultProject.id = 1;
        defaultProject.tasks = [
            new Task('Get a haircut', 'Mullets are out of fashion!', 'high', '2026-01-31T00:00:00.000Z'),
            new Task('Go Shopping', 'pick up provisions for party on the weekend!', 'medium', '2026-02-07T00:00:00.000Z'),            
        ]
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

    editProjectName (newName) {
        const currentProject = this.getCurrentProject();
        currentProject.name = newName;
        this.saveToStorage();
        this.notify();

    }

    addTask(name, description, priority, date) {
        const isoDate = new Date(date).toISOString();
        const newTask = new Task(name, description, priority, isoDate);
        const currentProject = this.getCurrentProject();
        currentProject.tasks.push(newTask);
        console.log(this.getProjects());
        this.saveToStorage();
        this.notify();
    }

    deleteTask(id) {
        console.log("delete task!");
        const currentProject = this.getCurrentProject();
        currentProject.tasks = currentProject.tasks.filter(task => task.id !== id);
        this.saveToStorage();
        this.notify(); 
    }

    getTask(id) {
        const currentProject = this.getCurrentProject();
        return currentProject.tasks.find(task => task.id === id)
    }

    editTask(id, name, description, priority, date) {
        const currentProject = this.getCurrentProject();
        const task = currentProject.tasks.find(task => task.id === id);
        const isoDate = new Date(date).toISOString();
        task.name = name;
        task.description = description;
        task.priority = priority;
        task.date = isoDate;
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

