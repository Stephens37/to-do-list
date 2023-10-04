import _ from 'lodash'
import './style.css'

export const task = document.createElement('task')
task.setAttribute('id', 'task')

export const deleteTask = document.createElement('button')
deleteTask.setAttribute('id', 'deleteTask')
task.appendChild(deleteTask)

export const description = document.createElement('div')
description.setAttribute('id', 'descriptiongd')
task.appendChild(description)

export const priority = document.createElement('div')
priority.setAttribute('id', 'prioritygd')
task.appendChild(priority)

export const dayDue = document.createElement('div')
dayDue.setAttribute('id', 'daydue')
task.appendChild(dayDue)
