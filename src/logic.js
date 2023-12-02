import _, { fromPairs } from 'lodash'
import 'date-fns'
import { taskElements, deleteTask } from './domelements'
import { populateStorage, populateTodayStorage, setTasks, setTodayTasks } from './storage.js'

export function FormDisplay (form) {
  this.form = form

  this.openForm = function () {
    form.style.display = 'grid'
  }

  this.closeForm = function () {
    form.style.display = 'none'
  }
}

function nameFormFunction () {
  function openName () {
    const nameOpen = new FormDisplay(nameForm)
    nameOpen.openForm()
  }
  function closeName () {
    const nameClose = new FormDisplay(nameForm)
    nameClose.closeForm()
  }
  const newProjectButton = document.querySelector('#newprojectbutton')
  const close = document.querySelector('#closenameform')
  newProjectButton.addEventListener('click', openName)
  close.addEventListener('click', closeName)
}

nameFormFunction()

const newTaskButton = document.querySelector('#newtask')
const createdProjects = document.querySelector('#createdprojectsgrid')
const mainTitle = document.querySelector('#maintitle')

const nameForm = document.querySelector('#name_form')
const nameSubmit = document.querySelector('#submitname')

function clearAllInputs () {
  let formInput = document.querySelector('#title')
  formInput.value = ''
}

/* function clearAllTaskInputs () {
  let getInputs = document.querySelectorAll('input')
  getInputs.value = ''
  submitProjectInfo.addEventListener('click', newTask) == false
}
let titleDisplay = document.querySelector('#titledisplay')
titleDisplay.addEventListener(clearAllTaskInputs) */

export function CreateNameForm (title) {
  this.title = title

  this.displayProject = function () {
    newTaskButton.style.display = 'block'
  }

  this.displayMain = function () {
    mainTitle.innerText = title
  }

  this.submitName = function () {
    const titleDisplay = document.createElement('button')
    titleDisplay.setAttribute('id', 'titledisplay')
    titleDisplay.innerText = title
    createdProjects.appendChild(titleDisplay)
    titleDisplay.addEventListener('click', this.displayProject)
    titleDisplay.addEventListener('click', setTasks)
    titleDisplay.addEventListener('click', this.displayMain)
  }
}

export let project = []
export let mainTaskArray = []


function createProject (formTitle) {
  formTitle = document.querySelector('#title').value
  const newNameForm = new CreateNameForm(formTitle)
  newNameForm.submitName()
  project.push({ formTitle })
  populateStorage(project)
  return { formTitle, project }
}

function preventSubmit(event) {
  let warn = "preventDefault() won't let you submit this!"
  console.log(warn)
  event.preventDefault()
}

nameSubmit.addEventListener('click', preventSubmit)
nameSubmit.addEventListener('click', createProject)
nameSubmit.addEventListener('click', clearAllInputs)

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
newTaskButton.addEventListener('click', openTask)

cancelTask.addEventListener('click', closetask)

export class Task {
  constructor (description, priority, due) {
    this.description = description
    this.priority = priority
    this.due = due
  }

  sayTask () {
    mainTaskArray.push(this.description, this.priority, this.due)
    console.log(mainTaskArray)
  }
}

export function newTask () {
  const htmlDescription = document.getElementById('description').value

  const htmlPriority = document.getElementById('priority').value

  const htmlDue = document.getElementById('duedate').value
  console.log(htmlDue)

  const task = new Task(htmlDescription, htmlPriority, htmlDue)
  console.log(task)
  task.sayTask()
  console.log(task)

  taskElements(htmlDescription, htmlPriority, htmlDue)

  let projectMainTitle = document.querySelector('#maintitle')
  let mainTitleTrim = projectMainTitle.innerText.trim()
  for (let i = 0; i < project.length; i++) {
    let projectTitle = project[i].formTitle
    let projectIndex = project[i]
    if (projectTitle == mainTitleTrim && projectIndex.taskArray == undefined) {
      projectIndex.taskArray = mainTaskArray
    }
    populateStorage(project)
  }
  function deleteArrayTask () {
    mainTaskArray.splice(this.htmlDescription, 3)
    populateStorage(project)
  }
  deleteTask.addEventListener('click', deleteArrayTask)

  console.log(htmlDue)
  const htmlStringDue = htmlDue.toString()
  console.log(htmlStringDue)
  const { format } = require('date-fns')
  const htmlDueDate = format(new Date(htmlStringDue), 'yyyy.MM.dd')
  console.log(htmlDueDate)

  const todayArray = []

  const today = format(new Date(), 'yyyy.MM.dd')
  console.log(today)
  // let newHTMLDue = format(new Date(htmlDue), 'yyyy.MM.dd')
  // console.log(newHTMLDue)
  if (today === htmlDueDate) {
    todayArray.push(htmlDescription, htmlPriority, htmlDue)
    console.log(todayArray)
    console.log('hello')
    populateTodayStorage(todayArray)
  }
}

const submitProjectInfo = document.querySelector('#submitprojectinfo')
submitProjectInfo.addEventListener('click', preventSubmit)
submitProjectInfo.addEventListener('click', newTask)
submitProjectInfo.addEventListener('click', clearAllInputs)

function todayTitleDisplay () {
  mainTitle.innerText = 'Today'
  document.querySelector('#newtask').style.display = 'none'
}

const todayButton = document.querySelector('#todaybutton')
todayButton.addEventListener('click', todayTitleDisplay)
todayButton.addEventListener('click', setTodayTasks)

  /*console.log(htmlDue)
  const htmlStringDue = htmlDue.toString()
  console.log(htmlStringDue)
  const htmlDueDate = new Date(htmlStringDue)
  console.log(htmlDueDate)
  console.log(typeof htmlDues)

  const todayArray = []

  const { format } = require('date-fns')
  const today = format(new Date(), 'yyyy.MM.dd')
  console.log(today)
  // let newHTMLDue = format(new Date(htmlDue), 'yyyy.MM.dd')
  // console.log(newHTMLDue)
  if (today === htmlDueDate) {
    todayArray.push(htmlDescription, htmlPriority, htmlDue)
    console.log(todayArray)
    console.log('hello')
  }
  return todayArray
} */

// submitProjectInfo.addEventListener('click', todayTasks)
/* const todaySArray = newTask.todayArray
console.log(todaySArray)

function todayButtonClicked () {
  const thisDayArray = todaySArray
  for (let i = 0; i < 1; i++) {
    let x = 0
    let y = 1
    let z = 2
    let descriptionToday = thisDayArray[x + i++]
    let priorityToday = thisDayArray[y + i++]
    let dueToday = thisDayArray[z + i++]
    taskElements(descriptionToday, priorityToday, dueToday)
  }
} 

const todayButton = document.querySelector('#todaybutton')
todayButton.addEventListener('click', todayButtonClicked) */


const weekButton = document.querySelector('#weekbutton')

function weekView () {
  mainTitle.innerText = 'This Week'
  document.querySelector('#newtask').style.display = 'none'
  document.querySelector('#taskinfo').style.display = 'none'
}

weekButton.addEventListener('click', weekView)