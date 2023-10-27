import './style.css'
import './domelements.js'
import * as logic from './logic.js'

let project = logic.whichProject()
console.log(project)

if (!localStorage.getItem('projects')) {
  populateStorage()
  console.log('hi')
} else {
  setStyles()
  console.log('bye')
}

function populateStorage () {
  localStorage.setItem('projects', JSON.stringify(project))
  setStyles()
}

function setStyles () {
  JSON.parse(localStorage.getItem('projects'))
}

project.onchange = populateStorage()