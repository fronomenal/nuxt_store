<script setup>

useHead({
  title: "Nuxt Merch | Products",
  meta: {name: "description", description: "Products page"}
});

const { data: products } = await useFetch("https://fakestoreapi.com/products");

</script>

<template>
  <NuxtLayout name="products">
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-5">
      <div v-for="p in products" v-bind:key="p.id">
        <ProductCard :product="p" />
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