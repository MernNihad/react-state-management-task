import React from 'react'
import { useLocation } from 'react-router-dom'

function Product() {

    const values = useLocation()
    console.log(values.state);
  return (
    <div className='w-full h-screen bg-yellow-50 '>

        <img src={values.state.strCategoryThumb} alt="" className=' ' />
        
    </div>
  )
}

export default Product