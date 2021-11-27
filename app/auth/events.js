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
  
  const formData = {
    "credentials": {
      "email": $('#sign-up-email').val(),
      "password": $('#sign-up-password').val(),
      "password_confirmation": $('#sign-up-password-confirmation').val()
    }
  }

  // Call the sign-up api function
  api.signUp(formData)
    .then(ui.onSignUpSuccess)
    .then(() => api.signIn(formData))
      .then(ui.onSignInSuccess)
      .catch(ui.onSignInFailure)  
    .catch(ui.onSignUpFailure)

}

// User sign-in
const onSignIn = event => {
  // Stop the browser from refreshing
  event.preventDefault()

  // Obtain the data from the form fields
 
  const formData = {
    "credentials": {
      "email": $('#sign-in-email').val(),
      "password": $('#sign-in-password').val()
    }
  }

  // Set email & password to browser's session storage
  sessionStorage.setItem('email', formData.credentials.email)
  sessionStorage.setItem('password', formData.credentials.password)

  // Call the sign-up api function
  api.signIn(formData)
    .then(ui.onSignInSuccess)
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
 
  // If user is already signed in, call API sign-in
  if (sessionStorage.getItem('email')) {
    api.signIn(formData)
      .then(ui.onSignInSuccess)
      .catch(ui.onSignInFailure)
  }
}

// User change password
const onChangePassword = event => {
  // Stop the browser from refreshing
  event.preventDefault()

  // Obtain the data from the form fields
  const formData = {
    "passwords": {
      "old": $('#change-password-old-pw').val(),
      "new": $('#change-password-new-pw').val()
    }
  }

  // Call the sign-up api function
  api.changePassword(formData)
    .then(ui.onChangePasswordSuccess)
    .catch(ui.onChangePasswordFailure)
}


// User sign-in
const onSignOut = event => {
  // Stop the browser from refreshing
  event.preventDefault()

  // Call the sign-up api function
  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
}



// const onSignUpModalOutsideClick = event => {
//   event.preventDefault()

//   if (event.target == $('#sign-up-modal')[0] && $('#sign-up-modal').css('display') === 'block') {
//     $('#sign-up-modal').css('display', 'none')
//   }
  
// }


const onSignUpModal = event => {
  event.preventDefault()

  console.log('email', $('#sign-up-email').val())
  console.log('pw', $('#sign-up-password').val())
  console.log('pw conf', $('#sign-up-password-confirmation').val)

  const formData = {
    "credentials": {
      "email": $('#sign-up-email').val(),
      "password": $('#sign-up-password').val(),
      "password_confirmation": $('#sign-up-password-confirmation').val()
    }
  }

  api.signUp(formData)
  .then(ui.onSignUpSuccess)
  .then(() => api.signIn(formData))
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)  
  .catch(ui.onSignUpFailure)
}


const onSignInModal = (event) => {
  event.preventDefault()

  console.log('event ', event)
  console.log('email', $('#sign-in-email').val())
  console.log('pw', $('#sign-in-password').val())

  
}


module.exports = {
  onSignUp,
  onSignIn,
  onRefreshSignIn,
  onChangePassword,
  onSignOut, 
  onSignUpModal,
  onSignInModal
  // onSignUpModalOutsideClick
}