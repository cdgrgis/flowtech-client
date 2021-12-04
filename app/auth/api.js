// Obtain the url 
const config = require('../config')

// Obtain the store object for data storage
const store = require('../store')

// API call for user sign-up
const signUp = formData => {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-up',
    data: formData
  })
}

// API call for user sign-in
const signIn = formData => {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-in',
    data: formData
  })
}

// API call for user change-password
const changePassword = formData => {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/change-password',
    headers: {
      Authorization: `Bearer ${store.user.token}`
    },
    data: formData
  })
}

// API call for user sign-out
const signOut = formData => {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/sign-out',
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

// export functions
module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut
}