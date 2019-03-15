import axios from 'axios';
import { Value, ValueResponse, UserLogin, UserResponse } from '../models/users';

const auth = 'Authorization';
const bearerToken = `Bearer ${localStorage.getItem('token')}`;

export const LoginRegisterApi = axios.create({
    baseURL: 'http://localhost:4000/api',
});

export const DatingAppApi = axios.create({
    baseURL: 'http://localhost:4000/api',
    // headers: {Authorization: `Bearer ${localStorage.getItem('token')}`},
});

export function setToken() {
    DatingAppApi.defaults.headers.common[auth] = bearerToken;
}

export function deleteToken() {
    delete DatingAppApi.defaults.headers.common[auth];
}

export async function GetValues() {
    try {
        const response = await DatingAppApi.get('/values');
        return response.data as ValueResponse;
    } catch (error) {
        return error;
    }
}

export async function Login(userLogin: UserLogin) {
    try {
        const response = await DatingAppApi.post('/users', {userLogin});
        if (response) {
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('userData', response.data);
            axios.defaults.headers.common[auth] = bearerToken;
        }
        return (response.data as UserResponse).user;
    } catch (error) {
        // console.log(error);
        return error;
    }
}

