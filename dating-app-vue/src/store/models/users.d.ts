import { Photo } from './photo';
export interface Value {
    name: string;
}

export interface ValueResponse {
    value: Value;
}
// export interface ValueResponse {
//     values: (Value)[] | null;
// }

export interface User {
    id: number;
    username: string;
    knownAs: string;
    age: number;
    gender: string;
    created: Date;
    lastActive: Date;
    photoUrl: string;
    city: string;
    country: string;
    interests?: string;
    introduction?: string;
    lookingFor?: string;
    photos?: Photo[];
}

export interface ProfileData {
    knownAs: string;
    city: string;
    country: string;
    interests?: string;
    introduction?: string;
    lookingFor?: string;
}

export interface UserResponse {
    user: User;
}

export interface UserLogin {
    username: string;
    password: string;
}
export interface ResponseToken {
      token: string;
}
export interface Image {
    image: string;
}

