import { useState } from "react";

import Cart from "./Cart";

export default function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  function handleOpenCartClick() {
    setCartIsVisible(true);
  }

  function handleCloseCartClick() {
    setCartIsVisible(false);
  }

  return (
    <>
      {cartIsVisible && <Cart onClose={handleCloseCartClick} />}
      <header
        id="main-header"
        className="fixed z-10 w-full top-0 left-0 right-0 flex justify-between p-5 bg-gradient-to-b from-white"
      >
        <div id="main-title">
          <h1>Elegant Redux</h1>
        </div>
        <p>
          <button onClick={handleOpenCartClick}>Cart (0)</button>
        </p>
      </header>
    </>
  );
}
