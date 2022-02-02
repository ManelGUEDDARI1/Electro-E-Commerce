
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Link, Route, Routes, useParams, useNavigate} from 'react-router-dom'
import Cart from './Pages/Cart';
import Home from './Pages/Home';
import Product from './Pages/Product';
import { useDispatch, useSelector } from 'react-redux'
import Signin from './Pages/Signin';
import Register from './Pages/Register';
import { signout } from './actions/userActions';
import ShippingAddress from './Pages/ShippingAddress';
import PaymentMethod from './Pages/PaymentMethod';
import PlaceOrder from './Pages/PlaceOrder';
import Order from './Pages/Order';
import OrderHistory from './Pages/OrderHistory';
import Profile from './Pages/Profile';
import PrivateRoute from './components/PrivateRoute';
import AdminRoute from './components/AdminRoute'
import UserList from './Pages/UserList';
import UserEdit from './Pages/UserEdit';
import ProductList from './Pages/ProductList';
import ProductEdit from './Pages/ProductEdit';
import OrderList from './Pages/OrderList';
import Dashboard from './Pages/Dashboard';
import Search from './Pages/Search';
import { listProducts, productsDetails } from './actions/productActions';
import ContactUs from './Pages/ContactUs';


function App() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const userSignIn = useSelector((state) => state.userSignIn);
  const { userInfo } = userSignIn;
  const dispatch = useDispatch();
  const params = useParams();
  const { id: productId } = params;
     
  
  const signoutHandler = () => {
   dispatch(signout());};

       useEffect(() => {
         dispatch(listProducts({}));
       
       }, [dispatch])
       useEffect(() => {
       
           dispatch(productsDetails(productId));
         }, [dispatch, productId]);
 


  return (
    <BrowserRouter> 
<div className='App'>
           <header id="home" className="welcome-hero">
<div className="top-area">
  <div className="header-area">
    
      <nav className="navbar navbar-default bootsnav  navbar-sticky navbar-scrollspy"  data-minus-value-desktop="70" data-minus-value-mobile="55" data-speed="1000">
 

          <div className="container">            
            
              <div className="attr-nav">
                  <ul>
                    {/* <li className="search">
                      <a href="#"><span className="lnr lnr-magnifier"></span></a>
                    </li> */}
                    {userInfo ? (
                      <>
                      <li className="dropdown">
                       
                          <a href="/cart" className="dropdown-toggle" data-toggle="dropdown" >
                              <span className="lnr lnr-cart"></span>
                <span className="badge badge-bg-1">{cartItems.reduce((a, c) => a + parseInt(c.quantity), 0)}</span>
                          </a>
                          </li>
                          <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                  {userInfo.name} <span className="fa fa-user"></span>{' '}
                               </a> 
                               <div class="dropdown-menu dropdown-menu-right">
             <>                  
          <a href="/profile"> User Profile </a> <br/>
 
           <a href="/orderhistory">Order History</a> <br/>

           <a href="/" onClick={signoutHandler}>Sign Out</a>
           </>
         
                               </div>
                               </li> </>
                          ): (
                            <li className="dropdown"> <a href="/signin" className="dropdown-toggle" data-toggle="dropdown" ><span className="fa fa-user"></span>  Sign In</a></li>
       
 )}

{userInfo && userInfo.isAdmin && (
                      <>
                     
                          <li className="dropdown">
                                <a href="/admin" className="dropdown-toggle" data-toggle="dropdown">
                                  Admin <span className="fa fa-user"></span>
                               </a> 
                               <div class="dropdown-menu dropdown-menu-right">
             <>                  
          {/* <a href="/dashboard">Dashboard</a> <br/> */}
 
           <a href="/productlist">Products</a> <br/>
           <a href="/orderlist">Orders</a> <br/>
 
           <a href="/userlist">Users</a> 
 
           </>
         
                               </div>
                               </li> </>)}

                  </ul>
              </div>
              <div className="navbar-header">
                  <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu" onClick={() => setSidebarIsOpen(true)}>
                      <i className="fa fa-bars"></i> </button>
                                  
                  <Link className="navbar-brand" to="/"> <img src="images/Capture.png" alt="sliderimage" /></Link>
                
              </div>

                        <div className="collapse navbar-collapse menu-ui-design" id="navbar-menu">
                  <ul className="nav navbar-nav navbar-center" data-in="fadeInDown" data-out="fadeOutUp">
                    <>
                      <li >  <Link to="/">home</Link></li>
                      <li  ><a href="/#new-arrivals">products</a></li>
                      <li ><Link to="/ContactUs">Contact Us</Link></li>
                      </>
                  </ul>
              </div>
          </div>
      </nav>
     
  </div>
    <div className="clearfix"></div>

</div>

</header>

</div>
          
    <div>
    <Routes>
          <Route exact path="/" element={<Home />} />
          </Routes>
     
        <main>
       
          <Routes>
          {/* <Route exact path="/" element={<Home />} /> */}
            <Route path="/cart/:id" element={<Cart />} />
            <Route path="/cart/" element={<Cart />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Shipping" element={<ShippingAddress/>} />
            <Route path="/Payment" element={<PaymentMethod/>} />
            <Route path="/placeorder" element={<PlaceOrder/>} />
            <Route path="/product/:id" element={<Product />} exact />
            <Route path="/product/:id/edit" element={<ProductEdit/>} exact />
            <Route path="/order/:id" element={<Order/>} />
            <Route path="/ContactUs" element={<ContactUs/>} />
            <Route path="/orderhistory" element={<OrderHistory/>} />
            <Route path="/search/name/:name?" element={<Search/>} exact />
           {/* <Route path="/search/name" element={<Search />} exact/> */}
           <Route path="/search/category/:category" element={<Search/>} exact />
           <Route path="/search/category/:category/name/:name" element={<Search/>} exact />
           <Route path="/search/category/:category/name/:name/min/:min/max/:max/rating/:rating/order/:order" element={<Search/>} exact />
            <Route path="/profile" element={ <PrivateRoute> <Profile /></PrivateRoute>}/>
            <Route path="/productlist" element={ <AdminRoute> <ProductList /></AdminRoute>}/>
            <Route path="/userlist" element={ <AdminRoute> <UserList /></AdminRoute>}/>
            <Route path="/user/:id/edit" element={ <AdminRoute> <UserEdit /></AdminRoute>}/>
            <Route path="/orderlist" element={<AdminRoute>  <OrderList/> </AdminRoute>}/>
            <Route path="/dashboard" element={<AdminRoute>  <Dashboard/> </AdminRoute>}/>
            
            </Routes>
        </main>


        <footer id="footer"  className="footer">
          <div className="container">
            <div className="hm-footer-copyright text-center">
              <div className="footer-social">
                <a href="https://www.facebook.com/manel.gueddarii/"><i className="fa fa-facebook"></i></a>	
                <a href="https://www.instagram.com/manel_gueddari/"><i className="fa fa-instagram"></i></a>
                <a href="https://www.linkedin.com/in/manel-gueddari/"><i className="fa fa-linkedin"></i></a>
              </div>
              <p>
                &copy;Copyright © 2021-présent Electro, Inc. Tous droits réservés. 
              </p>
            </div>
          </div>

          <div id="scroll-Top">
            <div className="return-to-top">
              <i className="fa fa-angle-up " id="scroll-top" data-toggle="tooltip" data-placement="top" title="" data-original-title="Back to Top" aria-hidden="true"></i>
            </div>
            
          </div>
          </footer>
          </div>
      
      
    </BrowserRouter>
  );
}

export default App;

