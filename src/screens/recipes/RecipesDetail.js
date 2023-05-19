import React from "react";
import { Link } from "react-router-dom";
import $ from 'jquery'
const RecipesDetail = () => {
  $(".navbar .nav-link").on("click", function(){
    $(".navbar").find(".activeNav").removeClass("activeNav");
    $(this).addClass("activeNav");
 });
  return (
    <>
      <nav class={`navbar navbar-expand-lg navbar-light`} id="navbar3">
        <div class="container-fluid">
          <Link class="navbar-brand" href="#">
            LOGO
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link activeNav" aria-current="page" href="#">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/calculator">
                  BMI Calculator
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/physical_activities">
                  physical Activities
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/recipes">
                DIY Remedies & Recipes
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/common_problem">
                  Common Problems
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" href="#">
                  Contact Us
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" href="#">
                  Services
                </Link>
              </li>
            </ul>
            <div class="">
              <div className="text-center">
                <img
                  src={require("../../assets/image/account.png")}
                  width="40px"
                  alt=""
                />
              </div>
              <div>
                <h6 className="text-black">Account</h6>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <section
        className="RecipesDetail_page"
        style={{ backgroundColor: "#FDFFB4" }}
      >
        <div className="container-fluid pb-5">
          <div className="text-left pb-4 pt-3">
            <h4>Home / DIY Remedies and Recipes/ Brown Rice cereal</h4>
          </div>
          <div className="row">
                
                <div className="col-md-12">
                  <div className="text-center">
                  <h3>Solid food | 4-6 months</h3>
                    <img src={require('../../assets/image/bg3.png')} width="100%" height="300px" alt="" />
                  </div>
                </div>
                <div className="col-md-12">

                  <div className="p-4 w-100 h-100" >
                    <h3>4-6 months</h3>
                    <h3>Baby brown rice cereal</h3>
                    <p style={{fontSize:'24px'}} >



Rice cereal is one of the most common foods to introduce because it’s less allergenic and easily digested.
Mixing it to Link fairly thin texture can help babies make the transition from an all-liquid diet to Link more solid one. This same process can be applied to steel-cut oats.

</p>
                    <div className="text-center">
                
                    </div>
                  </div>
                </div>
             
            
          </div>
        </div>
      </section>
      <div className="py-4" style={{ backgroundColor: "#B1942E" }}></div>
    </>
  );
};

export default RecipesDetail;
