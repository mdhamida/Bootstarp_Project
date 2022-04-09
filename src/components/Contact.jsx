import React from 'react'

const Contact = () => {
  return (
    <>
        {/* <div className="container"> */}
            <div className="row justify-content-evenly pt-2 pb-5" style={{backgroundColor:"#f1f1f1"}}>
                <div className="col-md-5 mt-5">
                <h3 className='mb-4'>contact form</h3>
                <form>

    <div class="mb-3">
    <label for="name" class="form-label"> Full Name</label>
    <input type="text" class="form-control" id="name"/>
    <div id="name" class="form-text"></div>
  </div>

  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>

  <div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label"></label>Message
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
 

  <button type="submit" class="btn btn-danger">Submit</button>
</form> 
                </div>
                <div className="col-md-5 mt-5">
                <h3 className='mb-4'>address</h3>
                <p>kamali tola post maubehat <br /> darbhanga bihar </p>
                <i class="bi bi-telephone">098766888866</i>

                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109066.42047349394!2d75.50337849125938!3d31.32237873844699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a5a5747a9eb91%3A0xc74b34c05aa5b4b8!2sJalandhar%2C%20Punjab!5e0!3m2!1sen!2sin!4v1649138978316!5m2!1sen!2sin"  style={{width:"100%", height:"300px", border:"0", allowfullscreen:"", loading:"lazy", referrerpolicy:"no-referrer-when-downgrade"}}></iframe>
                </div>
            </div>
            <hr />
        {/* </div> */}
    </>
  )
}

export default Contact