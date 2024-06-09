import { IconLoader } from "@tabler/icons-react";

export default function Component() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-transparent">
      <div className="flex flex-col items-center space-y-4 relative">
        <IconLoader className="text-black absolute animate-spin" size={30} />
      </div>
    </div>
  );
}
