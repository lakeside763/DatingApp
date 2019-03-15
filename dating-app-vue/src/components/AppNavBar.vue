<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container">
    <a class="navbar-brand" href="#">Dating App</a>

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
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

      <ul class="navbar-nav">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="search" placeholder="Username" aria-label="Search">
        <input class="form-control mr-sm-2" type="search" placeholder="Password" aria-label="Search">
        <button class="btn btn-success my-2 my-sm-0" type="submit">Login</button>
      </form>
    </div>
  </div>
  
</nav>
    <!-- <nav class="navbar navbar-expand-md navbar-light bg-light">
    <div class="container">
      <a class="navbar-brand" href="#">Dating App</a>

    <ul class="navbar-nav mr-auto">
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

    <div dropdown class="dropdown">
      <a dropdownToggle class="dropdown-toggle text-light">
        Welcome 
      </a>

      <div *dropdownMenu class="dropdown-menu mt-3">
        <a class="dropdown-item" href="#"><i class="fa fa-user"></i> Edit Profile</a>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item" href="#"><i class="fa fa-sign-out"></i> Logout</a>
      </div>
    </div>

    <form loginForm="ngForm" class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="text" name="username"
        placeholder="Username" required >
      <input class="form-control mr-sm-2" type="password" name="password"
        placeholder="Password" required >
      <button class="btn btn-success my-2 my-sm-0" type="submit">Login</button>
    </form>
  </div>
</nav> -->
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import * as $ from 'jquery';

@Component
export default class AppNav extends Vue {
}
</script>
