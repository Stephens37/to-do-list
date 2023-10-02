import _, { fromPairs } from 'lodash'
import './style.css'


export default function UI () {
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
    const close = document.querySelector('#close')
    newProjectButton.addEventListener('click', openName)
    close.addEventListener('click', closeName)
  }

  nameFormFunction()

  let newTaskButton = document.querySelector('#newtask')
  const createdProjects = document.querySelector('#createdprojects')
  let mainTitle = document.querySelector('#maintitle')
  const mainFormPart = document.querySelector('#mainformpart')

  const nameForm = document.querySelector('#name_form')
  const nameSubmit = document.querySelector('#submitname')

  function CreateNameForm (title) {
    this.title = title

    this.displayProject = function () {
      mainTitle.innerText = title
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

  function createProject () {
    const formTitle = document.querySelector('#title').value
    const newNameForm = new CreateNameForm(formTitle)
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

  const todayButton = document.querySelector('#todaybutton')
  const weekButton = document.querySelector('#weekbutton')

  function todayView () {
    mainTitle.innerText = 'Today'
    newTaskButton = false
  }

  todayButton.addEventListener('click', todayView)

  function weekView () {
    mainTitle.innerText = 'This Week'
    newTaskButton = false
  }

  weekButton.addEventListener('click', weekView)
}
