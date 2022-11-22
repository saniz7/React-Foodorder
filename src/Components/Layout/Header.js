import React,{Fragment} from 'react'
// import './Header.css';
import Meals from '../../Assets/meals.jpeg'
const Header = () => {
  return (
    <Fragment>
    <nav>
        <h1>Meals</h1>
        <button>Cart</button>
    </nav>
    <div>
        <img src={Meals} alt="Image"/>
    </div>
    </Fragment>
  )
}

export default Header