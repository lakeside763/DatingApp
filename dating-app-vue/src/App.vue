<template>
    <div id="app">
      <AppNavBar></AppNavBar>
      <router-view></router-view>
    </div>
</template>

<style>
@import '../node_modules/bootswatch/dist/litera/bootstrap.css';
@import '../node_modules/font-awesome/css/font-awesome.min.css';
@import '../node_modules/alertifyjs/build/css/alertify.min.css';
@import '../node_modules/alertifyjs/build/css/themes/bootstrap.min.css';
</style>

<script lang="ts">
// import Vue from 'vue'
import { Vue, Component } from 'vue-property-decorator';
import AppNavBar from '@/components/AppNavBar.vue';
import 'alertifyjs';
import 'pace-progressbar';
import 'pace-progressbar/themes/green/pace-theme-minimal.css';
import 'bootstrap';
import { Value } from '@/store/models/users';

import users from './store/modules/users';
@Component({
  components: {
    AppNavBar,
  },
})
export default class App extends Vue {
  //
}
</script>

