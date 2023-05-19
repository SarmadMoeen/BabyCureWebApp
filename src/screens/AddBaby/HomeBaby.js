import React from "react";
import { Link, NavLink } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import $ from 'jquery'
const HomeBaby = () => {
  $(".navbar .nav-link").on("click", function(){
    $(".navbar").find(".activeNav").removeClass("activeNav");
    $(this).addClass("activeNav");
 });

  return (
    <>
       <nav class={`navbar navbar-expand-lg navbar-light`} id="navbar3"  >
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
      <section className="HomeBaby_page" style={{backgroundColor:'#FDFFB4'}} >
        <div className="container pb-5">
          <div className="text-left pb-4 pt-3">
           <h4>Home / Baby</h4>
          </div>
          <div className="row g-4 pb-5">
            <div className="col-md-3">
              <div className="card p-4 rounded-4" style={{backgroundColor:'#B5972F'}}>
                <div className="text-center">
                  <img
                    src={require("../../assets/image/img1.png")}
                    width="90px"
                    alt=""
                  />
                  <h4 className="pt-2">Vaccination</h4>
                </div>
                <div className="text-left">
                  <p>Upcoming</p>
                  <p>
                  Recent
                  </p>
                  
                  <p>Date</p>
                </div>
                <div className="text-center">
                  <NavLink to="/vaccination" className="btn  btn-light w-50"  >  More <i className="fa ps-2  fa-arrow-right"></i> </NavLink>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card p-4 rounded-4" style={{backgroundColor:'#B5972F'}}>
                <div className="text-center">
                  <img
                    src={require("../../assets/image/img2.png")}
                    width="90px"
                    alt=""
                  />
                  <h4 className="pt-2">Diet Plan & Water Intake</h4>
                </div>
                <div className="text-left">
                  <p>Recommended Diet</p>
                  <p>
                  Water Quantity
                  </p>
                </div>
                <div className="text-center mt-3">
                  <Link to="/diet_plan" className="btn btn-light w-50">More  <i className="fa ps-2  fa-arrow-right"></i>  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card p-4 rounded-4" style={{backgroundColor:'#B5972F'}}>
                <div className="text-center">
                  <img
                    src={require("../../assets/image/img3.png")}
                    width="90px"
                    alt=""
                  />
                  <h4 className="pt-2">Milestone</h4>
                </div>
                <div className="text-left">
                  <p>Recent Milestone</p>
                  <p>
                  Upcoming Milestones
                  </p>
                </div>
                <div className="text-center mt-5">
                  <NavLink to="/milestones" className="btn btn-light w-50">More  <i className="fa ps-2  fa-arrow-right"></i>  </NavLink> 
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card p-4 rounded-4" style={{backgroundColor:'#B5972F'}}>
                <div className="text-center">
                  <img
                    src={require("../../assets/image/img4.png")}
                    width="90px"
                    alt=""
                  />
                  <h4 className="pt-2">Doctor Consultancy</h4>
                </div>
                <div className="text-left">
               
                  <p>
                  Name
                  </p>
                  <p>Recent Doctor hired</p>
                </div>
                <div className="text-center mt-3">
                  <Link to="/doctor_consultancy" className="btn btn-light w-50">More  <i className="fa ps-2  fa-arrow-right"></i>   </Link>
                </div> 
              </div>
            </div>
          
          </div>
          <div className="mx-4 text-center">
          <h1 style={{fontWeight:"400",color:'#B5972F'}} >Hi ! Baby Information is Displayed Here. Lets Daily look on it</h1>
          </div>
        </div>
      </section>
      <div className="py-4" style={{backgroundColor:'#B1942E'}}>

      </div>
    </>
  );
};

export default HomeBaby;
