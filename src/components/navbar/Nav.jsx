import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import Footer from "../footer/Footer";


const Nav = () => {
      return (
            <div>

<div className="bg-gray-200">
                  <nav className="flex items-center justify-between w-10/12 py-5  m-auto">
                        <h3><i className="text-3xl text-orange-500">R</i>outing</h3>
                        <div className="flex list-none gap-24  ">
                              <Link to="/">Home</Link>
                              <Link to="/about">About</Link>
                              <Link to="/contact">Contact</Link>
                              <Link to="/users">Users</Link>
                              
                        </div>
                  </nav>
            </div>

            <Outlet></Outlet>

            <Footer></Footer>

            </div>
      );
};

export default Nav;