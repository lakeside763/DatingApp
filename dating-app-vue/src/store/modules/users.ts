import { VuexModule, Module, Mutation, Action, getModule, MutationAction } from 'vuex-module-decorators';
import store from '@/store';
import { Value, UserLogin, User } from '../models/users';
import { GetValues, Login } from '../api/api';

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

    @MutationAction
    public async login(userLogin: UserLogin) {
        const user = await Login(userLogin);
        return { user };
    }
}
export default getModule(UsersModule);
