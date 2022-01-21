import './style.css';
import * as taskManager from './taskManager.js'
import * as manageDOM from './manageDOM.js'


const projectData = taskManager.Project.getProjectData()
console.log(projectData)
taskManager.saveProjectData(projectData)
const projectList = [] 





// Here we create the projects from the data storage, and then we update the task 
// arrays
for (let i=0 ; i < projectData.length; i++) {
    const project = new taskManager.Project(projectData[i].title)
    project.checkLocalStorage()
    projectList.push(project)
    
}

console.log(projectList)

console.log(projectData)

function makeAddFolderButton() {
    const sidebar = document.querySelector('#sidebar')
    let addFolder = new manageDOM.addFolderButton('Add a Folder...', 'addAFolder', )
    sidebar.appendChild(addFolder.element)
}

makeAddFolderButton()

let modal = document.querySelector('#modal')
let createFolderButton = new manageDOM.Button('submit', 'createFolder')
let cancelButton = new manageDOM.cancelButton('cancel', 'cancelAddProject', '#modal')
cancelButton.element.addEventListener('click', () => {
    modal.style.display = 'none'
})
modal.appendChild(createFolderButton.element)
modal.appendChild(cancelButton.element)

let main = document.querySelector('main')
let addTaskButton = new manageDOM.Button('add task', 'addTaskBtn');
addTaskButton.element.dataset.project = 'General Tasks'
const taskList = document.querySelector('#taskList')
console.log(taskList.firstChild)
main.insertBefore(addTaskButton.element, taskList)


function findProject(desiredProjectTitle) {
    return projectList.find(project => project.title == desiredProjectTitle)
}

addTaskButton.element.addEventListener('click', () => openTaskModal(main, taskList))

function openTaskModal(main, taskList) {
    if(!document.querySelector('#taskModal')) {
        const addTaskModal = new manageDOM.addTaskModal()
        main.insertBefore(addTaskModal.element, taskList)
        addTaskModal.submitButton.element.addEventListener('click', () => addTask(addTaskModal, taskList, event))
    }
}

function addTask(addTaskModal, taskList, event) {
    let data = addTaskModal.handleForm(event)
    if (data) {
        let currentProject = findProject(addTaskButton.element.dataset.project)
        currentProject.addTaskToArray(data)
        currentProject.saveToLocalStorage()
        addTaskModal.removeSelf()
        manageDOM.populateTaskList(currentProject.taskArray, taskList)
        const completedButtons = document.querySelectorAll('.completed')
        completedButtons.forEach(completedButton => 
            completedButton.addEventListener('click', (event) => markComplete(event)))
        const deleteButtons = document.querySelectorAll('.delete')
        deleteButtons.forEach(deleteButton => deleteButton.addEventListener('click', (event) => deleteTask(event)))

    }  
}


const createFolderBtn = document.querySelector('#createFolder');
const createFolderInput = document.querySelector('#createFolderInput')

//defining what happens when you clikc the create folder button
createFolderBtn.addEventListener('click', () => createFolder(projectData, createFolderInput, createFolderBtn, sidebar))

function createFolder(projectData, createFolderInput, createFolderBtn, sidebar) {
    let project = new taskManager.Project(createFolderInput.value)
    project.checkLocalStorage()
    taskManager.addToProjectData(project.title, projectData)
    taskManager.saveProjectData(projectData)
    projectList.push(project)
    createFolderInput.value = ''
    createFolderBtn.parentElement.style.display = 'none'
    let projectButton = new manageDOM.navButton(project.title, project.title, project.title)
    sidebar.insertBefore(projectButton.element, document.querySelector('addAFolder'))
    projectButton.element.addEventListener('click', () => loadProject(projectButton, taskList, projectTitle))
    projectButton.img.addEventListener('click', deleteProject)
}

const projectTitle = document.querySelector('#projectTitle')

//here we are generating the project buttons and defining
// what happens when you click them
for (let i = 0; i< projectList.length; i++) {
    const projectButton = new manageDOM.navButton(projectList[i].title, projectList[i].title, projectList[i].title)
    projectButton.img.addEventListener('click', deleteProject)
    sidebar.insertBefore(projectButton.element, document.querySelector('addAFolder'))
    projectButton.element.addEventListener('click', () => loadProject(projectButton, taskList, projectTitle))
    
}

function deleteTask(event) {
    const id = event.target.dataset.task
    let currentProject = findProject(addTaskButton.element.dataset.project)
    currentProject.deleteTask(id)
    console.log(currentProject.taskArray)
    event.target.parentElement.parentElement.remove()
}

function loadProject(projectButton, taskList, projectTitle) {
    addTaskButton.element.dataset.project = projectButton.element.dataset.title
    projectTitle.textContent = projectButton.element.dataset.title
    let currentProject = findProject(projectButton.element.dataset.title)
    console.log(currentProject)
    manageDOM.populateTaskList(currentProject.taskArray, taskList)
    const deleteButtons = document.querySelectorAll('.delete')
    deleteButtons.forEach(deleteButton => deleteButton.addEventListener('click', (event) => deleteTask(event)))
    const completedButtons = document.querySelectorAll('.completed')
    completedButtons.forEach(completedButton => 
        completedButton.addEventListener('click', (event) => markComplete(event)))
}

function markComplete(event) {
    console.log(event.target.dataset.task)
    const currentProject = findProject(addTaskButton.element.dataset.project)
    const task = currentProject.markAsComplete(event.target.dataset.task)
    if (task.completed) {
        event.target.classList.add('checked')
        event.target.parentElement.parentElement.classList.add('checked')
    } else if (!task.completed) {
        event.target.classList.remove('checked')
        event.target.parentElement.parentElement.classList.remove('checked')
    }
    currentProject.saveToLocalStorage()
}

function deleteProject() {
    event.stopPropagation()
    const currentProject = findProject(event.target.parentElement.dataset.title)
    projectData.splice(projectData.findIndex(project => project.title == currentProject.title), 1 )
    taskManager.saveProjectData(projectData)
    localStorage.removeItem(currentProject.title)
    event.target.parentElement.remove()
}

