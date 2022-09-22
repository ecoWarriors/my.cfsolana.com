<template>
  <div class="frame">
    <div class="cards">
      <!--  flex flex-wrap space-x-4 w-full h-full px-5 pt-2 pb-5  -->
      <h2 class="display">
        DASHBOARD
      </h2>
      <BalanceCard />
      <BuySellCard />
      <ProjectsCard />
      <ProjectsCard />
      <NFTCard />
    </div>
  </div>
</template>

<script lang="ts" setup>
import {useAuthStore} from '@/stores/auth';
import BalanceCard from '@/components/dashboard/BalanceCard.vue';
import NFTCard from '@/components/dashboard/NFTCard.vue';
import ProjectsCard from '@/components/dashboard/ProjectsCard.vue';
import BuySellCard from '@/components/dashboard/BuySellCard.vue';

const authStore = useAuthStore();
</script>
