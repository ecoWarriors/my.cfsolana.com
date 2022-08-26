<template>
  <!-- h-full -->
  <nav
    id="aleft"
    class="relative flex flex-col w-14 h-full transition-all duration-200 bg-slate-100 dark:bg-slate-800"
    :class="isExpanded && 'w-40 overflow-hidden'"
  >
    <div class="inline-block w-full pt-2 pb-1 pr-4">
      <font-awesome-icon
        icon="chevron-left"
        :class="{ 'rotate-180': !isExpanded }"
        class="cursor-pointer float-right dark:text-gray-400 p-2 transition-all duration-300"
        @click="isExpanded = !isExpanded"
      />
    </div>

    <sidebar-item
      name="Home"
      icon="home"
      path="/"
      :expanded="isExpanded"
      class="border-slate-300 border-t"
    />
    <sidebar-item
      name="Dashboard"
      icon="grip"
      path="/dashboard"
      :expanded="isExpanded"
    />
    <sidebar-item
      name="Wallet"
      icon="wallet"
      path="/wallet"
      :expanded="isExpanded"
    />
    <sidebar-item
      name="History"
      icon="clock-rotate-left"
      path="/history"
      :expanded="isExpanded"
    />
    <sidebar-item
      name="Settings"
      icon="gear"
      path="/settings"
      :expanded="isExpanded"
    />
    <sidebar-item
      name="ecoProjects"
      icon="leaf"
      path="/projects"
      :expanded="isExpanded"
    />
    <sidebar-item
      name="NFT"
      icon="image"
      path="/nft"
      :expanded="isExpanded"
    />
    <slot />
  </nav>
</template>
<script lang="ts" setup>
import {ref} from 'vue';
import SidebarItem from './SidebarItem.vue';
const isExpanded = ref(false);
</script>
