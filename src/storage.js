import * as domElement from './domelements'
import * as projectLogic from './logic.js'


function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      // everything except Firefox
      (e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === "QuotaExceededError" ||
        // Firefox
        e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}

if (storageAvailable("localStorage")) {
  // Yippee! We can use localStorage awesomeness
} else {
  // Too bad, no localStorage for us
}

if (!localStorage.getItem('description')) {
  populateStorage()
} else {
  setStyles()
}

function populateStorage() {
  localStorage.setItem('description', document.getElementById('description').value)
  localStorage.setItem('priority', document.getElementById('priority').value)
  localStorage.setItem('dayDue', document.getElementById('dayDue').value)

  setStyles()
}

function setStyles() {
  let currentDescription = localStorage.getItem('description')
  let currentPriority = localStorage.getItem('priority')
  let currentDayDue = localStorage.getItem('image')

  document.getElementById('description').value = currentDescription
  document.getElementById('priority').value = currentPriority
  document.getElementById('dayDue').value = currentDayDue
}

currentDescription.onchange = populateStorage
fontForm.onchange = populateStorage
imageForm.onchange = populateStorage

/* work on getting population storage directly above set up*/