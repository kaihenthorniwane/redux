import { type ReactNode } from "react";

type ShopProps = {
  children: ReactNode;
};

export default function Shop({ children }: ShopProps) {
  return (
    <section id="shop" className="flex flex-col gap-10">
      <h2>Elegant Clothing For Everyone</h2>

      <ul id="products" className="grid grid-cols-3 gap-12">
        {children}
      </ul>
    </section>
  );
}
