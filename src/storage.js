import { CreateNameForm, mainTaskArray, project } from './logic.js'
import { taskElements } from './domelements.js'

export function populateStorage (project) {
  let stringProject = JSON.stringify(project)
  localStorage.setItem('projects', stringProject)
  console.log(project)
}

// export function populateTasks(htmlDescription, )

function setStyles () {
  const currentArray = JSON.parse(localStorage.getItem('projects'))
  let project = currentArray
  const allNames = project.map(obj => obj.formTitle)
  let i = 0
  while (i < allNames.length) {
    let mainTitle = allNames[0 + i++]
    const reviveForm = new CreateNameForm(mainTitle)
    reviveForm.submitName()
  }
}

/* function setTasks () {
  parse the project array
  get the unnamed object with a formtitle equal to the title display button clicked
  get task array from that object
  create a loop that loops through the task array and adds those values to taskElements to be displayed on the page
}
*/

export function setTasks () {
  let currentArray = JSON.parse(localStorage.getItem('projects'))
  console.log(currentArray)
  const allTasks = currentArray.map(obj => obj.taskArray)
  console.log(allTasks)
  const allArrayTasks = allTasks.flat()
  console.log(allArrayTasks.length)
  function reviveTasks () {
    for (let i = 0; i < allArrayTasks.length; i += 3) {
      let x = i
      let y = i + 1
      let z = i + 2
      console.log(allArrayTasks)
      /* let description = allArrayTasks[x]
      console.log(description)
      let priority = allArrayTasks[y]
      console.log(priority)
      console.log(allArrayTasks[y])
      let due = allArrayTasks[z]
      console.log(due)
      console.log(allTasks)
      console.log(`x: ${x}, y: ${y}, z: ${z}`);
      console.log(`Description: ${allArrayTasks[x]}`);
      console.log(`Priority: ${allArrayTasks[y]}`);
      console.log(`Due: ${allArrayTasks[z]}`);
      if (taskElements !== undefined) {
        console.log('hello')
      } */
      taskElements(`${allArrayTasks[x]}`, `${allArrayTasks[y]}`, `${allArrayTasks[z]}`)
    }
  }
  reviveTasks()
}

window.addEventListener('load', function () {
  if (localStorage.getItem('projects')) {
    setStyles()
  }
})


    //reviveTasks.sayTask()

  /* let currentArray = JSON.parse(localStorage.getItem('projects'))
  let taskArray = currentArray.mainTaskArray
  for (let i = 0; i < taskArray.length; i++) {
    let x = -3
    let y = -2
    let z = -1
    let description = taskArray[x++ + 3]
    console.log(description)
    let priority = taskArray[y++ + 3]
    console.log(priority)
    let due = taskArray[z++ + 3]
    console.log(due)
    const titleDisplay = document.querySelector('#titledisplay')
    console.log(titleDisplay)
    function displayTasks () {
      const reviveTasks = new Task(description, priority, due)
      console.log(reviveTasks)
      reviveTasks.sayTask()
    }
    titleDisplay.addEventListener('click', displayTasks()) */

/* export function setTasks (project) {
  let currentArray = JSON.parse(localStorage.getItem('projects'))
  project = currentArray
  let i = 0
  while (i < mainTaskArray.length) {
    let taskID = mainTaskArray[0 + i++]
    const reviveTasks = new Task(taskID)
    reviveTasks.sayTask()
  }
}

 step 1: populate storage with each project title in its own object within the project array
step 2: populate storage with the tasks for each project in the projecttitles object with its own key
step 3: call upon the project titles from the project array to fill buttons on the sidebar.
step 4: call upon tasks for project when project title's button is clicked on */