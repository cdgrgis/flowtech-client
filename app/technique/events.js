// Require api calls
const api = require('./api')

const userApi = require('../user/api')
// Require response handler functions
const ui = require('./ui')

const userUi = require('../user/ui')

// Require function to obtain data from form fields when submitted
const getFormFields= require('../../lib/get-form-fields')

// Require the store object
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

const onTechniqueDemonstration = event => {
  // Stop the browser from refreshing
  event.preventDefault()

  console.log('event target ', event.target)
  console.log('id ', $(event.target).attr('class').slice(27))

  const formData = {
    "technique": {
      "id": $(event.target).attr('class').slice(27)
    }
  }

  api.techniqueShow(formData)
    .then(ui.onTechniqueDemonstrationSuccess)
    .catch(ui.onTechniqueDemonstrationFailure)
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

const onTechniqueShowUpdateModal = event => {
  event.preventDefault()

  console.log((event.target.id).slice(7))
  store.updateTechniqueId = (event.target.id).slice(7)

  console.log(store)

  $('#technique-update-modal').show()
}

// Technique Update
const onTechniqueUpdate = event => {
  // Stop the browser from refreshing
  event.preventDefault()
  console.log('tech id', (event.target.id))
  // Obtain the data from the form fields
  const formData = getFormFields(event.target)

  formData.technique.id = store.updateTechniqueId
  delete store.updateTechniqueId
  console.log('store ', store)
  console.log('form data ', formData)

  // Call the technique-create api function
  api.techniqueUpdate(formData)
    .then(ui.onTechniqueUpdateSuccess) 
    .catch(ui.onTechniqueUpdateFailure)

  userApi.techniqueIndexPersonal()
    .then(userUi.onTechniqueIndexPersonalSuccess)
    .catch(userUi.onTechniqueIndexPersonalFailure)
}

// Technique Destroy
const onTechniqueDestroy = event => {
  // Stop the browser from refreshing
  event.preventDefault()
  console.log('user id ', store.user._id)
  const techniqueId = (event.target.id).slice(7)
  const formData = {
      "technique": {
        "id": techniqueId
      }
    }

  console.log('form data ', formData)
  // Call the technique-create api function
  api.techniqueDestroy(formData)
    .then(ui.onTechniqueDestroySuccess) 
    .catch(ui.onTechniqueDestroyFailure)

  userApi.techniqueIndexPersonal()
    .then(userUi.onTechniqueIndexPersonalSuccess)
    .catch(userUi.onTechniqueIndexPersonalFailure)

}

module.exports = {
 onTechniqueIndex,
 onTechniqueShow,
 onTechniqueCreate,
 onTechniqueShowUpdateModal,
 onTechniqueUpdate,
 onTechniqueDestroy,
 onTechniqueDemonstration
}