<script setup>
definePageMeta({
  layout: "products",
});

const {pid} = useRoute().params

const { data: product } = await useFetch(`https://fakestoreapi.com/products/${pid}`, {key: pid });

</script>

<template>
  <div>
     <p>{{product.title}}</p>
     <p>{{product.price}}</p>
     <p>{{product.id}}</p>
  </div>
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