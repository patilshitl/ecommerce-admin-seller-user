import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AdminLogin from './admin_components/AdminLogin'
import {Routes, Route} from 'react-router-dom'
import AdminDashboard from './admin_components/AdminDashboard'
import AdminOrdersList from './admin_components/AdminOrdersList'
import AdminProductsTable from './admin_components/AdminProductsTable'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/admin/login" element={<AdminLogin/>}/>
        {/* <Route path="/admin/dashboard" element={<AdminDashboard/>}/> */}

        {/* Child routes that show up in the <Outlet /> */}
        <Route path="/admin" element={<AdminDashboard />}>
          <Route path="dashboard"element={<div className="h3">Welcome to the Overview</div>} />
          <Route path="products" element={<AdminProductsTable />} />
          <Route path="orders" element={<AdminOrdersList />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
