import { CART_EMPTY } from '../constants/cartConstants';

const {USER_SIGNIN_REQUEST,USER_SIGNIN_SUCCES,USER_SIGNIN_FAILED, USER_SIGNOUT,USER_REGISTER_REQUEST,USER_REGISTER_SUCCES,USER_REGISTER_FAILED, USER_DETAILS_REQUEST, USER_DETAILS_FAILED, USER_DETAILS_SUCCES, USER_UPDATE_PROFILE_REQUEST, USER_UPDATE_PROFILE_SUCCESS, USER_LIST_REQUEST, USER_LIST_SUCCESS, USER_LIST_FAILED, USER_UPDATE_PROFILE_FAILED, USER_LIST_RESET, USER_DELETE_REQUEST, USER_DELETE_SUCCESS, USER_DELETE_FAILED, USER_UPDATE_SUCCESS, USER_UPDATE_FAIL} = require ('../constants/userConstants');
const axios = require ('axios');


export const signin = (email,password) => async (dispatch) => {
    dispatch ({type: USER_SIGNIN_REQUEST, payload: {email,password}});
    
    try {
        const {data} = await axios.post('/api/users/signin', {email,password});
        dispatch ({type: USER_SIGNIN_SUCCES, payload: data});
        localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (error) {
        dispatch ({ type : USER_SIGNIN_FAILED, payload: error.response && error.response.data.message ? error.response.data.message: error.message})
    }
}

export const register = (name,email,password) => async (dispatch) => {
    dispatch ({type: USER_REGISTER_REQUEST, payload: {name,email,password}});
    
    try {
        const {data} = await axios.post('/api/users/register', {name,email,password});
        dispatch ({type: USER_REGISTER_SUCCES, payload: data});
        dispatch ({type: USER_SIGNIN_SUCCES, payload: data});
        localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (error) {
        dispatch ({ type : USER_REGISTER_FAILED, payload: error.response && error.response.data.message ? error.response.data.message: error.message})
    }
}

export const signout = () => (dispatch) => {
    window.localStorage.removeItem('userInfo');
    window.localStorage.removeItem('cartItems');
   
    localStorage.removeItem('shippingAddress');
    dispatch ({type:USER_LIST_RESET});
    dispatch ({type: USER_SIGNOUT});
    dispatch ({type: CART_EMPTY});
}


export const detailUser = (userId) => async (dispatch, getState) => {
    // give the token from userSignIn
    const {userSignIn: {userInfo}} = getState();
    dispatch ({type: USER_DETAILS_REQUEST, payload: userId});
    try {
     // give data information from users backend
     const {data}= await axios.get(`/api/users/${userId}`,{
         headers:{ Authorization: `Bearer ${userInfo.token}`}
     });
     dispatch ({type: USER_DETAILS_SUCCES, payload:data})
    } catch (error) {
        const message = error.response && error.response.data.message ? error.response.data.message : error.message;
        dispatch ({type: USER_DETAILS_FAILED, payload:message})
    }
}

export const updateUserProfile = (user) => async(dispatch,getState) => {
    dispatch ({type: USER_UPDATE_PROFILE_REQUEST, payload:user});
    const {userSignIn: {userInfo}} = getState();
    try {
      const {data} = await axios.put(`/api/users/profile`, user, {
          headers: { Authorization : `Bearer ${userInfo.token}`}
      });
      dispatch ({type:USER_UPDATE_PROFILE_SUCCESS, payload: data});
      dispatch({type: USER_SIGNIN_SUCCES, payload: data}); // dispatch user signin because user name it comes from user signin 
      localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (error) {
        const message = error.response && error.response.data.message ? error.response.data.message : error.message;
        dispatch ({type: USER_UPDATE_PROFILE_FAILED, payload:message})
    }
}

export const listUsers = () => async(dispatch,getState) => {
    dispatch ({type: USER_LIST_REQUEST});
    const {userSignIn: {userInfo}} = getState();
    try {
      const {data} = await axios.get(`/api/users`, {
          headers: { Authorization : `Bearer ${userInfo.token}`}
      });
      dispatch ({type:USER_LIST_SUCCESS, payload: data});
    
    } catch (error) {
        const message = error.response && error.response.data.message ? error.response.data.message : error.message;
        dispatch ({type: USER_LIST_FAILED, payload:message})
    }
}

export const deleteUser = (userId) => async (dispatch, getState) => {
    dispatch({ type: USER_DELETE_REQUEST, payload: userId });
    const {
      userSignIn: { userInfo },
    } = getState();
    try {
      const { data } = await axios.delete(`/api/users/${userId}`, {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      });
      dispatch({ type: USER_DELETE_SUCCESS, payload: data });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: USER_DELETE_FAILED, payload: message });
    }
  };

  export const updateUser = (user) => async (dispatch, getState) => {
    dispatch({ type: USER_UPDATE_PROFILE_REQUEST, payload: user });
    const {
      userSignIn: { userInfo },
    } = getState();
    try {
      const { data } = await axios.put(`/api/users/${user._id}`, user, {
        headers: { Authorization: `Bearer ${userInfo.token}` },
      });
      dispatch({ type: USER_UPDATE_SUCCESS, payload: data });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: USER_UPDATE_FAIL, payload: message });
    }
  };