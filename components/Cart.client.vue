<script setup>
import { routerKey } from 'vue-router';
import { useCartStore } from '~~/stores/cartItems';

const items = useCartStore()

const trig = defineProps(["trig"])

watch(trig, ()=> handleConfirmation());

const cartItems = computed(() => items.getItems)

const errmsg = ref("")

const handleConfirmation = async ()=> {

  const body = cartItems.value.filter(el => el.id in [1,2,3])
  .map( el => ({id: (el.id==1)? "price_1M9irXBztUjxFFBKCtCQ2HSc" : (el.id == 2)? "price_1M9isPBztUjxFFBK0Is5ZIov" : (el.id == 3)? "price_1M9ispBztUjxFFBKui25pWFk" : "", quantity: el.quantity}));

  if(!body.length) return errmsg.value = "Only the first 3 products in the store have stripe functionality. Please add one of those to cart";

  errmsg.value = "";

  const {data} = await useFetch("/api/payment", {
    method: "post", 
    body: body
  })

  if (data.url) return navigateTo(`/${data.url}`)

}

</script>



<template>
    <div>
      <p v-if="errmsg" class="text-red-600">{{errmsg}}</p>
      <div class="flex justify-center flex-wrap h-3/4 wrapper overflow-y-auto">
        <div v-if="cartItems.length" v-for="item in cartItems" :key="item.id" class="block p-6 m-3 rounded-lg shadow-lg bg-white max-w-sm max-h-96 relative">
          <h3 class="text-gray-900 text-xl leading-tight font-medium">{{ item.name }}</h3>
          <p class="text-gray-700 text-base">{{ item.price }}$</p>
          <br>
          <input class="bg-gray-100 w-10" type="number" max="99" :value="item.quantity" @input="event => items.setQuantity(item.id, event.target.value)">
          <button class="absolute bottom-1 right-1" @click="items.delItem(item.id)"><i class="material-icons mr-2 text-red-600">delete</i></button>
        </div>
        <div v-else class="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
          <p class="text-gray-700 text-base mb-4">Your cart is currently empty. Please browse our store and add an item</p>
        </div>
      </div>
    </div>
</template>

<style scoped>
  .wrapper{
    max-height: 80%;
  }
</style>
