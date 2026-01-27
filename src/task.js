export class Task {

    constructor (name, description, priority, date) {
        this.id = crypto.randomUUID();
        this.name = name;
        this.description = description;
        this.priority = priority;
        this.date = date;
    } 
}