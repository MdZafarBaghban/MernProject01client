import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import '../App.css';

const Signup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name:"",email:"",phone:"",work:"",password:"",cpassword:"",
  });
  let name ,value;
  const handleInputs = (e) =>{
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser({...user, [name]:value});
  }

  const postData = async (event) => {
    event.preventDefault();
    const {name , email , phone , work , password , cpassword} = user;
    const res = await fetch("/register",{
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body:JSON.stringify({
        name , email , phone , work , password , cpassword
      })
    });
    const data = await res.json();
    if(data.status === 422 || !data ){
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    }else{
     window.alert("Registration Successfull");
      console.log("Registration Successfull");

      navigate("/login");
    }
  }
  return (
    <>
      <div className='signup'>
        <div className='main'>
            <div className='register'>
                <h2>Register Here</h2>
                <form method='POST' id='register-form'>
                            <ul className="nav nav-tabs nav-justified" id="myTab" role="tablist">
                                    <li className="nav-item">
                                        <a to='/signup' className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Register</a>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/login" className="nav-link bg-success" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Login</NavLink>
                                    </li>
                                </ul>
                    <label>Full Name</label>
                    <br/>
                    <input className='inp' type="text" name="name" id="name" placeholder="Enter Your Full Name" autoComplete='off' value={user.name}
                      onChange={handleInputs}
                    />
                    <br /><br />
                    <label>Email :</label>
                    <br />
                    <input className='inp' type="Email" name="email" id="email" placeholder="Enter Your Valid Email " autoComplete='off' value={user.email}
                      onChange={handleInputs}
                    />
                    <br /><br />
                    <label>Your Phone :</label>
                    <br />
                    <input className='inp' type="number" name="phone" id="phone" placeholder="Phone Number" autoComplete='off' value={user.phone}
                      onChange={handleInputs}
                    />
                    <br /><br />
                    <label>Professin</label>
                    <br/>
                    <input className='inp' type="text" name="work" id="work" placeholder="Enter Your Profession" autoComplete='off' value={user.work}
                      onChange={handleInputs}
                    />
                    <br /><br />
                    <label>password</label>
                    <br/>
                    <input className='inp' type="password" name="password" id="password" placeholder="Password" autoComplete='off' value={user.password}
                      onChange={handleInputs}
                    />
                    <br /><br />
                    <label>Confirm password</label>
                    <br/>
                    <input className='inp' type="password" name="cpassword" id="cpassword" placeholder="Confirm Password" autoComplete='off' value={user.cpassword}
                      onChange={handleInputs}
                    />
                    <br /><br />
                    <input className='btns' type="submit" value="register" name="Signup" id="Signup" onClick={postData}/>
                </form>
            </div>{/* end register */}
        </div>{/* end main div */}
      </div>
        
    </>
  )
}



export default Signup;