import _, { fromPairs } from 'lodash'
import './style.css'
import { headerStuff, navStuff, mainStuff } from './domelements.js'

headerStuff()
navStuff()
mainStuff()

const nameFormGrid = document.querySelector('#nameformgrid')
const nameForm = document.querySelector('#name_form')
const nameSubmit = document.querySelector('#submitname')

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

export function nameFormFunction () {
  function openName () {
    const nameOpen = new FormDisplay(nameForm)
    nameOpen.openForm()
    nameFormGrid.appendChild(nameForm)
  }
  function closeName () {
    const nameClose = new FormDisplay(nameForm)
    nameClose.closeForm()
  }
  const newProjectButton = document.querySelector('#newprojectbutton')
  console.log(document.querySelector('#newprojectbutton'))
  const close = document.querySelector('#close')
  newProjectButton.addEventListener('click', openName)
  close.addEventListener('click', closeName)
}

const formTitle = document.querySelector('#title').value
const newTaskButton = document.querySelector('#newtaskbutton')
const createdProjects = document.querySelector('#createdprojects')

const mainFormPart = document.querySelector('#mainformpart')

class Open {
  constructor (title, task) {
    this.title = title
    this.task = task
  }

  openProject () {
    mainFormPart.appendChild(this.title)
    mainFormPart.appendChild(this.task)
  }
}

export function displayProject () {
  const viewProject = new Open(formTitle, newTaskButton)
  viewProject.openProject()
}

function CreateNameForm (title) {
  this.title = title

  this.submitName = function () {
    const titleDisplay = document.createElement('button')
    titleDisplay.setAttribute('class', 'titledisplay')
    titleDisplay.innerText = title
    titleDisplay.addEventListener('click', displayProject)
    createdProjects.appendChild(titleDisplay)
  }
}

export function createProject () {
  const newNameForm = new CreateNameForm(formTitle)
  newNameForm.submitName()
}

nameSubmit.addEventListener('click', createProject)
