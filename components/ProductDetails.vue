<script setup>

const {product} = defineProps({
  product: Object
});

</script>

<template>
  <div class="card cus-style">
    <div class="grid grid-cols-1 gap-10 sm:grid-cols-2">
      <div class="p-7">
        <img :src="product.image" alt="product image" class="mx-auto my-7">
      </div>
      <div class="p-7">
        <h2 lang="text-4xl my-7">{{product.title}}</h2>
        <p class="text-xl my-7">Price - ${{product.price}}</p>
        <h3 class="font-bold border-b-2 mb-4 pb-2">Description:</h3>
        <p class="mb-7">{{product.description}}</p>
        <butoon class="btn flex">
          <i class="material-icons mr-2">add_shopping_cart</i>
          <span>Add to cart</span>
        </butoon>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .cus-style {
    max-width: 960px;

    margin-inline: auto;
  }

</style>