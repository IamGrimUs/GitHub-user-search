import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://api.github.com',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

export default {
  getUsers(userName) {
    return apiClient.get(`/users/${userName}`);
  }
};
