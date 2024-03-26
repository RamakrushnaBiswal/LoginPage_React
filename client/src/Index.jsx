import React from "react";
import { useNavigate } from "react-router-dom";

export default function Index() {
    const navigate = useNavigate();
    return (
        <div>
            <h1 className="text-center mt-5 text-muted">Hi buddy💥</h1>

            <div className="text-center mt-5 d-flex justify-content-center me-5">
                <button
                    className="btn btn-primary"
                    onClick={() => {navigate("/login")}}>
                    Login
                </button>
                <button
                    className="btn btn-primary ms-3"
                    onClick={() => {navigate("/signup")}}>
                    Sign Up
                </button>
            </div>
        </div>
    );
}