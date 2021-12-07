const authEvents = require('./auth/events')
const techniqueEvents = require('./technique/events')
const sequenceEvents = require('./sequence/events')
const userEvents = require('./user/events')
// const { nodeName } = require('jquery')

$(() => {
  // Authentication Event Listeners
  // When sign up modal button is clicked, show sign up modal
  $('#sign-up-modal-button').on('click', () => $('#sign-up-modal').show())
  // When sign up submit form is submitted, call onSignUp function
  $('#sign-up').on('submit', authEvents.onSignUp)

  // When sign in modal button is clicked, show sign in modal
  $('#sign-in-modal-button').on('click', () => $('#sign-in-modal').show())
  // When sign in submit form is submitted, call onSignIn function
  $('#sign-in').on('submit', authEvents.onSignIn)

  // When change password modal button is clicked, show sign in modal
  $('#change-password-button').on('click', () => $('#change-password-modal').show())
  // When change password submit form is submitted, call onChangePassword function
  $('#change-password').on('submit', authEvents.onChangePassword)

  // When update user modal button is clicked, show sign in modal
  $('#update-user-button').on('click', () => $('#update-user-modal').show())
  // When update user submit form is submitted, call onUPdateUser function
  $('#update-user').on('submit', userEvents.onUpdateUser)

  // When update user modal button is clicked, call onSignOut function
  $('#sign-out-button').on('click', authEvents.onSignOut)

  // When search by username form is submitted, call onSearchByUserName function
  $('#search-by-username').on('submit', userEvents.onSearchByUserName)

  // Technique Event Listeners
  // When technique index button is clicked, call onTechnique Index function
  $('#technique-index-button').on('click', techniqueEvents.onTechniqueIndex)
  // When the demonstration button is clicked on the main page, call the onTechniqueDemonstration function
  $('#database-content-display').on('click', '.demonstration-modal-button', techniqueEvents.onTechniqueDemonstration)
  // When the demonstration button is clicked in the show sequence modal, call the onTechniqueDemonstration function
  $('#sequence-technique-details-modal-display').on('click', '.demonstration-modal-button', techniqueEvents.onTechniqueDemonstration)

  // When the personal technique index button is clicked, call the onTechniqueIndexPersonal function
  $('#technique-index-personal-button').on('click', userEvents.onTechniqueIndexPersonal)
 
  // When the show technique button is clicked, show the technique show modal
  $('#technique-show-button').on('click', () => $('#technique-show-modal').show())
  // When the show technique form is submitted, call the onTechniqueShows function
  $('#technique-show-form').on('submit', techniqueEvents.onTechniqueShow)

  // When the create technique button is clicked, show the technique create modal
  $('#technique-create-button').on('click', () => $('#technique-create-modal').show())
  // When the create technique form is submitted, call the onTechniqueCreate function
  $('#technique-create').on('submit', techniqueEvents.onTechniqueCreate)

  // When the update technique button is clicked, call the onTechniqueShowUpdateModal function
  $('#database-content-display').on('click', '.technique-update', techniqueEvents.onTechniqueShowUpdateModal)
  // When the technique update form is submitted, call the onTechniqueUpdate function
  $('#technique-update').on('submit', techniqueEvents.onTechniqueUpdate)
  
  // When the technique destroy button is clicked, call the onTechnique Destroy function
  $('#database-content-display').on('click', '.technique-delete', techniqueEvents.onTechniqueDestroy)
  
  // Sequence Event Listeners
  $('#sequence-index-button').on('click', sequenceEvents.onSequenceIndex)
  $('#database-content-display').on('click', '.sequence-technique-details', sequenceEvents.onSequenceTechniqueDetails)

  $('#sequence-index-personal-button').on('click', userEvents.onSequenceIndexPersonal)
  
  $('#sequence-show-button').on('click', () => $('#sequence-show-modal').show())
  $('#sequence-show').on('submit', sequenceEvents.onSequenceShow)

  $('#sequence-create-button').on('click', () => $('#sequence-create-modal').show())
  $('#sequence-create').on('submit', sequenceEvents.onSequenceCreate)
  $('#sequence-create-add-technique').on('click', sequenceEvents.onSequenceCreateAddTechnique)
  $('#sequence-create-delete-additional-techniques').on('click', sequenceEvents.onSequenceCreateDeleteAdditionalTechniques)

  $('#database-content-display').on('click', '.sequence-update', sequenceEvents.onSequenceShowUpdateModal)
  $('#sequence-update').on('submit', sequenceEvents.onSequenceUpdate)
  $('#sequence-update-add-technique').on('click', sequenceEvents.onSequenceUpdateAddTechnique)


  $('#sequence-destroy-button').on('click', () => $('#sequence-destroy-modal').show())
  $('#sequence-destroy').on('submit', sequenceEvents.onSequenceDestroy)
  $('#database-content-display').on('click', '.sequence-delete', sequenceEvents.onSequenceDestroy)

  
  $('#auth-drop').on('click', userEvents.onUserIndex)
  $('#technique-drop').on('click', userEvents.onTechniqueIndexPersonal)
  $('#sequence-drop').on('click', userEvents.onSequenceIndexPersonal)
  
  // Event listener for the `x` button inside each modal
  $('.close').on('click', () => $('.modal').hide())
  

  
  
  
  // When browser reloads, call the refresh sign in function (signing the user in)
  window.onload = authEvents.onRefreshSignIn()
  // window.onclick = authEvents.onSignUpModalOutsideClick
})
