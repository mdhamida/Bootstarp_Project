import React from 'react'
import img from '../image/bg2.jpg'

const Skills = () => {
  return (
    <>
        <div className="container-fluid">
        <div className="row justify-content-evenly pt-3 pb-5">
           <div className="col-md-5 text-center pt-3">
         <img src={img} alt="" className='img-fluid ' style={{height:"350px" , width:"500px" , boxShadow:"2px 3px 5px 5px gray" , borderRadius:"40px"}} />

           </div>
           <div className="col-md-3  text=center pt-3">
           <h5 className='mt-3'>website devlopement </h5>
           <div class="progress">
  <div class="progress-bar bg-success" role="progressbar" style={{width: "25%", ariavaluenow:"25", ariavaluemin:"0", ariavaluemax:"100"}}></div>
</div>

<h5 className='mt-3' >app devlopment </h5>
<div class="progress">
  <div class="progress-bar bg-info" role="progressbar" style={{width: "50%", ariavaluenow:"50", ariavaluemin:"0", ariavaluemax:"100"}}></div>
</div>

<h5 className='mt-3'>React devlopement</h5>
<div class="progress">
  <div class="progress-bar bg-warning" role="progressbar" style={{width: "75%", ariavaluenow:"75", ariavaluemin:"0", ariavaluemax:"100"}}></div>
</div>

<h5 className='mt-3'> javascript devlopement</h5>
<div class="progress">
  <div class="progress-bar bg-danger" role="progressbar" style={{width: "100%", ariavaluenow:"100", ariavaluemin:"0", ariavaluemax:"100"}}></div>
</div>
<h5 className='mt-3'>front-end devlopement</h5>
<div class="progress">
  <div class="progress-bar bg-primary" role="progressbar" style={{width: "100%", ariavaluenow:"100", ariavaluemin:"0", ariavaluemax:"100"}}></div>
</div>
           
           </div>
       </div>
        </div>
        <hr />
    </>
  )
}

export default Skills