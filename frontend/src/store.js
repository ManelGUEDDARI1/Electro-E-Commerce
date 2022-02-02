import {applyMiddleware,combineReducers,compose, createStore} from 'redux';
//import data from './data';
import thunk from 'redux-thunk'
import { cartReducer, } from './reducers/cartReducer';
import { orderCreateReducer, orderDeleteReducer, orderDeliverReducer, orderDetailsReducer, orderListReducer, orderMineListReducer, orderPayReducer, orderSummaryReducer } from './reducers/orderReducer';
import { productListReducer,productDetailsReducer, productCreateReducer, productUpdateReducer, productDeleteReducer, productCategoryListReducer } from './reducers/productReducers';
import {userSigninReducer,userRegisterReducer, userDetailsReducer, userUpdateProfileReducer, userListReducer, userDeleteReducer, userUpdateReducer} from './reducers/userReducer';
const initialState ={
    userSignIn: {
        userInfo : localStorage.getItem('userInfo')
        ? JSON.parse(localStorage.getItem('userInfo'))
        : null},
    cart : {
        cartItems : localStorage.getItem('cartItems')
        ? JSON.parse(localStorage.getItem('cartItems'))
        :[],

            shippingAddress :localStorage.getItem('shippingAddress')
            ? JSON.parse(localStorage.getItem('shippingAddress'))
            : {},
            paymentMethod : 'PayPal',
        },
    }

// const reducer = (state,action) => {
//     return {products : data.products}
// };
const reducer= combineReducers({
    productList: productListReducer, 
    productDetail: productDetailsReducer,
    cart: cartReducer,
    userSignIn: userSigninReducer,
    userRegister: userRegisterReducer,
    orderCreate: orderCreateReducer,
    orderDetails : orderDetailsReducer,
    orderPay : orderPayReducer,
    orderMineList : orderMineListReducer,
    userDetails:userDetailsReducer,
    userUpdateProfile : userUpdateProfileReducer,
    userUpdate: userUpdateReducer,
    userList : userListReducer,
    userDelete: userDeleteReducer,
    productCreate: productCreateReducer,
    productUpdate: productUpdateReducer,
    productDelete: productDeleteReducer,
    orderList: orderListReducer,
    orderDelete: orderDeleteReducer,
    orderDeliver: orderDeliverReducer,
    orderSummary: orderSummaryReducer,
    productCategoryList: productCategoryListReducer,
    
})

const store = createStore(reducer, initialState, compose(applyMiddleware(thunk)
     ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
export default store;