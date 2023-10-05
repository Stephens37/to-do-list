import _ from 'lodash'
import './style.css'

export const task = document.createElement('div')
task.setAttribute('id', 'task')

export const taskGrid = document.createElement('div')
taskGrid.setAttribute('id', 'taskgrid')
task.appendChild(taskGrid)

export const deleteTask = document.createElement('button')
deleteTask.setAttribute('id', 'deleteTask')
deleteTask.innerText = 'Delete'
taskGrid.appendChild(deleteTask)

export const description = document.createElement('div')
description.setAttribute('id', 'descriptiongd')
description.innerText = ''
taskGrid.appendChild(description)

export const priority = document.createElement('div')
priority.setAttribute('id', 'prioritygd')
priority.innerText = ''
taskGrid.appendChild(priority)

export const dayDue = document.createElement('div')
dayDue.setAttribute('id', 'daydue')
dayDue.innerText = ''
taskGrid.appendChild(dayDue)

export const editTask = document.createElement('button')
editTask.setAttribute('id', 'edittask')
editTask.innerText = 'Edit Task'
taskGrid.appendChild(editTask)
