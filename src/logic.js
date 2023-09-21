import _ from 'lodash'
import './style.css'
import { headerStuff, navStuff, mainStuff } from './domelements.js'

headerStuff()
navStuff()
mainStuff()

export function FormDisplay(form) {
  this.form = form

  this.openForm = function () {
    form.style.display = 'grid'
  }

  this.closeForm = function () {
    form.style.display = 'none'
  }
}

/* remember to change to nameform*/
const nameForm = document.querySelector('#name_form')

export function nameFormFunction () {
  function openName () {
    const nameOpen = new FormDisplay(nameForm)
    nameOpen.openForm()
  }
  function closeName () {
    const nameClose = new FormDisplay(nameForm)
    nameClose.closeForm()
  }
  document.addEventListener('DOMContentLoaded', function () {
    const newProjectButton = document.querySelector('#newprojectbutton')
    const close = document.querySelector('#close')
    newProjectButton.addEventListener('click', openName)
    close.addEventListener('click', closeName)
  })
}

const navContent = document.querySelector('#navcontent')
const formTitle = document.querySelector('#title')

function CreateNameForm (title) {
  this.title = title

  this.submitName = function () {
    navContent.appendChild(title)
  }
}

export function createProject () {
  document.addEventListener('DOMContentLoaded', function () {
    const newNameForm = new CreateNameForm(formTitle)
    newNameForm.submitName()
  })
}

nameForm.addEventListener('submit', createProject)
