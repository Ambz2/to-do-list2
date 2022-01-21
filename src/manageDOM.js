class Button {
    id = 'button'
    constructor(content, id, dataAttribute = '') {
        this.content = content
        this.id = id
        
        this.element = document.createElement('div')
        this.element.setAttribute('id', id);
        this.element.setAttribute('class', 'button')
        this.element.dataset.title = dataAttribute
        
        this.element.textContent = content
        


        this.element.onclick = this.onClick.bind(this)
        
    }

    onClick() {

    }

}

class navButton extends Button {
    constructor(content, id, dataAttribute) {
        super(content, id, dataAttribute) 
        this.img = document.createElement('img')
        this.img.src = '../images/trash.png'
        this.img.setAttribute('class', 'trash')
        this.element.appendChild(this.img)
        
    }
}

class expandButton extends Button {
    constructor(content, id) {
        super(content, id)
        this.element.style.height = '20px'
        this.element.addEventListener('click', this.expand.bind(this))
        this.expanded = false
    }
    
    expand() {
        if (this.expanded) {
            this.element.parentElement.parentElement.lastChild
                .style.display = 'none'
            this.expanded = false
        } else {
            this.element.parentElement.parentElement.lastChild
                .style.display = 'flex'
            this.expanded = true
        }
    }
}

class deleteButton extends Button {
    constructor(content, dataAttribute, taskID) {
        super(content, dataAttribute)
        this.element.style.height = '20px'
        this.element.classList = 'button delete'
        this.taskID = taskID
        this.element.dataset.task = this.taskID
    }

    delete() {
        console.log('hi')
    }
}

class addFolderButton extends Button {
    constructor(content, id) {
        super(content, id)
        this.open = false
        this.element.addEventListener('click', this.openModal)
    }

    openModal() {
        document.querySelector('#modal').style.display = 'flex'
    }
}

class completedButton extends Button {
    constructor(content, taskID) {
        super(content)
        this.checked = false
        this.element.classList = 'button completed'
        this.element.innerHTML = '&#10004;'
        this.taskID = taskID
        this.element.dataset.task = this.taskID
    }
    //this needs to have something in it which adds a thing if it is already completed
    

}

class cancelButton extends Button {
    constructor(content, id, targetID) {
        super(content, id)
        this.targetID = targetID
    }

    close() {
        document.querySelector(this.targetID).remove()
    }
}


class addTaskModal {
    constructor() {
        this.element = document.createElement('form')
        this.element.setAttribute('id', 'taskModal');
        

        this.taskLabel = document.createElement('label')
        this.taskLabel.setAttribute('for', 'task')
        this.taskLabel.textContent = 'Enter task:'

        this.taskInput = document.createElement('input')
        this.taskInput.setAttribute('type', 'text')
        this.taskInput.setAttribute('name', 'task')
        this.taskInput.required = true
        
        this.dueDateLabel = document.createElement('label')
        this.dueDateLabel.setAttribute('for', 'duedate')
        this.dueDateLabel.textContent = 'Due Date:'
        
        this.dueDateInput = document.createElement('input')
        this.dueDateInput.setAttribute('type', 'date')
        this.dueDateInput.setAttribute('name', 'duedate')
        

        this.descriptionLabel = document.createElement('label')
        this.descriptionLabel.setAttribute('for', 'description')
        this.descriptionLabel.textContent = 'Description:'

        this.descriptionInput = document.createElement('input')
        this.descriptionInput.setAttribute('type', 'text')
        this.descriptionInput.setAttribute('for', 'description')
        this.descriptionInput.setAttribute('class', 'descInput')

        this.c = new cancelButton('cancel', 'cancelTask', '#taskModal')
        this.submitButton = new Button('create task', 'createTask')
        this.submitButton.element.setAttribute('type', 'submit')
        
        this.important = new Checkbox()
        this.importantLabel = document.createElement('label');
        this.importantLabel.setAttribute('for', 'important')
        this.importantLabel.textContent = 'Important?'

        this.top = document.createElement('div')
        this.top.setAttribute('class', 'top')

        this.top.appendChild(this.taskLabel)
        this.top.appendChild(this.taskInput)
        this.top.appendChild(this.importantLabel)
        this.top.appendChild(this.important.element)
        this.top.appendChild(this.dueDateLabel);
        this.top.appendChild(this.dueDateInput)

        this.element.appendChild(this.top)
        this.element.appendChild(this.descriptionLabel)
        this.element.appendChild(this.descriptionInput)
        this.element.appendChild(this.c.element)
        this.element.appendChild(this.submitButton.element)   
    }

