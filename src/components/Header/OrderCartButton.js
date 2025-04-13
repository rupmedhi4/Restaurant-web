import React, { useContext } from 'react'
import Button from '../UI/Button'
import { UserContext } from '../context/UserContext'

export default function () {
    const {isOpen, setIsOpen,addItem} = useContext(UserContext)

    const fun = () => {
        setIsOpen(!isOpen)
    }
    return (
        <Button onClick={fun}>
            <span>Your Cart</span>
            <div className='badge'>{addItem.length}</div>
        </Button>
    )
}
