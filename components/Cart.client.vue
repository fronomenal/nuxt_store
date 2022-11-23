<script setup>
import { useCartStore } from '~~/stores/cartItems';

const items = useCartStore()

const cartItems = computed(() => items.getItems)

</script>



<template>
  <div>
    <h1 class="">Item Cart</h1>
    <div v-for="item in cartItems" :key="item.id" class="m-2 p-1 border-1 shadow-md background-gray-100">
      <h3>{{ item.name }}</h3>
      <p>{{ item.price }}</p>
      <br>
      <input type="number" :value="item.quantity">
      <button @click="items.delItem(item.id)"><i class="material-icons mr-2 text-red-600">delete</i></button>
    </div>
  </div>
</template>

<style scoped></style>
