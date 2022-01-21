import { populateTaskList } from "./manageDOM"

class Project {
    constructor(title) {
        this.title = title
        this.taskArray
        this.id
    }

    static getProjectData() {
        if (localStorage.getItem('projectData')) {
            return JSON.parse(localStorage.getItem('projectData'))
        } else {
            return [{title:'General Tasks'}]
        }
        
    }
    

    static initialise(title) {
        return new Project(title)
    } 

    
    
    checkLocalStorage() {
        if (localStorage.getItem(this.title)) {
            this.taskArray =  JSON.parse(localStorage.getItem(this.title))
        } else {
            this.taskArray =  []
        }
    }

    

    generateID() {
        if (this.taskArray.length === 0) {
            return 1
        } else if (this.taskArray.length === 1) {
            return 2
        } else {
            let highestID = this.taskArray.reduce((p, c) => 
                p.id > c.id ? p : c)
            return (highestID.id +1)
        }
    }

    addTaskToArray({task:title, dueDate: dueDate, description: description, priority: priority}) {
        let id = this.generateID() 
        let task = {
            title: title, 
            dueDate: dueDate, 
            description:description, 
            priority: priority,
            completed: false,
            id:id, 
            }
        this.taskArray.push(task)
        this.saveToLocalStorage()
    }

    get showTasks() {
        return this.taskArray
    }

    saveToLocalStorage() {
        localStorage.setItem(this.title, JSON.stringify(this.taskArray))
    }

    deleteTask(id) {
        for (let i= 0; i < this.taskArray.length; i++) {
            if (this.taskArray[i].id == id) {
                this.taskArray.splice(i,1)
            }
        }
        this.saveToLocalStorage()
    }

    findTask(id) {
        return this.taskArray.find(task => task.id == id)
    }

    markAsComplete(id) {
        let task = this.findTask(id)
        if (task.completed) {
            task.completed = false
        } else {
            task.completed = true
        }
        return task
    }
}

function addToProjectData(data, projectData) {
    const dataObject = {title: data}
    projectData.push(dataObject)
    
}

function saveProjectData(projectData) {
    localStorage.setItem('projectData', JSON.stringify(projectData))
}



export {Project, addToProjectData, saveProjectData};