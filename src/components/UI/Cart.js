import React from 'react'
import './Cart.css'

export default function Cart({ children, bg, color, shadow=null,   width= "50%"}) {
  const style = {
    background: bg,
    color: color,
    boxShadow: shadow,
    width: width
  }

  return (
    <div className='main-cart' style={style}>
      {children}
    </div>
  )
}
