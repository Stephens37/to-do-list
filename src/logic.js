import _, { fromPairs } from 'lodash'
import './style.css'
import * as domElement from './domelements'
import tasks from './'

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

const nameForm = document.querySelector('#name_form')
const nameSubmit = document.querySelector('#submitname')

function CreateNameForm (title) {
  this.title = title

  this.displayProject = function () {
    newTaskButton.style.display = 'block'
    console.log(title)
  }

  this.submitName = function () {
    const titleDisplay = document.createElement('button')
    titleDisplay.setAttribute('id', 'titledisplay')
    titleDisplay.innerText = title
    console.log(titleDisplay.innerText)
    createdProjects.appendChild(titleDisplay)
    titleDisplay.addEventListener('click', this.displayProject)
  }
}

let project

function createProject (formTitle) {
  project = []
  formTitle = document.querySelector('#title').value
  const newNameForm = new CreateNameForm(formTitle)
  newNameForm.submitName()
  project.push(formTitle)
  return { formTitle, project }
}

nameSubmit.addEventListener('click', createProject)

nameForm.addEventListener('submit', (e) => {
  e.preventDefault()
  nameForm.reset()
  console.log(createProject.project)
})

let projects

function projectExport () {
  if (nameSubmit.addEventListener('click', createProject) === true) {
    projects = createProject.project
  }
}

projectExport()

export { projects }
