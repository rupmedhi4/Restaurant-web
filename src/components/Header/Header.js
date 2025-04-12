import React from 'react'
import Button from '../UI/Button'
import './Header.css'
import OrderCartButton from './OrderCartButton'

export default function Header() {
 
  return (
    <div className='header'>
      <div className='header-div'>
        <h1>ReactMeals</h1>
       <OrderCartButton/>
      </div>

    </div>
  )
}
