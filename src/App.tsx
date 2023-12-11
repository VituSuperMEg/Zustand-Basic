import { AvailableProducts } from "./components/AvailableProducts";
import { Cart } from "./components/CartProducts";
import { Total } from "./components/Total";

export default function App() {
  return (
    <>
     <Total />
     <AvailableProducts />
     <Cart />
    </>
  )
}