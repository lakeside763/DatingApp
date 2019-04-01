import axios from 'axios';
import Axios from 'axios-observable';
const auth = 'Authorization';
const bearerToken = `Bearer ${localStorage.getItem('token')}`;

export const LoginRegisterApi = axios.create({
    baseURL: 'http://localhost:4000/api',
});

export const DatingAppApi = axios.create({
    baseURL: 'http://localhost:4000/api',
    // headers: {Authorization: `Bearer ${localStorage.getItem('token')}`},
});

export const DatingAppObs = Axios.create({
    baseURL: 'http://localhost:4000/api',
    headers: {Authorization: `Bearer ${localStorage.getItem('setToken')}`},
});

export function setToken() {
    DatingAppApi.defaults.headers.common[auth] = bearerToken;
}

export function deleteToken() {
    delete DatingAppApi.defaults.headers.common[auth];
}
