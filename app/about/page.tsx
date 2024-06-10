import AboutPage from "@/components/aboutpage/AboutPage";
import { GridBackgroundDemo } from "@/components/animation/GridBackGround";
import RevealAnimationWithY from "@/components/animation/RevealAnimationWithY";
import NavigationMenu from "@/components/navigationmenu/NavigationMenu";

export default function page() {
  return (
    <>
      <GridBackgroundDemo>
        <NavigationMenu />
        <RevealAnimationWithY>
          <AboutPage />
        </RevealAnimationWithY>
      </GridBackgroundDemo>
    </>
  );
}
