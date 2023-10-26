import _, { fromPairs } from 'lodash'
import './style.css'
import * as domElement from './domelements'

function FormDisplay (form) {
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
let mainTitle = document.querySelector('#maintitle')

const nameForm = document.querySelector('#name_form')
const nameSubmit = document.querySelector('#submitname')

function CreateNameForm (title) {
  this.title = title
  this.displayProject = function () {
    mainTitle.innerText = title
    newTaskButton.style.display = 'block'
    console.log(title)
  }

  this.submitName = function () {
    const titleDisplay = document.createElement('button')
    titleDisplay.setAttribute('id', 'titledisplay')
    titleDisplay.innerText = title
    createdProjects.appendChild(titleDisplay)
    titleDisplay.addEventListener('click', this.displayProject)
  }
}

export function whichProject (projects) {
  projects = {
    id: 'project',
    projectArray: []
  }
  console.log(projects)
  const formTitle = document.querySelector('#title').value
  projects.projectArray.push(formTitle)
  return projects
}

function createProject () {
  const formTitle = document.querySelector('#title').value
  const newNameForm = new CreateNameForm(formTitle)
  whichProject()
  newNameForm.submitName()
}

function titleDisplayClicked () {
  const formTitle = document.querySelector('#title').value
  const mainProjectView = new CreateNameForm(formTitle)
  mainProjectView.displayProject()
}

nameSubmit.addEventListener('click', createProject)

function displayFunc () {
  const titleDisplay = document.querySelector('#titledisplay')
  titleDisplay.addEventListener('click', titleDisplayClicked)
}
document.addEventListener('DOMContentLoaded', displayFunc)

nameForm.addEventListener('submit', (e) => {
  e.preventDefault()
  nameForm.reset()
})
