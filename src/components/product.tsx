import { useContext } from "react";
import { Button } from "./ui/button";
import { CartContext } from "@providers/CartProvider";

export interface ProductProps {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  imageUrl: string;
}

export function Product({
  id,
  name,
  price,
  category,
  description,
  imageUrl,
}: ProductProps) {
  const { addToCart, updateCartItem, getProductById } = useContext(CartContext);

  const addOrUpdate = () => {
    const existingPizza = getProductById(id);

    if (existingPizza)
      updateCartItem(id, { quantity: existingPizza.quantity + 1 });
    else
      addToCart({
        id,
        name,
        price,
        category,
        description,
        imageUrl,
        quantity: 1,
      });
  };

  return (
    <div className="p-5 bg-gray-100 rounded-md flex items-center justify-between">
      <div className="flex gap-x-6 pr-5">
        <img
          src={imageUrl}
          width={100}
          height={100}
          className="w-full max-w-32 object-scale-down"
        />
        <div className="info flex flex-col gap-y-2">
          <div className="text-xl">{name}</div>
          <span className="text-green-600 capitalize">{category}</span>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-y-4">
        <span className="font-bold text-lg">₱{price.toLocaleString()}</span>
        <Button variant={"success"} onClick={addOrUpdate}>
          Add to cart
        </Button>
      </div>
    </div>
  );
}
