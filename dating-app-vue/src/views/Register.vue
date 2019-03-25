<template>
    <div class="container">
        <div class="row" style="margin-top: 100px;">
            <div class="col-md-6 offset-3">
                <form>
                    <h2 class="text-center text-primary">Sign Up</h2>
                    <hr>

                    <div class="form-group">
                        <input type="text" v-model="username" class="form-control" required name="username" placeholder="Username">
                    </div>

                    <div class="form-group">
                        <input type="password" v-model="password" class="form-control" required name="password" placeholder="Password">
                    </div>

                    <div class="form-group text-center">
                        <button class="btn btn-success" @click="Register()" type="button" style="margin-right: 10px;">Register</button>
                        <router-link class="btn btn-outline-primary" to="/">Cancel</router-link>
                    </div>

                </form>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import users from '../store/modules/users';

export default class Register extends Vue {
    private username = '';
    private password = '';
    private errorAlert: boolean = false;
    private errorMessage: any;
    private successMessage: string = '';
    
    public Register() {
        users.register({
            username: this.username,
            password: this.password,
        });
    }
}
</script>
