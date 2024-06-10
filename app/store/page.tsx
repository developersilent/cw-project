import { GridBackgroundDemo } from "@/components/animation/GridBackGround";
import RevealAnimationWithY from "@/components/animation/RevealAnimationWithY";
import StorePage from "@/components/storepage/StorePage";

export default function storepage() {
  return (
    <>
      <GridBackgroundDemo>
        <RevealAnimationWithY>
          <StorePage />
        </RevealAnimationWithY>
      </GridBackgroundDemo>
    </>
  );
}
