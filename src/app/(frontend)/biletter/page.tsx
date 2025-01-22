import { getTickets } from "@/sanity/lib/queries/ticketQuery";
import Link from "next/link";

export default async function Biletter() {
  const tickets = await getTickets();

  return (
      <>
        <h2 className="text-6xl drop-shadow-[3px_3px_0px_rgba(0,0,0,1)] pb-8">
          Biletter
        </h2>
        {tickets.map((ticket) => {
          return (
            <Link
              className="hover:underline text-2xl space-y-6 underline-offset-2 flex justify-between drop-shadow-[3px_3px_0px_rgba(0,0,0,1)]"
              key={ticket._id}
              href={ticket.link}
            >
              <h3>{ticket.title}</h3>
              <h3>{ticket.price}</h3>
            </Link>
          );
        })}
        <div className="border-2 mt-24 p-4 rounded-md bg-card">
          <h2 className="text-2xl drop-shadow-[3px_3px_0px_rgba(0,0,0,1)] pb-2">
            Informasjon om bilettene
          </h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo
            expedita voluptatibus natus, quidem mollitia quae at animi saepe
            quia, ab laborum reprehenderit est qui inventore deleniti! Dolore,
            quaerat. Omnis, illum. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Officiis fugiat maiores suscipit distinctio
            accusantium neque reprehenderit nam modi at hic debitis vel harum
            eligendi, provident dignissimos quia quae? Est, sint? Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Est cum, dolorum,
            deserunt, rem similique temporibus expedita tempore earum atque
            incidunt ex corrupti id non repellendus amet adipisci. Ipsam, est
            eveniet.
          </p>
        </div>
      </>  
  );
}
