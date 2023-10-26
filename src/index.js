import _ from 'lodash'
import './style.css'
import './domelements.js'
import UI from './logic.js'

document.addEventListener('DOMContentLoaded', UI)

let projects = document.querySelector('#projects')

if (!localStorage.getItem('projects')) {
  populateStorage()
} else {
  setStyles()
}

function populateStorage () {
  localStorage.setItem('projects', document.getElementById('projects').value)
  JSON.stringify(projects)
  setStyles()
}

function setStyles () {
  let currentProjects = localStorage.getItem('projects')
  JSON.parse(currentProjects)
  document.getElementById('projects').value = currentProjects
}

projects.onchange = populateStorage
