import React,{useState,useEffect,useContext} from "react";
import AuthContext from "../context/AuthContext";

function ViewTaskPage() {
  let [tasks,settasks] = useState([])
  let {authToken} = useContext(AuthContext)
  useEffect(() => {
    getTask()
  },[])

  let getTask = async() => {
    let response = await fetch('http://127.0.0.1:8000/task/get', {
      method:'GET',
      headers:{
        'Content-Type':'application/json',
        'Authorization' : 'Bearer ' + String(authToken)
      }
    })
    let data = await response.json()
    settasks(data)
  }

  return <div>
    <p>You are on Task Page</p>

    {tasks.map((task) => (
        <div key={task.id}>
         <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-bold mb-2">{task.title}</h3>
            <p className="text-gray-600">{task.description}</p>
        </div>
        </div>
        
      ))}
  </div>;
}

export default ViewTaskPage;