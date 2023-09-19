import { useLoaderData } from "react-router-dom";

const Users = () => {

      const Users = useLoaderData();

      return (
            <div>
                  <h3 className="text-center text-4xl">Our users: {Users.length}</h3> 
            </div>
      );
};

export default Users;