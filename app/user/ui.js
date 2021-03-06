// Require the store
const store = require('../store')

const onTechniqueIndexPersonalSuccess = responseData => {
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
        <div class ="technique-library" id=${technique._id}>
        
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

      // If there is a video...
      if (technique.demonstration) {
        // .. create a button for the video modal
        techniqueHtml += `
          <button class="demonstration-modal-button ${technique._id}">Demonstration</button>
          `
      }
          
          techniqueHtml += `
          <br>
          <button class="technique-delete" id=delete-${technique._id}>Delete technique</button>
          <button class="technique-update" id=update-${technique._id}>Update technique</button>
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
    
    $('#database-error-display').text('Failed to retrieve your techniques')

    setTimeout(() => {
        $('#database-error-display').text('')
    }, 5000)
}

const onSequenceIndexPersonalSuccess = responseData => {


  // Initialize a variable to hold html data 
  let sequenceHtml = ''
  
  // Loop through all sequences
  for (let i = 0; i < responseData.user.sequences.length;  i++) {
    // Set each sequence to the variable
    const sequence = responseData.user.sequences[i]
    // Add the class and name to sequenceHtml
    sequenceHtml += `
      <div class ="sequence-library">
        <h1 class="title-body">${sequence.name}</h1> `
      
    // Loop through techniques techniques
    for (let j = 0; j < sequence.techniques.length; j++) {
      // and add them to sequenceHtml
      sequenceHtml += `
        <h3>Technique ${j + 1}: ${sequence.techniques[j].name}</h3> `
    }
   
    // Add the sequence's id to sequenceHtml
    sequenceHtml += `
        <br>
        <button class="sequence-delete" id=delete-${sequence._id}>Delete</button>
        <button class="sequence-update" id=update-${sequence._id}>Update</button>
        <br>
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        <br><br><br>
      </div>
      `  
  }
  // Pass the html to the sequence's index display 
  $('#database-content-display').html(sequenceHtml)
}

// In case of personal sequence index failure
const onSequenceIndexPersonalFailure = err => {
  // Send a message to the user
  $('#sequence-error-display').text('Failed to retrieve personal sequences')

  // Clear error message
  setTimeout(() => {
    $('#sequence-error-display').text('')
  }, 5000)
}

const onUpdateUserSuccess = (responseData) => {
    $('#database-content-display').text('User has been updated')

    // Close all modals
    $('.modal').hide()

    setTimeout(() => {
        $('#database-content-display').text('')
    }, 5000)
}

const onUpdateUserFailure = err => {
    $('#update-user-error-display').text('Failed to update user')

    setTimeout(() => {
        $('#update-user-error-display').text('')
    }, 5000)
}

const onSearchByUserNameSuccess = responseData => {
    const user = responseData.user

    let userHtml = `
    <h1>${user.userName}</h1>
    <br><br>`

    if (user.picture) {
      userHtml += `
      <img src=${user.picture} alt="User picture" width="200" height="200">`
    }
    
    if (user.techniques.length !== 0) {
      userHtml += `
      <h3 class="underline">${user.userName}'s Techniques</h3>
      <br>`

      for (let i = 0; i < user.techniques.length; i++) {
        const technique = user.techniques[i]
        userHtml += `
        <h4 class="title-body">Name: ${technique.name}</h4>
        <br>
        <h4>Timing & Direction: ${technique.timing} / ${technique.direction}</h4>
        `
    // If there is a description for the technique...
    if (technique.description) {
      // ... add the description to the html variable
      userHtml += `
        <h3>Description: ${technique.description}</h3>
        `
    }

    if (technique.demonstration) {
      // .. create a button for the video modal
      userHtml += `
        <button class="demonstration-modal-button ${technique._id}">Demonstration</button>
        `
    }

    userHtml += `
        <br><hr>
        `
      }
    }
    
    if (user.sequences.length !== 0) {
      userHtml += `
      <br><br>
      <h3 class="underline">${user.userName}'s Sequences</h3>
      <br>`
      
      for (let i = 0; i < user.sequences.length; i++) {
        const sequence = user.sequences[i]
        userHtml += `
        <h4 class="title-body">Name: ${sequence.name}</h4>
        <br>`
        
        for (let j = 0; j < sequence.techniques.length; j++) {
          userHtml += `
          
          <h5>Technique ${j + 1}: ${sequence.techniques[j].name}</h5>
          <br>
          `
        }
        userHtml += `
        <br>`
      }
    }

  $('#database-content-display').html(userHtml)
}

const onSearchByUserNameFailure = err => {
    // Send a message to user
    $('#search-by-username-error-display').text('Failed to retrieve user data')

    // Clear error message
    setTimeout(() => {
        $('#search-by-username-error-display').text('')
    }, 5000)
}
  
module.exports = {
    onTechniqueIndexPersonalSuccess,
    onTechniqueIndexPersonalFailure,
    onSequenceIndexPersonalSuccess,
    onSequenceIndexPersonalFailure,
    onUpdateUserSuccess,
    onUpdateUserFailure,
    onSearchByUserNameSuccess,
    onSearchByUserNameFailure
}