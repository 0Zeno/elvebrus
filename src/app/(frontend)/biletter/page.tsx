import { RenderContent } from "@/components/ui/renderContent";
import { getTextBlock } from "@/sanity/lib/queries/textBlockQuery";
import { getTickets } from "@/sanity/lib/queries/ticketQuery";
import Link from "next/link";

export default async function Biletter() {
  const { data: tickets } = await getTickets();
  const { data: ticketInfo } = await getTextBlock("biletter");

  return (
    <>
      <h2 className="text-2xl md:text-6xl drop-shadow-[3px_3px_0px_rgba(0,0,0,1)] pb-8">
        Biletter
      </h2>
      <div className="space-y-4 md:space-y-6">
        {tickets.map((ticket) => {
          return (
            <Link
              className="hover:underline md:text-2xl underline-offset-2 flex justify-between drop-shadow-[3px_3px_0px_rgba(0,0,0,1)]"
              key={ticket._id}
              href={ticket.link}
            >
              <h3>{ticket.title}</h3>
              <h3>{ticket.price}</h3>
            </Link>
          );
        })}
      </div>
      <div className="border-2 mt-24 p-4 rounded-md bg-card">
        <h2 className="text-2xl drop-shadow-[3px_3px_0px_rgba(0,0,0,1)] pb-2">
          Informasjon om bilettene
        </h2>
        {ticketInfo?.text ? (
          <RenderContent blocks={ticketInfo?.text}></RenderContent>
        ) : null}
      </div>
    </>
  );
}
