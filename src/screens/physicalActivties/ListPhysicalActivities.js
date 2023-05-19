import React from "react";
import { Link } from "react-router-dom";
import $ from 'jquery'
const ListPhysicalActivities = () => {
  $(".navbar .nav-link").on("click", function(){
    $(".navbar").find(".activeNav").removeClass("activeNav");
    $(this).addClass("activeNav");
 });
  return (
    <>
      <nav class={`navbar navbar-expand-lg navbar-light`} id="navbar15">
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
        className="PhysicalActivies_page"
        style={{ backgroundColor: "#B8E0FD" }}
      >
        <div className="container pb-5">
          <div className="text-left pb-4 pt-3">
            <h4>Home / Physical Activities/The Tickle game</h4>
          </div>
          <div className="row">
     
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-5 mx-auto text-center p-0">
                  <div>
                    <img src={require('../../assets/image/bg1.png')} width="100%" height="100%" alt="" />
                  </div>
                </div>
                <div className="col-md-12 p-0">
                <h3 className="pt-4">24 month old babies</h3>
                  <div className="p-4 w-100 h-100 text-dark" style={{backgroundColor:''}} >
                    <h3>The Tickle game</h3>
                    <p style={{fontSize:'20px'}} >This is a very fun game to play with a toddler. Hide a feather underneath one of the wipes pack flip lids attached to a board and encourage your toddler to look for it. Once the feather is found, use it to tickle your toddler with it. I keep all the other lids empty, but as an option, small flat animal toys or magnets can be placed there for discovery. I used hot glue to attach flip lids for durability but they are still sticky if you use them right away after removing them from a wipes pack. This game was inspired by The Tickle Book which has flaps with tickle monsters hiding underneath.</p>
                    
                  </div>
                </div>
              </div>
            </div>
        
          </div>
        </div>
      </section>
      <div className="py-4" style={{ backgroundColor: "#42709B" }}></div>
    </>
  );
};

export default ListPhysicalActivities;
