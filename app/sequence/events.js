// Require api calls
const api = require('./api')

// Require the User's api calls
const userApi = require('../user/api')

// Require the Technique's api calls
const techniqueApi = require('../technique/api')

// Require response handler functions
const ui = require('./ui')

// Require User's response handler functions
const userUi = require('../user/ui')

// Require Technique's ui calls
const techniqueUi = require('../technique/ui')

// Require function to obtain data from form fields when submitted
const getFormFields= require('../../lib/get-form-fields')

// Require the store object
const store = require('../store')

// Set count to 3, which is used for the additional techniques in the update and create functions
// there are initially 2 technique inputs, the additional technique functions adds the third
const count = 3

// Save the count in the store object
store.count = count


// Sequence Index
const onSequenceIndex = event => {
  // Stop the browser from refreshing
  event.preventDefault()
  
  // Call the sequence-index api function
  api.sequenceIndex()
    // Call the success response handler
    .then(ui.onSequenceIndexSuccess) 
    .catch(ui.onSequenceIndexFailure)
}


const onSequenceTechniqueDetails = event => {
  // Stop the browser from refreshing
  event.preventDefault()

  console.log('event target ', event.target)
  console.log('id ', $(event.target).attr('class').slice(27))


  const formData = {
    "technique": {
      "id": $(event.target).attr('class').slice(27)
    }
  }
  
  techniqueApi.techniqueShow(formData)
    .then(ui.onSequenceTechniqueDetailsSuccess)
    .catch(ui.onSequenceTechniqueDetailsFailure)

}



// Sequence Show
const onSequenceShow = event => {
  // Stop the browser from refreshing
  event.preventDefault()
  
  // Obtain the data from the form fields
  const formData = getFormFields(event.target)

  console.log('form data ', formData)

  // Call the technique-create api function
  api.sequenceShow(formData)
    // Call the success response handler
    .then(ui.onSequenceShowSuccess) 
    .catch(ui.onSequenceShowFailure)
}



// Show sequence create modal
const onSequenceCreateTechniqueDrop1 = event => {
  // Stop the browser from refreshing
  event.preventDefault()

  techniqueApi.techniqueIndex()
    .then(ui.onSequenceCreateTechniqueDrop1Success)
    .catch(ui.onSequenceCreateTechniqueDrop1Failure)
}


// Sequence Create
const onSequenceCreate = event => {
  // Stop the browser from refreshing
  event.preventDefault()
  
  // Obtain the data from the form fields
  const formData = getFormFields(event.target)

  // Initialize an array for technique ids
  const techniquesArray = [] 

  // Cycle through the sequence data's keys starting with the optional third technique
  for (let i = 1; i < Object.keys(formData.sequence).length; i++) {
    // If additional Technique exists...
    if(Object.keys(formData.sequence)[i]) {
      // push it to the techniquesArray
      techniquesArray.push(Object.values(formData.sequence)[i])
    }
  }

  // Format the data per the Sequence model
  const sequenceData = {
    "sequence": {
      "name": formData.sequence.name,
      "techniques": techniquesArray
    }
  }

 
  console.log('sequence data before api ', sequenceData)
  

  // Call the technique-create ajax function
   api.sequenceCreate(sequenceData)
      // Call the technique-create success function
     .then(ui.onSequenceCreateSuccess) 
     // Call the technique-create failure function
     .catch(ui.onSequenceCreateFailure)
}

// Function to add another technique input to update form
const onSequenceCreateAddTechnique = () => {
  // Set the input to a variable
  const additionalTechniqueHtml = `
  <input id="sequence-create-technique${store.count}" name="sequence[technique${store.count}]" type="text" placeholder="Technique ${store.count}">  
  <br>
  `

  console.log(additionalTechniqueHtml)
  // Add the input underneath the previous inputs
  $('#sequence-create-additional-techniques').append(additionalTechniqueHtml)
  // Increase the count of keys in the sequence object ( object used for create & update sequences)
  store.count++
}

const onSequenceCreateDeleteAdditionalTechniques = () => {
  $('#sequence-create-additional-techniques').text('')
}

const onSequenceShowUpdateModal = event => {
   // Stop the browser from refreshing
   event.preventDefault()

   console.log('update sequence id ', (event.target.id).slice(7))
   store.updateSequenceId = ((event.target.id).slice(7))

   $('#sequence-update-modal').show()
}

// Sequence Update
const onSequenceUpdate = event => {
  // Stop the browser from refreshing
  event.preventDefault()
  
  const formData = getFormFields(event.target)

  // Set techniques in an array per Sequence model
  let techniquesArray = [] 
  
  // Cycle through the sequence data's keys starting with the optional third technique
  for (let i = 1; i < Object.keys(formData.sequence).length; i++) {
    // If additional Technique exists...
    if(Object.keys(formData.sequence)[i]) {
      // push it to the techniquesArray
      techniquesArray.push(Object.values(formData.sequence)[i])
    }
  }

  // Format the data per the Sequence model
  const sequenceData = {
    "sequence": {
      "name": formData.sequence.name,
      "techniques": techniquesArray,
      "id": store.updateSequenceId
    }
  }

  delete store.updateSequenceId

  // Call the technique-update ajax function
  api.sequenceUpdate(sequenceData)
    // Call the sequence-update success function
    .then(ui.onSequenceUpdateSuccess) 
    // Call the sequence-update failure function
    .catch(ui.onSequenceUpdateFailure)

  userApi.sequenceIndexPersonal()
  // Call the success response handler
    .then(userUi.onSequenceIndexPersonalSuccess)
    // Call the failure response handler
    .catch(userUi.onSequenceIndexPersonalFailure)

  
}

// Function to add another technique input to update form
const onSequenceUpdateAddTechnique = () => {
  // Set the input to a variable
  const additionalTechniqueHtml = `
  <input name="sequence[technique${store.count}]" type="text" placeholder="Technique ${store.count}">  
  <br> 
  `
  // Add the input underneath the previous inputs
  $('#sequence-update-additional-techniques').append(additionalTechniqueHtml)
  // Increase the count of keys in the sequence object ( object used for create & update sequences)
  store.count++
}

// Sequence Destroy
const onSequenceDestroy = event => {
  // Stop the browser from refreshing
  event.preventDefault()
  
  console.log('true? ', event.target.id === 'sequence-destroy')
  console.log('event.target ', event.target.id)
  // Set the form Data for ajax request
  let formData = {
    "sequence": {
      "id": event.target.id
    }
  }

  console.log('form data ', formData)


  // Call the technique-destroy api function
  api.sequenceDestroy(formData)
    // Call the technique-destroy success function
    .then(ui.onSequenceDestroySuccess) 
    // Call the technique-destroy failure function
    .catch(ui.onSequenceDestroyFailure)

  // Call the personal sequence index function in order to keep page data the same
  userApi.sequenceIndexPersonal()
    // Call the success response handler
    .then(userUi.onSequenceIndexPersonalSuccess)
    // Call the failure response handler
    .catch(userUi.onSequenceIndexPersonalFailure)
}

// Export functions
module.exports = {
 onSequenceIndex,
 onSequenceTechniqueDetails,
 onSequenceShow,
 onSequenceCreateTechniqueDrop1,
 onSequenceCreate,
 onSequenceCreateAddTechnique,
 onSequenceCreateDeleteAdditionalTechniques,
 onSequenceShowUpdateModal,
 onSequenceUpdate,
 onSequenceUpdateAddTechnique,
 onSequenceDestroy
}