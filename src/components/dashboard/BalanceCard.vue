<template>
  <div class="card34">
    <h3 class="w-full font-euroext">PORTFOLIO VALUE</h3>

    <div class="inline-block w-[54%] bg-sky-300">
      <div class="w-12">
        <img
          src="https://www.eco-token.io/images/blocks/logo_ecotoken-08.svg"
          alt="ecoToken System"
          class="w-9 mr-4 float-left" />
      </div>

      eco
    </div>
    <div class="inline-block w-[45%] bg-lime-300">
      <div class="w-fit bg-orange-300 float-right">
      other
      </div>
    </div>

    



<!-- 
    <div class="flex flex-col">
      <span class="text-4xl dark:text-gray-400 font-semibold">
        <span class="text-green-500">{{userStore.user.ecoTokenBalance}}</span>
        eco
      </span>
      <span class="dark:text-gray-300 font-semibold">
        <span class="text-green-400">1,100.54</span> 
        <span class="text-xs"> CAD</span>
      </span>
    </div> -->

  </div>
</template>

<script lang="ts" setup>
// import BaseCard from '../BaseCard.vue';
import {useUserStore} from '../../stores/user';

const userStore = useUserStore();
</script>
