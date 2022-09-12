import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

function createHeaders() {

  const auth = JSON.parse(localStorage.getItem("mywallet"));
  const config = {
    headers: {
      Authorization: `Bearer ${auth.token}`
    }
  };

  return config;
}

function signIn(body) {
  const request = axios.post(`${BASE_URL}/sign-in`, body);
  return request;
}

function signUp(body) {
  const request = axios.post(`${BASE_URL}/sign-up`, body);
  return request;
}

function logout() {
  const config = createHeaders();
  const request = axios.delete(`${BASE_URL}/logout`, config);
  return request;
}

function getUser() {
  const config = createHeaders();
  const request = axios.get(`${BASE_URL}/user`, config);
  return request;
}

function postTransaction(body) {
  const config = createHeaders();
  const request = axios.post(`${BASE_URL}/transactions`, body, config);
  return request;
}

function getTransactions() {
  const config = createHeaders();
  const request = axios.get(`${BASE_URL}/transactions`, config);
  return request;
}

export { signIn, signUp, logout, getUser, postTransaction, getTransactions};