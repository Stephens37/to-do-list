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
  nameForm.setAttribute('id', 'nameformgrid')
  navContent.appendChild(nameForm)

  const createdProjects = document.createElement('div')
  createdProjects.setAttribute('id', 'createdprojects')
  navContent.appendChild(createdProjects)
}

export function mainStuff () {
  const mainPart = document.createElement('div')
  mainPart.setAttribute('id', 'mainpart')
  content.appendChild(mainPart)

  const mainFormPart = document.createElement('div')
  mainFormPart.setAttribute('id', 'mainformpart')
  mainPart.appendChild(mainFormPart)

  const newTaskButton = document.createElement('button')
  newTaskButton.setAttribute('id', 'newtaskbutton')
}