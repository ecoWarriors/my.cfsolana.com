<template>
  <div>
    {{ globalStore.global.loggedIn }}
  </div>
</template>

<script lang="ts" setup>
import { useGlobalStore } from '../stores/global';
const globalStore = useGlobalStore();
globalStore.global.loggedIn = false;
</script>
