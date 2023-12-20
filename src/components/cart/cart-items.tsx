import { useContext } from "react";
import { CartContext, CartItemProps } from "@providers/CartProvider";
import { MinusIcon, PlusIcon, ShoppingBagIcon, XIcon } from "lucide-react";

export function CartItems({ cartItems }: { cartItems: CartItemProps[] }) {
  const { updateCartItem, removeCartItemById } = useContext(CartContext);

  const decreaseQuantity = (item: CartItemProps) => {
    if (item.quantity === 1) {
      if (confirm("Remove this item from cart?"))
        updateCartItem(item.id, {
          quantity: item.quantity - 1,
        });

      return;
    }

    updateCartItem(item.id, {
      quantity: item.quantity - 1,
    });
  };

  const increaseQuantity = (item: CartItemProps) => {
    updateCartItem(item.id, {
      quantity: item.quantity + 1,
    });
  };

  return (
    <div
      className={`cart-items overflow-y-auto mt-5 bg-gray-200 w-full h-[70%] text-black space-y-4 p-8 ${
        cartItems.length < 1 ? "flex items-center justify-center" : ""
      }`}
    >
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <div className="flex items-end justify-between">
            <div className="flex relative items-center gap-4">
              <div
                onClick={() => removeCartItemById(item.id)}
                className="cursor-pointer w-6 h-6 top-0 left-0 translate-x-[-50%] translate-y-[-25%] absolute rounded-full bg-red-600 flex items-center justify-center"
              >
                <XIcon className="text-white" size={16} />
              </div>
              <img
                src={item.imageUrl}
                width={70}
                height={70}
                alt={item.description}
                className="w-20 h-20 object-cover"
              />

              <div className="info flex flex-col justify-between">
                <span className="text-lg max-w-40">{item.name}</span>
                <span className="text-red-600 font-bold">
                  ₱{item.price.toLocaleString()}
                </span>
              </div>
            </div>
            <div className="quantity-control flex w-full max-w-24 items-center justify-between rounded-full border border-black px-2 py-1 dark:border-white">
              <MinusIcon
                onClick={() => decreaseQuantity(item)}
                className="w-5 cursor-pointer text-gray-600 hover:text-gray-400 dark:text-gray-400 hover:dark:text-gray-200"
              />
              <span>{item.quantity}</span>
              <PlusIcon
                onClick={() => increaseQuantity(item)}
                className="w-5 cursor-pointer text-gray-600 hover:text-gray-400 dark:text-gray-400 hover:dark:text-gray-200"
              />
            </div>
          </div>
        ))
      ) : (
        <h2 className="flex gap-2">
          Add something in here <ShoppingBagIcon />
        </h2>
      )}
    </div>
  );
}
