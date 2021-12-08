// Require api calls
const api = require('./api')

// Require response handler functions
const ui = require('./ui')

// Require function to obtain data from form fields when submitted
const getFormFields= require('../../lib/get-form-fields')

// Function to obtain user's techniques
const onTechniqueIndexPersonal = event => {
  // Stop the browser from refreshing
  event.preventDefault()

  api.indexPersonal()
    .then(ui.onTechniqueIndexPersonalSuccess)
    .catch(ui.onTechniqueIndexPersonalFailure)
}

const onSequenceIndexPersonal = event => {
    // Stop the browser from refreshing
    event.preventDefault()
 
    api.indexPersonal()
     .then(ui.onSequenceIndexPersonalSuccess)
     .catch(ui.onSequenceIndexPersonalFailure)
}

const onUserIndex = event => {

    api.indexPersonal()
      .then(ui.onSearchByUserNameSuccess)
      .catch(ui.onSearchByUserNameFailure)
}


const onUpdateUser = event => {
    // Stop the browser from refreshing
event.preventDefault()

const formData = getFormFields(event.target)

api.updateUser(formData)
    .then(ui.onUpdateUserSuccess)
    .catch(ui.onUpdateUserFailure)
}

const onSearchByUserName = event => {
    // Stop the browser from refreshing
    event.preventDefault()

    const formData = getFormFields(event.target)

    api.searchByUserName(formData)
    .then(ui.onSearchByUserNameSuccess)
    .catch(ui.onSearchByUserNameFailure)
}

module.exports = {
    onTechniqueIndexPersonal,
    onSequenceIndexPersonal,
    onUserIndex,
    onUpdateUser,
    onSearchByUserName
}