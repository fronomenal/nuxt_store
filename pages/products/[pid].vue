<script setup>

const {pid} = useRoute().params

const { data: product } = await useFetch(`https://fakestoreapi.com/products/${pid}`, {key: pid });

if(!product.value){
  throw createError({ statusCode: 404, statusMessage: "Product not found", fatal: true})
}

</script>

<template>
  <NuxtLayout name="products">
    <ProductDetails :product="product" />
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