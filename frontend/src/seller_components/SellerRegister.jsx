import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function SellerRegister() {

  const [values, setValues] = useState({
    name: '',
    phone: '',
    business: '',
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handelInput = (e) => {
    setValues(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  const handelSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3000/seller/register", values)
      .then(res => {
        if(res.data.Status === "Success"){
            alert("Registration Successful!");
            navigate('/seller/login');
        } else {
          alert("Error:" + res.data.error);
        }
      })
      .catch(err => console.log(err));
  }

  return (
    <>
      <>
      <div className="container-fluid d-flex justify-content-center align-items-center">
      
      <div className="seller-login-card shadow-lg p-3 mb-5 bg-white rounded" >
        <div className="card-body row col-12">
          
          <h2 className="card-title text-center mb-4">Registartion Form</h2>
          
          
          <form onSubmit={handelSubmit}>
            
            <div className='row'>
              <div className="mb-3 col-6">
                  <input type="text" className="form-control p-2" name='name' placeholder='Enter Full Name' onChange={handelInput} required />
              </div>

              <div className="mb-3 col-6">
                  <input type="text" className="form-control p-2" placeholder='Enter Phone Number' name='phone' onChange={handelInput} required />
              </div>

              <div className="mb-3 col-6">
                  <input type="text" className="form-control p-2" placeholder='Enter Business Name' name='business' onChange={handelInput} required />
              </div>

              <div className="mb-3 col-6">
                  <input type="email" className="form-control p-2" placeholder='Enter Email Address' name='email' onChange={handelInput} required />
              </div>

              <div className="mb-4 col-6">
                  <input type="password" className="form-control p-2" placeholder='Enter Password' name='password' onChange={handelInput}  required />
              </div>

              <div className="d-grid">
                  <button type="submit" className="btn btn-primary btn-lg">
                      Register Seller
                  </button>
              </div>
            </div>
            
          </form>
        </div>
      </div>
    </div>
    </>
    </>
  )
}

export default SellerRegister
