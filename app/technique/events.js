// Require api calls
const api = require('./api')

// Require response handler functions
const ui = require('./ui')

// Require function to obtain data from form fields when submitted
const getFormFields= require('../../lib/get-form-fields')

const store = require('../store')


// Technique Index
const onTechniqueIndex = event => {
  // Stop the browser from refreshing
  event.preventDefault()
  
  // Call the technique-create api function
  api.techniqueIndex()
    .then(ui.onTechniqueIndexSuccess) 
    .catch(ui.onTechniqueIndexFailure)
}

const onTechniqueIndexPersonal = event => {
   // Stop the browser from refreshing
   event.preventDefault()
  
   console.log(store.user.techniques)

   api.techniqueIndexPersonal()
    .then(ui.onTechniqueIndexPersonalSuccess)
    .catch(ui.onTechniqueIndexPersonalFailure)
  
}

// Technique Show
const onTechniqueShow = event => {
  // Stop the browser from refreshing
  event.preventDefault()
  
  // Obtain the data from the form fields
  const formData = getFormFields(event.target)
  console.log(formData)

  // Call the technique-create api function
  api.techniqueShow(formData)
    .then(ui.onTechniqueShowSuccess) 
    .catch(ui.onTechniqueShowFailure)
}


// Technique Create
const onTechniqueCreate = event => {
  // Stop the browser from refreshing
  event.preventDefault()
  
  // Obtain the data from the form fields
  const formData = getFormFields(event.target)
  console.log(formData)

  // Call the technique-create api function
  api.techniqueCreate(formData)
    .then(ui.onTechniqueCreateSuccess) 
    .catch(ui.onTechniqueCreateFailure)
}

// Technique Update
const onTechniqueUpdate = event => {
  // Stop the browser from refreshing
  event.preventDefault()
  
  // Obtain the data from the form fields
  const formData = getFormFields(event.target)
  console.log('form data ', formData)

  // Call the technique-create api function
  api.techniqueUpdate(formData)
    .then(ui.onTechniqueUpdateSuccess) 
    .catch(ui.onTechniqueUpdateFailure)
}

// Technique Destroy
const onTechniqueDestroy = event => {
  // Stop the browser from refreshing
  event.preventDefault()
  
  // Obtain the data from the form fields
  const formData = getFormFields(event.target)
  console.log(formData)

  // Call the technique-create api function
  api.techniqueDestroy(formData)
    .then(ui.onTechniqueDestroySuccess) 
    .catch(ui.onTechniqueDestroyFailure)
}

module.exports = {
 onTechniqueIndex,
 onTechniqueIndexPersonal,
 onTechniqueShow,
 onTechniqueCreate,
 onTechniqueUpdate,
 onTechniqueDestroy
}