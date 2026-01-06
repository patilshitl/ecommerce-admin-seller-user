import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function AdminSidebar() {

  const [username, setUsername] = useState("Loading...");
  const navigate = useNavigate();

  useEffect(() => {
    const adminId = localStorage.getItem('adminId');

    if (adminId) {
      axios.get('http://localhost:5000/api/admin-get-user/${adminId}')
        .then(res => {
          setUsername(res.data.username);
          localStorage.setItem('username', res.data.username);
        })
        .catch(err => {
          console.error("fetch error:", err);
          setUsername("Admin");
        });
      } else {
        setUsername("Guest");
      }
    }, []);

  const handelLogout = async () => {

    const username = localStorage.getItem("adminUser");
    
    // 🔍 DEBUG LOG: Check your browser console (F12)
    console.log("Attempting logout for:", username); 

    if (!username) {
        console.error("No username found in localStorage!");
        // If it's missing, we still want to redirect the user
        localStorage.clear();
        navigate("/admin/login");
        return;
    }

    try{
      const res = await axios.post("http://localhost:3000/admin/logout", { username });

      if (res.data.success) {
        localStorage.clear();
        navigate("/admin/login");
      }
    }
    catch (err){
      console.error("Logout failed:", err);
      localStorage.clear();
      navigate("/admin/login");
    }
  };

  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark h-100">
      <Link to="/admin/dashboard" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
        <span className="fs-4">Welcome, {username}</span>
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
      <button onClick={handelLogout} className="btn btn-danger w-100 mt-auto">Logout</button>
    </div>
  );
}

export default AdminSidebar;