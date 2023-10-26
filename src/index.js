import _ from 'lodash'
import './style.css'
import './domelements.js'
import * as logic from './logic.js'

document.addEventListener('DOMContentLoaded', logic)

let project = logic.whichProject()
console.log(project)

if (!localStorage.getItem('projects')) {
  populateStorage()
} else {
  setStyles()
}

function populateStorage () {
  let stringProject = JSON.stringify(project)
  localStorage.setItem('projects', stringProject)
  console.log(stringProject)
  setStyles()
}

function setStyles () {
  JSON.parse(localStorage.getItem('projects'))
}

project.onchange = populateStorage()
