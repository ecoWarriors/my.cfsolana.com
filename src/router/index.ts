import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router';
import NFT from '../views/NFT.vue';
import { useAuthStore } from '@/stores/auth';

// routes for navigating dashboard
const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    component: () => import("@/views/Login.vue"),
  },
  {
    path: '/forgotpass',
    name: 'Forgot Password',
    component: () => import("@/views/ForgotPassword.vue"),
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import("@/views/Register.vue"),
  },
  {
    path: '/',
    name: 'Home',
    component: () => import("@/views/Home.vue"),
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import("@/views/Dashboard.vue"),
    meta: {
      secure: true,
    },
  },
  {
    path: '/wallet',
    name: 'Wallet',
    component: () => import("@/views/Wallet.vue"),
    meta: {
      secure: true,
    },
  },
  {
    path: '/history',
    name: 'History',
    component: () => import("@/views/History.vue"),
    meta: {
      secure: true,
    },
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import("@/views/Settings.vue"),
    meta: {
      secure: true,
    },
  },
  {
    path: '/projects',
    name: 'Projects',
    component: () => import("@/views/Projects.vue"),
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
    component: () => import("@/views/Profile.vue"),
    meta: {
      secure: true,
    },
  },
  {
    path: '/rewards',
    name: 'Rewards',
    component: () => import("@/views/Rewards.vue"),
    meta: {
      secure: true,
    },
  },
  {
    path: '/support',
    name: 'Support',
    component: () => import("@/views/SupportCenter.vue"),
    meta: {
      secure: true,
    },
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import("@/views/ContactUs.vue"),
    meta: {
      secure: true,
    },
  },
];


const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

router.beforeEach(async (to: any) => {
  const authStore = useAuthStore();
  
  if (
    // first check if secure route
    to.meta.secure &&
    // make sure the user is authenticated
    !authStore.isAuthenticated &&
    // ❗️ Avoid an infinite redirect
    to.name !== 'Login'
  ) {
    // redirect the user to the login page
    return { name: 'Login' }
  }
});

export default router;
