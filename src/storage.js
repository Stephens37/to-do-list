import { CreateNameForm, mainTaskArray, project } from './logic.js'
import { taskElements, taskElementsTwo } from './domelements.js'

export function populateStorage (project) {
  let stringProject = JSON.stringify(project)
  localStorage.setItem('projects', stringProject)
  console.log(project)
}

export function populateTodayStorage(today) {
  let stringToday = JSON.stringify(today)
  console.log(stringToday)
  localStorage.setItem('todaytasks', stringToday)
  console.log(today)
}

function setStyles () {
  const currentArray = JSON.parse(localStorage.getItem('projects'))
  let project = currentArray
  const allNames = project.map(obj => obj.formTitle)
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
  const allTasks = currentArray.map(obj => obj.taskArray)
  console.log(allTasks)
  const allArrayTasks = allTasks.flat()
  console.log(allArrayTasks.length)
  function reviveTasks () {
    for (let i = 0; i < allArrayTasks.length; i += 3) {
      let x = i
      let y = i + 1
      let z = i + 2
      console.log(allArrayTasks)
      taskElements(`${allArrayTasks[x]}`, `${allArrayTasks[y]}`, `${allArrayTasks[z]}`)
    }
  }
  reviveTasks()
}

export function setTodayTasks () {
  let allTodayTasks = JSON.parse(localStorage.getItem('todaytasks'))
  console.log(allTodayTasks)
  console.log(allTodayTasks.length)
  function reviveTodayTasks () {
    for (let i = 0; i < allTodayTasks.length; i += 3) {
      let x = i
      let y = i + 1
      let z = i + 2
      console.log(allTodayTasks)
      if (taskElements !== undefined) {
        console.log('hey yo')
        taskElements(`${allTodayTasks[x]}`, `${allTodayTasks[y]}`, `${allTodayTasks[z]}`)
      }
      if (taskElements(`${allTodayTasks[x]}`, `${allTodayTasks[y]}`, `${allTodayTasks[z]}`) === true) {
        console.log('bye')
      }
    }
  }
  reviveTodayTasks()
}

window.addEventListener('load', function () {
  if (localStorage.getItem('projects')) {
    setStyles()
  }
})
