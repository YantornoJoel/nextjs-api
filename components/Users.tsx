"use client";

import { PropsUser } from "@/interfaces";
import { useRouter } from "next/navigation";

function Users({ users }: PropsUser) {
  const router = useRouter();

  return (
    <ul className="list-group">
      {users.map(({ id, avatar, email, first_name, last_name }) => (
        <li
          key={id}
          onClick={() => router.push(`/users/${id}`)}
          className="list-group-item d-flex justify-content-between list-group-item-action"
          style={{ cursor: "pointer" }}
        >
          <div>
            <h5>
              {id} {first_name} {last_name}
            </h5>
            <p>{email}</p>
          </div>
          <img src={avatar} alt={email} style={{ borderRadius: "50%" }} />
        </li>
      ))}
    </ul>
  );
}

export default Users;
