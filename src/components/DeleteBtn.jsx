"use client";

import Image from "next/image";

// components
import trashLogo from "@/components/trash-logo.svg";

function DeleteBtn(ticket) {
  const handleDelete = () => {
    fetch(`http://localhost:5000/tickets/${ticket.ticket}`, {
      method: "DELETE",
    }).then(() => {
      alert(`${ticket.ticket} you deleted this ticket`);
      window.location.reload();
    });
  };

  return (
    <button onClick={handleDelete} className="hover:scale-110 transition-all">
      <Image
        src={trashLogo}
        alt="This button delete this Item"
        width={30}
        height={30}
      />
    </button>
  );
}

export default DeleteBtn;
