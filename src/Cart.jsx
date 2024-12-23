import React from 'react'
import { useSelector } from 'react-redux'
import {removeFromCart} from './cartSlice'
import { useDispatch } from 'react-redux'
import Button from 'react-bootstrap/Button'
import {increaseQuantity,decreaseQuantity} from './cartSlice'
import Container from 'react-bootstrap/Container'   


const Cart = () => {
    const dispatch = useDispatch()

    const cartItems = useSelector((key)=>key.cart.cartValue)

    const ans = cartItems.map((key)=>(
        <div className="card" style={{width: '18rem',margin:'10px'}} >
            <img src={key.image} className="card-img-top" alt={key.name} />
            <div className="card-body">
                <h5 className="card-title">{key.name}</h5>
                <p className="card-text">{key.price}</p>
                <Button onClick={()=>dispatch(decreaseQuantity(key.id))}>-</Button>
                <p className="card-text">{key.quantity}</p>
                <Button onClick={()=>dispatch(increaseQuantity(key.id))}>+</Button>

                
                <button className="btn btn-danger" onClick={()=>dispatch(removeFromCart(key.id))}>Remove Item</button>
            </div>
        </div>

    ))
        return (
     <>
    <Container fluid className="d-flex justify-content-center">
        {ans}
    </Container>
     </>
    )
}

export default Cart
