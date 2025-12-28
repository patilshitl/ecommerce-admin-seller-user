import React from 'react';
import {useState} from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Admin_login() {
    const navigate = useNavigate();
    const [usename, setUsername] = useState();
    const [password, setPassword] = useState();

    const handelSubmit = async (e) => {
        e.preventDefault();

        try{
            const res = await axios.post(
                "http://localhost:5173/admin/login",
                {
                    username,
                    password
                }
            );

            if(res.data.success){
                navigate("admin/dashboard");
            }
            else{
                alert("Invalid username or password");
            }
        }
        catch (error){
            console.log(error);
            alert("Server error");
        }
    };

  return (
    // Container for centering the form vertically and horizontally
    <div className="container-fluid d-flex justify-content-center align-items-center">
      
      {/* Login Card */}
      <div className="admin-login-card shadow-lg p-3 mb-5 bg-white rounded" >
        <div className="card-body">
          
          <h2 className="card-title text-center mb-4">Admin Login</h2>
          
          {/* Login Form */}
          <form onSubmit={handelSubmit}>
            {/* Email/Username Field */}
            <div className="mb-3">
              <label htmlFor="userInput" className="form-label">Username : </label>
              <input 
                type="text" 
                className="form-control p-2" 
                id="userInput" 
                placeholder="username" name='username'
                required onChange={(e)=> setUsername(e.target.vale)}
              />
            </div>
            
            {/* Password Field */}
            <div className="mb-4">
              <label htmlFor="passwordInput" className="form-label">Password : </label>
              <input 
                type="password" 
                className="form-control p-2" 
                id="passwordInput" name='password'
                required onChange={(e)=> setPassword(e.target.value)}
              />
            </div>
                    
            
            {/* Submit Button */}
            <div className="d-grid">
              <button type="submit" className="btn btn-primary btn-lg">
                Sign In
              </button>
            </div>
            
            {/* Forgot Password Link (Optional) */}
            <div className="text-center mt-3">
              <a href="#" className="text-muted">Forgot Password?</a>
            </div>
            
          </form>
        </div>
      </div>
    </div>
  )
}

export default Admin_login;