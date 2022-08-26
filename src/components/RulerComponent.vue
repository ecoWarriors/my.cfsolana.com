<template>
  <div
    v-show="enabled"
    class="fixed w-full top-8 left-0 h-[60px] z-15 bg-[url('https://www.eco-token.io/sb4images/bkgd/ruler.png')]"
  />
</template>

<script lang="ts" setup>
defineProps<{ enabled: boolean }>();
</script>
