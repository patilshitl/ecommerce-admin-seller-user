<<<<<<< HEAD
import Admin_login from './admin_components/Admin_login'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {

  return (
    <>
        {/* <Admin_login /> */}
        {/* <BrowserRouter>
          <Routes>
            <Route path="/admin_login" element={<Admin_login />} />
          </Routes>
        </BrowserRouter> */}
=======
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
>>>>>>> master
    </>
  )
}

<<<<<<< HEAD
export default App
=======
export default App
>>>>>>> master
