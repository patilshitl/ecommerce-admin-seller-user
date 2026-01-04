import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';

function AdminDashboard() {
  return (
    
      <div className="row">
        
        {/* Sidebar: Fixed to the left */}
        <nav className="col-md-3 col-lg-2 d-md-block bg-dark sidebar min-vh-100 p-0">
          <AdminSidebar />
        </nav>

        {/* Main Content: Dynamic area on the right */}
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 bg-light min-vh-100">
          <div className="pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">Admin Panel</h1>
          </div>
          
          {/* CONTENT CHANGES HERE */}
          <Outlet /> 
          
        </main>

      </div>

  );
}

export default AdminDashboard;