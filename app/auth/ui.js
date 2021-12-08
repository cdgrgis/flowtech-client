// Require the store object
const store = require('../store')

// Success handler for user sign-up
const onSignUpSuccess = responseData => {
  // Let the user know the sign up was successful
  $('#sign-up-display').text('Sign up successful')

  // Clear forms
  $('form').trigger('reset')

  // Hide all modals
  $('.modal').hide()

  // In 5 seconds...
  setTimeout(() => {
    // ... Clear the message
    $('#sign-up-display').text('')
  }, 5000)
}

// Error handler for user sign-up
const onSignUpFailure = err => {
  // Send a message to user
  $('#sign-up-error-display').text('Sign up failed')

  // Clear error message
  setTimeout(() => {
    $('#sign-up-error-display').text('')
  }, 5000)
}

const onSignInSuccess = responseData => {
  // Let the user know the sign in was successful
  $('#sign-in-display').text('Sign in successful')

  // Hide the sign-up modal
  $('#sign-up-modal').hide()

  // Hide the before sign-in section
  $('.before-sign-in').hide()
  
  // Show the search by username input
  $('#search-by-username').show()

  // show the after sign-in section
  $('.after-sign-in').show()
  
  
  // Clear forms
  $('form').trigger('reset')

  // Store the user object in the store object
  store.user = responseData.user

  // In 5 seconds...
  setTimeout(() => {
    // ... Clear success message
    $('#sign-in-display').text('')
  }, 5000)
}

// Error handler for user sign-in
const onSignInFailure = err => {
  // Send a message to user
  $('#sign-in-error-display').text('Sign in failed')

  // In 5 seconds...
  setTimeout(() => {
    // ... Clear error message
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

  // In 5 seconds...
  setTimeout(() => {
    // ... clear success message
    $('#database-content-display').text('')
  }, 5000)
}

// Error handler for change password
const onChangePasswordFailure = err => {
  // Send a message to user
  $('#change-password-error-display').text('Change password failed')

  // In 5 seconds...
  setTimeout(() => {
    // ... Clear error message
    $('#change-password-error-display').text('')
  }, 5000)
}

const onSignOutSuccess = responseData => {
  // Let the user know the sign-out was successful
  $('#database-content-display').text('Sign out successful')

  // Hide the after sign-in section
  $('.after-sign-in').hide()

  // Hide the search by user input
  $('#search-by-user').hide()

  // Show the before sign-in section
  $('.before-sign-in').show()

  // Clear forms
  $('form').trigger('reset')

  // Clear session storage so user does not get signed in on refresh
  sessionStorage.clear()
  
  // In 5 seconds...
  setTimeout(() => {
    // ... Clear success message
    $('#database-content-display').text('')
  }, 5000)
}

// Error handler for user sign-up
const onSignOutFailure = err => {
  // Send a message to user
  $('#sign-out-error-display').text('Sign out failed')

  // In 5 seconds...
  setTimeout(() => {
    // ... Clear error message
    $('#sign-out-error-display').text('')
  }, 5000)
}

// Export functions for use in app.js
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