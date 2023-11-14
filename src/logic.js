import _, { fromPairs } from 'lodash'
import './style.css'
import * as domElement from './domelements'
import { taskElements } from './domelements'
import { populateStorage } from './storage.js'

export function FormDisplay (form) {
  this.form = form

  this.openForm = function () {
    form.style.display = 'grid'
  }

  this.closeForm = function () {
    form.style.display = 'none'
  }
}
console.log(FormDisplay)

function nameFormFunction () {
  function openName () {
    const nameOpen = new FormDisplay(nameForm)
    nameOpen.openForm()
  }
  function closeName () {
    const nameClose = new FormDisplay(nameForm)
    nameClose.closeForm()
  }
  const newProjectButton = document.querySelector('#newprojectbutton')
  console.log(document.querySelector('#newprojectbutton'))
  const close = document.querySelector('#closenameform')
  newProjectButton.addEventListener('click', openName)
  close.addEventListener('click', closeName)
}

nameFormFunction()

const newTaskButton = document.querySelector('#newtask')
const createdProjects = document.querySelector('#createdprojectsgrid')
const mainTitle = document.querySelector('#maintitle')

const nameForm = document.querySelector('#name_form')
const nameSubmit = document.querySelector('#submitname')

export function CreateNameForm (title) {
  this.title = title

  this.displayProject = function () {
    newTaskButton.style.display = 'block'
  }

  this.displayMain = function () {
    mainTitle.innerText = title
  }

  this.submitName = function () {
    const titleDisplay = document.createElement('button')
    titleDisplay.setAttribute('id', 'titledisplay')
    titleDisplay.innerText = title
    console.log(titleDisplay.innerText)
    createdProjects.appendChild(titleDisplay)
    titleDisplay.addEventListener('click', this.displayProject)
    titleDisplay.addEventListener('click', this.displayMain)
  }
}

export let project = []

function createProject (formTitle) {
  formTitle = document.querySelector('#title').value
  console.log(formTitle)
  const newNameForm = new CreateNameForm(formTitle)
  newNameForm.submitName()
  project.push([formTitle])
  console.log(project)
  populateStorage(project)
  return { formTitle, project }
}

// now that there is an array being stored, we need to

nameSubmit.addEventListener('click', createProject)



const taskForm = document.querySelector('#task_form')
const cancelTask = document.querySelector('#closetaskform')

function openTask () {
  const taskOpen = new FormDisplay(taskForm)
  taskOpen.openForm()
}
function closetask () {
  const taskClose = new FormDisplay(taskForm)
  taskClose.closeForm()
}
newTaskButton.addEventListener('click', openTask)

cancelTask.addEventListener('click', closetask)

let mainTaskArray = []
let titleDisplay = document.querySelector('#titledisplay')

export class Task {
  constructor (description, priority, due, taskArray) {
    this.description = description
    this.priority = priority
    this.due = due
    this.taskArray = taskArray
  }

  sayTask () {
    mainTaskArray.push(this.description, this.priority, this.due)
  }
}

function newTask () {
  const htmlDescription = document.getElementById('description').value

  const htmlPriority = document.getElementById('priority').value

  const htmlDue = document.getElementById('duedate').value

  let htmlTaskArray = []

  const task = new Task(htmlDescription, htmlPriority, htmlDue, htmlTaskArray)
  task.sayTask()
  console.log(htmlTaskArray)


  //want to push tasks to the end of the projecttitle in the array
  taskElements(htmlDescription, htmlPriority, htmlDue)
  let projectIndex = project.indexOf(project.mainTitle)
  console.log(projectIndex)
  project.splice(projectIndex, 0, htmlTaskArray)
  console.log(project)
  populateStorage(project)
}

taskForm.addEventListener('submit', newTask)

const todayButton = document.querySelector('#todaybutton')
const weekButton = document.querySelector('#weekbutton')

function todayTasks () {
  mainTitle.innerText = 'Today'
  document.querySelector('#newtask').style.display = 'none'
  document.querySelector('#taskinfo').style.display = 'none'
}

todayButton.addEventListener('click', todayTasks)

function weekView () {
  mainTitle.innerText = 'This Week'
  document.querySelector('#newtask').style.display = 'none'
  document.querySelector('#taskinfo').style.display = 'none'
}

weekButton.addEventListener('click', weekView)

