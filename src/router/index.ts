import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router';
import Home from '../views/Home.vue';
import Wallet from '../views/Wallet.vue';
import Dashboard from '../views/Dashboard.vue';
import ForgotPassword from '../views/ForgotPassword.vue';
import History from '../views/History.vue';
import Settings from '../views/Settings.vue';
import Projects from '../views/Projects.vue';
import NFT from '../views/NFT.vue';
import Profile from '../views/Profile.vue';
import Rewards from '../views/Rewards.vue';
import SupportCenter from '../views/SupportCenter.vue';
import ContactUs from '../views/ContactUs.vue';
import Logout from '../views/LogOut.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import {useGlobalStore} from '../stores/global';

// const globalStore = useGlobalStore();

// The routes for navigating the dashboard, names are used for the `to` parameter which can be a url or name
const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      secure: true,
    },
  },
  {
    path: '/forgotpass',
    name: 'Forgot Password',
    component: ForgotPassword,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      secure: true,
    },
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: {
      secure: true,
    },
  },
  {
    path: '/wallet',
    name: 'Wallet',
    component: Wallet,
    meta: {
      secure: true,
    },
  },
  {
    path: '/history',
    name: 'History',
    component: History,
    meta: {
      secure: true,
    },
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings,
    meta: {
      secure: true,
    },
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects,
    meta: {
      secure: true,
    },
  },
  {
    path: '/nft',
    name: 'NFT',
    component: NFT,
    meta: {
      secure: true,
    },
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: {
      secure: true,
    },
  },
  {
    path: '/rewards',
    name: 'Rewards',
    component: Rewards,
    meta: {
      secure: true,
    },
  },
  {
    path: '/support',
    name: 'Support',
    component: SupportCenter,
    meta: {
      secure: true,
    },
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactUs,
    meta: {
      secure: true,
    },
  },
  {
    path: '/logout',
    name: 'Logout',
    component: Logout,
  },
];


const router = createRouter({
  history: createWebHistory('/'),
  routes,
});


router.beforeEach(async (to, from, next) => {
  const globalStore = useGlobalStore();
  if (to.meta.secure) {
    if (localStorage.loggedIn === '0' && to.name !== 'Login') {
      return next('/login');
    }
    if (to.name === 'Logout') {
      localStorage.loggedIn = 0;
      globalStore.global.loggedIn = false;
      return next('/login');
    }
    if (localStorage.loggedIn === '1') {
      globalStore.global.loggedIn = true;
      return next();
    }
  }
  return next();
});

export default router;
