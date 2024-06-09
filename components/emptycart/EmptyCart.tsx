
import Link from "next/link";
import image from "@/./public/undraw_empty_cart_co35.svg"
import Image from "next/image";
import TextAnimation from "../animation/TextAnimation";
export default function EmptyCart() {
  return (
    <div className="flex h-svh w-full flex-col items-center justify-center p-4 dark:bg-gray-950">
      <div className="relative h-[300px] w-[300px] max-w-full mt-10">
        <Image
          src={image.src}
          alt="Empty Cart"
          className="object-contain"
          width={400}
          height={400}
        />
      </div>
      <div className="space-y-4 text-center">
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Your cart is empty
        </h1>
        <div className="text-gray-500 dark:text-gray-400">
          <TextAnimation
            text=" Looks like you haven't added anything to your cart yet. Start shopping
          to fill it up."
          />
        </div>
        <Link
          href="/store"
          className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-6 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
          prefetch={false}
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}
