import React from 'react'
import { Link } from 'react-router-dom'
import PinInput from 'react-pin-input';
import $ from 'jquery'
const VerifyEmail = () => {
  $(".navbar .nav-link").on("click", function(){
    $(".navbar").find(".activeNav").removeClass("activeNav");
    $(this).addClass("activeNav");
 });
  return (
    <>
     <nav class={`navbar navbar-expand-lg navbar-light`}  id="navbar2">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">LOGO</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link activeNav" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">BMI Calculator</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">physical Activities</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">DIY Remedies & Recipes</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Common Problems</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact Us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Services</a>
          </li>
         
        </ul>
        <div class="">
         <div className='text-center'>
         <img src={require('../../assets/image/account.png')} width="40px" alt='' />
         </div>
          <div>
          <h6 className='text-black'>Account</h6>
          </div>
        </div>
      </div>
    </div>
  </nav>
    <div  className='container-fluid' style={{backgroundColor:'#FFD7F6'}} >
        <h4 className='pt-3'>Verify Email</h4>
        <div className='row'>
            <div className='col-md-7 mx-auto'>
                <div className='text-center'>
                    <img src={require('../../assets/image/email.png')}  alt='' width="200px"  />


                </div>
                <div className='pt-2'>
                    <h4 className='text-center'>Please enter4-digit code send to amnazohaib23@gmail.com</h4>

                    <div className='text-center'>
                      <PinInput 
  length={4} 
  initialValue=""
  secret
  secretDelay={100} 
  onChange={(value, index) => {}} 
  type="numeric" 
  inputMode="number"
  style={{padding: '10px'}}  
  inputStyle={{borderColor: 'red'}}
  inputFocusStyle={{borderColor: 'blue'}}
  onComplete={(value, index) => {}}
  autoSelect={true}
  regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
/>
                    </div>

                    <div className='py-5 text-center'>
                      <Link to="" className='text-bold' style={{color:'#E149C0'}} > Resend code</Link>
                    </div>
                    <div className='pb-5  text-center'>
                      <Link to="/new_password" className='btn btn-primary border-0 text-dark px-5 py-1'>Verify</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <footer className='py-4' style={{backgroundColor:'#F841CE'}}></footer>
    </>
   
  )
}

export default VerifyEmail