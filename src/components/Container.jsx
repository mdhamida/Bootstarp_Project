import React from 'react'
import bg from '../image/bike1.jpg'

const Container = () => {
  return (
    <>
     <div className="container-fluit  ">
       <div className="row">
         <div className="col-4 text-center ">
           <h1>md hamid ali</h1>
           <img src={bg} alt="" width={200} height={200} />
         </div>
         <div className="col-8">
         <h1>md hamid ali</h1>
           <img src={bg} alt="" width={200} height={200} />
           <div className="row">
             <div className="col-4">
               <h3>hamid</h3>
               <img src={bg} alt="" width={200} height={200} />
             </div>
             <div className="col-4">
               <h3>hamid</h3>
               <img src={bg} alt="" width={200} height={200} />
             </div>
             <div className="col-4">
               <h3>hamid</h3>
               <img src={bg} alt="" width={200} height={200} />
             </div>
           </div>
         </div>
       </div>
     </div>













     <div class="container">
  <div class="row">
    <div class="col-6">
    <img src={bg} alt="" width={200} height={200} />
    </div>
    <div class="col-3">
    <img src={bg} alt="" width={200} height={200} />
    </div>
    <div class="col-3">
    <img src={bg} alt="" width={200} height={200} />
    </div>
  </div>
</div>
    </>
  )
}

export default Container