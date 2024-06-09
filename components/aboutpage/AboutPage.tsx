
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { IconCopyright, IconPoint } from "@tabler/icons-react";
import Link from "next/link";

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen mx-auto dark:bg-gray-800">
      <main className="flex-1 p-5">
        <section className="w-full py-12 md:py-24 lg:py-14 px-7 dark:bg-gray-800 grid gap-1">
          <h1 className="text-4xl font-semibold text-slate-600 tracking-wide">
            Creator
          </h1>
          <h2 className="text-xl md:text-base px-5 mt-1">Rohit | 10-D</h2>
          <div className="flex flex-col mt-2">
            <span className="text-base font-semibold mt-4 tracking-wide">Tech Used</span>
            <span className="flex gap-2 items-center p-1 mt-3">
              <IconPoint size={18} /> TypeScript
            </span>
            <span className="flex gap-2 items-center p-1 text-slate-800">
              <IconPoint size={18} /> Next Js
            </span>
            <span className="flex gap-2 items-center p-1">
              <IconPoint size={18} /> Tailwind CSS
            </span>
            <span className="flex gap-2 items-center p-1">
              <IconPoint size={18} /> Shadcn UI
            </span>
            <span className="flex gap-2 items-center p-1">
              <IconPoint size={18} /> Framer Motion
            </span>
            <span className="flex gap-2 items-center p-1 text-slate-800">
              <IconPoint size={18} /> React-Redux
            </span>
          </div>
        </section>
        <section className="w-full grid px-8 place-content-center">
          <Link href={'/'} className="px-6">
          <GitHubLogoIcon className="w-10 h-10 cursor-pointer hover:text-slate-900"/>
          </Link>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          <IconCopyright/> 2024 cw.project.com. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            href="/"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Home
          </Link>
        </nav>
      </footer>
    </div>
  );
}

