import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { detailUser, updateUserProfile } from '../actions/userActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { USER_UPDATE_PROFILE_RESET } from '../constants/userConstants';
import '../style2.css';

const ProfilScreen = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [sellerName, setSellerName] = useState('');
    const [sellerLogo, setSellerLogo] = useState('');
    const [sellerDescription, setSellerDescription] = useState('');
    const userSignIn = useSelector(state => state.userSignIn);
    const {userInfo} = userSignIn;
    const userDetails = useSelector(state => state.userDetails);
    const {loading,error,user} = userDetails;
    const userUpdateProfile = useSelector(state => state.userUpdateProfile);
    const {success: successUpdate, error:errorUpdate, loading:loadingUpdate}= userUpdateProfile;
    //{success: successUpdate, error:errorUpdate, loading:loadingUpdate} => ce sont the data from redux store 

    const dispatch= useDispatch();
    useEffect (()=> {
        if (!user){ // user=Null
            dispatch({type:USER_UPDATE_PROFILE_RESET}); // we need to reset successUpdate when we open prilescreen second time
            dispatch(detailUser(userInfo._id));
        } else {
            setName(user.name);
            setEmail(user.email);
            if (user.seller) {
                setSellerName(user.seller.name);
                setSellerLogo(user.seller.logo);
                setSellerDescription(user.seller.description);
              }
        }
      
    },[dispatch,userInfo._id,user]);
    const submitHandler=(e)=> {
         e.preventDefault();
         //dispatch update profile
         if (password !== confirmPassword) {
             alert('Password and Confirm Password Are Not Matched')
         } else {
             dispatch(updateUserProfile({userId:user._id, name, email, password, sellerName,  sellerLogo, sellerDescription}))
         }
    };
    return (
        <div>
           <form className="form" onSubmit={submitHandler}>
               <div>
                   <h1>User Profile</h1>
                   </div> 
                   {/* conditional rendering */}
                   { loading ? (<LoadingBox></LoadingBox>): error ? (<MessageBox variant="danger">{error}</MessageBox>):
                       (
                           <>
                           {loadingUpdate && <LoadingBox></LoadingBox>}
                           {errorUpdate && (<MessageBox variant="danger" >{errorUpdate}</MessageBox>)}
                           {successUpdate && (<MessageBox variant="success" >Profile Updated Successfully</MessageBox>)}
                           <div>
                               <label htmlFor="name">Name</label>
                               <input id="name" type="text" placeholder="Enter name" value={name} onChange={(e)=>setName(e.target.value)}>
                               </input>
                           </div>
                           <div>
                               <label htmlFor="email">Email</label>
                               <input id="email" type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)}>
                               </input>
                           </div>
                           <div>
                               {/* No need the value for password and confirmPassword because the user must enter it, ki  n5alliw lvalue nal9aw password par défaut */}
                               <label htmlFor="password">Password</label>
                               <input id="password" type="password" placeholder="Enter password" onChange={(e)=>setPassword(e.target.value)}>
                               </input>
                           </div>
                           <div>
                               <label htmlFor="confirmPassword">Confirm Password</label>
                               <input id="confirmPassword" type="confirmPassword" placeholder="Enter confirmPassword" onChange={(e)=>setConfirmPassword(e.target.value)} >
                               </input>
                           </div>
                           {user.isSeller && (
              <>
                <h2>Seller</h2>
                <div>
                  <label htmlFor="sellerName">Seller Name</label>
                  <input
                    id="sellerName"
                    type="text"
                    placeholder="Enter Seller Name"
                    value={sellerName}
                    onChange={(e) => setSellerName(e.target.value)}
                  ></input>
                </div>
                <div>
                  <label htmlFor="sellerLogo">Seller Logo</label>
                  <input
                    id="sellerLogo"
                    type="text"
                    placeholder="Enter Seller Logo"
                    value={sellerLogo}
                    onChange={(e) => setSellerLogo(e.target.value)}
                  ></input>
                </div>
                <div>
                  <label htmlFor="sellerDescription">Seller Description</label>
                  <input
                    id="sellerDescription"
                    type="text"
                    placeholder="Enter Seller Description"
                    value={sellerDescription}
                    onChange={(e) => setSellerDescription(e.target.value)}
                  ></input>
                </div>
              </>
            )}
                           <div>
                               <label/>
                               <button className="primary" type="submit">Update</button>
                           </div>
                           
                           </>
                       )
                   }
               </form> 
        </div>
    )
}

export default ProfilScreen
