import { addToCart } from "@/store/cart-slice";
import { useAppDispatch } from "@/store/hooks";

type ProductProps = {
  id: string;
  image: string;
  title: string;
  price: number;
  description: string;
};

export default function Product({
  id,
  image,
  title,
  price,
  description,
}: ProductProps) {
  const dispatch = useAppDispatch();
  function handleAddToCart() {
    dispatch(addToCart({ id, price, title }));
  }

  return (
    <article className="product flex flex-col gap-5">
      <img src={image} alt={title} className="rounded-md" />
      <div className="product-content flex flex-col gap-5">
        <div className="flex flex-col gap-1">
          <h3 className="text-2xl font-light leading-tight">{title}</h3>
          <p className="product-price text-4xl font-extralight">${price}</p>
        </div>
        <p>{description}</p>
        <p className="product-actions">
          <button
            onClick={handleAddToCart}
            className="group  border-b-2 border-[#333333] pb-2"
          >
            <div className="flex gap-1.5 items-center transition-transform group-hover:-translate-y-1 group-active:translate-y-0.5">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 1V15M1 8H15"
                  stroke="#333333"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span className="leading-none ">Add to Cart</span>
            </div>
          </button>
        </p>
      </div>
    </article>
  );
}
