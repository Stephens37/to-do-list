import _ from 'lodash'
import './style.css'

export const task = document.createElement('task')
task.setAttribute('id', 'task')

export const deleteTask = document.createElement('button')
deleteTask.setAttribute('id', 'deleteTask')
deleteTask.innerText = 'Delete'
task.appendChild(deleteTask)

export const description = document.createElement('div')
description.setAttribute('id', 'descriptiongd')
description.innerText = ''
task.appendChild(description)

export const priority = document.createElement('div')
priority.setAttribute('id', 'prioritygd')
priority.innerText = ''
task.appendChild(priority)

export const dayDue = document.createElement('div')
dayDue.setAttribute('id', 'daydue')
dayDue.innerText = ''
task.appendChild(dayDue)
