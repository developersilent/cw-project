import {
  IconClock,
  IconCloudRain,
  IconDatabaseExport,
  IconDoorOff,
  IconGhost,
  IconWindow,
} from "@tabler/icons-react";
import Link from "next/link";
import image from "@/./public/curage (1).png";
import Image from "next/image";
import RevealAnimation from "../animation/RevealAnimation";
import TextAnimation from "../animation/TextAnimation";
import RevealAnimationWithXFromRight from "../animation/RevealAnimationWithXFromRight";
import RevealAnimationWithXFromLeft from "../animation/RevealAnimationWithXFromLeft";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-[100dvh] overflow-hidden bg-white/50">
      <main className="flex-1">
        <section
          id="home"
          className="w-full pt-10 md:pt-24 lg:pt-32 max-sm:py-5"
        >
          <div className="container px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-0 max-sm:gap-7 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <RevealAnimationWithXFromLeft>
                <div id="dog">
                  <Image
                    src={image.src}
                    width="400"
                    height="400"
                    alt="Courage the Cowardly Dog"
                    className="mx-auto object-center scale-105"
                  />
                </div>
              </RevealAnimationWithXFromLeft>
              <div className="flex flex-col gap-3 justify-center sm:mt-5 max-sm:mt-7">
                <RevealAnimation>
                  <h1 className="max-sm:text-[33px] bg-white/60 sm:text-5xl md:text-6xl lg:text-7xl leading-9 font-bold text-[rgb(29,32,32)]">
                    <TextAnimation text="Courage The Cowardly Dog" />
                  </h1>
                </RevealAnimation>
                <RevealAnimationWithXFromRight>
                  <p className="mx-auto bg-white/50 max-sm:text-[19px] max-w-[700px] text-[#0e1113] md:text-xl sm:text-lg dark:text-[#f8f8f8]">
                    Courage is a pink dog who lives with his elderly owners,
                    Muriel and Eustace, in the middle of Nowhere, Kansas.
                    Despite his cowardly nature, Courage bravely fights monsters
                    and supernatural forces to protect his beloved owner,
                    Muriel.
                  </p>
                </RevealAnimationWithXFromRight>
              </div>
            </div>
          </div>
        </section>
        <section
          id="about"
          className="w-full py-14 md:py-24 lg:py-32 dark:bg-[#1e1e1e] -mt-3"
        >
          <div className="container px-4 md:px-6 mt-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2 grid gap-1 bg-white/50">
                <div className="inline-block rounded-lg px-3 py-2 w-full font-semibold text-xl text-[#26314b]">
                  Courage&apos;s Home
                </div>
                <RevealAnimationWithXFromLeft>
                  <h2 className="text-3xl font-bold tracking-tighter text-[#333] sm:text-5xl dark:text-[#f8f8f8]">
                    The Middle of Nowhere
                  </h2>
                </RevealAnimationWithXFromLeft>
                <RevealAnimationWithXFromRight>
                  <p className="max-w-[900px] text-[17px] text-[#333] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-[#f8f8f8]">
                    Courage and his owners, Muriel and Eustace, live in a small,
                    isolated farmhouse in the middle of Nowhere, Kansas. This
                    remote location is the perfect setting for Courage&apos;s
                    adventures, as it is often the target of supernatural and
                    otherworldly threats.
                  </p>
                </RevealAnimationWithXFromRight>
              </div>
            </div>
          </div>
        </section>
        <section
          id="features"
          className="w-full py-12 max-sm:-mt-5 -mt-28 sm:-mt-7 md:py-24 lg:py-32 dark:bg-gray-900"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-8 text-center">
              <div className="space-y-2 grid gap-1 place-content-center bg-white/50">
                <div className="inline-block rounded-lg w-full px-3 py-2 text-xl font-semibold text-[#1e2b38] dark:bg-gray-600">
                  Courage&apos;s Defenses
                </div>
                <RevealAnimationWithXFromRight>
                  <h2 className="text-3xl font-bold tracking-tighter text-gray-800 sm:text-5xl dark:text-gray-100">
                    Protecting Muriel
                  </h2>
                </RevealAnimationWithXFromRight>
                <RevealAnimationWithXFromLeft>
                  <p className="max-w-3xl text-[17px] mx-auto text-gray-700 md:text-lg dark:text-gray-300">
                    Despite his timid nature, Courage is fiercely protective of
                    his owner, Muriel. The farmhouse is equipped with various
                    defenses, including a high-tech security system, hidden
                    passages, and a well-stocked arsenal of unusual weapons to
                    help Courage fend off the supernatural threats that often
                    target the remote location.
                  </p>
                </RevealAnimationWithXFromLeft>
              </div>
              <div className="grid bg-blend-exclusion bg-white/50 grid-cols-1 pt-24 gap-5 sm:grid-cols-2 md:grid-cols-3">
                <FeatureCard
                  icon={<IconClock />}
                  title="Alarm System"
                  description="Courage has installed a state-of-the-art alarm system to detect and ward off any supernatural threats."
                />
                <FeatureCard
                  icon={<IconDoorOff />}
                  title="Reinforced Doors"
                  description="Courage has reinforced the farmhouse's doors to keep unwanted visitors out and his family safe."
                />
                <FeatureCard
                  icon={<IconGhost />}
                  title="Supernatural Traps"
                  description="Courage has set up a network of traps and defenses throughout the farmhouse to protect against the supernatural threats that constantly plague it."
                />

                <FeatureCard
                  icon={<IconWindow />}
                  title="Reinforced Windows"
                  description="Courage has reinforced the farmhouse's windows to keep out any unwanted entities or creatures that might try to invade the home."
                />

                <FeatureCard
                  icon={<IconDatabaseExport />}
                  title="Backup Generator"
                  description="Courage has installed a backup generator to ensure the farmhouse remains powered and protected, even during supernatural power outages."
                />

                <FeatureCard
                  icon={<IconCloudRain />}
                  title="Reinforced Roof"
                  description="Courage has reinforced the farmhouse's roof to protect against the harsh Kansas weather and any supernatural entities that might try to enter through the attic."
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2  sm:flex-row py-4 w-full shrink-0 items-center px-4 md:px-6 bg-gradient-to-b from-white via-amber-50 dark:bg-[#1e1e1e]">
        <p className="text-xs text-[#333] dark:text-[#f8f8f8]">
          &copy; 2024 cw.project.com. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            href="/store"
            className="text-xs hover:underline underline-offset-4 text-[#333] dark:text-[#f8f8f8]"
            prefetch={false}
          >
            Store
          </Link>
          <Link
            href="/about"
            className="text-xs hover:underline underline-offset-4 text-[#333] dark:text-[#f8f8f8]"
            prefetch={false}
          >
            About
          </Link>
        </nav>
      </footer>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <RevealAnimationWithXFromRight>
      <div className="flex flex-col items-start space-y-2 rounded-lg bg-white p-6 shadow-sm transition-all hover:scale-105 hover:shadow-md dark:bg-gray-950 dark:hover:bg-gray-800">
        {icon}
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm text-gray-500 text-start dark:text-gray-400">
          {description}
        </p>
      </div>
    </RevealAnimationWithXFromRight>
  );
}
