
const store = require('../store')

// Code to run upon the success of sequence index
const onSequenceIndexSuccess = responseData => {
  // Initialize a variable to hold html data 
  let sequenceHtml = ''
  
  // Loop through all sequences
  for (let i = 0; i < responseData.sequences.length;  i++) {
    // Set each sequence to the variable
    const sequence = responseData.sequences[i]

    // If the user has a username use this, otherwise use their email
    const userName = sequence.owner.userName ? sequence.owner.userName : sequence.owner.email
   
    // Add the class, name, and the required techniques to sequenceHtml
    sequenceHtml += `
      <div class ="sequence-library">
        <h1 class="title-body">${sequence.name}</h1>
        <h3>Technique 1: ${sequence.techniques[0].name}</h3> <button class="sequence-technique-details ${sequence.techniques[0]._id}">Details</button>
        <h3>Technique 2: ${sequence.techniques[1].name}</h3> <button class="sequence-technique-details ${sequence.techniques[0]._id}">Details</button>
        `

    // Loop through any additional techniques
    for (let j = 2; j < sequence.techniques.length; j++) {
      // and add them to sequenceHtml
      sequenceHtml += `
        <h3>Technique ${j + 1}: ${sequence.techniques[j].name}</h3> <button class="sequence-technique-details ${sequence.techniques[0]._id}">Details</button>
        `
    }

    // Add the sequence's id and the username to sequenceHtml
    sequenceHtml += `
        <h3>Added by: ${userName}</h3>
        <br>
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        <br><br><br>
      </div>
      `  
  }

  // Pass the html to the sequence's index display 
  $('#database-content-display').html(sequenceHtml)
}

// In case of sequence index failure
const onSequenceIndexFailure = err => {
  // Send a message to the user
  $('#sequence-error-display').text('Failed to retrieve Sequences')

  // Clear error message
  setTimeout(() => {
    $('#sequence-error-display').text('')
  }, 5000)
}

const onSequenceTechniqueDetailsSuccess = responseData => {
  const technique = responseData.technique

  let techniqueHtml = `
    <div class ="technique-library">
      <h1 class="title-body">${technique.name}</h1>
      <h3>Timing: ${technique.timing} / Direction: ${technique.direction}</h3>
      `
  if (technique.description) {
    techniqueHtml += `
      <h3>Description: ${technique.description}</h3>`
  }
      
  techniqueHtml += `    
      <h3>Technique Id: ${technique._id}</h3>
    </div>
  `
  if (technique.demonstration) {
    techniqueHtml += `
    <button class="demonstration-modal-button ${technique._id}">Demonstration</button>
    `
  }

  $('#sequence-technique-details-modal').show()
  $('#sequence-technique-details-modal-display').html(techniqueHtml)
}


const onSequenceTechniqueDetailsFailure = err => {
   // Send a message to the user
   $('#database-error-display').text('Sequence not found')

   // Clear error message
   setTimeout(() => {
     $('#database-error-display').text('')
   }, 5000)
}



// Code to run upon the success of sequence show
const onSequenceShowSuccess = responseData => {
   // Set sequence to the variable
  const sequence = responseData.sequence

  // If the user has a username use this, otherwise use their email
  const userName = sequence.owner.userName ? sequence.owner.userName : sequence.owner.email
  
  // Initialize a variable to hold html data 
  // and add the class, name, and the required techniques to sequenceHtml
  let sequenceHtml = `
      <div class ="sequence-library">
        <h1 class="title-body">${sequence.name}</h1>
        <h3>Technique 1: ${sequence.techniques[0].name}</h3>
        <h3>Technique 2: ${sequence.techniques[1].name}</h3>
        `

    // Loop through any additional techniques
    for (let j = 2; j < sequence.techniques.length; j++) {
      // Add the class, name, and the required techniques to sequenceHtml
      sequenceHtml += `
        <h3>Technique ${j + 1}: ${sequence.techniques[j].name}</h3>
        `
    }

    // Add the sequence's id and the username to sequenceHtml
    sequenceHtml += `
        <h3>Sequence Id: ${sequence._id}</h3>
        <h3>Added by: ${userName}</h3>
        <br>
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        <br><br><br>
      </div>
      ` 
  // Pass the html to the sequence's index display 
  $('#database-content-display').html(sequenceHtml)
  // Reset all forms
  $('form').trigger('reset')

  // Close all modals
  $('.modal').hide()
}

