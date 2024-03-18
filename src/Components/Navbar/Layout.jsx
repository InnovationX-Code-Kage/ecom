import React, { useState, useContext, useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom';
import logo from './logo.png'
import cart from './cart.png'
import search from './search.png'
import Modal from './Modal';
import { ShopContext } from '../Context/ShopContext'
import Login from '../Dashboard/Login';



const Layout = () => {

  const { getCartLength } = useContext(ShopContext);
  const len = getCartLength();


  const [isOpen, setIsOpen] = useState(false);
  const [lisOpen, lsetIsOpen] = useState(false);


  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.ctrlKey && event.key === 'm') {
        setIsOpen(true);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);



  return (
    <div className='nav_main'>
        </div>
        <div className='right-menu'>
          <button className='r-m-btn' onClick={() => setIsOpen(true)} style={{ width: '100px', display: 'flex', alignItems: 'center' }}>
            <img src={search} alt="" width='20px' style={{ marginRight: '5px' }} />
            <span>Search...</span>
          </button>
          <Modal open={isOpen} onClose={() => setIsOpen(false)}>
          </Modal>
          <div className='cartdiv'>
            <Link to='/Cart' className='divert'>
              <p className='cartlen'></p>
              <img src={cart} alt="" className='cartlogo' style={{ width: '50px', height: '50px' }} />
            </Link>
          </div>

        </div>
      </div>
      <Outlet />
    </div>
  )
}

export default Layout