<template>
  <div>
    <RulerComponent :enabled="ruler" />
    <CodePalette :enabled="twcode" />
    <ColorPalette :enabled="palette" />
    <FontPalette :enabled="fontpal" />
    <div
      id="cfoot"
      class="relative w-full h-8"
    >
      <div
        class="absolute flex w-full h-full bg-slate-50 border-t pt-1.5 pr-8 pl-1 pb-1 space-x-2
                    dark:bg-slate-600 dark:border-t-slate-700"
      >
        <div class="relative flex flex-row  justify-between  w-fit h-full float-right z-5 space-x-3 ml-8">
          <font-awesome-icon
            icon="user"
          />
          <font-awesome-icon
            icon="ruler"
            @click="ruler = !ruler"
            class="text-slate-600 cursor-pointer dark:text-slate-200"
          />
          <font-awesome-icon
            icon="font"
            @click="fontpal = !fontpal, palette=false, twcode=false"
            class="text-slate-600 cursor-pointer dark:text-slate-200"
          />
          <font-awesome-icon
            icon="code"
            @click="twcode = !twcode, palette=false, fontpal=false"
            class="text-slate-600 cursor-pointer dark:text-slate-200"
          />
          <font-awesome-icon
            icon="palette"
            @click="palette = !palette, twcode=false, fontpal=false"
            class="text-slate-600 cursor-pointer dark:text-slate-200"
          />
          <div>loggedIn: {{ loggedIn }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import RulerComponent from './RulerComponent.vue';
import ColorPalette from './ColorPalette.vue';
import CodePalette from './CodePalette.vue';
import FontPalette from './FontPalette.vue';
import {ref, computed} from 'vue';
const ruler = ref(false);
const twcode = ref(false);
const palette = ref(false);
const fontpal = ref(false);

const loggedIn = computed(() => {
  return localStorage.loggedIn;
});
</script>
