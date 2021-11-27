
const store = require('../store')


const onTechniqueIndexSuccess = responseData => {
  console.log(responseData)
  console.log(responseData.techniques.length)
  console.log(responseData.techniques[0])
  
  let techniqueHtml = ''
  
  for (let i = 0; i < responseData.techniques.length;  i++) {
    const technique = responseData.techniques[i]
    
    
    const userName = technique.owner.userName ? technique.owner.userName : technique.owner.email
   
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

  $('#technique-index-display').html(techniqueHtml)
}

const onTechniqueIndexFailure = err => {
  console.log(err)
  $('#technique-destroy-index-display').text('Failed to retrieve Techniques')

  // Clear error message
  setTimeout(() => {
    $('#technique-index-error-display').text('')
  }, 5000)
}

const onTechniqueIndexPersonalSuccess = responseData => {
  console.log(responseData)
  console.log('user ', responseData.user)
  console.log('tech ', responseData.user.techniques)
  const techniquesData = responseData.user.techniques

  let techniqueHtml = ''
  
  for (let i = 0; i < techniquesData.length;  i++) {
    const technique = techniquesData[i]
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

  $('#technique-index-display').html(techniqueHtml)
}

const onTechniqueIndexPersonalFailure = err => {
  console.log(err)
  $('#technique-index-error-display').text('Failed to retrieve personal techniques')

  setTimeout(() => {
    $('#technique-index-error-display').text('')
  }, 5000)
}

const onTechniqueShowSuccess = responseData => {
  console.log(responseData)
  const technique = responseData.technique

  const techniqueHtml = `
    <br><br>
    <div class ="technique-library">
      <h1>${technique.name}</h1>
      <h3>Timing: ${technique.timing} / Direction: ${technique.direction}</h3>
      <h3>Technique Id: ${technique._id}</h3>
      <h3>Added by: ${technique.owner.email}</h3>
    </div>
    ` 
  $('#technique-show-display').html(techniqueHtml)
  $('form').trigger('reset')

  // Close all modals
  $('.modal').css('display', 'none')
}

const onTechniqueShowFailure = err => {
  console.log(err)
  $('#technique-show-error-display').text('Technique not found')

  // Clear error message
  setTimeout(() => {
    $('#technique-show-error-display').text('')
  }, 5000)
}

const onTechniqueCreateSuccess = responseData => {
  const technique = responseData.technique
  console.log(technique)
  console.log(responseData)
  console.log(technique.owner)
  const techniqueHtml = `
    <br><br>
    <div class ="technique-library">
      <h1>${technique.name}</h1>
      <h3>Timing: ${technique.timing} / Direction: ${technique.direction}</h3>
      <h3>Technique Id: ${technique._id}</h3>
    </div>
    ` 
  
  $('#technique-create-display').html(techniqueHtml)
  $('form').trigger('reset')
}

const onTechniqueCreateFailure = err => {
  console.log(err)
  $('#technique-destroy-create-display').text('Failed to Create Technique')

  // Clear error message
  setTimeout(() => {
    $('#technique-create-error-display').text('')
  }, 5000)
}

const onTechniqueUpdateSuccess = () => {

  $('#technique-update-display').text('Technique Updated')
  $('form').trigger('reset')

  // Clear success message
  setTimeout(() => {
    $('#technique-update-display').text('')
  }, 5000)
}

const onTechniqueUpdateFailure = err => {
  console.log(err)
  $('#technique-update-error-display').text('Failed to Update Technique')

  // Clear error message
  setTimeout(() => {
    $('#technique-update-error-display').text('')
  }, 5000)
}

const onTechniqueDestroySuccess = () => {
  $('#technique-destroy-display').text('Technique Destroyed')
  $('form').trigger('reset')

  // Close all modals
  $('.modal').css('display', 'none')

    // Clear success message
    setTimeout(() => {
      $('#technique-destroy-display').text('')
    }, 5000)
}

const onTechniqueDestroyFailure = err => {
  console.log(err)
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