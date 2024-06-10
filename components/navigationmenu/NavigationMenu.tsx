
import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { IconBone, IconMenuDeep } from "@tabler/icons-react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export default function NavigationMenu() {
  return (
    <header className="flex h-16 w-full items-center justify-between px-4 md:px-6 bg-white">
      <Link href="/" className="flex items-center" prefetch={false}>
        <IconBone className="h-6 w-6" />
      </Link>
      <nav className="hidden items-center gap-2 text-sm font-medium md:flex">
        <Link
          href="/"
          className=" inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
          prefetch={true}
        >
          Home
        </Link>
        <Link
          href="/store"
          className=" inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
          prefetch={true}
        >
          Store
        </Link>
        <Link
          href="/about"
          className="inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
          prefetch={true}
        >
          About
        </Link>
        <Link
          href="https://github.com/developersilent/cw-project"
          className="inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubLogoIcon className="w-6 h-6 hover:text-slate-900" />
        </Link>
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="md:hidden">
            <IconMenuDeep className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="bg-white">
          <div className="grid gap-6 p-6 ">
            <Link
              href="/"
              className="flex items-center gap-2 text-lg font-semibold w-full"
              prefetch={false}
            >
              <IconBone className="h-6 w-6" />
            </Link>
            <nav className="grid gap-4 place-content-center" id="snav">
              <Link
                href="/"
                className="inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
                prefetch={false}
              >
                Home
              </Link>
              <Link
                href="/store"
                className="inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
                prefetch={false}
              >
                Store
              </Link>
              <Link
                href="/about"
                className="inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
                prefetch={false}
              >
                About
              </Link>
              <Link
                href="https://github.com/developersilent/cw-project"
                className="inline-flex h-9 w-max items-center justify-center  rounded-md px-5 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubLogoIcon className="w-7 h-7"/>
              </Link>
            </nav>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}
