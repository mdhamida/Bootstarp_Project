import React from 'react'
import img from '../image/bike1.jpg'

const Image = () => {
  return (
    <>
        <h1>image</h1>
        <img src={img} alt="" className="img-fluid" />


        <h1>align item using float</h1>
        <img src={img} alt="" className="img-fluid float-end " width={200} height={200} />
        <img src={img} alt="" className="img-fluid float-start " width={200} height={200} />
        <img src={img} alt="" className="img-fluid float-center " width={200} height={200} />


        <h1>align item using align item</h1>
        <img src={img} alt="" className="img-fluid text-end " width={200} height={200} />
        <img src={img} alt="" className="img-fluid text-start " width={200} height={200} />

    </>
  )
}

export default Image