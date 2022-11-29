import React, { useEffect, useState } from 'react';
import { useNavigate} from "react-router-dom";
import logo from '../components/images/zafytech.gif';
import './About.css';

export const About = () => {

  const navigate = useNavigate('');

  const [userData , setUserData] = useState('');


  const callAboutPage = async () => {
      try{
        const res = await fetch('/about', {
          method:"GET",
          headers:{
            Accept:"application/json",
            "Content-Type": "application/json"
          },
        //   headers: new Headers({
        //     'Accept': 'application/json',
        //     'custom-security':'XXXX',
        //     'Purchase-Code':'XXXXXXX',
        //     'Content-Type':'application/json',
        //     'Cache-Control':'max-age=640000'
        //  }),
          credentials: "include"//with this we can sending cookies to backend
        });

        const data = await res.json();
        console.log(data);
        setUserData(data);
        if(!res.status === 200){
          const error = new Error(res.error);
          throw error;
        }
      } catch (err) {
        console.log(err);
        navigate('/login');
      }
    }
  useEffect(() => {
    callAboutPage();
  },[]);
  return (
    <>
          <div className='container mt-50'>
          <form method='GET' className='frm justify-content-end'>
            <div className='row'>
              <div className='col-md-4'>
                 <div className='profile-img'>
                  <img className='img-fluid igm' src={logo} alt="Logo" />
                 </div>
              </div>{/* first col-4 div */}
              <div className='col-md-6'>
              <div className="warpper">
              <h5>zafy</h5>
              <h6>Web Developer</h6>
              <p className='profile-rating mt-3 mb-5'>RANKING : <span> 1/10</span></p>
                <input className="radio nav-link active" id="one" name="group" type="radio" checked />
                <input className="radio" id="two" name="group" type="radio" />
                {/* <input className="radio" id="three" name="group" type="radio" /> */}
                <div className="tabs">
                <label className="tab" id="one-tab" for="one">About</label>
                <label className="tab" id="two-tab" for="two">Skills</label>
                {/* <label className="tab" id="three-tab" for="three">Prerequisites</label> */}
                  </div>
                <div className="panels">
                <div className="panel" id="one-panel">
                  {/* <div className="panel-title">Why Learn CSS?</div> */}
                  <div className='row self-end'>
                    {/*left side url  */}
                    <div className='profile-work align'>
                      <p>WORK LINK </p>
                      <a href='https://www.youtube.com/watch?v=tq880uEYc14&list=PLwGdqUZWnOp3t3qT7pvAznwUDzKbhEcCc&index=35'> Go to Youtube</a>
                    </div>
                    {/* right side data toggle */}
                    <div className='col-md-8 pl-5' id='myTabContent'>
                      <div className='tab-pane fade show active' id='home'>
                        <div className='row mt-3'>
                          <div className='col-md-6'>
                            <label>
                            User ID
                            </label>
                          </div>
                          <div className='col-md-6'>
                            <p>
                              08472084720847208472
                            </p>
                          </div>
                        </div>
                        <div className='row mt-3'>
                          <div className='col-md-6'>
                            <label>
                            Name
                            </label>
                          </div>
                          <div className='col-md-6'>
                            <p>
                              {userData.name}
                            </p>
                          </div>
                        </div>
                        <div className='row mt-3'>
                          <div className='col-md-6'>
                            <label>
                            Email
                            </label>
                          </div>
                          <div className='col-md-6'>
                            <p>
                              {userData.email}
                            </p>
                          </div>
                        </div>
                        <div className='row mt-3'>
                          <div className='col-md-6'>
                            <label>
                            phone
                            </label>
                          </div>
                          <div className='col-md-6'>
                            <p>
                              {userData.phone}
                            </p>
                          </div>
                        </div>
                        {/* <div className='row mt-3'>
                          <div className='col-md-6'>
                            <label>
                            Name
                            </label>
                          </div>
                          <div className='col-md-6'>
                            <p>
                              Zafy
                            </p>
                          </div>
                        </div> */}
                        <div className='row mt-3'>
                          <div className='col-md-6'>
                            <label>
                            Work
                            </label>
                          </div>
                          <div className='col-md-6'>
                            <p>
                              {userData.work}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <p>Without CSS, every web page would be drab plain text and images that flowed straight down the page. With CSS, you can add color and background images and change the layout of your page — your web pages can feel like works of art!</p> */}
                </div>
                <div className="panel" id="two-panel">
                  {/* <div className="panel-title">Take-Away Skills</div> */}
                  <div className='tab-pane '>
                    <div className='row mt-2'>
                      <div className='col-md-6'>
                        <label>Exporience</label>
                      </div>
                      <div className='col-md-6'>
                        <p>Export</p>
                      </div>
                    </div>
                    <div className='row mt-3'>
                      <div className='col-md-6'>
                        <label>Hourly Rate</label>
                      </div>
                      <div className='col-md-6'>
                        <p>10$/hr</p>
                      </div>
                    </div>
                    <div className='row mt-3'>
                      <div className='col-md-6'>
                        <label>Exporience</label>
                      </div>
                      <div className='col-md-6'>
                        <p>Export</p>
                      </div>
                    </div>
                    <div className='row mt-3'>
                      <div className='col-md-6'>
                        <label>Exporience</label>
                      </div>
                      <div className='col-md-6'>
                        <p>Export</p>
                      </div>
                    </div>
                    <div className='row mt-3'>
                      <div className='col-md-6'>
                        <label>Exporience</label>
                      </div>
                      <div className='col-md-6'>
                        <p>Export</p>
                      </div>
                    </div>
                  </div>
                  {/* <p>You will learn many aspects of styling web pages! You’ll be able to set up the correct file structure, edit text and colors, and create attractive layouts. With these skills, you’ll be able to customize the appearance of your web pages to suit your every need!</p> */}
                </div>
                {/* <div className="panel" id="three-panel">
                  <div className="panel-title">Note on Prerequisites</div>
                  <p>We recommend that you complete Learn HTML before learning CSS.</p>
                </div>*/}
                </div> 
              </div>
              </div>{/* second col-6 div */}
              <div className='col-md-2 '>
                <input type="submit" ClassName="profbtn" value="Edit Profile" name="btnAddMore" />
              </div>{/* third col 2 */}
            </div>
          </form>
        </div>
    </>
  )
};


export default About;