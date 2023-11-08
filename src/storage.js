import './style.css'
import './domelements.js'
import * as logic from './logic.js'

let projects = logic.projects
console.log(project)

window.addEventListener('load', function () {
  if (!localStorage.getItem('projects')) {
    populateStorage()
    console.log('hi')
  } else {
    setStyles()
    console.log('bye')
  }
})

function populateStorage () {
  let stringProject = JSON.stringify(project)
  localStorage.setItem('projects', stringProject)
  console.log(stringProject)
  setStyles()
}

function setStyles () {
  let currentArray = JSON.parse(localStorage.getItem('projects'))
  project = currentArray
  console.log(project)
}

project.onchange = populateStorage()
