// Obtain the url 
const config = require('../config')

// Obtain the store object for data storage
const store = require('../store')

// API call for sequence create
const sequenceIndex = () => {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/sequences',
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}



// API call for sequence create
const sequenceShow = formData => {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + `/sequences/${formData.sequence.id}`,
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

// API call for sequence create
const sequenceCreate = formData => {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sequences',
    headers: {
      Authorization: `Bearer ${store.user.token}`
    },
    data: formData
  })
}

// API call for sequence update
const sequenceUpdate = formData => {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + `/sequences/${formData.sequence.id}`,
    headers: {
      Authorization: `Bearer ${store.user.token}`
    },
    data: formData
  })
}

// API call for sequence create
const sequenceDestroy = formData => {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + `/sequences/${formData.sequence.id}`,
    headers: {
      Authorization: `Bearer ${store.user.token}`
    },
    data: formData
  })
}

// Export functions
module.exports = {
  sequenceIndex,
  sequenceShow,
  sequenceCreate,
  sequenceUpdate,
  sequenceDestroy
}