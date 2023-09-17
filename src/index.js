import _ from 'lodash';

function homePage () {
  const header = document.createElement('header')
  const todotitle = document.createElement('div')
  todotitle.setAttribute('id', 'todotitle')
  todotitle.innerText = 'To-do-list'
  header.appendChild('todotitle')

  const nav = document.createElement('nav')

  const todayButton = document.createElement('button')
  todayButton.setAttribute('id', 'todaybutton')
  todayButton.innerText = 'Today'
  nav.appendChild(todayButton)

  const weekButton = document.createElement('button')
  weekButton.setAttribute('id', 'weekbutton')
  weekButton.innerText = 'This Week'
  nav.appendChild(weekButton)

  const projectButton = document.createElement('button')
  projectButton.setAttribute('id', 'projectbutton')
  projectButton.innerText = 'Projects'
  nav.appendChild(projectButton)

  const newProjectButton = document.createElement('button')
  newProjectButton.setAttribute('id', 'newprojectbutton')
  newProjectButton.innerText = 'Add Project'
  nav.appendChild(newProjectButton)
}

homePage()