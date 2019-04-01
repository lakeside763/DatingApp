import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Register from './views/Register.vue';
import Welcome from './views/Welcome.vue';
import users from './store/modules/users';
import Members from './views/Members.vue';
import MemberDetail from './views/MemberDetail.vue';
import MemberEdit from './views/MemberEdit.vue';

const HomeGuard  = (to: any, from: any, next: any) => {
  const token = users.token.token;
  if (token !== (null || undefined)) next(true);
  next(false);
};

const WelcomeGuard = (to: any, from: any, next: any) => {
  const token = users.token.token;
  if (token === (null || undefined)) next(true);
  next(false);
};

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', name: 'welcome', component: Welcome, beforeEnter: WelcomeGuard },
    { path: '/home', name: 'home', component: Home, beforeEnter: HomeGuard},
    { path: '/register', name: 'register', component: Register },
    { path: '/members', name: 'members', component: Members },
    { path: '/member/:id', name: 'member', component: MemberDetail },
    { path: '/profile', name: 'profile', component: MemberEdit },
  ],
});
