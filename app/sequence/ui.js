
const store = require('../store')


const onSequenceIndexSuccess = responseData => {
  console.log(responseData)
  
  console.log(responseData.sequences[0].techniques.length)
  
  let sequenceHtml = ''
  
  for (let i = 0; i < responseData.sequences.length;  i++) {
    const sequence = responseData.sequences[i]
    console.log('sequence ', sequence)
    
    const userName = sequence.owner.userName ? sequence.owner.userName : sequence.owner.email
   
    sequenceHtml += `
      <div class ="sequence-library">
        <h1>${sequence.name}</h1>
        <h3>Technique 1: ${sequence.techniques[0].name}</h3>
        <h3>Technique 2: ${sequence.techniques[1].name}</h3>
        `
    for (let j = 2; j < sequence.techniques.length; j++) {
      sequenceHtml += `
        <h3>Technique ${j + 1}: ${sequence.techniques[j].name}</h3>
        `
    }
    sequenceHtml += `
        <h3>Sequence Id: ${sequence._id}</h3>
        <h3>Added by: ${userName}</h3>
        <br>
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        <br><br><br>
      </div>
      `  
  }

  $('#sequence-index-display').html(sequenceHtml)
}

const onSequenceIndexFailure = err => {
  console.log(err)
  $('#sequence-destroy-index-display').text('Failed to retrieve Sequences')

  // Clear error message
  setTimeout(() => {
    $('#sequence-index-error-display').text('')
  }, 5000)
}

const onSequenceIndexPersonalSuccess = responseData => {
  console.log(responseData)
  console.log('user ', responseData.user)
  console.log('tech ', responseData.user.sequences)

  let techniqueHtml = ''
  
  for (let i = 0; i < responseData.user.sequences.length;  i++) {
    const sequence = responseData.user.sequences[i]
    techniqueHtml += `
      <div class ="sequence-library">
        <h1>${sequence.name}</h1>
        <h3>Technique 1: ${sequence.techniques[0].name}</h3>
      <h3>Technique 2: ${sequence.techniques[1].name}</h3>
      <h3>Technique 3: ${sequence.techniques[2].name}</h3>

        <h3>Sequence Id: ${sequence._id}</h3>
        <br>
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        <br><br><br>
      </div>
      `  
  }

  $('#sequence-index-display').html(sequenceHtml)
}

const onSequenceIndexPersonalFailure = err => {
  console.log(err)
  $('#sequence-index-error-display').text('Failed to retrieve personal sequences')

  setTimeout(() => {
    $('#sequence-index-error-display').text('')
  }, 5000)
}

const onSequenceShowSuccess = responseData => {
  console.log(responseData)
  const sequence = responseData.sequence
  const userName = sequence.owner.userName ? sequence.owner.userName : sequence.owner.email
  

  let sequenceHtml = `
      <div class ="sequence-library">
        <h1>${sequence.name}</h1>
        <h3>Technique 1: ${sequence.techniques[0].name}</h3>
        <h3>Technique 2: ${sequence.techniques[1].name}</h3>
        `
    for (let j = 2; j < sequence.techniques.length; j++) {
      sequenceHtml += `
        <h3>Technique ${j + 1}: ${sequence.techniques[j].name}</h3>
        `
    }
    sequenceHtml += `
        <h3>Sequence Id: ${sequence._id}</h3>
        <h3>Added by: ${userName}</h3>
        <br>
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        <br><br><br>
      </div>
      ` 
  $('#sequence-show-display').html(sequenceHtml)
  $('form').trigger('reset')
}

const onSequenceShowFailure = err => {
  console.log(err)
  $('#sequence-show-error-display').text('Sequence not found')

  // Clear error message
  setTimeout(() => {
    $('#sequence-show-error-display').text('')
  }, 5000)
}

const onSequenceCreateSuccess = responseData => {
  console.log('response data ', responseData)
  const sequence = responseData.sequenceData
  console.log('sequence.techniques', sequence.techniques)
 
  console.log('owner', sequence.owner)
  sequenceHtml = `
      <div class ="sequence-library">
        <h1>${sequence.name}</h1>
        <h3>Technique 1: ${sequence.techniques[0].name}</h3>
        <h3>Technique 2: ${sequence.techniques[1].name}</h3>
        `
    for (let j = 2; j < sequence.techniques.length; j++) {
      sequenceHtml += `
        <h3>Technique ${j + 1}: ${sequence.techniques[j].name}</h3>
        `
    }
    sequenceHtml += `
        <h3>Sequence Id: ${sequence._id}</h3>
        <br>
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        <br><br><br>
      </div>
      ` 
  
  $('#sequence-create-display').html(sequenceHtml)
  $('form').trigger('reset')
  store.count = 3

  setTimeout(() => {
    $('#sequence-create-display').text('')
  }, 5000)
}

const onSequenceCreateFailure = err => {
  console.log(err)
  $('#sequence-destroy-create-display').text('Failed to Create Sequence')

  // Clear error message
  setTimeout(() => {
    $('#sequence-create-error-display').text('')
  }, 5000)
}

const onSequenceUpdateSuccess = () => {

  $('#sequence-update-display').text('Sequence Updated')
  $('form').trigger('reset')

  // Clear success message
  setTimeout(() => {
    $('#sequence-update-display').text('')
  }, 5000)
}

const onSequenceUpdateFailure = err => {
  console.log(err)
  $('#sequence-update-error-display').text('Failed to Update Sequence')

  // Clear error message
  setTimeout(() => {
    $('#sequence-update-error-display').text('')
  }, 5000)
}

const onSequenceDestroySuccess = () => {
  $('#sequence-destroy-display').text('Sequence Destroyed')
  $('form').trigger('reset')

    // Clear success message
    setTimeout(() => {
      $('#sequence-destroy-display').text('')
    }, 5000)
}

const onSequenceDestroyFailure = err => {
  console.log(err)
  $('#sequence-destroy-error-display').text('Failed to Delete Sequence')

  // Clear error message
  setTimeout(() => {
    $('#sequence-destroy-error-display').text('')
  }, 5000)
}

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