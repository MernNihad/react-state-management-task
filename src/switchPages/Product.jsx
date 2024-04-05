import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function Product() {

    const values = useLocation()
    const navigate = useNavigate()
    console.log(values.state);
  return (
    <>
    <p onClick={()=>{
      navigate('/app')
    }} className='cursor-pointer py-2 text-white ms-10 mt-3 w-fit px-4 bg-slate-500 rounded-md'> Back </p>
    <div  className='flex w-full h-screen bg-yellow-50 justify-end items-center  '>
        <img  src={values.state.strCategoryThumb} alt="" className='flex-1 w-[300px] h-[200px] object-contain ' />
        <div className="pe-10 flex-1 flex flex-col justify-start items-center">
          <p>{values.state.idCategory}</p>
          <p>{values.state.strCategory}</p>
          <p>{values.state.strCategoryDescription}</p>
          
        </div>
        
    </div>
    </>
  )
}

export default Product