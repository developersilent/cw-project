"use client";
import { useCallback, memo } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  IconChevronLeft,
  IconShoppingCart,
} from "@tabler/icons-react";
import { useAppSelector } from "@/helper/hook/redux-store-hook";
import { useRouter } from "next/navigation";

const StoreTopNav = () => {
  const cartItems = useAppSelector((state) => state.CARTITEMS);
  const count = cartItems.reduce((totalSum, obj) => totalSum + obj.count!, 0);
  const nevigate = useRouter();
  const cartLogo = (
    <Badge className="absolute -top-1 -right-1 bg-purple-500 text-white w-5 h-5 text-xs font-medium rounded-full grid place-content-center">
      {count}
    </Badge>
  );

  const handleCartClick = useCallback(() => {
    nevigate.push("/store/cart");
  }, [nevigate]);

  return (
    <header className="flex items-center justify-between h-16 px-4  md:px-6 fixed w-full top-0 z-50 bg-background">
      <Link
        href="/"
        className="inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
        prefetch={false}
      >
        <IconChevronLeft />
      </Link>
      <div className="flex items-center gap-4">
        <div className="relative">
          <Button
            className="rounded-full"
            size="icon"
            variant="ghost"
            onClick={handleCartClick}
          >
            <IconShoppingCart className="w-6 h-6" />
            {count === 0 ? null : cartLogo}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default memo(StoreTopNav);
