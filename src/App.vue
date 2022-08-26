<script lang="ts" setup>
import TheSidebar from './components/TheSidebar.vue';
import TheNavbar from './components/TheNavbar.vue';
import FooterComponent from './components/FooterComponent.vue';
import {useGlobalStore} from './stores/global';
import {usePreferencesStore} from './stores/preferences';
import {useTheme} from './composables/theme';

const theme = useTheme();
const globalStore = useGlobalStore();
const preferencesStore = usePreferencesStore();

theme.switchColorTheme(theme.getTheme(), preferencesStore.preferences.theme);
</script>

<template>
  <div id="grid">
    <main id="cbody">
      <router-view />
    </main>

    <div id="chead">
      <TheNavbar v-if="globalStore.global.loggedIn" />
    </div>

    <div
      id="aleft"
      v-if="globalStore.global.loggedIn"
    >
      <TheSidebar></TheSidebar>
    </div>

    <div
      id="cfoot"
      class="z-10"
    >
      <FooterComponent />
    </div>
  </div>
</template>
