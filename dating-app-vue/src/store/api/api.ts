import axios from 'axios';
import toast from './toast';
import users from '../modules/users';
import { Value, ValueResponse, UserLogin, UserResponse, ResponseToken } from '../models/users';

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
        const response = await DatingAppApi.post('/auth/login', userLogin);
        if (response) {
            localStorage.setItem('token', JSON.stringify(response.data));
        }
        return response.data as ResponseToken;
    } catch (error) {
        return handleError(error);
    }
}
// export async function Login(userLogin: UserLogin): Promise<any> {
//     await DatingAppApi.post('/auth/login', userLogin).then((response) => {
//         localStorage.setItem('token', JSON.stringify(response.data));
//         return response.data as ResponseToken;
//     }).catch((handleError));
// }

export async function Register(userLogin: UserLogin): Promise<any> {
    await DatingAppApi.post('/auth/register', userLogin).then((response) => {
        return response;
    }).catch((handleError));
}

function handleError(error: any) {
    toast.error(error.response.data, 'Error', 500000);
}
