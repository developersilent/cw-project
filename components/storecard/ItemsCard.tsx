"use client";
import { useCallback,memo } from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import { SingleCardProps } from "@/types/Types";
import { addToCart } from "@/helper/redux-store/slices-functions/StoreSlice";
import { useAppDispatch } from "@/helper/hook/redux-store-hook";
import { toast } from "../ui/use-toast";
function ItemsCard({ description, img, price, title, id, typeOfData }: SingleCardProps) {
  const dispatch = useAppDispatch();

  const handleAddToCart = useCallback(function() {
    dispatch(addToCart({ description, id, img, price, title }));
    toast({
      description: `${title} added`,
      duration: 900,
      style: {
        background: "#D8EFD3",
        border: "none",
        outline: "none",
        color: "#0F0F0F",
        fontSize: "1.7rem",
        zIndex: 9999,
      },
    });
  }, [dispatch, description, id, img, price, title]);

  return (
    <div
      key={id}
      className="bg-gradient-to-b from-slate-900 via-amber-50 dark:bg-gray-950 rounded-xl overflow-hidden shadow-sm transition-all md:hover:scale-105 hover:shadow-md "
    >
      <Link
        href={{ pathname: `/store/${id}`, query: { title, typeOfData } }}
        className="block"
      >
        <Image
          alt="Product Image"
          className="w-full h-60 object-contain aspect-video rounded-t-xl drop-shadow-2xl"
          height={300}
          src={img as string}
          width={400}
          loading="eager"
        />
      </Link>
      <div className="p-4">
        <h3 className="max-sm:text-2xl text-xl font-semibold">
          <Link
            className="hover:text-gray-900 dark:hover:text-gray-50 transition-colors"
            href="#"
          >
            {title}
          </Link>
        </h3>
        <p className="text-gray-500 mt-1.5 dark:text-gray-400 leading-[23px] text-sm line-clamp-3">
          {description}
        </p>
        <div className="flex items-end justify-between mt-4">
          <span className="text-[20px] font-semibold p-2 rounded-xl">
            ${price}
          </span>
          <Button
            onClick={handleAddToCart}
            size="lg"
            variant="secondary"
            className="rounded-xl max-sm:text-[15px] text-xs border-none bg-slate-800 text-primary-foreground hover:bg-slate-950 outline-none"
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}

export default memo(ItemsCard);
