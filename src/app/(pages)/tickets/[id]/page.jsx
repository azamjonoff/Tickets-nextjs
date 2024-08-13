const getData = async (id) => {
  const req = await fetch("http://localhost:5000/tickets/" + id);
  const data = await req.json();

  return { data };
};

async function Tickets({ params }) {
  const { data } = await getData(params.id);
  return (
    <div className="mt-16">
      <h1>Ticket Details</h1>
      <div className="card">
        <h2>{data.title}</h2>
        <p>{data.user_email}</p>
        <p>{data.body}</p>
        <div className={`pill ${data.priority}`}>{data.priority} priority</div>
      </div>
    </div>
  );
}

export default Tickets;
