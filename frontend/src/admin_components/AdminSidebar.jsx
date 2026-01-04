import React from 'react';
import { Link } from 'react-router-dom';

function AdminSidebar() {
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark h-100">
      <Link to="/admin/dashboard" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
        <span className="fs-4">Admin Panel</span>
      </Link>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <Link to="/admin/dashboard" className="nav-link active text-white">
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/admin/products" className="nav-link text-white">
            Products
          </Link>
        </li>
        <li>
          <Link to="/admin/orders" className="nav-link text-white">
            Orders
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default AdminSidebar;