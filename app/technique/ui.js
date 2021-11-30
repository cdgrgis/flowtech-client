// Require the store object 
const store = require('../store')


const onTechniqueIndexSuccess = responseData => {
  console.log(responseData)
  console.log(responseData.techniques.length)
  console.log(responseData.techniques[0])
  
  // Initialize a variable to hold technique's html
  let techniqueHtml = ''
  
  // Cycle through all techniques in response Data
  for (let i = 0; i < responseData.techniques.length;  i++) {
    // Set each technique to a variable
    const technique = responseData.techniques[i]
    
    // If the user has a username set this to a variable, otherwise set the email to a variable
    const userName = technique.owner.userName ? technique.owner.userName : technique.owner.email
   
    // Format html from technique data
    techniqueHtml += `
      <div class ="technique-library">
        <h1>${technique.name}</h1>
        <h3>Timing: ${technique.timing} / Direction: ${technique.direction}</h3>
        <h3>Description: ${technique.description}</h3>
        
        <h3>Technique Id: ${technique._id}</h3>
        <h3>Added by: ${userName}</h3>
        <br>
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        <br><br><br>
      </div>
      `  
  }

  // Send html to technique index's display
  $('#database-content-display').html(techniqueHtml)
}

const onTechniqueIndexFailure = err => {
  console.log(err)
  // Send a message to user
  $('#technique-error-display').text('Failed to retrieve Techniques')

  // Clear error message
  setTimeout(() => {
    $('#technique-error-display').text('')
  }, 5000)
}

const onTechniqueIndexPersonalSuccess = responseData => {
  console.log(responseData)
  console.log('user ', responseData.user)
  console.log('tech ', responseData.user.techniques)
  // Set the technique data to a variable
  const techniquesData = responseData.user.techniques

  // Initialize a variable to hold html
  let techniqueHtml = ''
  
  // Cycle through all techniques in response data
  for (let i = 0; i < techniquesData.length;  i++) {
    // Set each technique to a variable
    const technique = techniquesData[i]

    // Format html from techniqueData
    techniqueHtml += `
      <div class ="technique-library">
        <h1>${technique.name}</h1>
        <h3>Timing: ${technique.timing} / Direction: ${technique.direction}</h3> 
        <h3>Technique Id: ${technique._id}</h3>
        <br>
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        <br><br><br>
      </div>
      `  
  }

  // Send html to technique index's display
  $('#database-content-display').html(techniqueHtml)
}

const onTechniqueIndexPersonalFailure = err => {
  console.log(err)
  // Send a message to user
  $('#technique-error-display').text('Failed to retrieve personal techniques')

  setTimeout(() => {
    $('#technique-error-display').text('')
  }, 5000)
}

const onTechniqueShowSuccess = responseData => {
  console.log(responseData)
  // Set the technique to a variable
  const technique = responseData.technique

  // Format the html from the response Data
  const techniqueHtml = `
    <br><br>
    <div class ="technique-library">
      <h1>${technique.name}</h1>
      <h3>Timing: ${technique.timing} / Direction: ${technique.direction}</h3>
      <h3>Technique Id: ${technique._id}</h3>
      <h3>Added by: ${technique.owner.email}</h3>
    </div>
    ` 
  // Send html to show technique's display
  $('#database-content-display').html(techniqueHtml)
  // Clear all forms
  $('form').trigger('reset')

  // Close all modals
  $('.modal').hide()
}

const onTechniqueShowFailure = err => {
  console.log(err)
  // Send message to user
  $('#technique-show-error-display').text('Technique not found')

  // Clear error message
  setTimeout(() => {
    $('#technique-show-error-display').text('')
  }, 5000)
}

const onTechniqueCreateSuccess = responseData => {
  // Set the technique to a variable
  const technique = responseData.technique
  console.log(technique)
  console.log(responseData)
  console.log(technique.owner)
  // format the html from the response data
  const techniqueHtml = `
    <br><br>
    <div class ="technique-library">
      <h1>${technique.name}</h1>
      <h3>Timing: ${technique.timing} / Direction: ${technique.direction}</h3>
      <h3>Technique Id: ${technique._id}</h3>
    </div>
    ` 
  
  // Send the html to the create technique's dispaly
  $('#database-content-display').html(techniqueHtml)

  // Clear all forms
  $('form').trigger('reset')

  // Close all modals
  $('.modal').hide()
}

const onTechniqueCreateFailure = err => {
  console.log(err)
  // Send message to user
  $('#technique-destroy-create-display').text('Failed to Create Technique')

  // Clear error message
  setTimeout(() => {
    $('#technique-create-error-display').text('')
  }, 5000)
}

const onTechniqueUpdateSuccess = responseData => {
  console.log(responseData)
  // set the technique to a variable
  const technique = responseData.technique

  const techniqueHtml = `
  <br><br>
  <div class ="technique-library">
    <h1>${technique.name}</h1>
    <h3>Timing: ${technique.timing} / Direction: ${technique.direction}</h3>
    <h3>Technique Id: ${technique._id}</h3>
  </div>
  ` 

  // Send the html to the technique update's display
  $('#database-content-display').html(techniqueHtml)

  // // Clear all forms
  $('form').trigger('reset')

   // Close all modals
   $('.modal').hide()

  // Clear success message
  setTimeout(() => {
    $('#technique-update-display').text('')
  }, 5000)
}

const onTechniqueUpdateFailure = err => {
  console.log(err)
  // Send message to user
  $('#technique-update-error-display').text('Failed to Update Technique')

  // Clear error message
  setTimeout(() => {
    $('#technique-update-error-display').text('')
  }, 5000)
}

const onTechniqueDestroySuccess = () => {
  // Send message to user
  $('#database-content-display').text('Technique Destroyed')
  
  // Clear all forms
  $('form').trigger('reset')

  // Close all modals
  $('.modal').hide()

    // Clear success message
    setTimeout(() => {
      $('#technique-destroy-display').text('')
    }, 5000)
}

const onTechniqueDestroyFailure = err => {
  console.log(err)
  // Send message to user
  $('#technique-destroy-error-display').text('Failed to Delete Technique')

  // Clear error message
  setTimeout(() => {
    $('#technique-destroy-error-display').text('')
  }, 5000)
}

module.exports = {
  onTechniqueIndexSuccess,
  onTechniqueIndexFailure,
  onTechniqueIndexPersonalSuccess,
  onTechniqueIndexPersonalFailure,
  onTechniqueShowSuccess,
  onTechniqueShowFailure,
  onTechniqueCreateSuccess,
  onTechniqueCreateFailure,
  onTechniqueUpdateSuccess,
  onTechniqueUpdateFailure,
  onTechniqueDestroySuccess,
  onTechniqueDestroyFailure
}