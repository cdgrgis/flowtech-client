
const store = require('../store')

// Code to run upon the success of sequence index
const onSequenceIndexSuccess = responseData => {
  console.log(responseData)
  
  console.log(responseData.sequences[0].techniques.length)
  // Initialize a variable to hold html data 
  let sequenceHtml = ''
  
  // Loop through all sequences
  for (let i = 0; i < responseData.sequences.length;  i++) {
    // Set each sequence to the variable
    const sequence = responseData.sequences[i]
    console.log('sequence ', sequence)
    
    // If the user has a username use this, otherwise use their email
    const userName = sequence.owner.userName ? sequence.owner.userName : sequence.owner.email
   
    // Add the class, name, and the required techniques to sequenceHtml
    sequenceHtml += `
      <div class ="sequence-library">
        <h1>${sequence.name}</h1>
        <h3>Technique 1: ${sequence.techniques[0].name}</h3>
        <h3>Technique 2: ${sequence.techniques[1].name}</h3>
        `
    // Loop through any additional techniques
    for (let j = 2; j < sequence.techniques.length; j++) {
      // and add them to sequenceHtml
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
  }

  // Pass the html to the sequence's index display 
  $('#sequence-display').html(sequenceHtml)
}

// In case of sequence index failure
const onSequenceIndexFailure = err => {
  console.log(err)
  // Send a message to the user
  $('#sequence-error-display').text('Failed to retrieve Sequences')

  // Clear error message
  setTimeout(() => {
    $('#sequence-error-display').text('')
  }, 5000)
}

// Code to run upon personal sequence index
const onSequenceIndexPersonalSuccess = responseData => {
 
  console.log('user ', responseData.user)
  console.log('tech ', responseData.user.sequences)
  console.log('tech length ', responseData.user.sequences[0].techniques.length)
  console.log('tech 1 ', responseData.user.sequences[0].techniques[0])

  // Initialize a variable to hold html data 
  let sequenceHtml = ''
  
  // Loop through all sequences
  for (let i = 0; i < responseData.user.sequences.length;  i++) {
    // Set each sequence to the variable
    const sequence = responseData.user.sequences[i]
    // Add the class and name to sequenceHtml
    sequenceHtml += `
      <div class ="sequence-library">
        <h1>${sequence.name}</h1> `
     
    // Loop through techniques techniques
    for (let j = 0; j < sequence.techniques.length; j++) {
      // and add them to sequenceHtml
      sequenceHtml += `
        <h3>Technique ${j + 1}: ${sequence.techniques[j].name}</h3> `
    }
    console.log('sequence html ', sequenceHtml)
    // Add the sequence's idto sequenceHtml
    sequenceHtml += `
        <h3>Sequence Id: ${sequence._id}</h3>
        <br>
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        <br><br><br>
      </div>
      `  
  }
  // Pass the html to the sequence's index display 
  $('#sequence-display').html(sequenceHtml)
}

// In case of personal sequence index failure
const onSequenceIndexPersonalFailure = err => {
  console.log(err)

  // Send a message to the user
  $('#sequence-error-display').text('Failed to retrieve personal sequences')

  // Clear error message
  setTimeout(() => {
    $('#sequence-error-display').text('')
  }, 5000)
}

// Code to run upon the success of sequence show
const onSequenceShowSuccess = responseData => {
  console.log(responseData)
   // Set sequence to the variable
  const sequence = responseData.sequence

  // If the user has a username use this, otherwise use their email
  const userName = sequence.owner.userName ? sequence.owner.userName : sequence.owner.email
  
  // Initialize a variable to hold html data 
  // and add the class, name, and the required techniques to sequenceHtml
  let sequenceHtml = `
      <div class ="sequence-library">
        <h1>${sequence.name}</h1>
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
  $('#sequence-display').html(sequenceHtml)
  // Reset all forms
  $('form').trigger('reset')

    // Close all modals
    $('.modal').hide()
}

// In case of sequence show failure
const onSequenceShowFailure = err => {
  console.log(err)
  // Send a message to the user
  $('#sequence-error-display').text('Sequence not found')

  // Clear error message
  setTimeout(() => {
    $('#sequence-error-display').text('')
  }, 5000)
}

// Code to run upon the success of sequence create
const onSequenceCreateSuccess = responseData => {
  console.log('response data ', responseData)
   // Set the sequence to the variable
  const sequence = responseData.sequenceData
   // Set the technique to the variable
  const techniqueData = responseData.techniqueData
  console.log('sequence.techniques', sequence.techniques)
 
  console.log('owner', sequence.owner)
  // Initialize a variable to hold html data 
  // and add the class, name, and the required techniques to sequenceHtml
  sequenceHtml = `
      <div class ="sequence-library">
        <h1>${sequence.name}</h1>
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
  $('#sequence-display').html(sequenceHtml)

  // Clear the additional technique inputs
  // $('#sequence-create-additional-techniques').html('')

  // Reset all forms
  $('form').trigger('reset')

  // Close all modals
  $('.modal').hide()

  // Reset store.count to 3 (meaning there are currently no more than 2 techniques in create input)
  store.count = 3
}

// In case of sequence create failure
const onSequenceCreateFailure = err => {
  console.log(err)

  // Send a message to the user
  $('#sequence-error-display').text('Failed to Create Sequence')

  // Clear error message
  setTimeout(() => {
    $('#sequence-error-display').text('')
  }, 5000)
}

// Code to run upon the success of sequence update
const onSequenceUpdateSuccess = (responseData) => {
  console.log('response data ', responseData)
   // Set the techniques to the variable
  const techniqueData = responseData.techniqueData

   // Set the sequence to the variable
  const sequenceData = responseData.sequenceData.sequence

   // Initialize a variable to hold html data 
   // and add the class, name, and the required techniques to sequenceHtml
  sequenceHtml = `
  <div class ="sequence-library">
    <h1>${sequenceData.name}</h1>
    <h3>Technique 1: ${techniqueData[0].name}</h3>
    <h3>Technique 2: ${techniqueData[1].name}</h3>
    `
   // Loop through any additional techniques
  for (let i = 2; i < techniqueData.length; i++) {
  
    // and add them to sequenceHtml
    sequenceHtml += `
      <h3>Technique ${i + 1}: ${techniqueData[i].name}</h3>
      `
  }

  // Add the sequence's id to sequenceHtml
  sequenceHtml += `
    <h3>Sequence Id: ${sequenceData.id}</h3>
    <br>
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    <br><br><br>
    </div>
  ` 

  // Pass the html to the sequence's index display 
  $('#sequence-display').html(sequenceHtml)

  // Clear the additional technique inputs
  $('#sequence-update-additional-techniques').html('')

  // Reset all forms
  $('form').trigger('reset')

  // Close all modals
  $('.modal').hide()
}

// In case of sequence update failure
const onSequenceUpdateFailure = err => {
  console.log(err)
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
  $('#sequence-display').text('Sequence Destroyed')

  // Reset all forms
  $('form').trigger('reset')

  // Close all modals
  $('.modal').hide()

  // Clear success message
  setTimeout(() => {
    $('#sequence-display').text('')
  }, 5000)
}

// In case of sequence destroy failure
const onSequenceDestroyFailure = err => {
  console.log(err)
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
  onSequenceIndexPersonalSuccess,
  onSequenceIndexPersonalFailure,
  onSequenceShowSuccess,
  onSequenceShowFailure,
  onSequenceCreateSuccess,
  onSequenceCreateFailure,
  onSequenceUpdateSuccess,
  onSequenceUpdateFailure,
  onSequenceDestroySuccess,
  onSequenceDestroyFailure
}