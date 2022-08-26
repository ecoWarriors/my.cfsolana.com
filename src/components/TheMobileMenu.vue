<template>
  <Menu>
    <MenuButton class="flex items-center justify-end w-full h-full space-x-2">
      <font-awesome-icon
        icon="chevron-down"
        class="ml-2 my-6 dark:text-white float-left"
      />
      <img
        src="https://www.eco-token.io/images/Blocks/logo_ecotoken-128.png"
        alt="ecoToken"
        class="w-14 my-1 ml-1 mr-4 float-left"
      >
    </MenuButton>

    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <MenuItems id="mmenu">
        <MenuItem class="block text-slate-50 border-t border-t-slate-600 border-b border-b-black p-3 transition-all space-x-2">
          <div>{{ displayVerificationStatus }}</div>
        </MenuItem>

        <MenuItem
          class="mitem"
          v-for="(item, index) in items"
          :key="index"
        >
          <a :href="item.link">
            <font-awesome-icon
              :icon="item.icon"
              class="icon"
            />
            <span>{{ item.name }}</span>
          </a>
        </MenuItem>

        <!--
        <hr class="h-px border-t border-t-black" />
        <MenuItem class="p-3 rounded-t-xl transition-all space-x-2">
          <div>{{ displayVerificationStatus }}</div>
        </MenuItem>
        0

         -->

        <MenuItem
          class="mitem"
          v-for="(item, index) in userItems"
          :key="index"
        >
          <a :href="item.link">
            <font-awesome-icon
              :icon="item.icon"
              class="icon"
            />
            <span>{{ item.name }}</span>
          </a>
        </MenuItem>
      </MenuItems>
    </transition>
  </Menu>
</template>


<style scoped>
#mmenu {
  @apply absolute top-16 w-full max-w-xs flex flex-col z-10 bg-slate-800/90 overflow-hidden rounded-br-lg pb-8
        dark:bg-slate-800 dark:text-slate-300;
}

#mmenu a,
#mmenu a:link,
#mmenu a:active,
#mmenu a:visited {
  @apply block text-slate-50 border-t border-t-slate-600 border-b border-b-black p-3 transition-all space-x-2
}

#mmenu .icon {
  @apply text-slate-50 mr-2
}

#mmenu a:hover {
  @apply bg-slate-900 text-slate-50
}
</style>


<script lang="ts" setup>
import {Menu, MenuButton, MenuItems, MenuItem} from '@headlessui/vue';
import {ref, computed} from 'vue';
import {useUserStore, VerificationState} from '../stores/user';

const userStore = useUserStore();

const items = ref([
  {
    name: 'Home',
    link: '/',
    icon: 'home',
  },
  {
    name: 'Dashboard',
    link: '/dashboard',
    icon: 'grip',
  },
  {
    name: 'Wallet',
    link: '/wallet',
    icon: 'wallet',
  },
  {
    name: 'History',
    link: '/history',
    icon: 'clock-rotate-left',
  },
  {
    name: 'Settings',
    link: '/settings',
    icon: 'gear',
  },
  {
    name: 'ecoProjects',
    link: '/projects',
    icon: 'leaf',
  },
  {
    name: 'NFT',
    link: '/nft',
    icon: 'image',
  },
]);

const userItems = ref([
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
  {
    name: 'Logout',
    link: '/logout',
    icon: 'external-link',
  },
]);

const displayVerificationStatus = computed(() => {
  switch (userStore.user.verification) {
    case VerificationState.UNKNOWN:
      return 'Not Verified';
    case VerificationState.ANONYMOUS:
      return 'Not Verified';
    case VerificationState.PARTIAL:
      return 'Needs More Info';
    case VerificationState.PENDING:
      return 'Verification Pending';
    case VerificationState.REVIEW:
      return 'Verification In Review';
    case VerificationState.SUSPENDED:
      return 'Suspended';
    case VerificationState.VERIFIED:
      return "Verified";
    default:
      return "Not Verified";
  }
});
</script>
