import React from 'react'
import Rating from './Rating'
import { useState } from 'react'

const FilterProduct = () => {

  const [rate, setRate] = useState(0)

  return (
    <div className='filterProduct'>
      <h1 className='fs-3 mb-4'>Filter Products</h1>

      <form>
       <div className='mb-3'>
          <input 
            type={'radio'}
            />
             <label className='label'>Men Clothings</label>
       </div>

       <div className='mb-3'>
          <input 
            type={'radio'}
            />
         <label className='label'>Women Clothings</label>
         
       </div>

       <div className='mb-3'>
          <input 
            type={'radio'}
            />
         <label className='label'> Jewelry</label>
         
       </div>

       <div className='mb-3'>
           <input 
            type={'radio'}
            />
         <label className='label'> Electronics</label>
          
       </div>

       <div>
         <label className='rate'>Rating: </label>
         <Rating 
         rating={rate} 
         onClick={(index) => setRate(index + 1)}
         style={{cursor:"pointer"}} />
       </div>

       <button className='mt-3 clearFilterBtn' >Clear Filters</button>
      </form>
    </div>
  )
}

export default FilterProduct