import Users from "@/components/Users";
import { IUser } from "@/interfaces";

async function fetchUsers() {
  const resp = await fetch("https://reqres.in/api/users");
  const { data } = await resp.json();
  return data;
}

async function IndexPage() {
  const users: IUser[] = await fetchUsers();

  return <Users users={users} />;
}

export default IndexPage;
