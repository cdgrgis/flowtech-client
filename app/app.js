const authEvents = require('./auth/events')
const techniqueEvents = require('./technique/events')
const sequenceEvents = require('./sequence/events')
const userEvents = require('./user/events')
// const { nodeName } = require('jquery')

$(() => {
  // Authentication Event Listeners
  $('#sign-up-modal-button').on('click', () => $('#sign-up-modal').show())
  $('#sign-up').on('submit', authEvents.onSignUp)

  $('#sign-in-modal-button').on('click', () => $('#sign-in-modal').show())
  $('#sign-in').on('submit', authEvents.onSignIn)

  $('#change-password-button').on('click', () => $('#change-password-modal').show())
  $('#change-password').on('submit', authEvents.onChangePassword)

  $('#update-user-button').on('click', () => $('#update-user-modal').show())
  $('#update-user').on('submit', userEvents.onUpdateUser)

  $('#sign-out-button').on('click', authEvents.onSignOut)
  $('#sign-out').on('click', authEvents.onSignOut)

  $('#search-by-username').on('submit', userEvents.onSearchByUserName)

  // Technique Event Listeners
  $('#technique-index-button').on('click', techniqueEvents.onTechniqueIndex)
  $('#technique-index-personal-button').on('click', userEvents.onTechniqueIndexPersonal)
 
  $('#technique-show-button').on('click', () => $('#technique-show-modal').show())
  $('#technique-show-form').on('submit', techniqueEvents.onTechniqueShow)

  $('#technique-create-button').on('click', () => $('#technique-create-modal').show())
  $('#technique-create').on('submit', techniqueEvents.onTechniqueCreate)

  $('#technique-update-button').on('click', () => $('#technique-update-modal').show())
  $('#technique-update').on('submit', techniqueEvents.onTechniqueUpdate)
  
  $('#technique-destroy-button').on('click', () => $('#technique-destroy-modal').show())
  $('#technique-destroy').on('submit', techniqueEvents.onTechniqueDestroy)

  // Sequence Event Listeners
  $('#sequence-index-button').on('click', sequenceEvents.onSequenceIndex)
  $('#sequence-index-personal-button').on('click', userEvents.onSequenceIndexPersonal)
  
  $('#sequence-show-button').on('click', () => $('#sequence-show-modal').show())
  $('#sequence-show').on('submit', sequenceEvents.onSequenceShow)

  $('#sequence-create-button').on('click', () => $('#sequence-create-modal').show())
  $('#sequence-create').on('submit', sequenceEvents.onSequenceCreate)
  $('#sequence-create-add-technique').on('click', sequenceEvents.onSequenceCreateAddTechnique)

  $('#sequence-update-button').on('click', () => $('#sequence-update-modal').show())
  $('#sequence-update').on('submit', sequenceEvents.onSequenceUpdate)
  $('#sequence-update-add-technique').on('click', sequenceEvents.onSequenceUpdateAddTechnique)


  $('#sequence-destroy-button').on('click', () => $('#sequence-destroy-modal').show())
  $('#sequence-destroy').on('submit', sequenceEvents.onSequenceDestroy)
  

  // Event listener for the `x` button inside each modal
  $('.close').on('click', () => $('.modal').hide())
  

  
  
  
  // When browser reloads, call the refresh sign in function (signing the user in)
  window.onload = authEvents.onRefreshSignIn()
  // window.onclick = authEvents.onSignUpModalOutsideClick
})
