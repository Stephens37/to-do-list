import './style.css'
import './domelements.js'
import { CreateNameForm, mainTaskArray, mainFormTitle } from './logic.js'
import { taskElements } from './domelements.js'

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

function setStyles () {
  let currentArray = JSON.parse(localStorage.getItem('projects'))
  console.log(currentArray)
  let project = currentArray
  const allNames = project.map(obj => obj.formTitle)
  console.log(allNames)
  console.log(project)
  let i = 0
  while (i < allNames.length) {
    let mainTitle = allNames[0 + i++]
    const reviveForm = new CreateNameForm(mainTitle)
    reviveForm.submitName()
  }
}

export function setTasks () {
  let currentArray = JSON.parse(localStorage.getItem('projects'))
  console.log(currentArray)
  let project = currentArray
  const allNames = project.map(obj => obj.taskArray)
  console.log(allNames)
  console.log(project)
  for (let i = 0; i < allNames.length; i += 3) {
    let x = 0
    let y = 1
    let z = 2
    let description = allNames[x + i++]
    console.log(description)
    let priority = allNames[y + i++]
    let due = allNames[z + i++]
    taskElements(description, priority, due)
    //reviveTasks.sayTask()

  /* let currentArray = JSON.parse(localStorage.getItem('projects'))
  let taskArray = currentArray.mainTaskArray
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
      console.log(reviveTasks)
      reviveTasks.sayTask()
    }
    titleDisplay.addEventListener('click', displayTasks()) */
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