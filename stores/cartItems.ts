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
    _get(id){
      return this.cartItems.find( (item) => item.id == id );
    },
    getItems(){
      return this.cartItems
    },
    getCount(){
      return this.cartItems.length;
    },
    getItemCount(id){
      const count = this._get(id)?.quantity;

      if(count) return count.quantity;

      return 0;
    }
  },
  actions:{
    setItem(item: CartItem){
      const itemRef = this._get(item.id);

      if (itemRef){
        itemRef.quantity++;
        return;
      }

      this.cartItems.push(item)
    },
    triggerItem(id: number){
      const itemRef = this._get(id);

      if(itemRef) !itemRef.checked

    },
    addItem(id: number){// increase existing item quantity
      const itemRef = this._get(id);

      if(itemRef) itemRef.quantity++;

    },
    subItem(id: number){// decrease existing item quantity
      const itemRef = this._get(id);

      if(itemRef) itemRef.quantity--;

    },
  }
});