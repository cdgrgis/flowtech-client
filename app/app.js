const authEvents = require('./auth/events')
const techniqueEvents = require('./technique/events')
const sequenceEvents = require('./sequence/events')
const { nodeName } = require('jquery')

$(() => {
  // Event listener for user sign-up
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)

  $('#technique-index').on('click', techniqueEvents.onTechniqueIndex)
  $('#technique-index-personal').on('click', techniqueEvents.onTechniqueIndexPersonal)
  $('#technique-show').on('submit', techniqueEvents.onTechniqueShow)
  $('#technique-create').on('submit', techniqueEvents.onTechniqueCreate)
  $('#technique-update').on('submit', techniqueEvents.onTechniqueUpdate)
  $('#technique-destroy').on('submit', techniqueEvents.onTechniqueDestroy)

  $('#sequence-index').on('click', sequenceEvents.onSequenceIndex)
  $('#sequence-index-personal').on('click', sequenceEvents.onSequenceIndexPersonal)
  $('#sequence-show').on('submit', sequenceEvents.onSequenceShow)
  $('#sequence-create').on('submit', sequenceEvents.onSequenceCreate)
  $('#sequence-create-add-technique').on('click', sequenceEvents.onSequenceCreateAddTechnique)
  $('#sequence-update').on('submit', sequenceEvents.onSequenceUpdate)
  $('#sequence-update-add-technique').on('click', sequenceEvents.onSequenceUpdateAddTechnique)
  $('#sequence-destroy').on('submit', sequenceEvents.onSequenceDestroy)

  $('#sign-up-modal-button').on('click', authEvents.onSignUpModalOpen)
  $('.close').on('click', authEvents.onSignUpModalClose) 
  $('#sign-up-modal').on('click', event => {event.preventDefault(); console.log(event.target)})

  window.onload = authEvents.onRefreshSignIn()
  // window.onclick = authEvents.onSignUpModalOutsideClick
})
