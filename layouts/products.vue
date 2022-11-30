<script lang="ts" setup>
import { useCartStore } from '~~/stores/cartItems';

const cartModal = ref(false)

const trigger = ref(false)

const isDisabled = ref(false)

let items = null;
let cost: any = 0;

if (process.client) {
  items = useCartStore()
  cost = computed( ()=> (items.sumCost).toFixed(2) )
}

function handleConfirmation(){
  isDisabled.value = true;
  setTimeout(()=> isDisabled.value = false, 3000);
  trigger.value = !trigger.value;
}


</script>

<template>
  <div>
    <header class="shadow-sm bg-white">
      <nav class="relative container mx-auto p-4">
        <NuxtLink to="/products">Nuxt Merch: Products</NuxtLink>
        <button class="absolute hover:text-red-600 bg-cyan-400 h-10 right-4 top-2 w-20 rounded-md" @click="cartModal = true">
          <i class="material-icons mr-2">add_shopping_cart</i>
          <ClientOnly><span class="font-bold">{{items.getCount}}</span></ClientOnly>
        </button>
      </nav>
    </header>
    <main class="container mx-auto p-4">
      <slot />
    </main>
    <footer class="container mx-auto p-4 flex justify-between border-t-2">
      <ul class="flex gap-4">
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/products">Products</NuxtLink></li>
      </ul>
    </footer>
    <div v-show="cartModal" class="fixed hover:opacity-100 opacity-75 flex justify-center bg-slate-300 w-5/6 wrapper top-20 left-24 rounded border-4 border-slate-400">
      <div class="mx-auto text-center">
        <h1 class="text-3xl m-3">Your Cart - Total Cost </h1>
        <p class="text-xl leading-3 font-bold"><ClientOnly>{{cost}}$</ClientOnly></p>
        <div class="mt-6 mb-3">
          <button class="btn mx-1" @click="handleConfirmation" :disabled="isDisabled">Confirm Order</button>
          <button class="btn bg-red-600 mx-1" @click="cartModal = false">Close</button>
        </div>
        <Cart :trig="trigger" />
      </div>
    </div>
  </div>
</template>

<style scoped>
  .wrapper{
    height: 80%;
  }
</style>