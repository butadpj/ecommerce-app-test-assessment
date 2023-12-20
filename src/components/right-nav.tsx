import { useContext, useState } from "react";
import { Button } from "./ui/button";
import { CartContext } from "@providers/CartProvider";
import { CartItems } from "./cart/cart-items";
import { CartSummary } from "./cart/cart-summary";
import { Dialog } from "./ui/dialog";
import { DialogContent } from "@components/ui/dialog";
import { SmileIcon } from "lucide-react";

export function RightNav() {
  const { cart, removeAllCartItems } = useContext(CartContext);

  const [showModal, setShowModal] = useState(false);

  const handleCheckout = () => {
    setShowModal(true);
    removeAllCartItems();
  };

  return (
    <>
      <Dialog open={showModal} onOpenChange={(open) => setShowModal(open)}>
        <DialogContent>
          <h2 className="text-xl font-bold text-green-700 flex items-center justify-center gap-2">
            Thank you for purchasing! <SmileIcon />
          </h2>
        </DialogContent>
      </Dialog>

      <div className="fixed right-0 h-[calc(100vh-68px)] bg-gray-500 text-white py-5 w-full max-w-sm">
        <header className="flex items-center justify-between px-5">
          <h2 className="text-xl">My Cart</h2>
          <Button variant={"destructive"} onClick={removeAllCartItems}>
            Clear cart
          </Button>
        </header>

        {cart.status !== "LOADING" ? (
          <CartItems cartItems={cart.cartItems} />
        ) : (
          <h2>Loading..</h2>
        )}

        <CartSummary onCheckout={handleCheckout} />
      </div>
    </>
  );
}
