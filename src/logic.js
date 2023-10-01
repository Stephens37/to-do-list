import _, { fromPairs } from 'lodash'
import './style.css'
import { navStuff, mainStuff } from './domelements.js'

navStuff()
mainStuff()

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
let newTaskButton = document.querySelector('#newtaskbutton')
const createdProjects = document.querySelector('#createdprojects')
const mainTitle = document.querySelector('#maintitle')
const mainFormPart = document.querySelector('#mainformpart')

const nameForm = document.querySelector('#name_form')
const nameSubmit = document.querySelector('#submitname')

function CreateNameForm (title) {

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

function todayView () {
  mainTitle.innerText = 'Today'
  newTaskButton = false
}

function weekView () {
  mainTitle.innerText = 'This Week'
  newTaskButton = false
}

function projectView (, )