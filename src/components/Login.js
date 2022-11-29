import React, { useContext, useState } from 'react';
import '../App.css';
import { NavLink, useNavigate } from 'react-router-dom';

import {UserContext} from '../App';

export const Login = () => {
    const {state, dispatch} = useContext(UserContext);

    const [email ,setEmail] = useState('');
    const [password , setPassword] = useState('');
    const navigate = useNavigate();


        const loginUser = async (e) => {
            e.preventDefault();

            const res = await fetch('/signin' , {
                method:"POST",
                headers:{
                    "Content-type" : "application/json"
                },
                body:JSON.stringify({
                    email , password
                })
            });
            const data = res.json();
            if(res.status === 400 || !data){
                window.alert("Invalid Credentials");
                console.log("Invalid Credentials");
            } else {
                dispatch({type:"USER" , payload:true});
                window.alert("User login Successfull");
                console.log("User login Successfull");

                navigate("/");
            }
        }


  return (
    <div className='bgs'>
        <div className='container-fluid'>
            <form method='POST' className='form-control col-6 offset-3 bg-dark'>
            <ul className="nav nav-tabs nav-justified" id="myTab" role="tablist">
                                    <li className="nav-item">
                                        <NavLink to='/signup' className="nav-link bg-success" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Register</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <a to="/login" className="nav-link active bg-primary" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Login</a>
                                    </li>
                                </ul>
                    <div className="mb-2">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-2">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={loginUser} >Submit</button>
                </form>
            </div>
    </div>
    
  )
};


export default Login;



