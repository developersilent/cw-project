"use client";
import { CardProps } from "@/types/Types";
import { Button } from "@/components/ui/button";
import { IconChevronLeft, IconStar } from "@tabler/icons-react";
import TextAnimation from "../animation/TextAnimation";
import { useAppDispatch } from "@/helper/hook/redux-store-hook";
import Image from "next/image";
import { addToCart } from "@/helper/redux-store/slices-functions/StoreSlice";
import Link from "next/link";
import { toast } from "../ui/use-toast";
import { Toaster } from "../ui/toaster";
import RevealAnimationWithXFromRight from "../animation/RevealAnimationWithXFromRight";


export default function SingleProductPage({
  description,
  id,
  img,
  price,
  title,
}: CardProps) {
  const dispatch = useAppDispatch();
  const hanndleAddToCart = () => {
    dispatch(addToCart({ description, id, img, price, title }));
    toast({
      description: `${title} added to cart`,
      duration: 1000,
      style: {
        background: "#3f5055",
        border: "none",
        outline: "none",
        color: "white",
      },
    });
  }
  return (
    <div className="w-full overflow-hidden">
      <nav className="px-3 py-2 fixed top-0 z-50 mb-20 bg-white w-full h-16 grid items-center">
        <Link
          href="/store"
          className="inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-3 transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
          prefetch={false}
        >
          <IconChevronLeft />
        </Link>
      </nav>
      <RevealAnimationWithXFromRight>
        <section
          className="grid space-x-2 space-y-8 md:grid-cols-2 gap-4 items-center py-10 md:py-16 max-w-[930px] mx-auto px-4 md:px-6"
          key={id}
        >
            <div className="bg-gradient-to-b rounded-md lg:max-w-[400px]">
              <Image
                src={img}
                alt="Product Image"
                width={200}
                height={200}
                className=" size-full scale-95 object-contain drop-shadow-2xl aspect-square"
              />
            </div>
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
            <div className="text-gray-500 text-lg">
              <TextAnimation text={description} />
            </div>
            <div className="text-gray-900 font-semibold text-lg">
              {`$${price}`}
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <IconStar className="w-5 h-5 fill-primary" />
                <IconStar className="w-5 h-5 fill-primary" />
                <IconStar className="w-5 h-5 fill-primary" />
                <IconStar className="w-5 h-5 fill-muted stroke-muted-foreground" />
                <IconStar className="w-5 h-5 fill-muted stroke-muted-foreground" />
              </div>
              <span className="text-gray-500">4.3 out of 5</span>
            </div>
            <div className="flex gap-4 items-center">
              <Button
                size="lg"
                className="p-6 px-7 text-base"
                onClick={hanndleAddToCart}
              >
                Add to Cart
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="p-[23px] px-9 text-base"
              >
                Buy Now
              </Button>
            </div>
          </div>
        </section>
      </RevealAnimationWithXFromRight>
      <Toaster />
    </div>
  );
}
