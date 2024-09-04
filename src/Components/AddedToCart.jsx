import React from 'react'

const AddedToCart = (Component) => {
    return (props)=>{
  return (
    <div className='relative'>
          <div className='bg-orange-500 rounded-xl absolute z-30 text-black p-3 font-semibold left-8 top-5'>
            Added To Cart
          </div>
         <Component {...props}></Component>
    </div>
  )
}
}

export default AddedToCart
