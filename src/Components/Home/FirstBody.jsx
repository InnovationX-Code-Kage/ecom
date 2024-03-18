import React from 'react';
import logo from './logo1.png';

const FirstBody = () => {
  return (
    <div className='firstbody'>
      <div className="fb-card">
        <h1 className='welcome-text'>Welcome to <span className='fb-span-blue-txt'>Foodzee</span></h1>
        <div className="food-categories">
          <div className="category">
            <div className="circle"></div>
          </div>
          <div className="category">
            <div className="circle"></div>
          </div>
          <div className="category">
            <div className="circle"></div>
          </div>
          <div className="category">
            <div className="circle"></div>
          </div>
          <div className="category">
            <div className="circle"></div>
          </div>
          <div className="category">
            <div className="circle"></div>
          </div>
          <div className="category">
            <div className="circle"></div>
          </div>
          {/* Add more category divs as needed */}
        </div>
      </div>
    </div>
  );
};

export default FirstBody;