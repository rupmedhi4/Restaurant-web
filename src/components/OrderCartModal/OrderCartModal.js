import React, { useContext, useState } from 'react';
import Modal from './../Modal/Modal';
import { UserContext } from './../context/UserContext';
import './OrderCartModal.css'
import Button from '../UI/Button';

export default function OrderCartModal() {
    const { isOpen, setIsOpen } = useContext(UserContext);
    const [totalOrderPrice, setTotalOrderPrice] = useState(null)

    


    return (
        <Modal>
            <div className='order-main-div'>
                <div className='total-amount-div'>
                    <h3>Total Amount</h3>
                    <span>{totalOrderPrice == null ? "$0.00" : `$${totalOrderPrice}`}</span>
                </div>
                <div className='order-btn'>
                    <Button onClick={()=>setIsOpen(!isOpen)}>Close</Button>
                    <Button>Order</Button>
                </div>
            </div>

        </Modal>
    );
}
