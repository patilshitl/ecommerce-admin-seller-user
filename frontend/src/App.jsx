import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import AdminLogin from './Components/Admin/AdminLogin'
import AdminDashboard from './Components/Admin/AdminDashboard'
import SellerLogin from './Components/Seller/SellerLogin'
import SellerDashboard from './Components/Seller/SellerDashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/admin/login" element={<AdminLogin />}/>
        <Route path="/admin/dashboard" element={<AdminDashboard />}/>

        <Route path="/seller/login" element={<SellerLogin />} />
        <Route path="/seller/dashboard" element={<SellerDashboard />} />
      </Routes>
    </>
  )
}

export default App
