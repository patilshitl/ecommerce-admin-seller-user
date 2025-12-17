import React from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function AdminSidebar() {
  return (
    <>
      <div className="sidebar-container bg-light border-end">
                {/* Sidebar Header */}
                <div className="sidebar-header p-3 text-center">
                    <h4 className="text-primary mb-0">Admin Dashboard</h4>
                </div>
                
                {/* Navigation Links using React-Bootstrap Nav */}
                <Nav className="flex-column p-3">
                    
                    {/* Dashboard Link */}
                    <Nav.Item>
                    {/* Link component from React Router DOM for SPA navigation */}
                    <Nav.Link as={Link} to="/admin/dashboard" className="text-dark">
                        <i className="bi bi-speedometer2 me-2"></i> Dashboard
                    </Nav.Link>
                    </Nav.Item>

                    {/* Products Link */}
                    <Nav.Item>
                    <Nav.Link as={Link} to="/admin/products" className="text-dark">
                        <i className="bi bi-box me-2"></i> Products
                    </Nav.Link>
                    </Nav.Item>

                    {/* Orders Link */}
                    <Nav.Item>
                    <Nav.Link as={Link} to="/admin/orders" className="text-dark">
                        <i className="bi bi-cart me-2"></i> Orders
                    </Nav.Link>
                    </Nav.Item>

                    {/* Users Link */}
                    <Nav.Item>
                    <Nav.Link as={Link} to="/admin/users" className="text-dark">
                        <i className="bi bi-people me-2"></i> Users
                    </Nav.Link>
                    </Nav.Item>

                    {/* Seller Link */}
                    <Nav.Item>
                    <Nav.Link as={Link} to="/admin/users" className="text-dark">
                        <i className="bi bi-people me-2"></i> Sellers
                    </Nav.Link>
                    </Nav.Item>
                    
                    {/* Separator */}
                    <hr className="my-2" />
                    
                    
                </Nav>
            </div>
    </>
  )
}

export default AdminSidebar
