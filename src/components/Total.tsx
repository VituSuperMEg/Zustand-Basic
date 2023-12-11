import { useCartStore } from "../store/CartStore";

export function Total () {
  const items = useCartStore(state => state.cart);
  
  const sum = items.reduce((acc, item) => acc + item.price,0 );
  return (
    <div>
      <h1>Total : {sum} </h1>
    </div>
  )
}  