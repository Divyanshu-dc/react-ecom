import React from 'react'

const ProductImages = ({img}) => {

  return (
    <>
    <div>
      {
        img.map((item)=>{
          return (
            <div  className="w-52 border-4 m-4 p-4">
              <img  src={item} alt="product image"/>
            </div>
          )
        })
      }
    </div>
    </>
  )
}

export default ProductImages
