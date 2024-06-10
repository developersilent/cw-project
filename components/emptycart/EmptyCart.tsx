
import { SheetClose } from "../ui/sheet";
export default function EmptyCart() {
  return (
    <div className="flex flex-col h-full ">
      <div className="border-b px-6 py-4 flex items-center justify-between">
        <h2 className="text-lg font-medium">Cart</h2>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center gap-4 p-8">
        <div className="text-center">
          <p className="text-gray-500 dark:text-gray-400">
            Your cart is empty.
          </p>
        </div>
        <SheetClose className="w-full max-w-[200px] bg-[#D8EFD3] outline-none border border-border p-1 rounded-md text-sm">
          Continue Shopping
        </SheetClose>
      </div>
    </div>
  );
}
