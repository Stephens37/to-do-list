import _ from 'lodash'
import './style.css'

const content = document.querySelector('#content')

export function headerStuff () {
  const header = document.createElement('header')
  content.appendChild(header)

  const headerContent = document.createElement('div')
  headerContent.setAttribute('id', 'headercontent')
  header.appendChild(headerContent)

  const todotitle = document.createElement('div')
  todotitle.setAttribute('id', 'todotitle')
  todotitle.innerText = 'What to do'
  headerContent.appendChild(todotitle)
}

export function navStuff () {
  const nav = document.createElement('nav')
  content.appendChild(nav)

  const navContent = document.createElement('div')
  navContent.setAttribute('id', 'navcontent')
  nav.appendChild(navContent)

  const todayButton = document.createElement('button')
  todayButton.setAttribute('id', 'todaybutton')
  todayButton.setAttribute('class', 'navsizing')
  todayButton.innerText = 'Today'
  navContent.appendChild(todayButton)

  const weekButton = document.createElement('button')
  weekButton.setAttribute('id', 'weekbutton')
  weekButton.setAttribute('class', 'navsizing')
  weekButton.innerText = 'This Week'
  navContent.appendChild(weekButton)

  const projectNavText = document.createElement('div')
  projectNavText.setAttribute('id', 'projectnavtext')
  projectNavText.innerText = 'Projects'
  navContent.appendChild(projectNavText)

  const newProjectButton = document.createElement('button')
  newProjectButton.setAttribute('id', 'newprojectbutton')
  newProjectButton.setAttribute('class', 'navsizing')
  newProjectButton.innerText = 'Add Project'
  navContent.appendChild(newProjectButton)

  const nameForm = document.createElement('form')
  nameForm.setAttribute('id', 'nameform')
  nameForm.setAttribute('class', 'navsizing')
  navContent.appendChild(nameForm)

  const createdProjects = document.createElement('div')
  createdProjects.setAttribute('id', 'createdprojects')
  createdProjects.setAttribute('class', 'navsizing')
  navContent.appendChild(createdProjects)
  return newProjectButton
}

export function mainStuff () {
  const mainPart = document.createElement('div')
  mainPart.setAttribute('id', 'mainpart')
  content.appendChild(mainPart)
  return mainPart
}

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