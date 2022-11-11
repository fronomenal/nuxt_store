<script setup>

const {product} = defineProps({
  product: Object
});

</script>

<template>
  <div class="card text-center">
    <img :src="product.image" alt="product thumbnail" class="thumb">
    <p class="font-bold text-gray-500 m-4 truncate">{{product.title}}</p>
    <NuxtLink :to="`/products/${product.id}`">
        <p class="btn my-4">Details</p>
    </NuxtLink>
  </div>
</template>

<style scoped>
  .thumb{
    height: 120px;
    max-width: 70%;
    margin: 0 auto;
  }
</style>