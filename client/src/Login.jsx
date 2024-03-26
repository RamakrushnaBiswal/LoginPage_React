import React from "react";
import axios from "axios";
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
function Login() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:3000/login", {
            email,
            password
        }).then((res) => {
            navigate("/home")
            console.log(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }
 
    return (
        <div className="d-flex justify-content-center align-items-center bg-light vh-100 ">
            <div className="bg-white p-3 rounded w-25 shadow">
                <h2 className="text-center">Log in</h2>
                <form action="" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label" onChange={(e) => setPassword(e.target.value)}>Password</label>
                        <input type="password" className="form-control" id="password" />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Log In</button>
                    <p className="mt-2">Don't have an account? <a href="/signup">Sign up</a></p>
                </form>
            </div>  
        </div>
    )
}

export default Login;