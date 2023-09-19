

const Nav = () => {
      return (
            <div className="bg-gray-200">
                  <nav className="flex items-center justify-between w-10/12 py-5  m-auto">
                        <h3><i className="text-3xl text-orange-500">R</i>outing</h3>
                        <div className="flex list-none gap-24  ">
                              <li><a href="#">Home</a></li>
                              <li><a href="#">About</a></li>
                              <li><a href="#">Contact</a></li>
                        </div>
                  </nav>
            </div>
      );
};

export default Nav;