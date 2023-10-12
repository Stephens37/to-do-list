import _ from 'lodash'
import './style.css'

<<<<<<< HEAD
export const deleteTask = document.createElement('button')
deleteTask.setAttribute('class', 'deletetask')
deleteTask.innerText = 'Delete'

export const description = document.createElement('td')
description.setAttribute('class', 'descriptiongd')

export const priority = document.createElement('td')
priority.setAttribute('class', 'prioritygd')
priority.innerText = ''

export const priorityOptions = document.querySelector('#priority')
priority.innerText = priorityOptions.options[priorityOptions.selectedIndex].text

export const dayDue = document.createElement('td')
dayDue.setAttribute('class', 'daydue')
let dayResult = document.querySelector('#duedate').value
dayDue.innerText = dayResult

export const editTask = document.createElement('button')
editTask.setAttribute('class', 'edittask')
editTask.innerText = 'Edit Task'

/*turn the creation of elements into a function so that they are not only being created once*/
=======
export function createElements () {
  const deleteTask = document.createElement('button')
  deleteTask.setAttribute('id', 'deletetask')
  deleteTask.innerText = 'Delete'

  const description = document.createElement('div')
  description.setAttribute('id', 'descriptiongd')
  description.innerText = ''
  const formDescription = document.querySelector('#description')
  description.innerText = formDescription.innerText

  const priority = document.createElement('div')
  priority.setAttribute('id', 'prioritygd')
  priority.innerText = ''
  const priorityOptions = document.querySelector('#priority')
  priority.innerText = priorityOptions.options[priorityOptions.selectedIndex].text

  const dayDue = document.createElement('div')
  dayDue.setAttribute('id', 'daydue')
  dayDue.innerText = ''
  let dayResult = document.querySelector('#duedate').value
  dayDue.innerText = dayResult

  const editTask = document.createElement('button')
  editTask.setAttribute('id', 'edittask')
  editTask.innerText = 'Edit Task'
  return { taskInfo, deleteTask, description, priority, dayDue, editTask}
}
>>>>>>> 04f3179ea5c12511624ee52b5758344b4c4a0c2f
