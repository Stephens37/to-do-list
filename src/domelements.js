import _ from 'lodash'
import './style.css'

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
