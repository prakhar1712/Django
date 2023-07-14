import {createContext , useState ,useEffect } from 'react'
import React from "react";
import jwt_decode from 'jwt-decode'
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext()

export default AuthContext

export const AuthProvider = ({children}) => {
    const navigate = useNavigate()
    const [user,setuser] = useState(localStorage.getItem('accessToken') ? jwt_decode(JSON.parse(localStorage.getItem('accessToken'))).username : (null))
    const [authToken,setauthToken] = useState(localStorage.getItem('accessToken') ? JSON.parse(localStorage.getItem('accessToken')) : (null))
    const [role,setrole] = useState(localStorage.getItem('accessToken') ? jwt_decode(JSON.parse(localStorage.getItem('accessToken'))).role : (null))

    let loginUser = async(e) => {
        e.preventDefault()
        fetch('http://127.0.0.1:8000/token/', {
            method:'POST',
            headers:{
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({username:e.target.username.value,password:e.target.password.value})
        })
        .then((response) => {
            if (response.status === 200) {
                return response.json();
            } 
            else {
                alert('Request failed with status ' + response.status);
            }
        })
        .then((data) => {
            setauthToken(data.access)
            const decoded = jwt_decode(data.access)
            setuser(decoded.username)
            setrole(decoded.role)
            localStorage.setItem('accessToken',JSON.stringify(data.access))
            navigate('/')
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

    let logout = () => {
        setauthToken(null)
        setuser(null)
        localStorage.removeItem("accessToken")
        navigate('/login')
    }

    let context = {
        user :user,
        role : role,
        authToken: authToken,
        loginUser : loginUser,
        logout : logout
    }

    return(
        <AuthContext.Provider value={context} >
            {children}
        </AuthContext.Provider>
    )
}
