<template>
  <div
    v-show="enabled"
    class="absolute -z-10 h-full bottom-0 right-4 pt-20 pl-4 pr-1 pb-8 flex items-center justify-center p-2
                                bg-sky-200/90
                                dark:bg-sky-300/90"
  >
    <div class="fontframe">
      <h3>Font Palette</h3>
      <ul class="fontpal">
        <li class="font-bold">
          <div class="font-sans">
&nbsp;
          </div>
          <span class="font-serif">Source Serif</span>
          <span class="font-sans">Inter</span>
          <span class="font-display">Eurostile</span>
        </li>
        <li class="font-normal">
          <div class="font-sans">
&nbsp;
          </div>
          <span class="font-serif">font-serif</span>
          <span class="font-sans">font-sans</span>
          <span class="font-display">font-display</span>
        </li>

        <li class="font-extralight">
          <div class="font-sans">
            200
          </div>
          <span class="font-serif">font-extralight</span>
          <span class="font-sans">font-extralight</span>
          <span class="font-display">extralight</span>
        </li>
        <li class="font-light">
          <div class="font-sans">
            300
          </div>
          <span class="font-serif">font-light</span>
          <span class="font-sans">font-light</span>
          <span class="font-display">light</span>
        </li>
        <li class="font-normal">
          <div class="font-sans">
            400
          </div>
          <span class="font-serif">font-normal</span>
          <span class="font-sans">font-normal</span>
          <span class="font-display">normal</span>
        </li>
        <li class="font-medium">
          <div class="font-sans">
            500
          </div>
          <span class="font-serif">font-medium</span>
          <span class="font-sans">font-medium</span>
          <span class="font-display">medium</span>
        </li>
        <li class="font-semibold">
          <div class="font-sans">
            600
          </div>
          <span class="font-serif">font-semibold</span>
          <span class="font-sans">font-semibold</span>
          <span class="font-display">semibold</span>
        </li>
        <li class="font-bold">
          <div class="font-sans">
            700
          </div>
          <span class="font-serif">font-bold</span>
          <span class="font-sans">font-bold</span>
          <span class="font-display">bold</span>
        </li>
        <li class="font-extrabold">
          <div class="font-sans">
            800
          </div>
          <span class="font-serif">font-extrabold</span>
          <span class="font-sans">font-extrabold</span>
          <span class="font-display">extrabold</span>
        </li>
        <li class="font-black">
          <div class="font-sans">
            500
          </div>
          <span class="font-serif">font-black</span>
          <span class="font-sans">font-black</span>
          <span class="font-display">black</span>
        </li>
        <li class="">
          <h1>&lt;h1&gt; 2.25rem black</h1>
        </li>
        <li class="">
          <h2>&lt;h2&gt; 1.875rem extrabold</h2>
        </li>
        <li class="">
          <h3>&lt;h3&gt; 1.5rem bold</h3>
        </li>
        <li class="">
          <h4>&lt;h4&gt; 1.25rem semibold</h4>
        </li>
        <li class="">
          <h5>&lt;h5&gt; 1.125rem medium</h5>
        </li>
        <li class="">
          <h6>&lt;h6&gt; 1.5rem normal</h6>
        </li>
      </ul>
    </div>
  </div>
</template>


<style>
.fontframe {
    @apply flex flex-col w-full h-full;
  }
.fontpal li {
    @apply flex flex-row w-full h-fit border-t border-slate-500;
  }

.fontpal div {
    @apply inline-block w-12 p-1 text-base
  }
.fontpal span {
    @apply inline-block w-36 h-full p-1 text-base
  }

</style>

<script lang="ts" setup>
defineProps<{ enabled: boolean }>();
</script>
