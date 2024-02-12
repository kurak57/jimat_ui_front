import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import {LoginUser, reset} from '../features/authSlice.js';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {user, isError, isSuccess, isLoading, message} = useSelector(
        (state) => state.auth
    );

    useEffect(()=>{
        if(user || isSuccess){
            navigate("/jimat_ui_front/dashboard")
        console.log('login sukses');
        }
        dispatch(reset());
    }, [user, isSuccess, dispatch, navigate]);

    const Auth = (e) => {
        e.preventDefault();
        dispatch(LoginUser({email, password}));
    }

  return (
    <section className="hero has-background-light is-success is-fullheight is-fullwidth">
      <div className="hero-body">
        <div className="container">
            <div className="columns is-centered">
                <div className="column is-4">
                    <form onSubmit={Auth} className='box'>
                        {isError && <p className='has-text-centered'>{message}</p>}
                        <h1 className='title is-2 has-text-black'>Sign In</h1>
                        <div className="field">
                            <label className='label'>Email</label>
                            <div className="control">
                                <input type="text" 
                                className="input" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                                placeholder='Email' />
                            </div>
                        </div>
                        <div className="field">
                            <label className='label'>Password</label>
                            <div className="control">
                                <input 
                                type="password" 
                                className="input"
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} 
                                placeholder='******' />
                            </div>
                        </div>
                        <div className="field mt-5">
                            <button type='submit' className="button is-success is-fullwidth">
                                {isLoading ? 'Loading...' : 'Login'}
                            </button>
                        </div>
                        <h3 className='label has-text-centered'>Or</h3>
                        <div className="field">
                        <NavLink to={"/jimat_ui_front/signup"}><button className="button is-success is-fullwidth">Sign Up</button></NavLink>
                        </div>
                    </form>
                </div>
            </div>
        </div>
      </div>
    </section>
)
}

export default Login