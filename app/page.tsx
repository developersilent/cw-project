import { GridBackgroundDemo } from "@/components/animation/GridBackGround";
import RevealAnimationWithY from "@/components/animation/RevealAnimationWithY";
import CartMenu from "@/components/cartmenu/CartMenu";
import HomePage from "@/components/homepage/HomePage";
import NavigationMenu from "@/components/navigationmenu/NavigationMenu";

export default function page() {
  return (
    <>
      <GridBackgroundDemo>
        <NavigationMenu />
        <RevealAnimationWithY>
          <HomePage />
        </RevealAnimationWithY>
      </GridBackgroundDemo>
    </>
  );
}
