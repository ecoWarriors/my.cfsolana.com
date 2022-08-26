<!-- <template>
  <div class="frame">
    <div class="cards">
      <h2 class="uppercase text-2xl sm:text-3xl">
        TRANSACTION HISTORY
      </h2>

      <article class="databox eco relative w-full max-w-[1000px] px-0">
        <nav class="tabs w-full h-16 m-0 bg-red-400/10">
          <ul class="flex h-full m-0">
            <li>All Activity</li>
            <li>Deposits</li>
            <li>Withdrawls</li>
            <li>Transfers</li>
            <li>Rewards</li>
            <li>Staking</li>
            <li>Planting</li>
          </ul>
        </nav>
</template> -->

<template>



  <div class="frame">

    <div class="cards">
      <h2 class="uppercase text-2xl sm:text-3xl">
        TRANSACTION HISTORY
      </h2>

      <article class="databox eco relative w-full max-w-[1000px] px-0">
        <TabGroup>
          <TabList>
            <Tab v-for="({name}, index) in tabs" :key="index" v-slot="{ selected }" as="template">
              <button
                :class="[selected ? 'bg-blue-500 text-white' : 'bg-white text-black']"
              >
                {{ name }}
              </button>
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
                Content 1
            </TabPanel>
            <TabPanel>
                Content 2
            </TabPanel>
            <TabPanel>
                Content 3
            </TabPanel>
            <TabPanel>
                Content 4
            </TabPanel>
            <TabPanel>
                Content 5
            </TabPanel>
            <TabPanel>
                Content 6
            </TabPanel>
            <TabPanel>
                Content 7
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </article>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'

  interface Tab {
    name: string
  }

  enum TransactionType {
    DEPOSIT, WITHDRAWAL, TRANSFER, TRADE, PLANT, STAKE_PROJECT, STAKE_SYSTEM, REWARD, BONUS
  }
  
  enum TransactionDirection {
    INCOMING, OUTGOING
  }

  interface Transaction {
    type: TransactionType,
    direction: TransactionDirection
  }

  const tabs = ref<Tab[]>([
    {
      name: "All Activity"
    },
    {
      name: "Deposits"
    },
    {
      name: "Withdrawls"
    },
    {
      name: "Transfers"
    },
    {
      name: "Rewards"
    },
    {
      name: "Staking"
    },
    {
      name: "Planting"
    }
  ]);

</script>

<style scoped>
.tabs {
    @apply m-0 ;
}
.tabs li {
    @apply w-[14%] float-left border-r border-solid border-slate-500 text-center ;
}
</style>
