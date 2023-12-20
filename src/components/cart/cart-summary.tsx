import { Button } from "@components/ui/button";
import { CartContext } from "@providers/CartProvider";
import { useContext } from "react";

export function CartSummary({ onCheckout = () => {} }) {
  const { cart } = useContext(CartContext);

  return (
    <div className="p-5 text-lg">
      <div className="flex items-center justify-between">
        Total items: <span>{cart.totalItems}</span>
      </div>
      <div className="flex items-center justify-between">
        Total amount: <span>₱{cart.totalAmount.toLocaleString()}</span>
      </div>

      <Button
        variant={"success"}
        disabled={!cart.cartItems.length}
        className="w-full mt-5"
        onClick={onCheckout}
      >
        Checkout
      </Button>
    </div>
  );
}
