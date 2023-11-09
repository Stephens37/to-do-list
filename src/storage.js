import './style.css'
import './domelements.js'

window.addEventListener('load', function () {
  if (!localStorage.getItem('projects')) {
    populateStorage()
    console.log('hi')
  } else {
    setStyles()
    console.log('bye')
  }
})

export function populateStorage (project) {
  let stringProject = JSON.stringify(project)
  localStorage.setItem('projects', stringProject)
}

function setStyles (project) {
  let currentArray = JSON.parse(localStorage.getItem('projects'))
  project = currentArray
  console.log(project)
}
