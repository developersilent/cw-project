import AboutPage from "@/components/aboutpage/AboutPage";
import RevealAnimationWithY from "@/components/animation/RevealAnimationWithY";
import NavigationMenu from "@/components/navigationmenu/NavigationMenu";

export default function page() {
  return (
    <>
        <NavigationMenu />
      <RevealAnimationWithY>
        <AboutPage />
      </RevealAnimationWithY>
    </>
  );
}
