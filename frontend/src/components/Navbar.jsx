import React from "react";
import {Link} from 'react-router-dom'
import {FaBars,FaTimes} from 'react-icons/fa'
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

function Navbar() {

    let {user,logout} = useContext(AuthContext)

  return <div>
    <div className="w-full flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
        <div>
            <ul className="flex m-4">
                <Link to="/"><li className="px-4 cursor-pointer">Home</li></Link>
                
                {
                    user ? (
                        <div className="flex">
                        <Link to="/createtask"><li className="px-4 cursor-pointer">Create Task</li></Link>
                        <Link to="/viewtask"><li className="px-4 cursor-pointer">Task</li></Link>
                        <Link to='/login'><li onClick={logout} className="px-4 cursor-pointer">Logout</li></Link>
                        </div>
                    ) : (
                        <div className="flex">
                            <Link to='/login'><li className="px-4 cursor-pointer">Login</li></Link>
                            <Link to='/register'><li className="px-4 cursor-pointer">Register</li></Link>
                        </div>
                    )
                }
            </ul>
        </div>
    </div>
  </div>;
}

export default Navbar;
