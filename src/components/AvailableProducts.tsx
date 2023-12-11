import { useCartStore } from "../store/CartStore";

export function AvailableProducts () {
  const [items, addToCart ] = useCartStore(state => [state.availableItems, state.addToCart]);

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {items.map(item => (
          <>
          <li key={item.id}>
            {item.name} - ${item.price}
          </li>
          <button onClick={() => {
            addToCart(item);
          }}>
            Add
          </button>
          </>
        ))}
      </ul>
    </div>
  )
}  