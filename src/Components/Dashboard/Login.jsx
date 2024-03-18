import React, { useState } from 'react';
import ReactDom from 'react-dom';
import { Link, Outlet } from 'react-router-dom';
import './login.css';
let udetails = [];
let udetailslength=Number(localStorage.getItem('loglength'));
if(udetailslength >0){
   udetails= JSON.parse(localStorage.getItem("loglist"))
   console.log("hi")

}

const Modal = ({ onClose, open, }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [errorMessage2, setErrorMessage2] = useState('');
  
  const handleregister = () => {
    udetails.push({ [username]: password });
    localStorage.setItem('loglist',JSON.stringify(udetails));
    localStorage.setItem('loglength',udetails.length);
    document.getElementById("userval").value="";
 	  document.getElementById("passval").value="";
  };
  function isKeyPresent(key, value) {
    for (let obj of udetails) {
      if (obj.hasOwnProperty(key)) {
        console.log(obj)
        if(obj[key]==value){
          
          return true;
        }else{
          setErrorMessage("")
          setErrorMessage2("*Incorrect Password")
        }
        
      }
    }
    return false;
  }
  const handleLogin = () => {
    if(isKeyPresent(username,password)){
      window.location.href = '/Dashpage';
    }else{
        setErrorMessage("Incorrect Username")
        setErrorMessage2("Incorrect Password")
      }
  }
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div className='overlay' />
      <div className='lmodal'>
        <div className='lmodal_top'>
          <p className="logi">LOGIN</p>
          <button onClick={onClose} className='close'>
            X
          </button>
        </div>
        <div className='userdiv'>
        <input type="text" name='address' placeholder='Enter Username' className='details-in' id="userval"value={username} onChange={(e) => setUsername(e.target.value)}  />
        <p className='error-message'>{errorMessage}</p>
        <input type="password" name='address' placeholder='Password' className='details-in' id="passval"value={password} onChange={(e) => setPassword(e.target.value)}  />
        <p className='error-message'>{errorMessage2}</p>
        <button onClick={handleLogin} className='login-btn'>Login</button>
        <button onClick={handleregister} className='register-btn'>Register</button>
        </div>
        
       
      
      </div>
    </>,
    document.getElementById('portal')
  );
};

export default Modal;
