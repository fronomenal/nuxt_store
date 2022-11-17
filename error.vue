<script setup>
const {error} = defineProps({
  error: Object
});

</script>

<template>
  <div class="mt-7 max-w-sm mx-auto text-center card">
    <p class="mt-7 text-7xl font-bold">{{error.statusCode}}</p>
    <p class="mt-7 text-4xl"> Oooops Sorry</p>
    <p class="mt-7 text-xl">{{error.message}}</p>
    <button class="btn my-7" @click="clearError({redirect: '/'})">Go Home...</button>
  </div>

</template>

<style scoped>

</style>