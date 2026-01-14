import React from 'react'

function SellerRegister() {
  return (

    

    <>
      <>
      <div className="container-fluid d-flex justify-content-center align-items-center">
      
      
      <div className="seller-login-card shadow-lg p-3 mb-5 bg-white rounded" >
        <div className="card-body row col-12">
          
          <h2 className="card-title text-center mb-4">Registartion Form</h2>
          
          
          <form>
            
            <div className='row'>
              <div className="mb-3 col-6">
                  <input type="text" className="form-control p-2" name='name' placeholder='Enter Full Name' required />
              </div>

              <div className="mb-3 col-6">
                  <input type="text" className="form-control p-2" placeholder='Enter Phone Number' name='number' required />
              </div>

              <div className="mb-3 col-6">
                  <input type="text" className="form-control p-2" placeholder='Enter Business Name' name='business' required />
              </div>

              <div className="mb-3 col-6">
                  <input type="email" className="form-control p-2" placeholder='Enter Email Address' name='email' required />
              </div>

              <div className="mb-4 col-6">
                  <input type="password" className="form-control p-2" placeholder='Enter Password' name='password'  required />
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
