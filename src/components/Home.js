import React, { useEffect, useState } from 'react';
import '../App.css';

export const Home = () => {

  const [homeData , setHomeData] = useState('');
  const [show , setShow] = useState(false);

  const HomePage = async () => {
    try{
      const res = await fetch('/getdata', {
        method:"GET",
        headers:{
          Accept:"application",
          "Content-type":"application/json"
        },
        credentials:"include",
      });
      const data = await res.json();
      setHomeData(data);
      setShow(true);
      // if(!res.status === 200){
      //   const error = new Error(res.error);
      //   throw error;
      // }
    }catch(err){
      console.log(err);
    }
  }

  useEffect(() =>{
    HomePage()
  },[]);
  return (
    <>
      <p id='top'>Welcome</p>
      <div className='home justify-content-center'>
        <h1>{homeData.name} <br /> {homeData.work}</h1><br /><br /><br /><br /><br />
        <h1>{show ? 'Happy to See You BAck' : 'We Are The MERN Developer' }</h1>
      </div>
    </>
  )
};


export default Home;