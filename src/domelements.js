import _ from 'lodash'
import './style.css'

export const task = document.createElement('div')
task.setAttribute('id', 'task')

export const deleteTask = document.createElement('button')
deleteTask.setAttribute('id', 'deleteTask')
deleteTask.innerText = 'Delete'

export const description = document.createElement('div')
description.setAttribute('id', 'descriptiongd')
description.innerText = ''

export const priority = document.createElement('div')
priority.setAttribute('id', 'prioritygd')
priority.innerText = ''

export const dayDue = document.createElement('div')
dayDue.setAttribute('id', 'daydue')
dayDue.innerText = ''

export const editTask = document.createElement('button')
editTask.setAttribute('id', 'edittask')
editTask.innerText = 'Edit Task'
