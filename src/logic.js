import _, { fromPairs } from 'lodash'
import './style.css'
import * as domElement from './domelements'
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
export let formTitle = document.querySelector('#title').value
console.log(formTitle)

function createProject () {
  console.log(formTitle)
  const newNameForm = new CreateNameForm(formTitle)
  newNameForm.submitName()
  project.push({ projecttitle: formTitle })
  console.log(project)
  return { formTitle, project }
}
document.addEventListener('beforeunload', populateStorage(project))

// now that there is an array being stored, we need to

nameSubmit.addEventListener('click', createProject)
