import './style.css'
import './domelements.js'
import { CreateNameForm } from './logic.js'
import { Task } from './tasks.js'

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
  console.log(stringProject)
}

// export function populateTasks(htmlDescription, )

function setStyles (project) {
  let currentArray = JSON.parse(localStorage.getItem('projects'))
  project = currentArray
  console.log(project)
  let i = 0
  while (i < project.length) {
    let projectid = project[0 + i++]
    const reviveForm = new CreateNameForm(projectid)
    reviveForm.submitName()
  }
}
