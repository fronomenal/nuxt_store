<script lang="ts" setup></script>

<template>
  <div class="mt-7 mx-auto text-center card">
    <p class="mt-7 text-5xl font-bold">Thank you for the purchase</p>
    <p class="mt-7 text-2xl"> Check out our other items here</p>
    <NuxtLink class="text-xl text-[#12b488] hover:text-cyan-300" :to="'/products'"> <p class="my-4">Products</p> </NuxtLink>
  </div>
</template>

<style scoped></style>
