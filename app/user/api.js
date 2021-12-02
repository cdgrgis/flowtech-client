// Obtain the url 
const config = require('../config')

// Obtain the store object for data storage
const store = require('../store')

const techniqueIndexPersonal = () => {
    return $.ajax({
        method: 'GET',
        url: config.apiUrl + '/users/:id',
        headers: {
            Authorization:  `Bearer ${store.user.token}`
        }
    })
}

const sequenceIndexPersonal = () => {
    return $.ajax({
      method: 'GET',
      url: config.apiUrl + '/users/:id',
      headers: {
        Authorization: `Bearer ${store.user.token}`
      }
    })
}

const updateUser = formData => {
    return $.ajax({
        method: 'PATCH',
        url: config.apiUrl + '/update-user',
        headers: {
            Authorization: `Bearer ${store.user.token}`
        },
        data: formData
    })
}

const searchByUserName = formData => {
    return $.ajax({
        method: 'POST',
        url: config.apiUrl + '/users/username',
        headers:{
            Authorization: `Bearer ${store.user.token}`
        },
        data: formData
    })
}

module.exports = {
    techniqueIndexPersonal,
    sequenceIndexPersonal,
    updateUser,
    searchByUserName
}