    handleForm(event) {
        if (this.taskInput.value && this.dueDateInput.value) {
            event.preventDefault()
            return {task: this.taskInput.value, dueDate: this.dueDateInput.value
                , description: this.descriptionInput.value, priority: this.important.value}

        } 
        
    }
}

class TaskDOM {
    constructor(title, dueDate, description, priority, taskID, completed) {
        this.element= document.createElement('div');
        this.element.setAttribute('class', 'task');

        this.top = document.createElement('div')
        this.top.setAttribute('class', 'top')

        this.title = document.createElement('p');
        this.title.textContent = title

        this.dueDate = document.createElement('p');
        this.dueDate.textContent = dueDate

        this.description = document.createElement('div');
        this.description.textContent = description
        this.description.classList = 'description'
        this.description.style.display = 'none'


        

        
        

        this.expandButton = new expandButton('expand', 'expand')
        this.deleteButton = new deleteButton('delete', 'delete', taskID)
        this.completedButton = new completedButton('complete!', taskID);
        if (completed) {
            this.completedButton.element.classList.add('checked');
            this.element.classList.add('checked')
        }

        this.top.appendChild(this.title);
        
        if (priority) {
            this.important = document.createElement('p')
            this.important.textContent = 'Important!'
            this.important.style.weight = '300'
            this.top.appendChild(this.important)
        } else { 
            this.important = document.createElement('p')
            this.top.appendChild(this.important)
        }
        this.top.appendChild(this.dueDate)
        this.top.appendChild(this.expandButton.element)
        this.top.appendChild(this.deleteButton.element)
        this.top.appendChild(this.completedButton.element)
        this.element.appendChild(this.top);
        this.element.appendChild(this.description)
        
    }
}

class Checkbox {
    priority = false
    constructor(priority) {
        this.element = document.createElement('div')
        
        if (priority) {
            this.element.classList = 'checkbox checked'
        } else {
            this.element.classList = 'checkbox'
        }
        this.element.style.height = '20px';
        this.element.style.width = '20px'

        
        
        this.value = priority
        this.element.addEventListener('click', this.onClick.bind(this))

        

    } 
    onClick() {
        
        if (this.value == false) {
            this.value = true
            this.element.classList.add('checked')
        } else {
            this.value = false
            this.element.classList.remove('checked')
        }
        console.log(this.value)
    }

}


function loadTasks(arr, node) {
    for (let j=0; j < arr.length; j++ ) {
        const task = new TaskDOM(arr[j].title, arr[j].dueDate, arr[j].description, arr[j].priority, arr[j].id, arr[j].completed)
        node.appendChild(task.element)
    }
}

function populateTaskList(project, item) {
    let fc = item.firstChild
    while (fc) {
        item.removeChild(fc)
        fc = item.firstChild
    }
    loadTasks(project, item)
}

function createFolder(projectData, createFolderInput, createFolderBtn, sidebar) {
    let project = new taskManager.Project(createFolderInput.value)
    taskManager.addToProjectData(project.title, projectData)
    taskManager.saveProjectData(projectData)
    createFolderInput.value = ''
    createFolderBtn.parentElement.style.display = 'none'
    let projectButton = new manageDOM.navButton(project.title, project.title, project.title)
    sidebar.insertBefore(projectButton.element, document.querySelector('addAFolder'))
}



export {Button, addFolderButton, cancelButton, addTaskModal, TaskDOM,loadTasks, populateTaskList, navButton, createFolder}