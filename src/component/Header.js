import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { CartState } from "../context/Context"
import {BiDownArrow} from "react-icons/bi"
import {AiFillDelete} from "react-icons/ai"


const Header = () => {
  const [show, setShow] = useState(false)
  const {pathname} = useLocation()
  
  useEffect(() => {
    setShow(false)
  }, [pathname])

  const {state :
    {cart},
    dispatch,
    } = CartState()

    const cartTotal = cart.reduce((accumulator, sum ) => {
      return accumulator + sum.price
    }, 0)

  return (
    <nav className="nav">
        <div className="logoName fs-3">
            <Link to='/'>Shopping Cart</Link>
        </div>

        <div>
            <input 
            className="search"
            placeholder="Search Product"
            name="search"
            />
        </div>

        <div className="cart">
           <div onClick={() => setShow(prev => !prev)} style={{cursor:"pointer"}}>
             <span className="icon"><i className="fa-solid fa-cart-shopping"></i></span>
             <span className="item">{cart.length}</span>
             <span><BiDownArrow /></span>
           </div>
           {
             show && 
            <div className="dropDown">
              {
                cart.length > 0 ? (
                <div>
                  {
                    cart.map(product => (
                      <div key={product.id} className="d-flex justify-content-between align-items-center mb-4">
                        <div className="cartImage">
                          <img src={product.image} />
                        </div>

                        <div>
                          <span>${product.price}</span>
                        </div>

                        <div
                         className="delBtn"
                         onClick={ () => {
                          dispatch({
                            type:'REMOVE_FROM_CART',
                            payload:product
                          })
                        }}
                         >
                          <AiFillDelete />
                        </div>
                      </div>
                    ))
                  }
                   <div className="totalAmount">Total Amount : ${cartTotal}</div>
                  <div>
                    <Link to={`/cart`}>
                      <button className="goToCart">Go to Cart</button>
                    </Link>
                  </div>
                </div>

                ) : <span className="">cart is empty</span>
              }
              
           </div>
           }
        </div>
    </nav>
       
  )
}

export default Header