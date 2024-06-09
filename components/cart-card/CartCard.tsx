"use client";
import { Button } from "../ui/button";
import { IconMinus, IconPlus, IconTrash } from "@tabler/icons-react";
import { StoreValues } from "@/types/Types";
import { Separator } from "../ui/separator";
import Image from "next/image";
import { useAppDispatch } from "@/helper/hook/redux-store-hook";
import {
  addToCart,
  decreaseQuantity,
  removeFromCart,
} from "@/helper/redux-store/slices-functions/StoreSlice";

export default function CartCard({
  id,
  img,
  price,
  title,
  description,
  count,
}: StoreValues) {
  const dispatch = useAppDispatch();
  const handleIncrease = () => {
    dispatch(
      addToCart({
        id,
        title,
        img,
        price,
        description,
        count,
      })
    );
  };

  const handleDecrease = () => {
    dispatch(
      decreaseQuantity({
        id,
        title,
        description,
        img,
        price,
        count,
      })
    );
  };

  const removefromCart = () => {
    dispatch(
      removeFromCart({
        id,
        title,
      })
    );
  };
  return (
    <>
      <div
        className="grid md:grid-cols-[120px_1fr_100px] gap-4 items-center p-4 md:mr-40"
        key={id}
      >
        <Image
          src={img}
          alt="Product Image"
          width={120}
          height={120}
          className="rounded-lg object-contain"
        />
        <div className="grid px-3">
          <h3 className="font-semibold">{title}</h3>
        </div>
        <div className="flex gap-4 items-center md:justify-center">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={handleDecrease}>
              <IconMinus size={15} />
            </Button>
            <span>{count}</span>
            <Button variant="outline" size="sm" onClick={handleIncrease}>
              <IconPlus size={15} />
            </Button>
          </div>
          <div className="text-right font-semibold">${price}</div>
          <Button variant="outline" size="sm" onClick={removefromCart}>
            <IconTrash size={17} color="red"/>
          </Button>
        </div>
      </div>
      <Separator />
    </>
  );
}
