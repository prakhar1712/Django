import React, { useState,useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const CreateTaskPage = () => {

  const navigate = useNavigate()
  const {authToken} = useContext(AuthContext)
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      title,
      description,
    };
    
    try {
      const response = await fetch('http://127.0.0.1:8000/task/create/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization' : 'Bearer ' + String(authToken)
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Task Has been Created succesfully")
        navigate('/viewtask')
        
      } else {
        alert("Task Cannot be created")
      }
    } catch (error) {
      alert("server issues")
    }
  };

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4">Create Task</h2>
      <div className=' bg-blue-500'>
      <form onSubmit={handleSubmit} className=" w-96">
        <div className="mb-4 p-4">
          <label htmlFor="title" className="text-sm font-bold mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 rounded border-gray-300 focus:border-blue-500 focus:outline-none"
          />
        </div>
        <div className="mb-4 p-4">
          <label htmlFor="description" className="text-sm font-bold mb-2">
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-2 rounded border-gray-300 focus:border-blue-500 focus:outline-none"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Create Task
        </button>
      </form>
      </div>
    </div>
  );
};

export default CreateTaskPage;

