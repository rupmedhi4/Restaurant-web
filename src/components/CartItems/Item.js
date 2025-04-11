import React, { useState } from 'react'
import './Item.css'
import Button from '../UI/Button'

export default function Item({ title, description, price }) {
  const [count, setCount] = useState(1)

  const handleChange = (e) => {
    setCount(Number(e.target.value));
  };

  return (
    <div className='meal-main-div'>
      <div>
        <h3>{title}</h3>
        <span className='description'>{description}</span>
        <span style={{ display: "block" }} className='meal-price'>${price}</span>
      </div>

      <div className='meal-child-div2'>
        <div>
          <h4>Amount</h4>
          <input
            type="number"
            value={count}
            min={1}
            onChange={handleChange}
          />
        </div>

        <Button>+Add</Button>
      </div>

    </div>
  )
}
