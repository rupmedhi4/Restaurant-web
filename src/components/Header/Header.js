import React from 'react'
import Button from '../UI/Button'
import './Header.css'

export default function Header() {
  const fun = () => {
    alert("hello")
  }
  return (
    <div className='header'>
      <div className='header-div'>
        <h1>ReactMeals</h1>
        <Button onClick={fun}>
          <span>Your Cart~</span>
          <div className='badge'>0</div>
        </Button>
      </div>

    </div>
  )
}
