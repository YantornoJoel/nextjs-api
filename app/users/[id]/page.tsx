import { IUser } from "@/interfaces";

async function getUser(id: number) {
  const resp = await fetch(`https://reqres.in/api/users/${id}`);
  const { data } = await resp.json();
  return data;
}

type TProps = {
  params: {
    id: number;
  };
};

async function UserPage({ params }: TProps) {
  const user: IUser = await getUser(params.id);

  return (
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <div className="card">
          <div className="card-header text-center">
            <img src={user.avatar} alt={user.first_name} />
          </div>
          <div className="card-body text-center">
            <h3>
              {user.id} {user.first_name} {user.last_name}
            </h3>
            <p>{user.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserPage;
