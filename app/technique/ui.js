// Require the store object 
const store = require('../store')


const onTechniqueIndexSuccess = responseData => {

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
        <h1 class="title-body">${technique.name}</h1>
        <h3>Timing: ${technique.timing} / Direction: ${technique.direction}</h3>
        `
    // If there is a description for the technique...
    if (technique.description) {
      // ... add the description to the html variable
      techniqueHtml += `
        <h3>Description: ${technique.description}</h3>
        `
    }
    
    // Add the technique's id and creator's username to html variable
    techniqueHtml += `
        <h3>Technique Id: ${technique._id}</h3>
        <h3>Added by: ${userName}</h3>
        <br>
        `

    // If there is a video...
    if (technique.demonstration) {
      // .. create a button for the video modal
      techniqueHtml += `
        <button class="demonstration-modal-button ${technique._id}">Demonstration</button>
        `
    }
    
    // Close div
    techniqueHtml += `
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
  // Send a message to user
  $('#technique-error-display').text('Failed to retrieve Techniques')

  // Clear error message
  setTimeout(() => {
    $('#technique-error-display').text('')
  }, 5000)
}

const onTechniqueDemonstrationSuccess = responseData => {
  const demonstrationHtml = `
    ${responseData.technique.demonstration}
    <br>
    ${responseData.technique.demonstrationComment}
    `

  $('.modal').hide()
  $('#demonstration-modal').show()
  $('#demonstration-modal-display').html(demonstrationHtml)

}

const onTechniqueDemonstrationFailure = err => {
   // Send message to user
   $('#database-error-display').text('Failed to retrieve video')

   // Clear error message
   setTimeout(() => {
     $('#database-error-display').text('')
   }, 5000)
}


const onTechniqueShowSuccess = responseData => {
  // Set the technique to a variable
  const technique = responseData.technique

  // Format the html from the response Data
  let techniqueHtml = `
    <br><br>
    <div class ="technique-library">
      <h1 class="title-body">${technique.name}</h1>
      <h3>Timing: ${technique.timing} / Direction: ${technique.direction}</h3>
      `
    
      if (technique.description) {
        techniqueHtml += `
          <h3>Description: ${technique.description}</h3>
          `
      }
      
      techniqueHtml += `
      <h3>Technique Id: ${technique._id}</h3>
      <h3>Added by: ${technique.owner.email}</h3>
      `

      if (technique.demonstration) {
        techniqueHtml += `
          <button class="demonstration-modal-button ${technique._id}">Demonstration</button>
          `
      }
      
      techniqueHtml += `
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

  // format the html from the response data
  let techniqueHtml = `
    <br><br>
    <div class ="technique-library">
      <h1 class="title-body">${technique.name}</h1>
      <h3>Timing: ${technique.timing} / Direction: ${technique.direction}</h3>
      `
    
      if (technique.description) {
        techniqueHtml += `
          <h3>Description: ${technique.description}</h3>
          `
      }
      
      techniqueHtml += `
      <h3>Technique Id: ${technique._id}</h3>
      `

      if (technique.demonstration) {
        techniqueHtml += `
          <button class="demonstration-modal-button ${technique._id}">Demonstration</button>
          `
      }
      
      techniqueHtml += `
    </div>
    ` 
  
  // Send the html to the create technique's display
  $('#database-content-display').html(techniqueHtml)

  // Clear all forms
  $('form').trigger('reset')

  // Close all modals
  $('.modal').hide()
}

const onTechniqueCreateFailure = err => {
  // Send message to user
  $('#technique-destroy-create-display').text('Failed to Create Technique')

  // Clear error message
  setTimeout(() => {
    $('#technique-create-error-display').text('')
  }, 5000)
}

const onTechniqueUpdateSuccess = responseData => {
  $('#technique-update-modal').hide()
  $('#empty-modal').show()
  $('#empty-display').text('Technique Updated')

  // // Clear all forms
  $('form').trigger('reset')

  // Clear success message
  setTimeout(() => {
    $('#empty-modal').hide()
    $('#empty-display').text('')
  }, 2000)
}

const onTechniqueUpdateFailure = err => {
  // Send message to user
  $('#technique-update-error-display').text('Failed to Update Technique')

  // Clear error message
  setTimeout(() => {
    $('#technique-update-error-display').text('')
  }, 5000)
}

const onTechniqueDestroySuccess = (responseData) => {
  // Send message to user
  $('#technique-destroy-modal').show()

  // Clear success message
  setTimeout(() => {
    $('#technique-destroy-modal').hide()
  }, 2000)
}

const onTechniqueDestroyFailure = err => {
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
  onTechniqueDemonstrationSuccess,
  onTechniqueDemonstrationFailure,
  onTechniqueShowSuccess,
  onTechniqueShowFailure,
  onTechniqueCreateSuccess,
  onTechniqueCreateFailure,
  onTechniqueUpdateSuccess,
  onTechniqueUpdateFailure,
  onTechniqueDestroySuccess,
  onTechniqueDestroyFailure
}