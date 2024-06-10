import { memo } from "react";
import Link from "next/link";
import { IconChevronLeft } from "@tabler/icons-react";

import CartMenu from "../cartmenu/CartMenu";
import { GridBackgroundDemo } from "../animation/GridBackGround";

const StoreTopNav = () => {
  return (
    <GridBackgroundDemo>
      <header className="flex bg-gradient-to-b from-white via-white items-start p-2 justify-between h-24 px-4  md:px-6 fixed w-full top-0 z-50 ">
        <Link
          href="/"
          className="inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
          prefetch={false}
        >
          <IconChevronLeft />
        </Link>
        <div className="flex items-center gap-4">
          <div className="relative">
            {/* cartMenu */}
            <CartMenu />
          </div>
        </div>
      </header>
    </GridBackgroundDemo>
  );
};

export default memo(StoreTopNav);
