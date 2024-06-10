"use client";
import { StoreValues } from "@/types/Types";
import Image from "next/image";
import { Separator } from "../ui/separator";
import RevealAnimationWithXFromRight from "../animation/RevealAnimationWithXFromRight";
import { useAppDispatch } from "@/helper/hook/redux-store-hook";
import { removeFromCart } from "@/helper/redux-store/slices-functions/StoreSlice";
import { toast } from "../ui/use-toast";

export default function Component({
  description,
  id,
  img,
  price,
  title,
  count,
}: StoreValues) {
  const dispatch = useAppDispatch();
  return (
    <RevealAnimationWithXFromRight SpeedOfAnimation={0.45}>
      <li
        key={id}
        
        className="grid grid-cols-[80px_1fr_80px] items-center gap-4 overflow-hidden"
      >
        <Image
          src={img}
          alt={title}
          width={90}
          height={90}
          className="rounded-md object-contain aspect-square scale-125 pointer-events-none"
        />
        <div className="grid gap-1">
          <h3 className="font-medium">{title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Quantity: {count}
          </p>
        </div>
        <div className="text-right font-semibold sm:text-base text-[15px] px-3 text-green-500">
          ${price}
        </div>
      </li>
      <Separator />
    </RevealAnimationWithXFromRight>
  );
}
