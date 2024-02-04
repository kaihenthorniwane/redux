"use client";

import { Provider } from "react-redux";
import Header from "@/components/Header";
import Product from "@/components/Product";
import Shop from "@/components/Shop";
import { DUMMY_PRODUCTS } from "@/data/dummy-products";
import { store } from "@/store/store";

export default function Home() {
  return (
    <Provider store={store}>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Header />
        <div id="modal"></div>
        <Shop>
          {DUMMY_PRODUCTS.map((product) => (
            <li key={product.id}>
              <Product {...product} />
            </li>
          ))}
        </Shop>
      </main>
    </Provider>
  );
}
