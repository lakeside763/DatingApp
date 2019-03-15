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
    username: string;
    email: string;
    password: string;
    token: string;
    firstName: string;
    lastName: string;
}

export interface UserResponse {
    user: User;
}

export interface UserLogin {
    username: string;
    password: string;
}

