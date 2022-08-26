<template>
  <article class="card44">
    <div class="top-nav flex flex-col items-center flex-1 space-y-4 w-full">
      <font-awesome-icon
        icon="leaf"
        class="text-7xl text-green-500"
      />
      <span class="uppercase tracking-[0.3em] dark:text-gray-400 font-normal">Projects</span>
      <div
        class="status w-full bg-green-300 rounded-xl text-center shadow-xl text-xs"
      >
        100%
      </div>
      <div class="status w-full bg-green-400 rounded-xl text-center shadow-xl">
        100%
      </div>
    </div>
    <div class="bottom-nav flex justify-end">
      <router-link
        class="bg-green-500 rounded-sm py-2 px-16 text-gray-900 active:scale-95 transition-all duration-100"
        to="/projects"
      >
        View
      </router-link>
    </div>
  </article>
</template>
