import _ from 'date-fns'

export const deleteTask = document.createElement('button')
deleteTask.setAttribute('id', 'deletetask')
deleteTask.innerText = 'Delete'

export function taskElements (descriptionText, priorityText, dayDueText) {
  let description = document.createElement('td')
  description.setAttribute('class', 'descriptiongd')
  description.innerText = descriptionText

  let priority = document.createElement('td')
  priority.setAttribute('class', 'prioritygd')
  priority.innerText = ''

  priority.innerText = priorityText

  let dayDue = document.createElement('td')
  dayDue.setAttribute('class', 'daydue')
  dayDue.innerText = dayDueText

  const editTask = document.createElement('button')
  editTask.setAttribute('class', 'edittask')
  editTask.innerText = 'Edit Task'
  
  let titleDisplay = document.querySelector('#titledisplay')

  const tbody = document.querySelector('tbody')
  const tableRow = document.createElement('tr')
  /* if (tbody.children.length === 0) {
    return
  } */
  tableRow.setAttribute('class', 'tablerow')
  tbody.appendChild(tableRow)
  tableRow.appendChild(deleteTask)

  tableRow.appendChild(description)

  tableRow.appendChild(priority)

  tableRow.appendChild(dayDue)

  tableRow.appendChild(editTask)

  function removeTask () {
    deleteTask.remove()
    description.remove()
    priority.remove()
    dayDue.remove()
    editTask.remove()
  }
  deleteTask.addEventListener('click', removeTask)
  const taskForm = document.querySelector('#task_form')
  taskForm.reset()
}

