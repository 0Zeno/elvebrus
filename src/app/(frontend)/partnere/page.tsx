import { RenderContent } from "@/components/ui/renderContent";
import { getTextBlock } from "@/sanity/lib/queries/textBlockQuery";

export default async function OmOss() {
  const { data: data } = await getTextBlock("partnere");

  return (
    <div>
      <h2 className="text-7xl drop-shadow-[3px_3px_0px_rgba(0,0,0,1)] pb-8">
        Partnere
      </h2>
      {data?.text ? <RenderContent blocks={data?.text}></RenderContent> : null}
    </div>
  );
}
