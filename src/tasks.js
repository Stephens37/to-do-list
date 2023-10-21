import * as domElement from './domelements'
import { taskElements } from './domelements'
import FormDisplay from './logic.js'

export default function tasks () {
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
  const newTaskButton = document.querySelector('#newtaskbutton')
  newTaskButton.addEventListener('click', openTask)
  cancelTask.addEventListener('click', closetask)

  class Task {
    constructor (description, priority, due) {
      this.description = description
      this.priority = priority
      this.due = due
    }

    sayTask () {
      console.log(this.description, this.priority, this.due)
    }
  }

  function newTask () {
    const htmlDescription = document.getElementById('description').value

    const htmlPriority = document.getElementById('priority').value

    const htmlDue = document.getElementById('duedate').value

    const task = new Task(htmlDescription, htmlPriority, htmlDue)
    task.sayTask()

    taskElements(htmlDescription, htmlPriority, htmlDue)
  }

  taskForm.addEventListener('submit', newTask)

  const todayButton = document.querySelector('#todaybutton')
  const weekButton = document.querySelector('#weekbutton')
  const mainTitle = document.querySelector('#maintitle')

  function todayTasks () {
    mainTitle.innerText = 'Today'
    document.querySelector('#newtaskbutton').style.display = 'none'
    document.querySelector('#taskinfo').style.display = 'none'
  }

  todayButton.addEventListener('click', todayTasks)

  function weekView () {
    mainTitle.innerText = 'This Week'
    document.querySelector('#newtaskbutton').style.display = 'none'
    document.querySelector('#taskinfo').style.display = 'none'
  }

  weekButton.addEventListener('click', weekView)
}
