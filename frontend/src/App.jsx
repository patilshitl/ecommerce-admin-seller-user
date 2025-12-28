import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AdminLogin from './admin_components/AdminLogin'
import {Routes, Route} from 'react-router-dom'
import AdminDashboard from './admin_components/AdminDashboard'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/admin/login" element={<AdminLogin/>}/>
        <Route path="/admin/dashboard" element={<AdminDashboard/>}/>
      </Routes>
    </>
  )
}

export default App
