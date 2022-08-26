<template>
  <router-link
    :class="`${
      $route.path === path
        ? 'text-slate-700  bg-slate-300 dark:border-slate-900 dark:text-slate-900 dark:bg-slate-800'
        : 'text-slate-600 dark:text-slate-500'
    }`"
    class="sidebar-item transition-all py-3 px-5 space-x-3.5 select-none w-full flex items-center border-b-slate-900/20 border-b border-t-white/90 border-t
           hover:bg-slate-300 hover:text-slate-900
           dark:border-b-black/60 dark:border-t-slate-700/80
           dark:hover:hover:bg-green-700
           dark:hover:text-slate-200"
    :to="path"
  >
    <font-awesome-icon :icon="icon" />
    <span
      :class="{
        'opacity-0 transition-all': !expanded,
        'opacity-full transition-all': expanded,
      }"
    >{{ name }}</span>
  </router-link>
</template>

<script lang="ts" setup>
export interface SidebarItemProps {
  name: string;
  path: string;
  icon: string;
  expanded?: boolean;
}
defineProps<SidebarItemProps>();
</script>
