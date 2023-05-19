import React from 'react'
import { Link } from 'react-router-dom'
import $ from 'jquery';
const Header = ({navbar_background}) => {


  $(".navbar .nav-link").on("click", function(){
    $(".navbar").find(".activeNav").removeClass("activeNav");
    $(this).addClass("activeNav");
 });

  
  return (
    <>
     <nav class={`navbar navbar-expand-lg navbar-light ${navbar_background} `}>
  <div class="container-fluid">
    <Link class="navbar-brand" href="#">LOGO</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link activeNav" aria-current="page" href="#">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/calculator">BMI Calculator</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/common_problem">physical Activities</Link>
        </li>
        <li class="nav-item">
          <Link to="/recipes"  class="nav-link">DIY Remedies & Recipes</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/common_problem">Common Problems</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" href="#">Contact Us</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" href="#">Services</Link>
        </li>
       
      </ul>
      <Link to="/account_page" class="">
       <div className='text-center'>
       <img src={require('../../assets/image/account.png')} width="40px" alt='' />
       </div>
        <div>
        <h6 className='text-black '>Account</h6>
        </div>
      </Link>
    </div>
  </div>
</nav>
    </>
  )
}

export default Header