import RevealAnimationWithY from "@/components/animation/RevealAnimationWithY";
import HomePage from "@/components/homepage/HomePage";
import NavigationMenu from "@/components/navigationmenu/NavigationMenu";

export default function page() {
  return (
    <>
      <NavigationMenu />
      <RevealAnimationWithY>
        <HomePage />
      </RevealAnimationWithY>
    </>
  );
}
