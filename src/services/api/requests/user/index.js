import { api } from 'services/api'

export const updateUserCall = (data) =>
  api.get('/user', data, {
    headers: {
      Authorization: `bearer ${localStorage.getItem('@bookclub_token')}`
    }
  })

export const updateUserAvatar = (data) =>
  api.get('/user/avatar', data, {
    headers: {
      Authorization: `bearer ${localStorage.getItem('@bookclub_token')}`
    }
  })
