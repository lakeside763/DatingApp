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
    photos?: Photo[];
}

export interface UserResponse {
    user: User;
}

export interface UserLogin {
    username: string;
    password: string;
}

export interface Photo {
    id: number;
    username: string;
    description: string;
    dateAdded: Date;
    isMain: boolean;
  }

  export interface ResponseToken {
      token: string;
  }


