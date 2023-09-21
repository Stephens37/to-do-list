import _ from 'lodash'
import './style.css'
import { headerStuff, navStuff, mainStuff } from './domelements.js'

headerStuff()
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
/* remember to change to nameform*/
const nameForm = document.querySelector('#name_form')
console.log(nameForm)

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
const createdProjects = document.querySelector('#createdprojects')

function CreateNameForm (title) {
  this.title = title

  this.submitName = function () {
    const titleDisplay = document.createElement('button')
    titleDisplay.innerText = title
    createdProjects.appendChild(titleDisplay)
  }
}

export function createProject () {
  const newNameForm = new CreateNameForm(formTitle)
  newNameForm.submitName()
}

nameForm.addEventListener('submit', createProject)
