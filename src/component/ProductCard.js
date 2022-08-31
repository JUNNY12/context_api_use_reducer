import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
import {CartState} from "../context/Context"

const ProductCard = ({product}) => {

  const {state :
     {cart},
     dispatch,
} = CartState()




  return (
    <div className='product'>
      <Card style={{height:'480px', padding:'1em'}} >
        <Card.Img src={product.image} height="250px" />
        <Card.Body>
          <Card.Title className="fs-6 mb-5" style={{height:"2.5em"}} >
            {product.title}
          </Card.Title>
          <Card.Subtitle className="d-flex justify-content-between">
            <div className='mb-2'>${product.price}</div>
            <div><Rating className="mb-2" rating = {product.rating.rate} style={{color:"yellow"}} /></div>
          </Card.Subtitle>
          {cart.some(item => item.id === product.id)? (
             <button 
              className='removeCart'
              onClick={ () => {
                dispatch({
                  type:'REMOVE_FROM_CART',
                  payload:product
                })
              }}
              >remove
              </button>
            )
            : (
              <button 
               className='addToCart mt-2'
               onClick={ () => {
                dispatch({
                  type:'ADD_TO_CART',
                  payload:product
                })
              }}
              >shop
              </button>
            )
        }
          
         
        </Card.Body>
      </Card>
    </div>
  )
}

export default ProductCard