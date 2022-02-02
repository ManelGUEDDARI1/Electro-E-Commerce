import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router';
import CheckoutSteps from '../components/CheckoutSteps';
import { savePaymentMethod } from '../actions/cartAction';
import '../style2.css';

const PaymentMethodScreen = () => {
    const navigate =useNavigate();
    const dispatch=useDispatch();
    const cart = useSelector((state) => state.cart);
    const {shippingAddress} = cart;
    const userSignIn = useSelector((state) => state.userSignIn);
    const { userInfo } = userSignIn;
    if (!shippingAddress.address) {
        navigate('/shipping');
    }

    const [paymentMethod, setPaymentMethod] = useState('PayPal')
    console.log('PAyment Select :'+ userInfo.name)
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(savePaymentMethod(paymentMethod));
        navigate('/placeorder');
    }
    return (
        <div>
            <CheckoutSteps step1 step2 step3/>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>Payment Method</h1>
                </div>
                <div>
                    <div>
                        <input type="radio" id="paypal" value="PayPal" name="paymentMethod" required checked onChange={(e)=> setPaymentMethod(e.target.value)}>
                        </input>
                        <label htmlFor="paypal">PayPal</label>
                    </div>
                </div>
                {/* <div>
                    <div>
                        <input type="radio" id="stripe" value="Stripe" name="paymentMethod" required  onChange={(e)=> setPaymentMethod(e.target.value)}>
                        </input>
                        <label htmlFor="stripe">Stripe</label>
                    </div>
                </div> */}
                <div>
                    <button className="primary" type="submit">Continue</button>
                </div>

            </form>
        </div>
    )
}

export default PaymentMethodScreen
