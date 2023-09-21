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

export function projectForm () {
  const projectForm = document.querySelector('#project_form')
  function openProject () {
    const projectOpen = new FormDisplay(projectForm)
    projectOpen.openForm()
  }
  function closeProject () {
    const projectClose = new FormDisplay(projectForm)
    projectClose.closeForm()
  }
  document.addEventListener('DOMContentLoaded', function () {
    const newProjectButton = document.querySelector('#newprojectbutton')
    const close = document.querySelector('#close')
    newProjectButton.addEventListener('click', openProject)
    close.addEventListener('click', closeProject)
  })
}
