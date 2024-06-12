"use client";
import { Button } from "../ui/button";
import { useAppDispatch, useAppSelector } from "@/helper/hook/redux-store-hook";
import { Badge } from "../ui/badge";
import CartCard from "../cart-card/CartCard";
import { IconShoppingCart } from "@tabler/icons-react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import EmptyCart from "../emptycart/EmptyCart";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ClearAllItems } from "@/helper/redux-store/slices-functions/StoreSlice";

export default function CartMenu() {
  const cartItems = useAppSelector((state) => state.CARTITEMS);
  const dispatch = useAppDispatch();
  const itemsCount = cartItems.length;
  const count = cartItems.reduce((totalSum, obj) => totalSum + obj.count!, 0);
  const totalAmount = cartItems.reduce(
    (total, element) => total + element.price! * element.count!,
    0
  );
  const cartLogo = (
    <Badge className="absolute -top-1 -right-1 bg-purple-500 text-white w-5 h-5 text-xs font-medium rounded-full grid place-content-center">
      {count}
    </Badge>
  );
  const clearCart = () => {
    dispatch(ClearAllItems());
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="rounded-full" size="icon" variant="ghost">
          <IconShoppingCart className="w-6 h-6" />
          {count === 0 ? null : cartLogo}
        </Button>
      </SheetTrigger>
      <SheetContent className="max-sm:w-full p-0 select-none bg-slate-100 outline-none border-none overflow-hidden">
        {itemsCount === 0 ? (
          <EmptyCart />
        ) : (
          <div className="h-full w-full px-4 py-3 overflow-hidden">
            <div className="flex h-full flex-col">
              <div className="mb-6 border-b pb-4 flex items-center justify-between">
                <h2 className="text-[18px]">Cart</h2>
              </div>
              <ScrollArea
                className="flex-1 z-50 px-3 overflow-x-hidden overflow-y-auto"
                style={{ maxHeight: "500px" }}
              >
                <ul className="grid gap-4">
                  {/* Cards */}
                  {cartItems.map((item) => (
                    <CartCard key={item.id} {...item} />
                  ))}
                </ul>
              </ScrollArea>
              <div className="mt-6 pt-4">
                <div className="flex items-center justify-between">
                  <p className="text-[13px] font-medium">items: {count}</p>
                  <p className="text-[13px] font-semibold text-green-500">
                    ${totalAmount.toFixed(2)}
                  </p>
                </div>
                <div className="mt-4 grid gap-2">
                  <Button
                    size="sm"
                    className="p-1 bg-[#222523] font-semibold tracking-wider border-none outline-none text-slate-100 hover:bg-[#111]"
                  >
                    Checkout
                  </Button>
                  <Button
                    variant={"ghost"}
                    size="sm"
                    className="p-1 bg-slate-200 font-semibold tracking-wide border-none outline-none text-black border hover:bg-slate-300"
                    onClick={clearCart}
                  >
                    Clear Cart
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
