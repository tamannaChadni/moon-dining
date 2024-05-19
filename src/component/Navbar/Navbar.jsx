import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  return (
    <div className="container navbar bg-base-100 mx-auto">
      <div className="navbar-start hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-3">
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-red-500 font-bold font-sans" : "font-normal"
            }
            to="/"
          >
            Home
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? "text-red-500 font-bold font-sans" : "font-normal"
            }
            to="/all-foods"
          >
            All Foods
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive ? "text-red-500 font-bold font-sans" : "font-normal"
            }
            to="/gallery"
          >
            Gallery
          </NavLink>
          <NavLink>
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className={({ isActive }) =>
                    isActive
                      ? "text-red-500 font-bold  font-sans"
                      : "font-normal"
                  }
                >
                  My Profile
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <Link to="/addedFood">
                    {" "}
                    <li>
                      Added My food
                    </li>
                  </Link>
                  <Link to="/add-food">
                    <li>
                      Add A food
                    </li>
                  </Link>
                  <Link to="/order-food">
                    <li>
                     Order food
                    </li>
                  </Link>
                </ul>
              </div>
            </NavLink>
        </ul>
      </div>
      <div className="navbar-center">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-red-500 font-bold font-sans" : "font-normal"
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-red-500 font-bold font-sans" : "font-normal"
              }
              to="/all-foods"
            >
              All Foods
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-red-500 font-bold font-sans" : "font-normal"
              }
              to="/gallery"
            >
              Gallery
            </NavLink>
            <NavLink>
              <div className="dropdown dropdown-top">
                <div
                  tabIndex={0}
                  role="button"
                  className={({ isActive }) =>
                    isActive
                      ? "text-red-500 font-bold  font-sans"
                      : "font-normal"
                  }
                >
                  My Profile
                </div>
                <ul
                  tabIndex={0}
                  className="lg:dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <Link to="/addedFood">
                    {" "}
                    <li>
                      Added My food
                    </li>
                  </Link>
                  <Link to="/add-food">
                    <li>
                      Add A food
                    </li>
                  </Link>
                  <Link to="/order-food">
                    <li>
                      Order food
                    </li>
                  </Link>
                </ul>
              </div>
            </NavLink>
          </ul>
        </div>

        <Link
          to="/"
          className="text-3xl font-boldtext-3xl font-bold  font-serif text-red-700"
        >
          Moon Adventure
        </Link>
      </div>
      <div className="navbar-end gap-2">
        {user ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  src={user?.photoURL || "https://i.ibb.co/6y60rJ3/use.jpg"}
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <button className="btn btn-sm  btn-ghost">
                  {user?.displayName || "user name not found"}
                </button>
              </li>
              <li>
                <button
                  onClick={logOut}
                  className="btn btn-sm bg-red-500 text-white"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link to="/login">
            <button className="btn btn-sm bg-red-500 text-white">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
