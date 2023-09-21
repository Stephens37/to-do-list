import _ from 'lodash'
import './style.css'

const nameForms = document.querySelector('#name_form')
const navContent = document.querySelector('#navcontent')
const formTitle = document.querySelector('#title')


function CreateNameForm (title) {
  this.title = title

  this.submitName = function () {
    navContent.appendChild(title)
  }
}

 export function createProject () {
  document.addEventListener('DOMContentLoaded', function () {
    const newNameForm = new CreateNameForm(formTitle)
    newNameForm.submitName()
  })
}

nameForms.addEventListener('submit', createProject)


/*<form action="javascript:," id='project_form'>
<button id="close" type="button">Cancel</button>
<label for="title" class="formcategory">TITLE</label>
<input type="text" name="title" id="title">
<label for="description" class="formcategory">DESCRIPTION</label>
<input type="text" name="description" id="description">
<label for="priority" class="formcategory">PRIORITY</label>
<label for="high" class="formcategory">HIGH</label>
<input type="radio" name="high" id="high">
<label for="mid" class="formcategory">MID</label>
<input type="radio" name="mid" id="mid">
<label for="low" class="formcategory">LOW</label>
<input type="radio" name="low" id="low">
<label for="duedate" class="formcategory">DUE DATE</label>
<input type="date" name="duedate" id="duedate">
<button type="submit" id="submit" class="formcategory" form="project_form">Submit</button>*/

/*
form.style.display = open
*/