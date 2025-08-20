import { RenderContent } from "@/components/ui/renderContent";
import { convertToLocalTime } from "@/lib/utils";
import { getTextBlock } from "@/sanity/lib/queries/textBlockQuery";
import { getTickets } from "@/sanity/lib/queries/ticketQuery";


export default async function Billetter() {
  const { data: tickets } = await getTickets();
  const { data: ticketInfo } = await getTextBlock("biletter");

  return (
    <>
      <h2 className="text-7xl drop-shadow-[3px_3px_0px_rgba(0,0,0,1)] pb-8">
        Billetter
      </h2>
      <div className="space-y-4 md:space-y-6">
        {tickets.map((ticket) => {
          return (
            <div key={ticket._id}>
              <a
                target="_blank"
                className="hover:underline text-lg md:text-4xl underline-offset-2 flex justify-between drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]"
                href={ticket.link}
              >
                <h3>{ticket.title}</h3>
                <h3>{ticket.price},-</h3>
              </a>
              {ticket.release && (
                <h4>Salget åpner {convertToLocalTime(ticket.release)}</h4>
              )}
            </div>
          );
        })}
      </div>
      <div className="border-2 mt-24 p-4 rounded-md bg-card">
        <h2 className="text-3xl drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] pb-2">
          Informasjon om bilettene
        </h2>
        {ticketInfo?.text ? (
          <RenderContent blocks={ticketInfo?.text}></RenderContent>
        ) : null}
      </div>
    </>
  );
}
