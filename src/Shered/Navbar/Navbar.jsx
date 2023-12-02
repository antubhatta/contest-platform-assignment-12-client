// import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";

import logo from "../../assets/logoipsum-249.svg";
import { useAuth } from "../../contexts/AuthContext";
import User from "../../Components/User";

const Navbar = () => {
  const { user, logOut } = useAuth();

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/foods">All Food</NavLink>
      </li>
      <li>
        <NavLink to="/blog">Blog</NavLink>
      </li>
     
    </>
  );
  const handleLogOut = () => {
    logOut();
  };

  return (
    <div className="bg-[#2C3E50] py-4 z-50">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu  menu-sm text-sm md:text-lg dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box z-50 text-black w-52"
            >
              {navLinks}
            </ul>
          </div>
          <div className="flex gap-2 items-center">
            <img src={logo} alt="" />
            <Link
              to="/"
              className=" normal-case text-lg md:text-xl lg:text-2xl font-bold"
            >
              <p className="text-indigo-400">EatsHub</p>
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu text-white text-sm md:text-lg menu-horizontal px-1">
            {navLinks}
          </ul>
        </div>

        <div className="navbar-end">
          {user ? (
            <>
              <User />
              <button
                onClick={handleLogOut}
                className="px-2 lg:px-5 py-2 rounded-lg text-white text-sm lg:text-base bg-slate-600"
              >
                LogOut
              </button>{" "}
            </>
          ) : (
            <Link to="/login">
              <button className="px-2 lg:px-5 py-2 rounded-lg text-white text-sm lg:text-base bg-slate-600">
                LogIn
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
