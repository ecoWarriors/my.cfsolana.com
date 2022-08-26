<template>
  <div
v-show="enabled"
    class="absolute -z-10 h-full bottom-0 right-4 pt-20 pl-4 pr-1 pb-8 flex items-center justify-center p-2 bg-sky-200/90 dark:bg-sky-300/90">
    <div class="palette">
      <h3>Tailwind Code</h3>
      <ul>
        <li>
          <h4>DISPLAY</h4>
          <h4>hidden</h4>
          <h4>block</h4>
          <h4>flex</h4>
        </li>
        <li>
          <br />
          <h4>table-row</h4>
          <h4>inline-block</h4>
          <h4>grid</h4>
        </li>
        <li>
          <h4>FLEX</h4>
          <h4>flex-wrap</h4>
          <h4>flex-nowrap</h4>
          <h4>flex-col</h4>
        </li>
        <li>
          <br />
          <h4>flex-grow</h4>
          <h4>grow-0</h4>
          <h4>basis-1/4</h4>
        </li>
        <li class="flex-row flex-wrap">
          <h6>m-auto</h6>
          <h6>m-0</h6>
          <h6>mx-2</h6>
          <h6>my-2</h6>
          <h6>mt-2</h6>
          <h6>mr-2</h6>
          <h6>mb-2</h6>
          <h6>ml-2</h6>
        </li>
        <li class="flex-row flex-wrap h-28">
          <h6>w-1/2<br>w-[9px]<br>w-min<br>w-max<br>w-fit</h6>
          <h6>w-px<br>w-0<br>w-0.5<br>w-1<br>w-1.5</h6>
          <h6>w-2<br>w-2.5<br>w-3<br>w-3.5<br>w-4</h6>
          <h6>w-5<br>w-6<br>w-7<br>w-8<br>w-9</h6>
          <h6>w-10<br>w-11<br>w-12<br>w-14<br>w-16</h6>
          <h6>w-20<br>w-24<br>w-28<br>w-32<br>w-36</h6>
          <h6>w-40<br>w-44<br>w-48<br>w-52<br>w-56</h6>
          <h6>w-60<br>w-64<br>w-72<br>w-80<br>w-96</h6>
        </li>
        <li>
          <h4>TEXT</h4>
          <h4 class="italic">
            italic
          </h4>
          <h5>
            text-xs &nbsp; &nbsp; sm &nbsp; &nbsp; base &nbsp; &nbsp; lg &nbsp;
            &nbsp; xl &nbsp; &nbsp; 2xl
          </h5>
        </li>
        <li>
          <h4><b class="font-thin">font-thin</b></h4>
          <blockquote>
            <b class="font-extralight">extralight</b>
            <b class="font-light">light</b>
            <b class="font-normal">normal</b>
            <b class="font-medium">medium</b>
            <b class="font-semibold">semibold</b>
            <b class="font-bold">bold</b>
            <b class="font-extrabold">extrabold</b>
            <b class="font-black">black</b>
          </blockquote>
        </li>
        <li>
          <h4 class="text-blue-800">
            text-blue-800
          </h4>
          <h4>text-center</h4>
          <h4>text-ellipsis</h4>
          <h4>list-inside</h4>
        </li>
        <li class="">
          <h4 class="indent-2">
            indent-2
          </h4>
          <h4 class="underline">
            underline
          </h4>
          <h4 class="capitalize">
            capitalize
          </h4>
          <h4 class="whitespace-nowrap">
            whitespace-nowrap
          </h4>
        </li>
        <li class="">
          <h4 class="underline underline-offset-4">
            ul-offset-4
          </h4>
          <h4 class="">
            no-underline
          </h4>
          <h4 class="uppercase">
            uppercase
          </h4>
          <h4 class="break-words">
            break-words
          </h4>
        </li>
        <li class="">
          <h4 class="">
            border-2
          </h4>
          <blockquote>
            <strong class="border-2 rounded-sm w-28 text-center px-0 mr-1 float-left">rounded-sm</strong>
            <strong class="border-2 rounded-md w-12 text-center px-2 mr-1 float-left">md</strong>
            <strong class="border-2 rounded-lg w-12 text-center px-2 mr-1 float-left">lg</strong>
            <strong class="border-2 rounded-xl w-12 text-center px-2 mr-1 float-left">xl</strong>
            <strong class="border-2 rounded-2xl w-12 text-center px-2 mr-1 float-left">2xl</strong>
            <strong class="border-2 rounded-3xl w-12 text-center px-2 float-left">3xl</strong>
          </blockquote>
        </li>
        <li class="">
          <h4 class="">
            border-teal-700
          </h4>
          <blockquote>
            <strong
              class="border-2 rounded-md border-teal-700 border-solid w-28 text-center px-2 mr-1 float-left">border-solid</strong>
            <strong
              class="border-2 rounded-md border-teal-700 border-dashed w-20 text-center px-2 mr-1 float-left">dashed</strong>
            <strong
              class="border-2 rounded-md border-teal-700 border-dotted w-20 text-center px-2 mr-1 float-left">dotted</strong>
            <strong
              class="border-2 rounded-md border-teal-700 border-double w-20 text-center px-2 mr-1 float-left">double</strong>
          </blockquote>
        </li>
        <li />
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{ enabled: boolean }>();
</script>

<style>
.palette {
  @apply flex flex-col w-full h-full;
}

.palette span {
  @apply inline-block w-32 h-8 px-0 py-1;
}

.palette h3 {
  @apply mx-0 mt-0 mb-0.5 text-sky-900 dark:text-lime-600;
}

.palette li {
  @apply flex flex-row w-full min-h-min border-t border-slate-500;
}

.palette li h4 {
  @apply inline-block w-32 min-h-min pr-2 py-1 m-0 text-sm text-left;
}

.palette li h5 {
  @apply inline-block w-64 h-8 py-1 m-0 text-sm text-left;
}

.palette li h6 {
  @apply inline-block w-16 h-8 py-1 m-0 text-sm text-left;
}

.palette li blockquote {
  @apply font-normal w-96 py-1 px-0 m-0 text-sm text-left;
}

.palette li blockquote b {
  @apply w-20 float-left mr-3 text-left;
}
</style>
