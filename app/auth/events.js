// Require api calls
const api = require('./api')

// Require response handler functions
const ui = require('./ui')

// Require function to obtain data from form fields when submitted
const getFormFields= require('../../lib/get-form-fields')

// User sign-up
const onSignUp = event => {
  // Stop the browser from refreshing
  event.preventDefault()

  // Obtain the data from the form fields
  const signUpData = getFormFields(event.target)

  // Set the data for the sign-in api call
  const signInData = {
    "credentials": {
      "email": signUpData.credentials.email,
      "password": signUpData.credentials.password
    }
  }
  
  // Call the sign-up api function
  api.signUp(signUpData)
    // Call the success message
    .then(ui.onSignUpSuccess) 
    // Call the failure message
    .catch(ui.onSignUpFailure)

  setTimeout(() => {
  // Call the sign-in api function
    api.signIn(signInData)
      // Call the success message
      .then(ui.onSignInSuccess)
      // Call the failure message
      .catch(ui.onSignInFailure)
  }, 100)
}

// User sign-in
const onSignIn = event => {
  // Stop the browser from refreshing
  event.preventDefault()

  // Obtain the data from the form fields
  const formData = getFormFields(event.target)

  // Set email & password to browser's session storage
  sessionStorage.setItem('email', formData.credentials.email)
  sessionStorage.setItem('password', formData.credentials.password)

  // Call the sign-up api function
  api.signIn(formData)
    // Call the success message
    .then(ui.onSignInSuccess)
    // Call the failure message
    .catch(ui.onSignInFailure)
}

// Keep user signed in when browser refreshes
const onRefreshSignIn = () => {
  // Set the email and password in the form data format
  const formData = {
    'credentials': {
      'email': sessionStorage.getItem('email'),
      'password': sessionStorage.getItem('password')
    }
  }
 
  // If user is already signed in,
  if (sessionStorage.getItem('email')) {
    // ... call API sign-in
    api.signIn(formData)
      // Call the success message
      .then(ui.onSignInSuccess)
      // Call the failure message
      .catch(ui.onSignInFailure)
  }
}

// User change password
const onChangePassword = event => {
  // Stop the browser from refreshing
  event.preventDefault()

  // Obtain the data from the form fields
  const formData = getFormFields(event.target)

  // Call the sign-up api function
  api.changePassword(formData)
    // Call the success message
    .then(ui.onChangePasswordSuccess)
    // Call the failure message
    .catch(ui.onChangePasswordFailure)
}


// User sign-in
const onSignOut = event => {
  // Stop the browser from refreshing
  event.preventDefault()

  // Call the sign-up api function
  api.signOut()
    // Call the success message
    .then(ui.onSignOutSuccess)
    // Call the failure message
    .catch(ui.onSignOutFailure)
}



// const onSignUpModalOutsideClick = event => {
//   event.preventDefault()

//   if (event.target == $('#sign-up-modal')[0] && $('#sign-up-modal').css('display') === 'block') {
//     $('#sign-up-modal').css('display', 'none')
//   }
  
// }


// Export functions
module.exports = {
  onSignUp,
  onSignIn,
  onRefreshSignIn,
  onChangePassword,
  onSignOut
  // onSignUpModalOutsideClick
}