import { api } from 'services/api'

export const getCategories = () =>
  api.get('/book?highlighted=true', {
    headers: {
      Authorization: `bearer ${localStorage.getItem('@bookclub_token')}`
    }
  })

export const getBooksByCategory = (id) =>
  api.get(`/book?category_id=${id} `, {
    headers: {
      Authorization: `bearer ${localStorage.getItem('@bookclub_token')}`
    }
  })
