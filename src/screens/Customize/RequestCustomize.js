import React, { useState } from "react";
import { Link } from "react-router-dom";
import $ from 'jquery'
import axios from "axios";

const RequestCustomize = () => {


  const [name,setName] = useState();
  const [age,setAge] = useState();
  const [weight,setWeight] = useState();
  const [cause,setCause] = useState();

  const doRequest = () => {
    axios.post('http://localhost:3000/postReqCustomizeDietPlan', {
      name,
      age,
      weight,
      cause,
      
    })
      .then(response => {
        console.log(response.data)
      })
      .catch(error => {
        console.error(error)
      })
  }

  $(".navbar .nav-link").on("click", function(){
    $(".navbar").find(".activeNav").removeClass("activeNav");
    $(this).addClass("activeNav");
 });

  return (
    <>
      <nav class={`navbar fixed-top  navbar-expand-lg navbar-light`} id="navbar16">
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
            <Link to="/account_page" class="">
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
            </Link>
          </div>
        </div>
      </nav>
      <section style={{ backgroundColor: "#D2AEFF",height:'150vh' }}>
        <div className="container-fluid">
          
          <div className="row">
            <div className="col-md-6 pt-5">
            <h5 className="pt-5">
            Home / Baby / Diet Plan & Water Intake / Request Customize Diet Plan
          </h5>
              <div className="row">
                <div className="col-md-8 p-5 pt-5">
                  <div>
                  <input
                         placeholder='name'
                          type='text'
                          className='form-control let_baby_search'
                          value={name}
                          onChange={e => setName(e.target.value)}
                          
                                
                        />
                  </div>
                  <div>
                    <input
                      placeholder='age'
                      type="text"
                      className="form-control let_baby_search"
                      value={age}
                      onChange={e => setAge(e.target.value)}
                      
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      className="form-control let_baby_search"
                      placeholder="weight (KGs)"
                      value={weight}
                      onChange={e => setWeight(e.target.value)}
                    />
                  </div>
                  <h6 className="mt-5">Cause for requesting diet plan</h6>
                  <div
                      className="mt-3 p-2"
                      style={{ border: "2px solid #000", wordWrap: "break-word" }}
                    >
                      <p>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="description"
                          value={cause}
                          onChange={e => setCause(e.target.value)}
                        />
                      </p>
                    </div>
                  <div className=" pt-4 col d-flex justify-content-between">
                    <button onClick={doRequest}
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      className="btn btn-lg text-white px-5 py-2"
                      style={{ backgroundColor: "#741A82" }}
                    >
                      Request
                    </button>
                    <div className="c0l-md-6">
                      <h3>500/- Rs</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 p-0">
              <div className="bg-" style={{position:'relative'}} >
                <div style={{position:'absolute',top:'0px',left:'148px'}}   >
                <img
                  src={require("../../assets/image/plate.png")}
                  alt=""
                
                />
                </div>
                <div style={{position:'absolute',top:'220px',left:'-171px'}}  >
                  <img src={require('../../assets/image/circle.png')} alt="" />
                </div>

                <div style={{position:'absolute',top:'40px' ,left:'119px'}}  >
                  <img src={require('../../assets/image/circle2.png')} alt="" />
                </div>

                <div style={{position:'absolute',top:'200px',left:'-100px'}} >
                  <img src={require('../../assets/image/circle3.png')} alt="" />
                </div>

                <div style={{position:'absolute',top:'400px',left:'-100px'}} >
                  <img src={require('../../assets/image/circle4.png')} alt="" />
                </div>
                <div style={{position:'absolute',top:'600px',left:'-100px'}} >
                  <img src={require('../../assets/image/circle5.png')} alt="" />
                </div>
                <div style={{position:'absolute',top:'360px',left:'31px'}} >
                  <img src={require('../../assets/image/circle6.png')} alt="" />
                </div>

                <div style={{position:'absolute',top:'32px',right:'0px',zIndex:'999'}} >
                  <img src={require('../../assets/image/d.png')} width="100%" alt="" />
                </div>
                
                <div style={{position:'absolute',top:'590px',right:'80px',zIndex:'99'}} >
                  <img src={require('../../assets/image/d2.png')}  alt="" />
                </div>
                
                <div style={{position:'absolute',top:'300px',right:'0px'}} >
                  <img src={require('../../assets/image/d3.png')}  alt="" />
                </div>
                <div style={{position:'absolute',top:'730px',right:'0px'}} >
                  <img src={require('../../assets/image/d4.png')} alt=""
                  // width='50%'
                  />
                </div>
                
                

                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Modal --> */}
      <div
        class="modal fade "
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog pt-5 mt-5">
          <div class="modal-content" id="model_content">
            <div class="modal-header border-0">
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body text-center">
              <h2 className="pt-4 text-white"> Yayy! Request has sent</h2>
              <img
                className="py-4"
                src={require("../../assets/image/face.png")}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <footer className="py-3" style={{backgroundColor:'#7E4DA7'}} >

      </footer>
    </>
  );
};

export default RequestCustomize;
