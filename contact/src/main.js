import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import Home from './pages/Home.vue'
import AddContact from './pages/AddContact.vue'
import EditContact from './pages/EditContact.vue'
import LoginPage from './pages/LoginPage.vue'

window.isAuthenticated = false;
const routes = [
  { path: '*', component: Home, name: 'home' },
  { path: '/login', component: LoginPage, name: 'loginpage' },
  { path: '/home', component: Home, name: 'homepage' },
  { path: '/addcontact', component: AddContact, name: 'addcontact' },
  { path: '/editcontact/:id', component: EditContact, name: 'editcontact' },
]
Vue.use(VueRouter);
const router = new VueRouter({

  //history: createWebHistory(),
  routes,
})
//let isAuthenticated = false;
router.beforeEach((to, from, next) => {
  console.log(from);
  console.log(to);
  console.log(next);
  if (
    // make sure the user is authenticated
    !window.isAuthenticated &&
    // ❗️ Avoid an infinite redirect
    to.path !== '/login'
  ) {
    // redirect the user to the login page
    next({ path: '/login' });
  }
  else {
    next();
  }
})
//Vue.use(router)
Vue.config.productionTip = false

new Vue({

  render: h => h(App),
  router
}).$mount('#app')
