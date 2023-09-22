import React, { Fragment } from 'react';
import Cart from '../Cart/cart';
// import './Header.css';
import Meals from '../../Assets/meals.jpeg';
import Navbar from '../Navbar';
const Header = () => {
  return (

    <Fragment>
      <Navbar />
      <div className='w-full h-screen object-cover'>
        <img src={Meals} alt='banner' className='object-cover h-full w-full' />
      </div>


    </Fragment>
  )
}

export default Header