import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function SellerLogin() {
  const [values, setValues] = useState({
    email: "",
    password: ""
  })
  const navigate = useNavigate();

  const handelSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3000/seller/login", values)
    .then(res => {
      if (res.data.Status === "Success") {
        localStorage.setItem('id', res.data.id);
        localStorage.setItem('username', res.data.name);

        navigate(`/seller/dashboard/${res.data.id}`)
      } else {
        alert(res.data.Error);
      }
    });
  };

  return (
    <>
      <div className="container-fluid d-flex justify-content-center align-items-center">
      
      
      <div className="seller-login-card shadow-lg p-3 mb-5 bg-white rounded" >
        <div className="card-body">
          
          <h2 className="card-title text-center mb-4">Login</h2>
          
          <form onSubmit={handelSubmit}>
            
            <div className="mb-3">
              <input 
                type="mail" 
                className="form-control p-2" 
                id="userInput" 
                placeholder="Please Enter Emial" name='email'
                onChange={e => setValues({...values, email: e.target.value})}
                required
              />
            </div>
            
            <div className="mb-4">
              <input 
                type="password" 
                className="form-control p-2" 
                id="passwordInput" name='password' placeholder='Please Enter Password' onChange={e => setValues({...values, password: e.target.value})}
                required
              />
            </div>
                    
            
            <div className="d-grid">
              <button type="submit" className="btn btn-primary btn-lg">
                Sign In
              </button>
            </div>
            
            
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default SellerLogin
