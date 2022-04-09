import React from "react";

const Files = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <h3 className="display-6 text-center mt-4 mx-5 my-5 mb-3">
           <p style={{textAlign:"center" , fontFamily:"cursive" ,textShadow:"0 2px 2px 1px red" ,fontWeight:"normal"}}>My Name is Md Hamid Ali i am persuing my b tech degree in computer science engineering basically i can work software devlopement field but mostly iam intrested in website devlopement i also pursuing training in MERN Stack devlopement from solitare infosys mohali</p>   
            </h3>
          </div>
        </div>
        

       <div className="row justify-content-evenly pt-3 pb-3">
           <div style={{fontFamily:"cursive"}}  className="col-md-3 text-center mt-5">
          <h1> <i class="bi bi-file-code text-primary"></i></h1>
          <h5 style={{color:"red" , textShadow:"2px 2px gray"}}>React Devloper </h5>
          <p> i work on reactjs devlopement and i build three project in react portfolio and moneypay</p>


           </div >
           <div style={{fontFamily:"cursive"}} className="col-md-3 text-center mt-5">
           <h1><i class="bi bi-easel-fill text-danger"></i> </h1>
           <h5 style={{color:"red" , textShadow:"2px 2px gray"}} >Mobile App Devloper</h5>
          <p>i also completed 6 weeks internship in mobile app devlopement from internshala and buid student reminder app</p>


           </div>
           <div style={{fontFamily:"cursive"}}  className="col-md-3 text=center mt-5">
            <h1> <i class="bi bi-calendar-range-fill text-success "></i></h1>
            <h5 style={{color:"red" , textShadow:"2px 2px gray"}}>JavaScript Devloper</h5>
          <p>i completed training part of javascript from solitare infosys from mohali and build calcutor using javascript  </p>
           </div>
       </div>
      
      </div>
      <hr />
    
    </>
  );
};

export default Files;
