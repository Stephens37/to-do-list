import * as domElement from './domelements'
import { taskElements } from './domelements'
import { FormDisplay } from './logic.js'
import { populateStorage } from './storage.js'
import { project } from './logic.js'
import { formTitle } from './logic.js'
import { taskProjectObject } from './logic.js'
import { indexOf } from 'lodash'

const taskForm = document.querySelector('#task_form')
const cancelTask = document.querySelector('#closetaskform')

function openTask () {
  const taskOpen = new FormDisplay(taskForm)
  taskOpen.openForm()
}
function closetask () {
  const taskClose = new FormDisplay(taskForm)
  taskClose.closeForm()
}
const newTaskButton = document.querySelector('#newtask')
newTaskButton.addEventListener('click', openTask)

cancelTask.addEventListener('click', closetask)

let mainTaskArray = []
let titleDisplay = document.querySelector('#titledisplay')
let projectArrayCopy = [...project]
console.log(projectArrayCopy)

export class Task {
  constructor (description, priority, due, taskArray) {
    this.description = description
    this.priority = priority
    this.due = due
    this.taskArray = taskArray
  }

  sayTask () {
    mainTaskArray.push(this.description, this.priority, this.due)
  }
}

function newTask () {
  const htmlDescription = document.getElementById('description').value

  const htmlPriority = document.getElementById('priority').value

  const htmlDue = document.getElementById('duedate').value

  let htmlTaskArray = []

  let htmlMainArray = []

  const task = new Task(htmlDescription, htmlPriority, htmlDue, htmlTaskArray, htmlMainArray)
  task.sayTask()
  console.log(htmlTaskArray)
  console.log(htmlMainArray)

  taskElements(htmlDescription, htmlPriority, htmlDue)
  
  let projectIndex = project.indexOf(mainTitle.innerText)
  console.log(projectIndex)
  projectArrayCopy = Object.assign(projectIndex, { tasks: mainTaskArray })
  console.log(projectArrayCopy)
  return projectArrayCopy
}

document.addEventListener('beforeunload', populateStorage(projectArrayCopy))

taskForm.addEventListener('submit', newTask)

const todayButton = document.querySelector('#todaybutton')
const weekButton = document.querySelector('#weekbutton')
const mainTitle = document.querySelector('#maintitle')

function todayTasks () {
  mainTitle.innerText = 'Today'
  document.querySelector('#newtask').style.display = 'none'
  document.querySelector('#taskinfo').style.display = 'none'
}

todayButton.addEventListener('click', todayTasks)

function weekView () {
  mainTitle.innerText = 'This Week'
  document.querySelector('#newtask').style.display = 'none'
  document.querySelector('#taskinfo').style.display = 'none'
}

weekButton.addEventListener('click', weekView)
