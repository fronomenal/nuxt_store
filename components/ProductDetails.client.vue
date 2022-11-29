<script lang="ts" setup>
import { useCartStore, CartItem } from '~~/stores/cartItems';

const items = useCartStore()

const {product} = defineProps({
  product: Object
});

const itemCount = computed(() => items.getItemCount(product.id))

function addToCart(){

  const item: CartItem = {
    id: product.id,
    name: product.title,
    price: product.price,
    quantity: 1,
    checked: true
  }

  items.setItem(item)
}

function handleInput (event) {

  items.setQuantity(product.id, event.target.value)
}

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
        <button class="btn flex w-full cursor-default">
          <div @click="addToCart" class="cursor-pointer">
            <i class="material-icons mr-2 my-auto">add_shopping_cart</i>
            <div class="my-auto">Add to cart</div>
          </div>
          <input class="ml-auto my-auto text-black" v-if="itemCount > 0" type="number" max="99" :value="itemCount" @input="handleInput">
        </button>
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