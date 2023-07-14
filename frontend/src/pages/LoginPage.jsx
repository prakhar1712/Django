import React from 'react';
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';

const LoginPage = () => {

    let {loginUser} = useContext(AuthContext)

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-[#0a192f] shadow-md rounded-xl px-8 pt-6 pb-8 mt-[-200px]">
        <h2 className="text-2xl font-bold mb-6 text-gray-300">Login</h2>
        <form onSubmit={loginUser}>
          <div className="mb-4">
            <label className="block  text-gray-300 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-6">
            <label className="block  text-gray-300 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3  text-gray-300 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
