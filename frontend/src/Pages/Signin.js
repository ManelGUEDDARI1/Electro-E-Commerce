import React, {useState, useEffect} from 'react';
import { useLocation, useNavigate,Link} from 'react-router-dom';
import {signin} from '../actions/userActions';
import {useDispatch,useSelector} from 'react-redux';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import '../style2.css';



const SigninScreen = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const redirect = location.search
    ? location.search.split('=')[1]
    : '/';

  const userSignIn = useSelector((state) => state.userSignIn);
  const { userInfo, loading, error } = userSignIn;

    const dispatch = useDispatch ();
    const submitHandler = (e) => {
        e.preventDefault(); // when user click submit the page no refresh using ajax
        // TODO sign in action
        dispatch (signin(email,password))
    }
    useEffect(() => {
        console.log('user: '+ userInfo)
        if (userInfo) {
          navigate(redirect);
        }
      }, [navigate, redirect, userInfo]);
    return (
        <div>
            <form className="form" onSubmit={submitHandler} >
                <div>
                    <h1> Sign In </h1>
                </div>
                {loading && <LoadingBox></LoadingBox>}
        {error && <MessageBox variant="danger">{error}</MessageBox>}
                <div>
                    <label htmlFor="email" > Email adress</label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Enter email"
                      required
                      onChange= {(e) => setEmail(e.target.value)}
                    >
                    </input>
                </div>
                <div>
                    <label htmlFor="password" > Password</label>
                    <input
                      type="password"
                      id="password"
                      placeholder="Enter password"
                      required
                      onChange= {(e) => setPassword(e.target.value)}
                    >
                    </input>
                </div>
                <div>
                    <label/>
                    <button className="primary" type="submit" >SignIn</button>
                </div>
                <div>
                    <label/>
                    <div>
                        New customer? <Link to={`/register?redirect=${redirect}`} >Create your account</Link>
                    </div>
                </div>

            </form>
        </div>
    )
}

export default SigninScreen
