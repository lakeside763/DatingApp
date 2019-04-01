import { Observable } from 'rxjs';
import { Value, ValueResponse, User, ProfileData } from '@/store/models/users';
import { DatingAppApi, DatingAppObs } from '../environments/environment';
import axios, {AxiosPromise} from 'axios';
import Axios from 'axios-observable';


// export function GetValues(): AxiosPromise<Value[]> {
//     return DatingAppApi.get<Value[]>('/values');
// }

// export async function GetValues() {
//     try {
//         const response = await DatingAppApi.get('/values');
//         return response.data as ValueResponse;
//     } catch (error) {
//         return error;
//     }
// }

export function GetValues() {
    return DatingAppObs.get<ValueResponse>('/values');
}

export function GetMembers() {
    return DatingAppObs.get<User[]>('/users');
}

export function GetMember(id: number) {
    return DatingAppObs.get<User>(`/users/${id}`);
}

export function UpdateProfile(updateProfile: ProfileData, id: number) {
    return DatingAppObs.put(`/users/${id}`, updateProfile);
}

export function AddPhoto(uploadFile: any, id: number) {
    return DatingAppObs.post(`/users/${id}/photos`, uploadFile);
}
