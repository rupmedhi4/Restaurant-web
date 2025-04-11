import React from 'react'
import './Item.css'

export default function Item({ title, description, price }) {
  return (
    <div className='meal-main-div'>
      <div>
        <h3>{title}</h3>
        <span className='description'>{description}</span>
        <span style={{display:"block"}} className='meal-price'>${price}</span>
       
      </div>

      <div></div>
   
    </div>
  )
}
