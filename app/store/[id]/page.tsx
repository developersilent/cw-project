
import getSingleToolInfo from "@/helper/getSingleToolInfo";

export default function Page({searchParams}: {searchParams: {title: string, typeOfData: string}}) {
  const typeOf = searchParams.typeOfData;
  const {title} = searchParams;
  const data = getSingleToolInfo(title, typeOf as "melee" | "throwable");
  if (!data) {
    return null;
  }
  return (
    <>
      {data}
    </>
  );
}
