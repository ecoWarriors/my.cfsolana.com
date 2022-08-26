<template>
  <div
    v-show="enabled"
    class="absolute h-full w-96 bottom-0 right-4 pt-20 pr-1 px-4 pb-8 flex items-center justify-center bg-sky-400/90 dark:bg-sky-300/90"
  >
    <div class="palette flex flex-col w-full h-full">
      <h3>Interface Palette</h3>

      <div class="areas rounded-t-lg">
        <span class="p-1">NAV/FOOT</span>
        <h5 class="p-1 bg-slate-50 text-slate-700 border-b border-b-slate-100">
          bg-slate-50
        </h5>
        <h5
          class="p-1 bg-slate-800 text-slate-300 rounded-tr-lg border-b border-b-slate-600"
        >
          bg-slate-800
        </h5>
      </div>
      <div class="areas border-t-0 rounded-b-lg">
        <span class="p-1 border-t border-slate-100">border-</span>
        <h5 class="p-1 bg-slate-50 text-slate-700">
          b-slate-100
        </h5>
        <h5 class="p-1 bg-slate-700 text-slate-300">
          b-slate-600
        </h5>
      </div>

      <div class="areas rounded-t-lg overflow-hidden mt-2">
        <span class="border-b border-b-slate-900/20">SIDE</span>
        <h5
          class="p-1 bg-slate-100 text-slate-700 border-b border-b-slate-900/20"
        >
          bg-slate-100
        </h5>
        <h5
          class="p-1 bg-slate-800 text-slate-300 rounded-tr-lg border-b border-b-black/60"
        >
          bg-slate-800
        </h5>
      </div>
      <div class="areas">
        <span class="border-t border-t-white/90 border-b border-b-slate-900/20">border-t</span>
        <h5
          class="p-1 bg-slate-100 text-slate-700 border-t border-b border-t-white/90 border-b-slate-900/20"
        >
          t-white/90
        </h5>
        <h5
          class="p-1 bg-slate-800 text-slate-300 border-t border-b border-t-slate-700/80 border-b-black/60"
        >
          t-slate-700/80
        </h5>
      </div>
      <div class="areas border-t-0 rounded-b-lg overflow-hidden">
        <span
          class="p-1 border-t border-t-white/90 border-t border-b border-b-slate-900/20"
        >border-b</span>
        <h5
          class="p-1 bg-slate-100 text-slate-700 border-t border-b border-t-white/90 border-b-slate-900/20"
        >
          b-slate-900/20
        </h5>
        <h5
          class="p-1 bg-slate-800 text-slate-300 border-t border-b border-t-slate-700/80 border-b-black/60"
        >
          b-black/60
        </h5>
      </div>

      <div class="areas rounded-t-lg overflow-hidden mt-2">
        <span class="p-1">CBODY</span>
        <h5 class="p-1 bg-slate-200 text-slate-700">
          bg-slate-200
        </h5>
        <h5 class="p-1 bg-slate-900 text-slate-300 rounded-tr-lg">
          bg-slate-900
        </h5>
      </div>
      <div class="areas border-t-0 rounded-b-lg">
        <span class="">.card</span>
        <h5 class="py-1 pt-0 bg-slate-200 text-slate-700">
          <span
            class="ishadow inline-block w-full h-6 px-1 rounded-md bg-slate-50 border border-slate-300"
          >
            bg-slate-50
          </span>
        </h5>
        <h5 class="py-1 pt-0 bg-slate-900 text-slate-300">
          <span
            class="ishadow inline-block w-full h-6 px-1 rounded-md bg-slate-800 border border-slate-700"
          >
            bg-slate-800
          </span>
        </h5>
      </div>

      <div class="colors w-96 mt-3">
        <h6 class="bg-black text-white">
          black
        </h6>
        <h6 class="bg-white">
          white
        </h6>
        <h6 class="bg-slate-500">
          slate
        </h6>
        <h6 class="bg-gray-500">
          gray
        </h6>
        <h6 class="bg-zinc-500">
          zinc
        </h6>
        <h6 class="bg-neutral-500">
          neutral
        </h6>
        <h6 class="bg-stone-500">
          stone
        </h6>
        <h6 class="bg-red-500">
          red
        </h6>
        <h6 class="bg-orange-500">
          orange
        </h6>
        <h6 class="bg-amber-500">
          amber
        </h6>
        <h6 class="bg-yellow-500">
          yellow
        </h6>
        <h6 class="bg-lime-500">
          lime
        </h6>
        <h6 class="bg-green-500">
          green
        </h6>
        <h6 class="bg-emerald-500">
          emerald
        </h6>
        <h6 class="bg-teal-500">
          teal
        </h6>
        <h6 class="bg-cyan-500">
          cyan
        </h6>
        <h6 class="bg-sky-500">
          sky
        </h6>
        <h6 class="bg-blue-500">
          blue
        </h6>
        <h6 class="bg-indigo-500">
          indigo
        </h6>
        <h6 class="bg-violet-500">
          violet
        </h6>
        <h6 class="bg-purple-500">
          purple
        </h6>
        <h6 class="bg-fuchsia-500">
          fuchsia
        </h6>
        <h6 class="bg-pink-500">
          pink
        </h6>
        <h6 class="bg-rose-500">
          rose
        </h6>
      </div>
      <div class="colors w-96">
        <h5 class="bg-slate-500 w-44 h-8 pl-2 float-left">
          bg-slate-500
        </h5>
        <h5 class="bg-slate-500/50 w-44 h-8 pl-2 float-left">
          bg-slate-500/50
        </h5>
        <h6 class="bg-slate-50">
          50
        </h6>
        <h6 class="bg-slate-50">
          #f5f8fc
        </h6>
        <h6 class="bg-slate-500 text-white">
          500
        </h6>
        <h6 class="bg-slate-500 text-white font-light">
          #58697f
        </h6>
        <h6 class="bg-slate-100">
          100
        </h6>
        <h6 class="bg-slate-100">
          #eef3f8
        </h6>
        <h6 class="bg-slate-600 text-white">
          600
        </h6>
        <h6 class="bg-slate-600 text-white font-light">
          #3e4a5d
        </h6>
        <h6 class="bg-slate-200">
          200
        </h6>
        <h6 class="bg-slate-200">
          #dce2ed
        </h6>
        <h6 class="bg-slate-700 text-white">
          700
        </h6>
        <h6 class="bg-slate-700 text-white font-light">
          #2c394a
        </h6>
        <h6 class="bg-slate-300">
          300
        </h6>
        <h6 class="bg-slate-300">
          #c3cfdb
        </h6>
        <h6 class="bg-slate-800 text-white">
          800
        </h6>
        <h6 class="bg-slate-800 text-white font-light">
          #1c2533
        </h6>
        <h6 class="bg-slate-400">
          400
        </h6>
        <h6 class="bg-slate-400">
          #8798af
        </h6>
        <h6 class="bg-slate-900 text-white">
          900
        </h6>
        <h6 class="bg-slate-900 text-white font-light">
          #101624
        </h6>
      </div>
      <div class="colors w-96">
        <h5 class="bg-ecogreen-500 w-44 h-8 pl-2 float-left">
          bg-ecogreen-500
        </h5>
        <h5 class="bg-ecogreen-500/50 w-44 h-8 pl-2 float-left">
          ecogreen-500/50
        </h5>
        <h6 class="bg-ecogreen-50">
          50
        </h6>
        <h6 class="bg-ecogreen-50">
          #F9FCF5
        </h6>
        <h6 class="bg-ecogreen-500 text-white">
          500
        </h6>
        <h6 class="bg-ecogreen-500 text-white font-light">
          #8FC43D
        </h6>
        <h6 class="bg-ecogreen-100">
          100
        </h6>
        <h6 class="bg-ecogreen-100">
          #EDF7E1
        </h6>
        <h6 class="bg-ecogreen-600 text-white">
          600
        </h6>
        <h6 class="bg-ecogreen-600 text-white font-light">
          #83B438
        </h6>
        <h6 class="bg-ecogreen-200">
          200
        </h6>
        <h6 class="bg-ecogreen-200">
          #C1E39F
        </h6>
        <h6 class="bg-ecogreen-700 text-white">
          700
        </h6>
        <h6 class="bg-ecogreen-700 text-white font-light">
          #73A132
        </h6>
        <h6 class="bg-ecogreen-300">
          300
        </h6>
        <h6 class="bg-ecogreen-300">
          #93CB4C
        </h6>
        <h6 class="bg-ecogreen-800 text-white">
          800
        </h6>
        <h6 class="bg-ecogreen-800 text-white font-light">
          #436620
        </h6>
        <h6 class="bg-ecogreen-400">
          400
        </h6>
        <h6 class="bg-ecogreen-400">
          #8FC43D
        </h6>
        <h6 class="bg-ecogreen-900 text-white">
          900
        </h6>
        <h6 class="bg-ecogreen-900 text-white font-light">
          #42B0F
        </h6>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {ref, computed} from 'vue';

const palette = ref([
  {
    name: 'Medium Gray',
    colors: {
      lite: ['bg-slate-300', '#64748b'],
      dark: ['bg-slate-600', '#334155'],
    },
  },
  {
    name: 'Small Gray',
    colors: {
      lite: ['bg-slate-200', '#e2e8f0'],
      dark: ['bg-slate-500', '#475569'],
    },
  },
]);

const color = computed((color: string) => color.replace('bg-', ':'));

defineProps<{ enabled: boolean }>();
</script>

<style>

  .palette .areas {
    @apply flex flex-row flex-nowrap w-[352px] mr-4 h-max bg-slate-100/50 text-sm;
  }
  .palette .areas span {
    @apply inline-block w-28 h-full p-1 text-sm;
  }
  .palette .areas h5 {
    @apply inline-block w-40 h-full px-2 py-1 m-0 text-center text-sm;
  }

  .palette .colors {
    @apply inline-block w-full;
  }
  .palette .colors h6 {
    @apply inline-block w-[88px] h-8 px-2 py-1 m-0 text-center text-sm;
  }

</style>
