import React, { useContext } from 'react'
import Button from '../UI/Button'
import { UserContext } from '../context/UserContext'

export default function () {
    const {isOpen, setIsOpen} = useContext(UserContext)

    const fun = () => {
        setIsOpen(!isOpen)
    }
    return (
        <Button onClick={fun}>
            <span>Your Cart</span>
            <div className='badge'>0</div>
        </Button>
    )
}
