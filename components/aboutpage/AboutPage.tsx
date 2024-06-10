import { IconLoader } from "@tabler/icons-react";

export default function Component() {
  return (
    <div className="grid place-content-center w-full h-svh">
      <h1 className="text-3xl font-bold text-center mt-10 flex items-center justify-center gap-4">
        In development <IconLoader className="text-black animate-spin" size={25} />
      </h1>
    </div>
  );
}
