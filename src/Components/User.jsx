import React from 'react';
import { useParams } from 'react-router-dom';
import twenty from '../../public/twenty.png';

function User() {
  const { username } = useParams(); // Access the username from URL parameters

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-2xl">
            Blog<span className="text-blue-400">Verse</span>
          </a>
        </div>
        <div className="flex-none gap-2">
          <button className="btn text-blue-500">{username}</button>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a href="">Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <form action="">
          <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-6">
            <div className="flex flex-col w-full md:w-1/2 mt-8 md:mt-14">
              <h1 className="text-4xl font-bold">
                Create your first blog at Blog
                <span className="text-blue-400">Verse</span>
              </h1>
              <input
                type="text"
                placeholder="Enter Your Title"
                className="outline-none border border-gray-300 rounded-md mt-5 w-2/3 p-2 px-4  bg-white shadow-md hover:shadow-lg focus:border-blue-400 focus:ring-2 focus:ring-blue-400 transition duration-300 ease-in-out text-gray-700 font-semibold cursor-pointer"
              />
              <textarea
                className="outline-none border border-gray-300 rounded-md mt-5  p-2 px-4  bg-white shadow-md hover:shadow-lg focus:border-blue-400 focus:ring-2 focus:ring-blue-400 transition duration-300 ease-in-out text-gray-700 font-semibold cursor-pointer"
                placeholder="Bio"
              ></textarea>
              <input
                type="date"
                className="outline-none border border-gray-300 rounded-md mt-5 w-40 p-2 px-4 text-center bg-white shadow-md hover:shadow-lg focus:border-blue-400 focus:ring-2 focus:ring-blue-400 transition duration-300 ease-in-out text-gray-700 font-semibold cursor-pointer"
              />
              <button className="btn text-white w-28 bg-blue-400 mt-5">
                Create Blog
              </button>
            </div>
            <div className="w-full md:w-1/2 flex justify-center items-center">
              <img src={twenty} className="w-92 h-92" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default User;
