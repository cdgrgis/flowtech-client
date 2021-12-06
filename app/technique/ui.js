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
        <h3>Added by: ${userName}</h3>
        <br>
        `

    if (technique.demonstration) {
      techniqueHtml += `
        <button class="demonstration-modal-button ${technique._id}">Demonstration</button>
        `
    }
    
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
  console.log(err)
  // Send a message to user
  $('#technique-error-display').text('Failed to retrieve Techniques')

  // Clear error message
  setTimeout(() => {
    $('#technique-error-display').text('')
  }, 5000)
}

const onTechniqueDemonstrationSuccess = responseData => {
  console.log('response data ', responseData)

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
  console.log(err)

   // Send message to user
   $('#database-error-display').text('Failed to retrieve video')

   // Clear error message
   setTimeout(() => {
     $('#database-error-display').text('')
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
      <h1 class="title-body">${technique.name}</h1>
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
      <h1 class="title-body">${technique.name}</h1>
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

  $('#technique-update-modal').hide()
  $('#empty-modal').show()
  $('#empty-display').text('Technique Updated')

  // const techniqueHtml = `
  // <br><br>
  // <div class ="technique-library">
  //   <h1>${technique.name}</h1>
  //   <h3>Timing: ${technique.timing} / Direction: ${technique.direction}</h3>
  //   <h3>Technique Id: ${technique._id}</h3>
  // </div>
  // ` 

  // // Send the html to the technique update's display
  // $('#database-content-display').html(techniqueHtml)

  // // Clear all forms
  $('form').trigger('reset')

 

  // Clear success message
  setTimeout(() => {
    $('#empty-modal').hide()
    $('#empty-display').text('')
  }, 2000)
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

const onTechniqueDestroySuccess = (responseData) => {
  console.log(responseData)
  console.log('hello')
  // Send message to user
  $('#technique-destroy-modal').show()


  

    // Clear success message
    setTimeout(() => {
      $('#technique-destroy-modal').hide()
    }, 2000)
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