import React, { useCallback } from "react";
import ItemsCard from "../storecard/ItemsCard";
import StoreTopNav from "../storenav/StoreTopNav";
import { toolsData } from "@/tools-data";
import TextAnimation from "../animation/TextAnimation";
import RevealAnimation from "../animation/RevealAnimation";
import { Toaster } from "@/components/ui/toaster";
export default function StorePage() {
  const melee = toolsData.melee;
  const throwable = toolsData.throwable;
  const renderItems = useCallback(function(){
    const th = throwable.map((item) => (
      <RevealAnimation key={item.title}>
        <ItemsCard
          description={item.description}
          id={item.id}
          img={item.image.src}
          title={item.title}
          price={item.price}
          typeOfData="throwable"
        />
      </RevealAnimation>
    ));

    const melees = melee.map((item) => (
      <RevealAnimation key={item.title}>
        <ItemsCard
          description={item.description}
          id={item.id}
          img={item.image.src}
          title={item.title}
          price={item.price}
          typeOfData="melee"
        />
      </RevealAnimation>
    ));
    return [...th, ...melees];
  }, [throwable, melee]);

  return (
    <>
      <section className="relative py-12 md:py-16 lg:py-20">
        <StoreTopNav />
        <div className="container px-4 md:px-6 mt-14">
          <div className="max-w-2xl mx-auto text-center space-y-2">
            <h1 className="text-2xl md:text-4xl lg:text-5xl bg-white/50 font-bold tracking-tight">
              <TextAnimation text="Discover Our Curated Collection" />
            </h1>
            <div className="text-gray-600 dark:text-gray-400 bg-white/50 text-lg md:text-xl mx-6">
              <TextAnimation
                text="Explore our wide range of high-quality tools, carefully selected
              to meet your needs."
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-3"
            id="Cards"
          >
            {/* Cards */}
            {renderItems()}
          </div>
        </div>
      </section>
      <Toaster/>
    </>
  );
};
