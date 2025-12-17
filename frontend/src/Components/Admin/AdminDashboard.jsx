import React from 'react'
import SellerDataForAdmin from './SellerDataForAdmin'
import AdminSidebar from './AdminSidebar'

function AdminDashboard() {
  return (
    <>
        <div className='d-flex'>
            <div className='col-lg-4'>
                <AdminSidebar />
            </div>

            <div className='col-lg-8'>
                <SellerDataForAdmin />
            </div>

            
        </div>
        

    </>
  )
}

export default AdminDashboard
