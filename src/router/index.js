import Vue from 'vue';
import VueRouter from 'vue-router';

import PatientList from '../views/PatientList.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'PatientList',
    component: PatientList
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router;