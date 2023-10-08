import _, { fromPairs } from 'lodash'
import './style.css'
import * as domElement from './domelements'
import { createElements } from './domelements'

import { format, isValid, parse } from 'date-fns'


export default function UI () {
  function FormDisplay (form) {
    this.form = form

    this.openForm = function () {
      form.style.display = 'grid'
    }

    this.closeForm = function () {
      form.style.display = 'none'
    }
  }
  console.log(FormDisplay)

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
    console.log(document.querySelector('#newprojectbutton'))
    const close = document.querySelector('#closenameform')
    newProjectButton.addEventListener('click', openName)
    close.addEventListener('click', closeName)
  }

  nameFormFunction()

  const newTaskButton = document.querySelector('#newtask')
  const createdProjects = document.querySelector('#createdprojectsgrid')
  let mainTitle = document.querySelector('#maintitle')
  const mainFormPart = document.querySelector('#mainformpart')

  const nameForm = document.querySelector('#name_form')
  const nameSubmit = document.querySelector('#submitname')

  function CreateNameForm (title) {
    this.title = title

    this.displayProject = function () {
      mainTitle.innerText = title
      newTaskButton.style.display = 'block'
      console.log(title)
    }

    this.submitName = function () {
      const titleDisplay = document.createElement('button')
      titleDisplay.setAttribute('id', 'titledisplay')
      titleDisplay.innerText = title
      createdProjects.appendChild(titleDisplay)
      titleDisplay.addEventListener('click', this.displayProject)
    }
  }

  function createProject () {
    const formTitle = document.querySelector('#title').value
    const newNameForm = new CreateNameForm(formTitle)
    newNameForm.submitName()
  }

  function titleDisplayClicked () {
    const formTitle = document.querySelector('#title').value
    const mainProjectView = new CreateNameForm(formTitle)
    mainProjectView.displayProject()
  }

  nameSubmit.addEventListener('click', createProject)

  function displayFunc () {
    const titleDisplay = document.querySelector('#titledisplay')
    titleDisplay.addEventListener('click', titleDisplayClicked)
  }
  document.addEventListener('DOMContentLoaded', displayFunc)

  nameForm.addEventListener('submit', (e) => {
    e.preventDefault()
    nameForm.reset()
  })

  const todayButton = document.querySelector('#todaybutton')
  const weekButton = document.querySelector('#weekbutton')
  

  function todayView () {
    mainTitle.innerText = 'Today'
    newTaskButton.style.display = 'none'
  }

  todayButton.addEventListener('click', todayView)

  function weekView () {
    mainTitle.innerText = 'This Week'
    newTaskButton.style.display = 'none'
  }

  weekButton.addEventListener('click', weekView)

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

  let myTasks = []

  class Task {
    constructor (description, priority, due) {
      this.description = description
      this.priority = priority
      this.due = due
    }

    sayTask () {
      myTasks.push(this.description, this.priority, this.due)
    }
  }

  function newTask () {
    const htmlDescription = document.getElementById('description').value
    const htmlPriority = document.getElementById('priority').value
    const htmlDue = document.getElementById('duedate').value
    const task = new Task(htmlDescription, htmlPriority, htmlDue)
    task.sayTask()
    createElements()
    const taskInfo = document.querySelector('#taskinfo')
    const deleteTask = document.querySelector('#deletetask')
    const description = document.querySelector('#descriptiongd')
    const priority = document.querySelector('#prioritygd')
    const dayDue = document.querySelector('#daydue')
    const editTask = document.querySelector('#edittask')

    const tableRow = document.createElement('tr')
    tableRow.setAttribute('class', 'tablerow')
    taskInfo.append(tableRow)

    tableRow.append(deleteTask)
    tableRow.append(description)
    tableRow.append(priority)
    tableRow.append(dayDue)
    tableRow.append(editTask)

    function removeTask () {
      myTasks.splice(this.bookTitle, 3)
      deleteTask.remove()
      description.remove()
      priority.remove()
      dayDue.remove()
      editTask.remove()
    }

    deleteTask.addEventListener('click', removeTask)
  }

  taskForm.addEventListener('submit', newTask)
}
  /*function newTask () {
    const formDescription = document.querySelector('#description')
    domElement.description.innerText = formDescription.innerText
    const priorityOptions = document.querySelector('#priority')
    domElement.priority.innerText = priorityOptions.options[priorityOptions.selectedIndex].text
    let dayResult = document.querySelector('#duedate').value
    domElement.dayDue.innerText = dayResult
    mainFormPart.append(domElement.task)
    const createTask = new Task(domElement.deleteTask, domElement.description, domElement.priority, domElement.dayDue, domElement.editTask)
    createTask.sayTask()
  }
  taskForm.addEventListener('submit', newTask)

  function deleteTaskFunc () {
    const taskGrid = document.querySelector('.newtaskgrid')
    taskGrid.remove()
  }
  
  domElement.deleteTask.addEventListener('click', deleteTaskFunc)

  domElement.editTask.addEventListener('click', openTask)
  domElement.editTask.addEventListener('click', deleteTaskFunc)
}*/