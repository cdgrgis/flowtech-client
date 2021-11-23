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

const onSequenceIndexPersonal = event => {
   // Stop the browser from refreshing
   event.preventDefault()
  
   console.log(store.user.sequences)

   api.sequenceIndexPersonal()
    .then(ui.onSequenceIndexPersonalSuccess)
    .catch(ui.onSequenceIndexPersonalFailure)
  
}

// Sequence Show
const onSequenceShow = event => {
  // Stop the browser from refreshing
  event.preventDefault()
  
  // Obtain the data from the form fields
  const formData = getFormFields(event.target)
  console.log('from data ', formData)

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
  
  
  let sequenceData 

  console.log('key 3 ', (Object.keys(formData.sequence))[2])

  sequenceData = {
    "sequence": {
      "name": formData.sequence.name,
      "techniques": [
        formData.sequence.technique1,
        formData.sequence.technique2
      ]
    }
  }
  console.log('techniques', sequenceData["sequence"]["techniques"])
  console.log('tech 3 ', Object.values(formData.sequence)[3])
  
  
  if(Object.keys(formData.sequence)[store.count]) {
    for (let i = 3; i < Object.keys(formData.sequence).length; i++) {
      sequenceData["sequence"]["techniques"] = Object.values(formData.sequence)[1-i]
   
    }
  }
  console.log('sequence data before api ', sequenceData)
  

  // Call the technique-create api function
  // api.sequenceCreate(sequenceData)
  //   .then(ui.onSequenceCreateSuccess) 
  //   .catch(ui.onSequenceCreateFailure)
}

const onSequenceCreateAddTechnique = () => {
  const additionalTechniqueHtml = `
  <input value="619be577b819d832e0656070" name="sequence[technique${store.count}]" type="text" placeholder="Technique ${store.count}">  
  <br>
  `
  $('#sequence-create-additional-techniques').append(additionalTechniqueHtml)
  store.count++
}

// Sequence Update
const onSequenceUpdate = event => {
  // Stop the browser from refreshing
  event.preventDefault()
  
  // Obtain the data from the form fields
  const formData = getFormFields(event.target)
  console.log('form data ', formData)

  // Call the technique-create api function
  api.sequenceUpdate(formData)
    .then(ui.onSequenceUpdateSuccess) 
    .catch(ui.onSequenceUpdateFailure)
}

// Sequence Destroy
const onSequenceDestroy = event => {
  // Stop the browser from refreshing
  event.preventDefault()
  
  // Obtain the data from the form fields
  const formData = getFormFields(event.target)
  console.log(formData)

  // Call the technique-create api function
  api.sequenceDestroy(formData)
    .then(ui.onSequenceDestroySuccess) 
    .catch(ui.onSequenceDestroyFailure)
}

module.exports = {
 onSequenceIndex,
 onSequenceIndexPersonal,
 onSequenceShow,
 onSequenceCreate,
 onSequenceCreateAddTechnique,
 onSequenceUpdate,
 onSequenceDestroy
}