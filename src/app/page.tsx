"use client";

import Header from "@/components/Header";
import Product from "@/components/Product";
import Shop from "@/components/Shop";
import { DUMMY_PRODUCTS } from "@/data/dummy-products";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
      <Shop>
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product} />
          </li>
        ))}
      </Shop>
    </main>
  );
}
