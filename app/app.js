const authEvents = require('./auth/events')
const techniqueEvents = require('./technique/events')
const sequenceEvents = require('./sequence/events')

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
  $('#sequence-show').on('submit', sequenceEvents.onSequenceShow)
  $('#sequence-create').on('submit', sequenceEvents.onSequenceCreate)
  $('#sequence-create-add-technique').on('click', sequenceEvents.onSequenceCreateAddTechnique)
  $('#sequence-update').on('submit', sequenceEvents.onSequenceUpdate)
  $('#sequence-destroy').on('submit', sequenceEvents.onSequenceDestroy)

  window.onload = authEvents.onRefreshSignIn()
})
