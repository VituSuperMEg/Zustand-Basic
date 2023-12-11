import { useCartStore } from "../store/CartStore";

export function Cart () {
  const [items, removeFromCart ] = useCartStore(state => [state.cart, state.removeFromCart]);

  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {items.map(item => (
          <>
          <li key={item.id}>
            {item.name} - ${item.price}
          </li>
          <button onClick={() => {
            removeFromCart(item.id);
          }}>
            Add
          </button>
          </>
        ))}
      </ul>
    </div>
  )
}  