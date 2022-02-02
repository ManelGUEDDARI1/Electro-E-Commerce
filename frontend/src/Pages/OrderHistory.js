import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {useNavigate } from 'react-router';
import { listOrderMine } from '../actions/orderActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import '../style2.css';

const OrderHistoryScreen = () => {
    const navigate = useNavigate();
    const orderMineList = useSelector (state => state.orderMineList);
    const {loading, error, orders}= orderMineList;
    const dispatch=useDispatch();
    useEffect(()=> {
        dispatch(listOrderMine())
    },[dispatch]);
    return (
        <div>
            <h1>Order History</h1>
            {loading? <LoadingBox></LoadingBox>:
            error? <MessageBox variant="danger">{error}</MessageBox>
            :
            (
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>TOTAL</th>
                            <th>PAID</th>
                            <th>DELIVERED</th>
                            <th>ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order)=>( // map convert the object to jsx
                           // for each tr we need to set a key 
                             <tr key={order._id}> 
                               <td>{order._id}</td>
                               {/* <td>{order.created}</td> */}
                               <td>{order.totalPrice.toFixed(2)}</td>
                               <td>{order.isPaid ? order.paidAt.subString(0.10): 'No'}</td>
                               <td>{order.isDelivered ? order.deliveredAt.subString(0.10): 'No'}</td>
                               <td>
                                   <button type="button" className="small" onClick={()=>navigate(`/order/${order._id}`)}>
                                         Details
                                   </button>
                               </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )
            }
        </div>
    )
}

export default OrderHistoryScreen
