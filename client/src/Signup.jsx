import React from "react";
import axios from "axios";
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
function Signup() {

    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:3000/signup", {
            username,
            email,
            password
        }).then((res) => {
            navigate("/login") //for direct login after signup
            console.log(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }

    return (
        <div className="d-flex justify-content-center align-items-center bg-light vh-100 ">
            <div className="bg-white p-3 rounded w-25 shadow">
                <h2 className="text-center">Sign Up</h2>
                <form action="" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input type="text" className="form-control" id="username" aria-describedby="emailHelp" onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Sign Up</button>
                    <p className="mt-2">Already have an account? <a href="/login">Login</a></p>
                </form>
            </div>  
        </div>
    )
}

export default Signup;