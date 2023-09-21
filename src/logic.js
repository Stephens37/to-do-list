import _ from 'lodash'
import './style.css'

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

export function nameForm () {
  const nameForm = document.querySelector('#name_form')
  function openName () {
    const nameOpen = new FormDisplay(nameForm)
    nameOpen.openForm()
  }
  function closeProject () {
    const nameClose = new FormDisplay(nameForm)
    nameClose.closeForm()
  }
  document.addEventListener('DOMContentLoaded', function () {
    const newProjectButton = document.querySelector('#newprojectbutton')
    const close = document.querySelector('#close')
    newProjectButton.addEventListener('click', openName)
    close.addEventListener('click', closeProject)
  })
}
