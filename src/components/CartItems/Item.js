import React, { useState, useContext } from 'react'
import './Item.css'
import Button from '../UI/Button'
import { UserContext } from '../context/UserContext'

export default function Item({ title, description, price, id }) {
  const [amount, setAmount] = useState(1)
  const { addItem, setAddItem } = useContext(UserContext)

  const handleChange = (e) => {
    setAmount(Number(e.target.value));
  };

  const handleAdd = (id) => {
    let isItemExist = addItem.find((item, indx) => indx === id)
    isItemExist ?
      alert("Item is already added to your cart.")
      : setAddItem((prev) => {
        return [...prev, {
          title: title,
          description: description,
          price: price,
          amount: amount
        }]
      })
  };
  console.log(addItem);


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
            value={amount}
            min={1}
            onChange={handleChange}
          />
        </div>

        <Button onClick={() => handleAdd(id)}>+Add</Button>
      </div>

    </div>
  )
}
