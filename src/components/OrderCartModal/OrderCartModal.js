import React, { useContext, useState } from 'react';
import Modal from './../Modal/Modal';
import { UserContext } from './../context/UserContext';
import './OrderCartModal.css'
import Button from '../UI/Button';

export default function OrderCartModal() {
    const { isOpen, setIsOpen, addItem, setAddItem } = useContext(UserContext);

    const totalOrderPrice = addItem.reduce(
        (acc, curr) => acc + curr.price * curr.amount,
        0
    );

    const orderIncreaseHandler = (index) => {
        let updatedArr = addItem.map((item, i) => {
            if (i === index) {
                return { ...item, amount: item.amount + 1 }
            }
            return item
        })
        setAddItem(updatedArr)
    }
    const orderDecreaseHandler = (index) => {
        let updatedArr = addItem.map((item, i) => {
            if (i === index) {
                return { ...item, amount: item.amount - 1 }
            }
            return item
        })
        setAddItem(updatedArr)
    }

    const placeOrder =()=>{
        setAddItem([])
        setIsOpen(false)
        alert("Order placed successfully!")
    }

    return (
        <Modal>
            <div>
                {
                    addItem.map((item, index) => {
                        return (
                            <div key={index}>
                                <div className='orderItem-div'>
                                    <div>
                                        <h3>{item.title}</h3>
                                        <div className='orderItem-price'>
                                            <span>{item.price}</span>
                                            <span>x{item.amount}</span>
                                        </div>


                                    </div>
                                    <div>
                                        <button className='btn1' onClick={()=>orderDecreaseHandler(index)}>-</button>
                                        <button className='btn2' onClick={() => orderIncreaseHandler(index)}>+</button>
                                    </div>

                                </div>
                                <hr style={{ marginLeft: "2rem" }} />
                            </div>
                        )
                    })
                }
            </div>
            <div className='order-main-div'>
                <div className='total-amount-div'>
                    <h3>Total Amount</h3>
                    <span>{totalOrderPrice.toFixed(2)}</span>
                </div>
                <div className='order-btn'>
                    <Button onClick={() => setIsOpen(!isOpen)}>Close</Button>
                    <Button onClick={() => placeOrder()}>Order</Button>
                </div>
            </div>

        </Modal>
    );
}
