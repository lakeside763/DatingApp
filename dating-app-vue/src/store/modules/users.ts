import { VuexModule, Module, Mutation, Action, getModule, MutationAction } from 'vuex-module-decorators';
import store from '@/store';
import { Value, UserLogin, User, ResponseToken } from '../models/users';
import { GetValues, Login, Register } from '../api/api';
import jwt from 'jsonwebtoken';


@Module({
    namespaced: true,
    name: 'users',
    store,
    dynamic: true,
})

class UsersModule extends VuexModule {
    public value: Value[] = [];
    public valueList: Value[] = [] || this.value;
    public user: User | null | undefined = null || JSON.parse(localStorage.getItem('userData') || '{}');
    public getValueError: any;
    public token: ResponseToken = JSON.parse(localStorage.getItem('token') || '{}');
    public loginResponse: any;
    public registerResponse: any;
    public responseError: any;
    public tokenStatus: boolean = false;
    public decodedToken: any;
    get username() {
        return this.user && this.user.username;
    }

    get error() {
        return this.responseError;
    }

    @Mutation
    public setValues(values: Value[]) {
        this.value = values;
    }
    @Mutation
    public setGetValuesError(error: any) {
        this.getValueError = error;
    }

    @Action({commit: 'setValues'})
    public async values() {
        try {
            const value = await GetValues();
            return value;
        } catch (error) {
            this.setGetValuesError(error);
        }
    }

    @Mutation
    public setToken(token: ResponseToken) {
        this.token = token;
    }

    @Action({commit: 'setToken'})
    public async login(userLogin: UserLogin) {
        const token = await Login(userLogin);
        return token;
    }

    // @MutationAction
    // public async login(userLogin: UserLogin) {
    //     const token = await Login(userLogin);
    //     return { token } ;
    // }

    @Mutation
    public emptyStoreToken(token: ResponseToken) {
        this.token = token;
    }
    @Action({commit: 'emptyStoreToken'})
    public async EmptyStoreToken() {
        const token = await {};
        return token;
    }

    @Mutation
    public setRegister(registerResponse: any) {
        this.registerResponse = registerResponse;
    }
    @Action({commit: 'setRegister'})
    public async register(userLogin: UserLogin) {
        await Register(userLogin).then((registerResponse) => {
            return registerResponse;
        }).catch((error) => error);
    }

    @Mutation
    public setError(responseError: any) {
        this.responseError = responseError;
    }
    @Action({commit: 'setError'})
    public handleError(error: any) {
        const responseError = error.response.data;
        return responseError;
    }
    @Mutation
    public isTokenExpired(token: boolean) {
        this.tokenStatus = token;
    }
    @Action({commit: 'isTokenExpired'})
    public ConfirmTokenStatus() {
        //
    }

    @Mutation
    public setDecodedToken(decodedToken: any) {
        this.decodedToken = decodedToken;
    }
    @Action
    public decodedTokenData() {
        console.log(this.token.token);
        const decodedToken = jwt.decode(this.token.token);
        return decodedToken;
    }
}
export default getModule(UsersModule);
