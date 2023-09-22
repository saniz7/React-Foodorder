import React from 'react'
import './Input.css';

const Input = () => {
  return (
    <div className='Input-content'>
        <div>
        <label>Amount</label>
        <input defaultValue={1}/>
        </div>
        <button>+ Add</button>
    </div>
  )
}

export default Input