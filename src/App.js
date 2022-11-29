import React, { createContext, useReducer } from 'react';
// import { render } from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';
import ErrorPage from './components/ErrorPage';
import Logout from './components/Logout';
import {initialState, reducer} from "../src/reducer/useReducer"


  export const UserContext = createContext();


  const Routing = () => {
    return (
      <Router>
        <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='contact' element={<Contact />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/login' element={<Login />} />
                <Route path='*' element={<ErrorPage />} />
                <Route path='/logout' element={<Logout />} />
            </Routes>
      </Router>
    )
  }


const App = () => {
    // const [state, dispatch] = useReducer(reducer, initialState, iniit);
    const [state, dispatch] = useReducer(reducer, initialState);


  return (

    <>
    <UserContext.Provider value={{state, dispatch}} >
        <Routing />
    </UserContext.Provider>
    </>
    
  );
};

export default App;