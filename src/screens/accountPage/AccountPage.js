import React from 'react'
import { Link } from 'react-router-dom'
import $ from 'jquery'
const AccountPage = () => {
    $(".navbar .nav-link").on("click", function(){
        $(".navbar").find(".activeNav").removeClass("activeNav");
        $(this).addClass("activeNav");
     });
    
  return (
    <>
     <nav class={`navbar navbar-expand-lg navbar-light`} id="dietNavbar"  >
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
          <Link class="nav-link" to="/physical_activities">physical Activities</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/recipes">DIY Remedies & Recipes</Link>
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
    <div className='py-3' style={{backgroundColor:'#C2FFFF'}} >
        <h4>Home / Account</h4>
        <div  style={{backgroundColor:'#4ABECB '}} >
            <ul className='text_account pb-3' >
           
                <li className='pt-3'>
                    <a href='' className='d-flex align-items-center'>
                        <div>
                            <img src={require('../../assets/image/ac1.png')} alt='' width="40px" />
                        </div>
                        <div className='ps-5'>
                            <span>My Profile</span>
                        </div>
                    </a>
                </li>

                <li className='pt-3'>
                    <a href='' className='d-flex align-items-center'>
                        <div>
                            <img src={require('../../assets/image/ac2.png')} alt='' width="40px" />
                        </div>
                        <div className='ps-5'>
                            <span>Bookmarks</span>
                        </div>
                    </a>
                </li>

                <li className='pt-3'>
                    <a href='' className='d-flex align-items-center'>
                        <div>
                            <img src={require('../../assets/image/ac3.png')} alt='' width="40px" />
                        </div>
                        <div className='ps-5'>
                            <span>Rate us</span>
                        </div>
                    </a>
                </li>

                <li className='pt-3'>
                    <a href='' className='d-flex align-items-center'>
                        <div>
                            <img src={require('../../assets/image/ac4.png')} alt='' width="40px" />
                        </div>
                        <div className='ps-5'>
                            <span>FAQ</span>
                        </div>
                    </a>
                </li>

                <li className='pt-3'>
                    <a href='' className='d-flex align-items-center'>
                        <div>
                            <img src={require('../../assets/image/ac5.png')} alt='' width="40px" />
                        </div>
                        <div className='ps-5'>
                            <span>Settings</span>
                        </div>
                    </a>
                </li>
                <li className='pt-3'>
                    <a href='' className='d-flex align-items-center'>
                        <div>
                            <img src={require('../../assets/image/ac6.png')} alt='' width="40px" />
                        </div>
                        <div className='ps-5'>
                            <span>About us</span>
                        </div>
                    </a>
                </li>
                <li className='pt-5'>
                    <a href='' className='d-flex align-items-center'>
                        <div>
                            <img src={require('../../assets/image/ac7.png')} alt='' width="40px" />
                        </div>
                        <div className='ps-5'>
                            <span>Logout</span>
                        </div>
                    </a>
                </li>
             
               
             
               
            </ul>
        </div>
    </div>

    <footer className='py-4' style={{backgroundColor:'#079AAD'}} >

    </footer>
    
    </>
  )
}

export default AccountPage