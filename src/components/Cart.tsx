import { createPortal } from "react-dom";

import CartItems from "./CartItems";

type CartProps = {
  onClose: () => void;
};

export default function Cart({ onClose }: CartProps) {
  return createPortal(
    <>
      <div className="cart-backdrop bg-black fixed top-0 left-0 right-0 bottom-0 z-20 opacity-50" />
      <dialog
        id="cart-modal"
        className="fixed z-30 p-5 flex flex-col rounded-lg w-full max-w-md gap-4 "
        open
      >
        <h2>Your Cart</h2>
        <CartItems />
        <p id="cart-actions">
          <button onClick={onClose}>Close</button>
        </p>
      </dialog>
    </>,
    document.getElementById("modal")!
  );
}
