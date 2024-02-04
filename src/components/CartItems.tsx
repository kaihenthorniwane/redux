import { addToCart, CartItem, removeFromCart } from "@/store/cart-slice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";

export default function CartItems() {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => {
    const items = state.cart.items;
    return items;
  });

  function handleAddToCart(item: CartItem) {
    dispatch(addToCart(item));
  }

  function handleRemoveFromCart(itemID: string) {
    dispatch(removeFromCart({ id: itemID }));
  }

  function calculateTotalPrice(): number {
    let totalCost = 0;
    cartItems.forEach((item) => {
      totalCost += item.price * item.quantity;
    });
    return totalCost;
  }

  const formattedTotalPrice: number = calculateTotalPrice();

  return (
    <div id="cart" className="flex flex-col gap-6">
      <p>No items in cart!</p>

      <ul id="cart-items">
        {cartItems.map((item) => {
          const formattedPrice = `$${item.price.toFixed(2)}`;

          return (
            <li key={item.id} className="flex justify-between">
              <div className="flex flex-col leading-none">
                <span className="text-2xl">{item.title}</span>
                <span> ({formattedPrice})</span>
              </div>
              <div className="cart-item-actions flex gap-2 items-center">
                <button onClick={() => handleRemoveFromCart(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleAddToCart(item)}>+</button>
              </div>
            </li>
          );
        })}
      </ul>

      <p id="cart-total-price">
        Cart Total: <strong>{formattedTotalPrice}</strong>
      </p>
    </div>
  );
}
