

const User = ({user}) => {
      const {name, username, email} = user;
      return (
            <div className="bg-purple-500 rounded-xl text-center p-10">
                  <h2>{name}</h2>
                  <h2>{username}</h2>
                  <h2>{email}</h2>
            </div>
      );
};

export default User;