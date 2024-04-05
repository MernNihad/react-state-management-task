import React from 'react'

function Modal({setModal,details}) {
  return (
    <div className='w-[500px] h-[300px] bg-white shadow-md border overflow-y-scroll '>
        <span onClick={()=>setModal(false)} className='block text-right text-[20px] me-3 mt-3'>X</span>
        <img
                
                  src={details.strCategoryThumb}
                  alt="loadin"
                  className="animate-pulse w-[100px] h-[100px] object-contain"
                  />
        <p className='py-2 px-2 shadow-lg ' >{details.strCategory}</p>
        <p className='py-2 px-2 shadow-lg ' >{details.strCategoryDescription}</p>
    </div>
  )
}

export default Modal