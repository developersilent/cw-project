"use client";
import { Button } from "@/components/ui/button";
import CartCard from "../cart-card/CartCard";
import { useAppDispatch, useAppSelector } from "@/helper/hook/redux-store-hook";
import { ClearAllItems } from "@/helper/redux-store/slices-functions/StoreSlice";
import EmptyCart from "../emptycart/EmptyCart";

export default function Component() {
  const cardData = useAppSelector((state) => state.CARTITEMS);
  const itemsCount = cardData.length;
  const dispatch = useAppDispatch();
  const clearAllItems = () => {
    if (cardData.length === 0) return;
    dispatch(ClearAllItems());
  };
  const subTotal = cardData.reduce(
    (total, arrayItem) => total + arrayItem.count! * arrayItem.price,
    0
  );
  const ShippingCost = 0;
  const totalCost = subTotal + ShippingCost;
  return (
    <>
      {itemsCount === 0 ? (
        <EmptyCart />
      ) : (
        <section className="w-full max-w-4xl mx-auto py-12 px-4 md:px-6">
          <div className="grid gap-8">
            <div className="grid gap-4">
              <h1 className="text-2xl font-bold">Your Cart</h1>
              <p className="text-gray-500 dark:text-gray-400">
                Review the items in your cart and proceed to checkout.
              </p>
            </div>
            <div className="grid gap-4">
              <div className="grid gap-4 pb-6">
                {/* Card */}
                {cardData.map((item) => (
                  <CartCard
                    description={item.description}
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    img={item.img}
                    price={item.price}
                    count={item.count}
                  />
                ))}
              </div>
            </div>
            <div className="grid gap-5">
              <Button className="w-full" onClick={clearAllItems}>
                Clear Cart
              </Button>
              <div className="grid gap-4 bg-gray-100 mmin-w-full dark:bg-gray-800 p-6 rounded-lg">
                <div className="grid gap-2">
                  <h3 className="font-semibold">Order Summary</h3>
                  <div className="flex items-center justify-between">
                    <span>Subtotal</span>
                    <span className="font-semibold">
                      ${subTotal.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Shipping</span>
                    <span className="font-semibold">
                      ${ShippingCost.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">Total</span>
                    <span className="font-semibold">
                      ${totalCost.toFixed(2)}
                    </span>
                  </div>
                </div>
                <Button className="w-full">Proceed to Checkout</Button>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
