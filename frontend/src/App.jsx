import './App.css'
import AdminLogin from './admin_components/AdminLogin'
import {Routes, Route} from 'react-router-dom'
import AdminDashboard from './admin_components/AdminDashboard'
import AdminOrdersList from './admin_components/AdminOrdersList'
import AdminProductsTable from './admin_components/AdminProductsTable'
import SellerLogin from './seller_components/SellerLogin'
import SellerRegister from './seller_components/SellerRegister'
import SellerDashboard from './seller_components/SellerDashboard'
import SellerProduct from './seller_components/SellerProduct'



function App() {

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

        <Route path='/seller/login' element={<SellerLogin />}/>
        <Route path='/seller/register' element={<SellerRegister />} />

        

        <Route path="/seller" element={<SellerDashboard />}>
          <Route path="dashboard/:id" element={<div className="h3">Welcome to the Overview</div>} />
          <Route path='products' element={<SellerProduct />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
