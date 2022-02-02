import React, {useState, useEffect} from 'react';
import { useLocation, useNavigate,Link} from 'react-router-dom';
import {register} from '../actions/userActions';
import {useDispatch,useSelector} from 'react-redux';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import '../style2.css';



const RegisterScreen = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const redirect = location.search
    ? location.search.split('=')[1]
    : '/';

  const userRegister = useSelector((state) => state.userRegister);
  const { userInfo, loading, error } = userRegister;

    const dispatch = useDispatch ();
    const submitHandler = (e) => {
        e.preventDefault(); // when user click submit the page no refresh using ajax
        // TODO sign in action
        if (password !== confirmPassword) {
            alert ('password and confirmPassword not match');
        } else {
        dispatch (register(name,email,password))
    }}
    useEffect(() => {
        if (userInfo) {
          navigate(redirect);
        }
      }, [navigate, redirect, userInfo]);
    return (
        <div>
            <form className="form" onSubmit={submitHandler} >
                <div>
                    <h1> Create Account </h1>
                </div>
                {loading && <LoadingBox></LoadingBox>}
        {error && <MessageBox variant="danger">{error}</MessageBox>}
                <div>
                    <label htmlFor="name" > Name </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Enter name"
                      required
                      onChange= {(e) => setName(e.target.value)}
                    >
                    </input>
                </div>
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
                <label htmlFor="confirmPassword" > Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  placeholder="Enter confirmPassword"
                  required
                  onChange= {(e) => setConfirmPassword(e.target.value)}
                >
                </input>
            </div>
                <div>
                    <label/>
                    <button className="primary" type="submit" >Register</button>
                </div>
                <div>
                    <label/>
                    <div>
            Already have an account?{' '}
            <Link to={`/signin?redirect=${redirect}`}>Sign-In</Link>
          </div>
                </div>

            </form>
        </div>
    )
}

export default RegisterScreen