// In case of sequence show failure
const onSequenceShowFailure = err => {
  // Send a message to the user
  $('#sequence-error-display').text('Sequence not found')

  // Clear error message
  setTimeout(() => {
    $('#sequence-error-display').text('')
  }, 5000)
}

// Code to run upon the success of sequence create
const onSequenceCreateSuccess = responseData => {
   // Set the sequence to the variable
  const sequence = responseData.sequenceData
   // Set the technique to the variable
  const techniqueData = responseData.techniqueData
 
  // Initialize a variable to hold html data 
  // and add the class, name, and the required techniques to sequenceHtml
  sequenceHtml = `
      <div class ="sequence-library">
        <h1 class="title-body">${sequence.name}</h1>
        <h3>Technique 1: ${techniqueData[0].name}</h3>
        <h3>Technique 2: ${techniqueData[1].name}</h3>
        `
     // Loop through any additional techniques
    for (let i = 2; i < sequence.techniques.length; i++) {
      sequenceHtml += `
        <h3>Technique ${i + 1}: ${techniqueData[i].name}</h3>
        `
    }

    // Add the sequence's id to sequenceHtml
    sequenceHtml += `
        <h3>Sequence Id: ${sequence._id}</h3>
        <br>
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        <br><br><br>
      </div>
      ` 
  
  // Pass the html to the sequence's create display 
  $('#database-content-display').html(sequenceHtml)

  // Clear the additional technique inputs
  $('#sequence-create-additional-techniques').html('')

  // Reset all forms
  $('form').trigger('reset')

  // Close all modals
  $('.modal').hide()

  // Reset store.count to 3 (meaning there are currently no more than 2 techniques in create input)
  store.count = 3
}

// In case of sequence create failure
const onSequenceCreateFailure = err => {
  // Send a message to the user
  $('#sequence-error-display').text('Failed to Create Sequence')

  // Clear error message
  setTimeout(() => {
    $('#sequence-error-display').text('')
  }, 5000)
}

// Code to run upon the success of sequence update
const onSequenceUpdateSuccess = (responseData) => {
  // Hide sequence update modal
  $('#sequence-update-modal').hide()

  // Show the empty modal which holds user messages
  $('#empty-modal').show()

  // Set the text in the empty modal
  $('#empty-display').text('Modal Updated')
  
  // Clear the additional technique inputs
  $('#sequence-update-additional-techniques').html('')

  // Reset all forms
  $('form').trigger('reset')

  // In 2 seconds...
  setTimeout(() => {
    // ... hide the empty modal ...
    $('#empty-modal').hide()
    // ... reset text in empty modal
    $('#empty-display').text('')
  }, 2000)

}

// In case of sequence update failure
const onSequenceUpdateFailure = err => {
  // Send a message to the user
  $('#sequence-error-display').text('Failed to Update Sequence')

  // Clear error message
  setTimeout(() => {
    $('#sequence-error-display').text('')
  }, 5000)
}

// Code to run upon the success of sequence destroy
const onSequenceDestroySuccess = () => {
  // Send a message to the user
  $('#database-message-display').text('Sequence Destroyed')

  // Clear success message
  setTimeout(() => {
    $('#database-message-display').text('')
  }, 5000)
}

// In case of sequence destroy failure
const onSequenceDestroyFailure = err => {
  // Send a message to the user
  $('#sequence-error-display').text('Failed to Delete Sequence')
  
  // Clear error message
  setTimeout(() => {
    $('#sequence-error-display').text('')
  }, 5000)
}

// Export functions to be used in sequence/events
module.exports = {
  onSequenceIndexSuccess,
  onSequenceIndexFailure,
  onSequenceTechniqueDetailsSuccess,
  onSequenceTechniqueDetailsFailure,
  onSequenceShowSuccess,
  onSequenceShowFailure,
  onSequenceCreateSuccess,
  onSequenceCreateFailure,
  onSequenceUpdateSuccess,
  onSequenceUpdateFailure,
  onSequenceDestroySuccess,
  onSequenceDestroyFailure
}