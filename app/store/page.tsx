import RevealAnimationWithY from "@/components/animation/RevealAnimationWithY";
import StorePage from "@/components/storepage/StorePage";

export default function storepage() {
  return (
    <>
        <RevealAnimationWithY>
          <StorePage />
        </RevealAnimationWithY>
    </>
  );
}
