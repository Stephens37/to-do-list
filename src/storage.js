import * as domElement from './domelements'
import * as projectLogic from './logic.js'

if(!localStorage.getItem()) {
  populateStorage()
} else {
  setStyles()
}

function populateStorage() {
  localStorage.setItem('description', document.getElementById('description').value)
  localStorage.setItem('priority', document.getElementById('priority').value)
  localStorage.setItem('dayDue', document.getElementById('dayDue').innerText)

  setStyles()
}

function setStyles() {
  let currentDescription = localStorage.getItem('description')
  let currentPriority = localStorage.getItem('priority')
  let currentDayDue = localStorage.getItem('image')

  document.getElementById('description').value = currentDescription
  document.getElementById('priority').value = currentPriority
  document.getElementById('dayDue').innerText = currentDayDue
}

currentDescription.onchange = populateStorage
fontForm.onchange = populateStorage
imageForm.onchange = populateStorage

/* work on getting population storage directly above set up*/