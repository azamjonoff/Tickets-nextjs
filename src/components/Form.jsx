"use client";

function Form() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const title = formData.get("title");
    const body = formData.get("body");
    const user_email = formData.get("userEmail");
    const priority = formData.get("selectedFruit");

    fetch("http://localhost:5000/tickets", {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ title, body, user_email, priority }),
    }).then(() => {
      alert(
        "You have added a ticket, the list of books is one the Tickets Page"
      );
      e.target.reset();
    });
  };

  return (
    <form className="max-w-96 w-full" onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
      <input id="title" name="title" type="text" />
      <label htmlFor="body">Body:</label>
      <input id="body" name="body" type="text" />
      <label htmlFor="userEmail">Email:</label>
      <input id="userEmail" name="userEmail" type="email" />
      <label>
        Select priority:
        <select name="selectedFruit">
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </label>
      <div>
        <button className="bg-primary py-2 px-3 text-white rounded-md hover:opacity-60">
          Send data
        </button>
      </div>
    </form>
  );
}

export default Form;
