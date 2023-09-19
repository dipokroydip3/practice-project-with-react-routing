import { useLoaderData } from "react-router-dom";
import User from "../../user/User";

const Users = () => {

      const Users = useLoaderData();

      return (
            <div>
                 
                  <div className="grid grid-cols-3 px-5 gap-5 py-10">
                        {
                              Users.map(user =><User key={user.id} user={user}></User>)
                        }
                  </div>
            </div>
      );
};

export default Users;