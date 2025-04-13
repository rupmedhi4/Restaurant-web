import React from 'react'
import Cart from '../UI/Cart'
import './CartItems.css'
import Item from './Item'

export default function CartItems() {
  const meals = [
    {
      meal: "Chicken Biryani",
      description: "Spicy basmati rice cooked w.",
      price: 250
    },
    {
      meal: "Paneer Butter Masala",
      description: "Soft paneer cubes in rich ",
      price: 180
    },
    {
      meal: "Veg Thali",
      description: "Complete vegetarian.",
      price: 200
    },
    {
      meal: "Egg Curry",
      description: "Boiled eggs cook.",
      price: 150
    },
    {
      meal: "Masala Dosa",
      description: "South Indian crispying.",
      price: 120
    },
    {
      meal: "Chole Bhature",
      description: "Deep-fried fluffy bha",
      price: 130
    },
  ]

  return (
    <div className='items-div'>
      <Cart bg="#fff" width='60%'>
        {
          meals.map((item, index) => {
            return (
              <div key={index} style={{ marginLeft: "2rem" }}>
                <Item
                  title={item.meal}
                  description={item.description}
                  price={item.price}
                  id={index}
                />
                <hr />
              </div>
            )
          })
        }
      </Cart>
    </div>
  );
}
