import React, { useContext, useEffect } from 'react'
import { createContext , useReducer} from 'react'
import { cartReducer } from './Reducers'
import axios from 'axios';
 

const Cart = createContext();
const baseURL = "https://fakestoreapi.com/products"

const Context = ({children}) => {
    const initialState = {
        products:[],
        cart:[],
        error:''
    }
    const [state, dispatch] = useReducer(cartReducer, initialState)
    useEffect(() => {
        const getProducts = async () => {
            try {
                const response = await axios.get(baseURL)
                dispatch({type:"FETCH_SUCCESS", payload:response.data})
            } catch (error) {
                dispatch({type:"FETCH_ERROR"})
                console.log(error)
            }
        }
        getProducts()
    }, [])

  return (
    <Cart.Provider value={{state, dispatch}}>
        {children}
    </Cart.Provider>
  )
}
export default Context;

export const CartState = () => {
    return useContext(Cart);
}