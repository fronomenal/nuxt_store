export type CartItem = {
  id: number
  name: string
  price: number
  quantity: number
  checked: boolean 
}

export const useCartStore = defineStore("cart-local-store", {
  state: ()=> ({cartItems: useLocalStorage<CartItem[]>("local-cart", [])}),
  getters:{
    getItems(): CartItem[]{
      return this.cartItems
    },
    getCount(): number{
      return this.cartItems.length;
    },
    sumCost(): number{
      return this.cartItems.reduce( (i: CartItem, j: CartItem) => i.price * i.quantity + j.price * j.quantity , 0)
    }
  },
  actions:{
    _get(id: number){
      return this.cartItems.find( (item: CartItem) => item.id == id );
    },
    getItemCount(id: number) : number{
      const count = this._get(id)?.quantity;

      if(count) {return count}

      return 0;
    },
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
    setQuantity(id: number, quant: number){// increase existing item quantity
      const itemRef = this._get(id);

      if(itemRef) itemRef.quantity = quant;

    },
    delItem(id: number){
      this.cartItems = this.cartItems.filter( (item: CartItem) => item.id != id);
    }
  }
});