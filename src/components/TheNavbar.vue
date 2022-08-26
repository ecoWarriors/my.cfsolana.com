<template>
  <div
    class="relative z-20 flex items-center w-full h-16 bg-slate-50 border-b border-slate-300 border-solid shadow-sm dark:bg-slate-800 dark:border-slate-600 dark:shadow-lg"
  >
    <div class="inline-block h-full sm:hidden">
      <TheMobileMenu />
    </div>

    <div class="hidden w-8 h-fit sm:inline-block">
      <img
        src="https://www.eco-token.io/images/Blocks/logo_ecotoken-128.png"
        alt="ecoToken System"
        class="w-12 my-1 ml-3 mr-4 float-left" />
    </div>

    <div class="hidden sm:flex flex-wrap ml-12 w-fit h-12 pl-4 pr-4 pb-2 bg-slate-200 rounded-md">
      <h6 class="text-slate-400 font-jura text-sm w-full m-0">YOUR BALANCE</h6>
      <div class="text-slate-800 text-lg">
        <span>124.476</span>
        <span class="text-slate-500 text-sm"> ECO</span>
        <span class="text-slate-700 mr-1 ml-1"> / </span>
        <span> 475.76</span>
        <span class="text-slate-500 text-sm"> CAD</span>
      </div>
    </div>

    <div class="absolute top-0 right-0 w-56 h-16 flex justify-end pr-4">
      <TheUser />
    </div>
  </div>
</template>

<script setup lang="ts">
import TheMobileMenu from './TheMobileMenu.vue';
import TheUser from './TheUser.vue';
</script>
