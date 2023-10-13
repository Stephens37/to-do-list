import _ from 'lodash'
import './style.css'

export function taskElements (description, priority, dayDue) { 
  const deleteTask = document.createElement('button')
  deleteTask.setAttribute('class', 'deletetask')
  deleteTask.innerText = 'Delete'

  description = document.createElement('td')
  description.setAttribute('class', 'descriptiongd')

  priority = document.createElement('td')
  priority.setAttribute('class', 'prioritygd')
  priority.innerText = ''

  const priorityOptions = document.querySelector('#priority')
  priority.innerText = priorityOptions.options[priorityOptions.selectedIndex].text

  dayDue = document.createElement('td')
  dayDue.setAttribute('class', 'daydue')
  let dayResult = document.querySelector('#duedate').value
  dayDue.innerText = dayResult

  const editTask = document.createElement('button')
  editTask.setAttribute('class', 'edittask')
  editTask.innerText = 'Edit Task'

  const tbody = document.querySelector('#tbody')
  const tableRow = document.createElement('tr')
  tableRow.setAttribute('class', 'tablerow')
  tbody.append(tableRow)
  console.log(deleteTask)
  tableRow.append(deleteTask)

  tableRow.appendChild(description)

  console.log(priority.innerText)
  tableRow.append(priority)

  tableRow.append(dayDue)

  tableRow.append(editTask)

  function removeTask () {
    deleteTask.remove()
    description.remove()
    priority.remove()
    dayDue.remove()
    editTask.remove()
  }

  deleteTask.addEventListener('click', removeTask)
}



/*turn the creation of elements into a function so that they are not only being created once*/
