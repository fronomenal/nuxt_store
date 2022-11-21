<script lang="ts" setup>
import { useCartStore } from '~~/stores/cartItems';

const cartModal = ref(false)
const items = useCartStore()


</script>

<template>
  <div>
    <header class="shadow-sm bg-white">
      <nav class="relative container mx-auto p-4">
        <NuxtLink to="/products">Nuxt Merch: Products</NuxtLink>
        <button class="absolute hover:text-red-600 bg-cyan-400 h-10 right-4 top-2 w-20 rounded-md" @click="cartModal = true">
          <i class="material-icons mr-2">add_shopping_cart</i>
          <span class="font-bold">{{ items.getCount}}</span>
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
    <div v-show="cartModal" class="fixed hover:opacity-100 opacity-75 bg-slate-300 w-5/6 h-2/3 top-20 left-24 rounded border-4 border-slate-400">
      <div class="mx-auto w-2/3 text-center mt-32">
        <Cart/>
        <div>
          <button class="btn">Confirm Order</button>
          <button class="btn" @click="cartModal = false">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>