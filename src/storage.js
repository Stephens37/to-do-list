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

/* export function populateTasks (tasks) {
  let stringTasks = JSON.stringify(tasks)
  localStorage.setItem('task', stringTasks)
} */

// export function populateTasks(htmlDescription, )

function setStyles (project) {
  let currentArray = JSON.parse(localStorage.getItem('projects'))
  project = currentArray
  console.log(project)
  let i = 0
  while (i < project.length) {
    let projectID = project[0 + i++]
    const reviveForm = new CreateNameForm(projectID)
    reviveForm.submitName()
  }
}

/* step 1: populate storage with each project title in its own object within the project array
step 2: populate storage with the tasks for each project in the projecttitles object with its own key
step 3: call upon the project titles from the project array to fill buttons on the sidebar.
step 4: call upon tasks for project when project title's button is clicked on */