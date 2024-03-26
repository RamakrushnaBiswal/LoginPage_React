import React from "react";
import { useNavigate } from "react-router-dom";
function Home() {   
    const navigate = useNavigate()
    return (
        <div className="d-flex justify-content-center bg-light ">
            <div className="bg-white p-3 rounded">
                <h2 className="text-center">Welcome Bro💥</h2>
                <img src="/Hello-pana.png" alt="" className="w-25 img-fluid h-60 d-block mx-auto"/>
            </div>  
        </div>
    )
}

export default Home;