// Obtain the url 
const config = require('../config')

// Obtain the store object for data storage
const store = require('../store')

// API call for technique create
const techniqueIndex = () => {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/techniques',
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

// API call for technique create
const techniqueShow = formData => {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + `/techniques/${formData.technique.id}`,
    headers: {
      Authorization: `Bearer ${store.user.token}`
    }
  })
}

// API call for technique create
const techniqueCreate = formData => {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/techniques',
    headers: {
      Authorization: `Bearer ${store.user.token}`
    },
    data: formData
  })
}

// API call for technique update
const techniqueUpdate = formData => {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + `/techniques/${formData.technique.id}`,
    headers: {
      Authorization: `Bearer ${store.user.token}`
    },
    data: formData
  })
}

// API call for technique create
const techniqueDestroy = formData => {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + `/techniques/${formData.technique.id}`,
    headers: {
      Authorization: `Bearer ${store.user.token}`
    },
    data: formData
  })
}

module.exports = {
  techniqueIndex,
  techniqueShow,
  techniqueCreate,
  techniqueUpdate,
  techniqueDestroy
}