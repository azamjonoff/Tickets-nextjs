// next imports
import Link from "next/link";

// components
import DeleteBtn from "@/components/DeleteBtn";

const getData = async () => {
  const req = await fetch("http://localhost:5000/tickets", {
    next: {
      revalidate: 0,
    },
  });
  const data = await req.json();

  return { data };
};

async function Tickets() {
  const { data } = await getData();
  return (
    <div>
      <div className="flex justify-between">
        <div>
          <h1 className="text-primary">Tickets</h1>
          <p className="text-slate-500">Currently open tickets.</p>
        </div>
        <div>
          <Link
            href="/tickets/create"
            className="bg-primary py-2 px-3 text-white"
          >
            New Ticket
          </Link>
        </div>
      </div>
      <ul className="mt-14">
        {data.map((ticket) => {
          return (
            <li key={ticket.id} className="card">
              <Link href={`tickets/${ticket.id}`}>
                <div className="flex justify-between">
                  <h1 className="text-black">{ticket.title}</h1>
                  <DeleteBtn ticket={ticket.id} />
                </div>
                <p className="line-clamp-2 font-medium">{ticket.body}</p>
                <div className={`pill ${ticket.priority} mt-4`}>
                  {ticket.priority} priority
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Tickets;
