import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/login.vue'
import Home from '../components/Home.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/home',
    component: Home
  }

]

const router = new VueRouter({
  routes
})

//导航首位
router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    return next();
  } else {
    const str = window.sessionStorage.getItem("token");//从sessionStorage中根据key取
    //window.sessionStorage.clear()清空缓存
    if (!str) {
      next('/login');
    } else {
      next();
    }
  }
  next();
})

export default router