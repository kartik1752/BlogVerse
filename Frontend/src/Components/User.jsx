import React from 'react';
import { useParams } from 'react-router-dom';

function User() {
  const { username } = useParams(); // Access the username from URL parameters

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-2xl">Welcome, <span className='text-blue-400'>{username}</span></a>
        </div>
        <div className="flex-none gap-2">
          {/* <div className="form-control">
            <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
          </div> */}
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li><a>Settings</a></li>
              <li><a>Logout</a></li>
            </ul>
          </div>
          
        </div>
      </div>
      <div>
        <form action="">
          <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10'>
            
            <div className='flex flex-col w-full md:w-1/2 mt-12 md:mt-32 '>
            <h1>Create Your First Blog ...</h1>
            <input type="text" placeholder="Enter Your Title" className="input input-bordered w-full max-w-xs" />
            <textarea className="textarea textarea-info" placeholder="Bio"></textarea>
            <input type='date' className='outline-1 border border-black rounded-md'></input>
            <button className="btn text-white w-28 bg-blue-400">Create Blog</button>
            

            </div>
            <div className='img'>here we go</div>
           

          </div>


        </form>

      </div>
    </div>
  );
}

export default User;