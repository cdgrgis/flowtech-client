const authEvents = require('./auth/events')
const techniqueEvents = require('./technique/events')

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

  window.onload = authEvents.onRefreshSignIn()
})
