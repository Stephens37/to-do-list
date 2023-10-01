import _ from 'lodash'
import './style.css'

const content = document.querySelector('#content')

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