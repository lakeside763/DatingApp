<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <router-link class="navbar-brand" to="/">Dating App</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div class="mr-auto" style="display: inline-block">
          <ul class="navbar-nav mr-auto" v-if="loginStatus">
            <li class="nav-item active">
              <router-link class="nav-link" to="/members">Matches</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/list">List</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/messages">Messages</router-link>
            </li>
          </ul>
        </div>
        

        <div class="pull-right ml-auto">
          <ul class="navbar-nav" v-if="loginStatus">
            <li class="nav-items dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Hi {{tokenData.unique_name}}
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <router-link class="dropdown-item" to="/profile">Profile</router-link>
                <div class="dropdown-divider"></div>
                <a href="#" class="dropdown-item" @click="Logout()">Logout <i class="fa fa-power"></i></a>
              </div>
            </li>
          </ul>

          <div v-if="!loginStatus">
            <form class="form-inline my-2 my-lg-0" id="LoginForm">
              <input type="text" v-model="username" class="form-control mr-sm-2" placeholder="Username" required>
              <input type="password" v-model="password" class="form-control mr-sm-2" placeholder="Password" required>
              <button @click="UserLogin()" class="btn btn-success my-2 my-sm-0" type="submit">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import * as $ from 'jquery';
import users from '../store/modules/users';
import { UserLogin } from '@/store/models/users';
import jwt from 'jsonwebtoken';

@Component({})
export default class AppNavBar extends Vue {
  private username: string = '';
  private password: string = '';
  private user: string | null | undefined;
  private tokenData: {} | null = {};
  private uniName: any;
  private loginStatus: boolean = false;

  get loginUsername() {
    return this.user = users.username;
  }

  public created() {
    if (users.token.token){
      this.loginStatus = true;
    };
    this.loginTokenData();
    this.isTokenValid();
  }

  public isTokenValid() {
    if (users.token.token) {
      const tokenData = jwt.decode(users.token.token);
      const tokenDataStringinfy = JSON.stringify(tokenData);
      const tokenExp = JSON.parse(tokenDataStringinfy).exp
      if (tokenExp < new Date().getTime) {
          this.$router.push('/');
          this.Logout();
      }
    }
  }
  public loginTokenData() {
    const tokenData = jwt.decode(users.token.token);
    this.tokenData = tokenData;
  }
  public UserLogin() {
    users.login({
      username: this.username,
      password: this.password,
    }).then((res) => {
        if (users.token.token === (null || undefined)){
          this.loginStatus = false; 
          return false;
        } 
        this.loginTokenData();
        this.$router.push('/home');
        this.loginStatus = true;
        return this.LoggedIn();
    });
  }

  public LoggedIn() {
    const token = localStorage.getItem('token');
    return !!token;
  }

  public Logout() {
    localStorage.removeItem('token');
    users.EmptyStoreToken().then(() => {
      this.loginStatus = false;
      this.$router.push('/');
      return this.LoggedIn();
    });
  }
}
</script>

