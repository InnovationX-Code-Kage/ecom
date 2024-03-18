import React from 'react';
import logo from './logo1.png';

const FirstBody = () => {
  return (
    <div className='firstbody'>
      <div className="fb-card">
        <img src={logo} alt="" width='100px'/>
        <span className='fb-span-1'>Welcome to <span className='fb-span-blue-txt'>Foodzee</span> - Your Solution for Discounted Food Items!</span><br/>
        <span className='fb-span-body'>At Foodzee, we specialize in delivering high-quality food items that are nearing their expiration dates at unbeatable prices. Our mission is to reduce food waste while providing you with fantastic deals on fresh and delicious products. From pantry staples to gourmet treats, Foodzee has everything you need to enjoy great food without breaking the bank.</span>
      </div>
    </div>
  );
};

export default FirstBody;
