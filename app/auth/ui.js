// Require the store object
const store = require('../store')

// Success handler for user sign-up
const onSignUpSuccess = responseData => {
  // Let the user know the sign up was successful
  $('#sign-up-display').text('Sign up successful')
  console.log(responseData)
  // Clear forms
  $('form').trigger('reset')
  $('.modal').hide()

  // Clear success message
  setTimeout(() => {
    $('#sign-up-display').text('')
  }, 5000)
}

// Error handler for user sign-up
const onSignUpFailure = err => {
  $('#sign-up-error-display').text('Sign up failed')

  setTimeout(() => {
    $('#sign-up-error-display').text('')
  }, 5000)
}

const onSignInSuccess = responseData => {
  // Let the user know the sign in was successful
  $('#sign-in-display').text('Sign in successful')
  $('#before-sign-in').hide()
  $('#search-by-username').show()
  $('#after-sign-in').show()
  $('#sign-up-modal').hide()
  console.log(responseData)
  // Clear forms
  $('form').trigger('reset')

  // Store the user object in the store object
  store.user = responseData.user

  // Clear success message
  setTimeout(() => {
    $('#sign-in-display').text('')
  }, 5000)
}

// Error handler for user sign-in
const onSignInFailure = err => {
  $('#sign-in-error-display').text('Sign in failed')

  setTimeout(() => {
    $('#sign-in-error-display').text('')
  }, 5000)
}

const onChangePasswordSuccess = responseData => {
  // Let the user know the password was changed successfully
  $('#database-content-display').text('Password changed successfully')
  
  // Clear forms
  $('form').trigger('reset')

  // Close all modals
  $('.modal').hide()

  // Clear success message
  setTimeout(() => {
    $('#database-content-display').text('')
  }, 5000)
}

// Error handler for change password
const onChangePasswordFailure = err => {
  $('#change-password-error-display').text('Change password failed')

  setTimeout(() => {
    $('#change-password-error-display').text('')
  }, 5000)
}

const onSignOutSuccess = responseData => {
  // Let the user know the sign-out was successful
  $('#database-content-display').text('Sign out successful')
  $('#before-sign-in').show()
  $('#after-sign-in').hide()
  $('#search-by-user').hide()
  

  // Clear forms
  $('form').trigger('reset')

  // Clear session storage so user does not get signed in on refresh
  sessionStorage.clear()
  
  // Clear success message
  setTimeout(() => {
    $('#database-content-display').text('')
  }, 5000)
}

// Error handler for user sign-up
const onSignOutFailure = err => {
  $('#sign-out-error-display').text('Sign out failed')

  setTimeout(() => {
    $('#sign-out-error-display').text('')
  }, 5000)
}

module.exports = {
  onSignUpSuccess,
  onSignInSuccess,
  onChangePasswordSuccess,
  onSignOutSuccess,
  onSignUpFailure,
  onSignInFailure,
  onChangePasswordFailure,
  onSignOutFailure
}