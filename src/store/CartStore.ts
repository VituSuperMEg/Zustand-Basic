import { create } from "zustand";

const initialItems = [
  {
    id : "p1",
    name : "Pizza 1",
    price : 100,
  },
  {
    id : "p2",
    name : "Pizza 2",
    price : 200,
  },
  {
    id : "p3",
    name : "Pizza 3",
    price : 300,
  },
  {
    id : "p4",
    name : "Pizza 4",
    price : 400,
  }
]
type Item = {
  id : string;
  name : string;
  price : number;
}
type CartStore = {
   availableItems : Item[];
   cart : Item[];
   addToCart : (item : Item) => void;
   removeFromCart : (id : string) => void;
}
export const useCartStore = create<CartStore>((set) => {
  return {
    cart: [],
    availableItems : initialItems,
    addToCart : (item) => set((state) => ({ cart : [...state.cart, item]})),
    removeFromCart : (id) => set((state) => ({ cart : state.cart.filter((item) => item.id!== id)}))
  }
})