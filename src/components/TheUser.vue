<template>
  <Menu>
    <MenuButton class="hidden sm:flex items-center justify-end w-full h-full space-x-2 mr-6 ">
      <span class="flex items-center justify-items-end h-full dark:text-slate-100">
        {{ authStore.user?.username }}
      </span>
      <img
        src=""
        alt="user-icon"
        class="rounded-full w-12 h-12"
      >
      <font-awesome-icon
        icon="chevron-down"
        class="dark:text-white"
      />
    </MenuButton>

    <div class="flex items-center justify-end w-full h-full space-x-2 mr-6 visible sm:hidden">
      <span class="flex items-center justify-items-end h-full dark:text-slate-100">
        {{ authStore.user?.username }}
      </span>
      <img
        src=""
        alt="user-icon"
        class="rounded-full w-12 h-12"
      >
    </div>

    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <MenuItems
        class="absolute top-12 right-2 w-full flex flex-col z-10 bg-slate-100
        border border-slate-300 rounded-xl shadow-md dark:bg-slate-800 dark:text-slate-300"
      >
        <MenuItem class="p-3 rounded-t-xl transition-all space-x-2">
          <div>{{ verificationState }}</div>
        </MenuItem>
        <MenuItem
          class=""
          v-for="(item, index) in items"
          :key="index"
          v-slot="{ active }"
        >
          <a
            :class="[
              'p-3 first:rounded-t-xl last:rounded-b-xl transition-all space-x-2 border-t border-white dark:border-slate-600',
              { 'dark:bg-slate-900 dark:text-white': active },
            ]"
            :href="item.link"
          >
            <font-awesome-icon :icon="item.icon" />
            <span>{{ item.name }}</span>
          </a>
        </MenuItem>
        <MenuItem
          class=""
          v-slot="{ active }"
          @click="handleLogout"
        >
          <a
          :class="[
              'p-3 first:rounded-t-xl last:rounded-b-xl transition-all space-x-2 border-t border-white dark:border-slate-600',
              { 'dark:bg-slate-900 dark:text-white': active },
            ]"
          >
            <font-awesome-icon icon="external-link" />
            <span>Logout</span>
          </a>
        </MenuItem>
      </MenuItems>
    </transition>
  </Menu>
</template>
<script lang="ts" setup>
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue';
import { ref, computed } from 'vue';
import { useAuthStore } from '@/stores/auth';
import { parseVerificationState } from '@/utils/user';
import router from '@/router';

const authStore = useAuthStore();

const handleLogout = () => {
  authStore.logout();
  router.push('/');
}

const items = ref([
  {
    name: 'Profile',
    link: '/profile',
    icon: 'user',
  },
  {
    name: 'Rewards',
    link: '/rewards',
    icon: 'gift',
  },
  {
    name: 'Support Center',
    link: '/support',
    icon: 'circle-question',
  },
  {
    name: 'Contact Us',
    link: '/contact',
    icon: 'comment',
  },
]);

const verificationState = computed(() => parseVerificationState(authStore.user?.verification));
</script>
