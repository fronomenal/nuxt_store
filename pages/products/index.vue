<script setup>

const { data: products } = await useFetch("https://fakestoreapi.com/products");

</script>

<template>
  <NuxtLayout name="products">
    <div class="grid-cols-4 gap-5">
      <div v-for="p in products" v-bind:key="p.id" class="m-3">
        <NuxtLink :to="`/products/${p.id}`">{{p.title}}</NuxtLink>
      </div>
    </div>
  </NuxtLayout>
</template>

<style scoped>
  h2{
    margin-bottom: 20px;
    font-size: 36px;

  }

  p {
    margin: 20px 0;
  }

</style>