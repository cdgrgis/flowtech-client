// Require api calls
const api = require('./api')

// Require response handler functions
const ui = require('./ui')

// Require function to obtain data from form fields when submitted
const getFormFields= require('../../lib/get-form-fields')

// Require the store object
const store = require('../store')

// Function to obtain user's techniques
const onTechniqueIndexPersonal = event => {
  // Stop the browser from refreshing
  event.preventDefault()

  api.techniqueIndexPersonal()
    .then(ui.onTechniqueIndexPersonalSuccess)
    .catch(ui.onTechniqueIndexPersonalFailure)
}

const onSequenceIndexPersonal = event => {
    // Stop the browser from refreshing
    event.preventDefault()
    console.log
   
    
 
    api.sequenceIndexPersonal()
     .then(ui.onSequenceIndexPersonalSuccess)
     .catch(ui.onSequenceIndexPersonalFailure)
   
 }

 const onUpdateUser = event => {
       // Stop the browser from refreshing
    event.preventDefault()
   
    const formData = getFormFields(event.target)
    console.log('form data ', formData)

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
    onUpdateUser,
    onSearchByUserName
}