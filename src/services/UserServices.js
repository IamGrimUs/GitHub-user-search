import axios from 'axios'

const apiClient = axios.create({
  headers: {
    Accept: 'application/vnd.github.v3+json',
    'Content-Type': 'application/json',
  },
})

export default {
  getUsers(searchTerm, pageNumber) {
    return apiClient.get(
      `https://api.github.com/search/users?q=${searchTerm}&per_page=50&page=${pageNumber}`
    )
  },
}
