import React from "react";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import $ from 'jquery'
import { Radio } from "antd";
import  { useState } from "react";
import axios from "axios";

const Calculator = () => {

  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  //const [age, setAge] = useState("");
  const [gender, setGender] = useState("girl");
  const [bmiResult, setBmiResult] = useState("");


  $(".navbar .nav-link").on("click", function(){
    
    $(".navbar").find(".activeNav").removeClass("activeNav");
    $(this).addClass("activeNav");
 });

 const calculateBmi = () => {

  const bmi = [(weight / height / height)] * 10000;
  setBmiResult(bmi.toFixed(1));

  
  };


    const postBmiResult = ()=>{
      axios.post('http://localhost:3000/bmiCal', {
     bmiResult
    })
      .then(response => {
        console.log(response.data)
      })
      .catch(error => {
        console.error(error)
      })
  }
  

  
  return (
    <>
      <nav class={`navbar navbar-expand-lg navbar-light`}  id="navbar16">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/">LOGO</Link>
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
          <Link class="nav-link" to="/home_doctor">Services</Link>
        </li>
       
      </ul>
      <div class="">
       <div className='text-center'>
        <Link to="/account_page">
       <img src={require('../../assets/image/account.png')} width="40px" alt='' />
       </Link>
       </div>
        <div>
        <h6 className='text-black'>Account</h6>
        </div>
      </div>
    </div>
  </div>
</nav>
      <section style={{ backgroundColor: "#D2AEFF" }}>
        <div className="container-lg container-fluid">
          <h4 className="pt-3"> Home / BMI Calculator</h4>
          <div className="row">
            <div className="col-md-12 p-4">
              <div
                className="card  rounded-0"
                style={{ backgroundColor: "#7E4DA7", border: "3px solid #000" }}
              >
                <div className="row p-5 g-5" style={{ alignItems: "center" }}>
                  <div className="col-md-6">
                    <div className="row text-white">
                      <div className="col-md-4">
                        <label>Weight</label>
                      </div>
                      <div className="col-md-6">
                        <div className="d-flex align-items-center">
                        <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
                          <span className="ps-3">Kgs</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div
                      className="row text-white"
                      style={{ alignItems: "center" }}
                    >
                      <div className="col-md-4">
                        <label>Gender</label>
                      </div>
                      <div className="col-md-6">
                        <div className="d-flex align-items-center">
                              <Radio.Group
                                id='gender'
                                value={gender}
                                onChange={e => setGender(e.target.value)}
                              >
                                <Radio value='boy'>Boy</Radio>
                                <Radio value='girl'>Girl</Radio>
                                <Radio value='other'>Other</Radio>
                              </Radio.Group>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="row text-white">
                      <div className="col-md-4">
                        <label>Height</label>
                      </div>
                      <div className="col-md-6">
                        <div className="d-flex align-items-center">
                        <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
                          <span className="ps-3">Kgs</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div
                      className="row text-white"
                      style={{ alignItems: "center" }}
                    >
                      <div className="col-md-4">
                        <label>Age</label>
                      </div>
                      <div className="col-md-6">
                        <div className="d-flex align-items-center">
                          <select
                            style={{ backgroundColor: "transparent" }}
                            class="form-select text-white py-2 rounded-0"
                            aria-label="Default select example"
                          >
                            <option selected>13 Weeks</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <button onClick={()=>{
                      calculateBmi();
                      postBmiResult()
                      }
                      }
                      className="btn px-4 rounded-3"
                      style={{ backgroundColor: "#CFACFB" }}
                    >
                      Calculate
                    </button>
                  </div>
                </div>
                <div
                  className="py-2 text-center"
                  style={{ backgroundColor: "#fff" }}
                >
                  <h5>{bmiResult}</h5>
                </div>
                <div className="table-responsive px-5 pt-5">
                  <table class="table text-center caption-top">
                    <thead>
                      <tr>
                        <th
                          scope="col border-0"
                          className="py-3"
                          style={{ backgroundColor: "#fff" }}
                        >
                          Strongly Underweight
                        </th>
                        <th
                          scope="col"
                          className="py-3"
                          style={{ backgroundColor: "#D2AEFF" }}
                        >
                          Underweight
                        </th>
                        <th
                          scope="col"
                          className="py-3"
                          style={{ backgroundColor: "#BBFF64" }}
                        >
                          Normal Weight
                        </th>
                        <th
                          scope="col"
                          className="py-3"
                          style={{ backgroundColor: "#FFF279" }}
                        >
                          Overweight
                        </th>
                        <th
                          scope="col"
                          className="py-3"
                          style={{ backgroundColor: "#FF8179" }}
                        >
                          Strongly Overweight
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="text-white">
                        <td scope="row">12 4.6 kg</td>
                        <td scope="row">14.3 5.5 kg</td>
                        <td>15.5 6.0 kg</td>
                        <td>@18.4 7.1 kg</td>
                        <td>20 7.7 kg</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="p-4" style={{ backgroundColor: "#7D4DA6" }}></div>
    </>
  );
};

export default Calculator;
