import SingleProductPage from "@/components/singleproductpage/SingleProductPage";
import { toolsData } from "@/tools-data";

export default function getSingleToolInfo(
  title: string,
  typeOf: keyof typeof toolsData
) {
  if (typeOf === "melee") {
    const melees = toolsData.melee;
    const data = melees.find((tool) => tool.title === title);
    if (!data) {
      return null;
    }
    return (
      <SingleProductPage
        id={data.id}
        title={data.title}
        description={data.description}
        price={data.price}
        img={data.image.src}
      />
    );
  } else if (typeOf === "throwable") {
    const throwables = toolsData.throwable;
    const data = throwables.find((tool) => tool.title === title);
    if (!data) {
      return null;
    }
    return (
      <SingleProductPage
        id={data.id}
        title={data.title}
        description={data.description}
        price={data.price}
        img={data.image.src}
      />
    );
  }
}
