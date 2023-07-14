import React from "react";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

function HomePage() {

    let {user,role} = useContext(AuthContext)

  return <div>HomePage
    {
        user ? (
            <div>Hello {user} and you role is {role}</div>
        ) : (
            <div>No user Registered</div>
        )
    }
  </div>;
}

export default HomePage;
