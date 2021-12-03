// Require the store
const store = require('../store')

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
          <button class="technique-delete" id=${technique._id}>Delete technique</button>
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
    $('#database-error-display').text('Failed to retrieve your techniques')

    setTimeout(() => {
        $('#database-error-display').text('')
    }, 5000)
}

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
      // Add the sequence's id to sequenceHtml
      sequenceHtml += `
          <h3>Sequence Id: ${sequence._id}</h3>
          <br>
          <button class="sequence-delete" id=${sequence._id}>Delete sequence</button>
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
    console.log(err)
  
    // Send a message to the user
    $('#sequence-error-display').text('Failed to retrieve personal sequences')
  
    // Clear error message
    setTimeout(() => {
      $('#sequence-error-display').text('')
    }, 5000)
  }

const onUpdateUserSuccess = (responseData) => {
    console.log('success')
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
    console.log(responseData.user)

    const user = responseData.user

    let userHtml = `
    <h1>${user.userName}</h1>`

    if (user.picture) {
      userHtml += `
      <img src=${user.picture} alt="User picture" width="200" height="200">`
    }
    
    if (user.techniques.length !== 0) {
      userHtml += `
      <h3>${user.userName}'s Techniques</h3>`

      for (let i = 0; i < user.techniques.length; i++) {
        const technique = user.techniques[i]
        userHtml += `
        <h4>Name: ${technique.name}</h4>
        <br>
        <h4>Timing & Direction: ${technique.timing} / ${technique.direction}</h4>
        <br><hr><br>
        `
      }
    }
    
    if (user.sequences.length !== 0) {
      userHtml += `
      <br><br>
      <h3>Sequences</h3>`
      
      for (let i = 0; i < user.sequences.length; i++) {
        const sequence = user.sequences[i]
        userHtml += `
        <h4>Name: ${sequence.name}</h4>`
        
        for (let j = 0; j < sequence.techniques.length; j++) {
          userHtml += `
          <br>
          <h5>Technique ${j + 1}: ${sequence.techniques[j].name}</h5>
          <br><hr><br>
          `
        }
      }
      
      
     
    }


  $('#database-content-display').html(userHtml)

    
}

const onSearchByUserNameFailure = err => {
    console.log(err)

    // Send a message to user
    $('#search-by-username-error-display').text('Failed to find user')

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