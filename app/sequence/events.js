// Require api calls
const api = require('./api')

// Require response handler functions
const ui = require('./ui')

// Require function to obtain data from form fields when submitted
const getFormFields= require('../../lib/get-form-fields')

const store = require('../store')

const count = 3
store.count = count


// Sequence Index
const onSequenceIndex = event => {
  // Stop the browser from refreshing
  event.preventDefault()
  
  // Call the sequence-index api function
  api.sequenceIndex()
    .then(ui.onSequenceIndexSuccess) 
    .catch(ui.onSequenceIndexFailure)
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
    .then(ui.onSequenceShowSuccess) 
    .catch(ui.onSequenceShowFailure)
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

// Sequence Update
const onSequenceUpdate = event => {
  // Stop the browser from refreshing
  event.preventDefault()
  
  const formData = getFormFields(event.target)

  // Set techniques in an array per Sequence model
  let techniquesArray = [] 
  
  // Cycle through the sequence data's keys starting with the optional third technique
  for (let i = 2; i < Object.keys(formData.sequence).length; i++) {
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
      "id": formData.sequence.id
    }
  }


  // Call the technique-update ajax function
  api.sequenceUpdate(sequenceData)
    // Call the sequence-update success function
    .then(ui.onSequenceUpdateSuccess) 
    // Call the sequence-update failure function
    .catch(ui.onSequenceUpdateFailure)
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
  
  // Obtain the data from the form fields
  const formData = getFormFields(event.target)
  console.log(formData)

  // Call the technique-destroy api function
  api.sequenceDestroy(formData)
    // Call the technique-destroy success function
    .then(ui.onSequenceDestroySuccess) 
    // Call the technique-destroy failure function
    .catch(ui.onSequenceDestroyFailure)
}

module.exports = {
 onSequenceIndex,
 onSequenceShow,
 onSequenceCreate,
 onSequenceCreateAddTechnique,
 onSequenceUpdate,
 onSequenceUpdateAddTechnique,
 onSequenceDestroy
}