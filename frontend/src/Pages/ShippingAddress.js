import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import CheckoutSteps from '../components/CheckoutSteps'
import {saveShippingAddress} from '../actions/cartAction'
import { useNavigate } from 'react-router';
import '../style2.css';



const ShippingAddressScreen = () => {
    const navigate = useNavigate();
    //seulement les clients qui inscrit ,ils peuvent accéder au screen de payment alors il faut get signin from store
    const userSignIn = useSelector((state) => state.userSignIn);
    const { userInfo } = userSignIn;
    const cart = useSelector((state) => state.cart);
    const {shippingAddress } = cart;
    if (!userInfo) {
        navigate('/signin');
    };
    const [fullName, setFullName] = useState(shippingAddress.fullName);
    const [address , setAddress] = useState(shippingAddress.address);
    const [city, setCity] = useState(shippingAddress.city);
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
    const [country, setCountry] = useState(shippingAddress.country);

    const dispatch = useDispatch();
    console.log('Shipping : '+ userInfo)
   const submitHandler = (e) => {
       e.preventDefault();
       // fullName, address,... sta3melnehom direct mejebnehomch ml store 
       dispatch(saveShippingAddress({fullName, address, city, postalCode, country}));
       navigate('/payment');
       // TODO: dispatch save shipping address action
   }
    return (
        <div>
            <CheckoutSteps step1 step2 />
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>Shipping Address</h1>
                </div>
                 <div>
                     <label htmlFor="fullName">Full Name</label>
                     <input type="text" id="fullName" placeholder="Enter full name" value= {fullName} onChange={(e)=> setFullName(e.target.value)} required ></input>
                 </div>
                 <div>
                     <label htmlFor="address">Address</label>
                     <input type="text" id="address" placeholder="Enter address" value= {address} onChange={(e)=> setAddress(e.target.value)} required ></input>
                 </div>
                 <div>
                     <label htmlFor="city">City</label>
                     <input type="text" id="city" placeholder="Enter city" value= {city} onChange={(e)=> setCity(e.target.value)} required ></input>
                 </div>
                 <div>
                     <label htmlFor="postalCode">PostalCode</label>
                     <input type="text" id="postalCode" placeholder="Enter postalCode" value= {postalCode} onChange={(e)=> setPostalCode(e.target.value)} required ></input>
                 </div>
                 <div>
                     <label htmlFor="country">Country</label>
                     <input type="text" id="country" placeholder="Enter COUNTRY" value= {country} onChange={(e)=> setCountry(e.target.value)} required ></input>
                 </div>
                 <div>
                     <label />
                     <button className="primary" type="submit">Continue </button>
                 </div>
            </form>
        </div>
    )
}

export default ShippingAddressScreen
