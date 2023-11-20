import './style.css'
import './domelements.js'
import { CreateNameForm, mainTaskArray, Task, mainTitle } from './logic.js'

window.addEventListener('load', function () {
  if (!localStorage.getItem('projects')) {
    populateStorage()
    console.log('hi')
  } else {
    setStyles()
    setTasks()
    console.log('bye')
  }
})

export function populateStorage (project, stringMainTitle) {
  let stringProject = JSON.stringify(project)
  localStorage.setItem('projects', stringProject)
  localStorage.setItem('maintitle', stringMainTitle)
  console.log(stringProject)
}

export function populateTasks (project, stringTaskArray) {
  let stringProject = JSON.stringify(project)
  localStorage.setItem('projects', stringProject)
  localStorage.setItem('taskarray', stringTaskArray)
  console.log(stringProject)
}

// export function populateTasks(htmlDescription, )

function setStyles () {
  let currentArray = JSON.parse(localStorage.getItem('projects'))
  let mainTitle = localStorage.getItem('maintitle')
  let project = currentArray
  console.log(project)
  for (let i = 0; i < project.length; i++) {
    const reviveForm = new CreateNameForm(mainTitle)
    reviveForm.submitName()
  }
}

export function setTasks () {
  let taskArray = localStorage.getItem('taskarray')
  for (let i = 0; i < taskArray.length; i++) {
    let x = -3
    let y = -2
    let z = -1
    let description = taskArray[x++ + 3]
    console.log(description)
    let priority = taskArray[y++ + 3]
    console.log(priority)
    let due = taskArray[z++ + 3]
    console.log(due)
    const titleDisplay = document.querySelector('#titledisplay')
    console.log(titleDisplay)
    function displayTasks () {
      const reviveTasks = new Task(description, priority, due)
      reviveTasks.sayTask()
    }
    titleDisplay.addEventListener('click', displayTasks())
  }
}

/* export function setTasks (project) {
  let currentArray = JSON.parse(localStorage.getItem('projects'))
  project = currentArray
  let i = 0
  while (i < mainTaskArray.length) {
    let taskID = mainTaskArray[0 + i++]
    const reviveTasks = new Task(taskID)
    reviveTasks.sayTask()
  }
}

 step 1: populate storage with each project title in its own object within the project array
step 2: populate storage with the tasks for each project in the projecttitles object with its own key
step 3: call upon the project titles from the project array to fill buttons on the sidebar.
step 4: call upon tasks for project when project title's button is clicked on */