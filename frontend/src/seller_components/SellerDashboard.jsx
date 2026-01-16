import React from 'react'
import SellerSidebar from './SellerSidebar'
import { Outlet } from 'react-router-dom'

function SellerDashboard() {
  return (
    <>
      
        <div className="row">
                
                {/* Sidebar Column */}
                <nav className="col-md-3 col-lg-2 d-md-block bg-dark sidebar min-vh-100 p-0">
                <SellerSidebar />
                </nav>

                {/* Main Content Column */}
                <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 bg-light min-vh-100">
                {/* <div className="pt-3 pb-2 mb-3 border-bottom">
                </div> */}

                <Outlet />
                </main>

        </div>
    </>
  )
}

export default SellerDashboard
