import React, { useEffect, useState } from 'react';
import '../App.css';


export const Contact = () => {

  const [userData , setUserData] = useState({
    name:"" , phone:"" , email:"" , message:"" 
  });


  const callAboutPage = async () => {
      try{
        const res = await fetch('/getdata', {
          method:"GET",
          headers:{
            "Content-Type": "application/json"
          },
        });

        const data = await res.json();
        console.log(data);
        setUserData({...userData, name:data.name , email:data.email , phone:data.phone});
        if(!res.status === 200){
          const error = new Error(res.error);
          throw error;
          
        }
      } catch (err) {
        console.log(err);
      }
    }
  useEffect(() => {
    callAboutPage();
  },[]);

  //we are storing data in states

    const handleInputs = (e) => {
      // console.log(e);
      const name = e.target.name;
      const value = e.target.value;

      setUserData({...userData, [name]:value });
    }



    
    //sending message data to backend

    const contactForm = async (e) => {
      e.preventDefault();

      const {name , email , phone ,message} = userData;

      const res = await fetch('/contact', {
        method:"POST",
        headers: {
          "Content-type": "application/json"
        },
        body:JSON.stringify({
          name, email, phone , message
        })
      });

      const data = await res.json();

      if(!data){
        console.log("message not Send");
      }else{
        alert("Message Send");
        setUserData({...userData, message:""});
      }
    }

  return (
    <>
      <div className='container-fluid justify-content-start pt-2'>
        <div className='row'>
          <div className='col-4 pt-1'>
          <div className="card">
              <div className="card-body rounded-pill">
                <blockquote className="blockquote mb-0">
                  <p>Phone Number</p>
                  <h6>+91 0847208472</h6>
                </blockquote>
              </div>
            </div>
          </div>
          <div className='col-4 pt-1'>
          <div className="card">
              <div className="card-body rounded-pill">
                <blockquote className="blockquote mb-0">
                  <p>Email</p>
                  <h6>tipu@tipu.com</h6>
                </blockquote>
              </div>
            </div>
          </div>
          <div className='col-4 pt-1'>
          <div className="card">
              <div className="card-body rounded-pill">
                <blockquote className="blockquote mb-0">
                  <p>Address</p>
                  <h6>Gulbarga Karnataka India</h6>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
        <div className='offset-1 clr mt-4'>
          <h3 className='text-center p-4'>Get In Touch</h3>
          <form method='POST' id='contact_form'>
            <div className="row justify-content-around">
          <div className="row g-3">
          <div className="col-sm">
            <input type="text" className="form-control rounded-pill" id='contact_form_name' onChange={handleInputs} name="name" value={userData.name} placeholder="Your Name" aria-label="City" />
          </div>
          <div className="col-sm">
            <input type="email" className="form-control rounded-pill" id='contact_form_email' onChange={handleInputs} name="email" value={userData.email} placeholder="Your Email" aria-label="State" />
          </div>
          <div className="col-sm">
            <input type="number" id='contact_form_number' className="form-control rounded-pill" onChange={handleInputs} name="phone" value={userData.phone} placeholder="Your Phone Number" aria-label="Zip" />
          </div>
        </div>
        </div>
          <div className="row offset-3 txt">
            <div className="col-6">
            <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label"></label>
            <textarea className="form-control" onChange={handleInputs} name="message" value={userData.message} placeholder='Message' id="exampleFormControlTextarea1" rows="8"></textarea>
            <div id='contact_form_button'>
              <button class="btn btn-primary mt-3" type="button" onClick={contactForm}><h4>Send Message</h4></button>
            </div>
          </div>
        </div>
        </div>
          </form>
        </div>
      </div>
    </>
  )
};


export default Contact;