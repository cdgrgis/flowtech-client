const authEvents = require('./auth/events')
const techniqueEvents = require('./technique/events')
const sequenceEvents = require('./sequence/events')
const { nodeName } = require('jquery')

$(() => {
  // Event listener for user sign-up
  $('#sign-up-modal-button').on('click', () => $('#sign-up-modal').css('display', 'block'))
  $('#sign-up').on('click', authEvents.onSignUp)

  $('#sign-in-modal-button').on('click', () => $('#sign-in-modal').css('display', 'block'))
  $('#submit-modal-sign-in').on('click', authEvents.onSignIn)

  $('#change-password-modal-button').on('click', () => $('#change-password-modal').css('display', 'block'))
  $('#submit-modal-change-password').on('click', authEvents.onChangePassword)

  $('#technique-destroy-modal-button').on('click', () => $('#technique-destroy-modal').css('display', 'block'))
  $('#technique-destroy-submit-modal').on('click', techniqueEvents.onTechniqueDestroy)

  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)

  $('#technique-index').on('click', techniqueEvents.onTechniqueIndex)
  $('#technique-index-personal').on('click', techniqueEvents.onTechniqueIndexPersonal)
 
  $('#technique-show-modal-button').on('click', () => $('#technique-show-modal').css('display', 'block'))
  $('#technique-show-submit-modal').on('click', techniqueEvents.onTechniqueShow)

  $('#technique-create').on('submit', techniqueEvents.onTechniqueCreate)
  $('#technique-update').on('submit', techniqueEvents.onTechniqueUpdate)
  
  

  $('#sequence-index').on('click', sequenceEvents.onSequenceIndex)
  $('#sequence-index-personal').on('click', sequenceEvents.onSequenceIndexPersonal)
  
  $('#sequence-show-modal-button').on('click', () => $('#sequence-show-modal').css('display', 'block'))
  $('#sequence-show-submit-modal').on('click', sequenceEvents.onSequenceShow)

  $('#sequence-create-modal-button').on('click', () => $('#sequence-create-modal').css('display', 'block'))
  $('#sequence-create-submit-modal').on('click', sequenceEvents.onSequenceCreate)

  $('#sequence-create-add-technique').on('click', sequenceEvents.onSequenceCreateAddTechnique)
  $('#sequence-update').on('submit', sequenceEvents.onSequenceUpdate)
  $('#sequence-update-add-technique').on('click', sequenceEvents.onSequenceUpdateAddTechnique)
  $('#sequence-destroy').on('submit', sequenceEvents.onSequenceDestroy)

  
  $('.close').on('click', () => $('.modal').css('display', 'none'))
  

  
  
  

  window.onload = authEvents.onRefreshSignIn()
  // window.onclick = authEvents.onSignUpModalOutsideClick
})
