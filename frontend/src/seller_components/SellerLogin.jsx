import React from 'react'
import { useState } from 'react'

function SellerLogin() {
  return (
    <>
      <div className="container-fluid d-flex justify-content-center align-items-center">
      
      
      <div className="seller-login-card shadow-lg p-3 mb-5 bg-white rounded" >
        <div className="card-body">
          
          <h2 className="card-title text-center mb-4">Login</h2>
          
          
          <form>
            
            <div className="mb-3">
              <input 
                type="text" 
                className="form-control p-2" 
                id="userInput" 
                placeholder="Please Enter Username" name='username'
                required
              />
            </div>
            
            <div className="mb-4">
              <input 
                type="password" 
                className="form-control p-2" 
                id="passwordInput" name='password' placeholder='Please Enter Password'
                required
              />
            </div>
                    
            
            <div className="d-grid">
              <button type="submit" className="btn btn-primary btn-lg">
                Sign In
              </button>
            </div>
            
            {/* <div className="text-center mt-3">
              <a href="#" className="text-muted">Forgot Password?</a>
            </div> */}
            
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default SellerLogin
