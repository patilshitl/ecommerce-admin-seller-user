import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function SellerSidebar() {

    const [sellerData, setSellerData] = useState(null);

    useEffect (() => {
        const id = localStorage.getItem('id');

        if (id) {
            axios.get(`http://localhost:3000/seller/dashboard/${id}`)
            .then(res => {
                if (res.data.Status === "Success") {
                    setSellerData(res.data.Data);
                }
            })
            .catch(err => console.log(err));
        }
    }, []);

  return (
    <>
          <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark h-100">
            <Link to="/seller/dashboard" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <span className="fs-4">Welcome, {sellerData.name}</span>
            </Link>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                <Link to="/seller/dashboard" className="nav-link text-white">
                    Dashboard
                </Link>
                </li>
                <li>
                <Link to="/seller/products" className="nav-link text-white">
                    Products
                </Link>
                </li>
                <li>
                <Link to="/seller/orders" className="nav-link text-white">
                    Orders
                </Link>
                </li>
            </ul>
            <button className="btn btn-danger w-100 mt-auto">Logout</button>
            </div>    
    </>
  )
}

export default SellerSidebar
