import React from 'react'
import Cart from '../UI/Cart'
import './Summary.css'

export default function Summary() {
  return (
    <Cart bg='#3f3f3f' color="#fff" shadow=" 0 8px 20px 3px #000">
      <h1>Delicious Food, Delivered To You</h1>
      <p>Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home.</p>
      <p>All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!</p>
    </Cart>
  )
}
