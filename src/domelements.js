import _ from 'lodash'
import './style.css'

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
