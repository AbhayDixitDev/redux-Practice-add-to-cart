import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addToCart } from './cartSlice'

const Home = () => {

    const [products, setProducts] = useState([])
    const dispatch = useDispatch()

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:4000/components')
            setProducts(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    const ans = products.map((product) => {
        return (
            <div key={product.id} className="m-3">
                <div className="card" style={{width: '18rem'}}>
                    <img src={product.image} className="card-img-top" style={{height: '150px', width: '150px', objectFit: 'contain'}} alt={product.name} />
                    <div className="card-body">
                        <h5 className="card-title">{product.name}</h5>
                        <p className="card-text">{product.price}</p>
                        <button className="btn btn-primary" onClick={()=>dispatch(addToCart({...product,quantity:1})) }>Add to Cart</button>
                    </div>
                </div>
            </div>
        )
    })

    
    return (
        <Container fluid className="d-flex flex-wrap justify-content-center">
            {ans}
        </Container>
    )
}

export default Home
