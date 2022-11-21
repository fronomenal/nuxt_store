import {defineStore} from "pinia"

export type CartItem = {
  id: Number
  name: String
  price: Number
  quantity: Number
  checked: Boolean 
}

export const useCartStore = defineStore("cart-local-store", {
  state: ()=> ({cartItems: useLocalStorage<CartItem[]>("local-cart", [])}),
  getters:{
    getItems(){
      return this.cartItems
    },
    getCount(){
      return this.cartItems.length;
    }
  },
  actions:{
    setItem(item: CartItem){
      this.cartItems.push(item)
    }
  }
});