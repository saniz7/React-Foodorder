import React from 'react'

const Cart = () => {
    function opencart(){
        alert("Your file is being uploaded!")
        }
  return (
    <button type="button" onClick={opencart} class="btn btn-outline-secondary">Cart</button>
  )
}

export default Cart