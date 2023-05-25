import React from "react";
import { Link, NavLink } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import $ from 'jquery'
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const DoctorConsultancy = () => {

  const [data,setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [selectedSpecialization, setSelectedSpecialization] = useState("");
 
  
  



  useEffect(() => {
    fetch("http://localhost:3000/getDoctorInfo") // replace with your backend endpoint URL
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched data:", data);
        setData(data);
      })
      .catch((error) => console.error(error));
  },[]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`http://localhost:3000/getDoctorInfo?review=${selectedValue}&price=${selectedPrice}&specialization=${selectedSpecialization}`);
      setData(response.data);
    }
    fetchData();
  }, [selectedValue, selectedPrice, selectedSpecialization]);





 

   // assuming data is passed as a prop
  
   const filteredData = data.filter(
    (item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) // filter based on name
  );

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  function getStars(review) {
    let stars = [];
    for (let i = 0; i < review; i++) {
      stars.push(<i key={i} className="fa fa-star"></i>);
    }
    return stars;
  }
  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const handlePriceChange = (event) => {
    setSelectedPrice(event.target.value);
  };
  const handleSpecializationChange = (event) => {
    setSelectedSpecialization(event.target.value);
  };

 


  $(".navbar .nav-link").on("click", function(){
    $(".navbar").find(".activeNav").removeClass("activeNav");
    $(this).addClass("activeNav");
 });

  return (
    <>
       <nav class={`navbar navbar-expand-lg navbar-light`} id="navbar3"  >
  <div class="container-fluid">
    <Link class="navbar-brand" href="#"><img style={{width:"80px", borderRadius:"10px",marginLeft:"35px"}} src={require('../../assets/image/Baby Care.png')}></img></Link>
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
      <Link to="/account_page" class="">
       <div className='text-center'>
       <img src={require('../../assets/image/account.png')} width="40px" alt='' />
       </div>
        <div>
        <h6 className='text-black'>Account</h6>
        </div>
      </Link>
    </div>
  </div>
</nav>
      <section className="DoctorConsultancy_page" style={{backgroundColor:'#FDFFB4'}} >

        <div className="container pb-5">

          <div className="text-left pb-4 pt-3">
           <h4>Home / Baby / Doctor Consultancy</h4>
          </div>
          <div className="row g-5">
          <div className="col-md-12">
             <div className="row">
                <div className="col-md-6 mx-auto">
                <div className="py-4" style={{ position: "relative" }}>

                
                <input
                  type="search"
                  className="form-control py-3 btn btn border-0 search_btn3 rounded-5"
                  placeholder="Search by name"
                  value={searchQuery}
                  onChange={handleSearch}
                />


                <label
                  style={{ position: "absolute", top: "40px", right: "12px" }}
                >
                  <i className="fa  fa-search" style={{ fontSize: "20px" }}></i>
                </label>
              </div>
                </div>
             </div>
          </div>
          <div className="d-flex ">
            <div className="mx-2">
                <button className="btn rounded-0 px-4 py-2" style={{backgroundColor:'#B5972F'}} >Filter</button>
            </div>
          <div  className="mx-2" >

            <select
              style={{ backgroundColor: "#B5972F" }}
              className="form-select py-1 rounded-5"
              aria-label="Default select example"
              value={selectedValue}
              onChange={handleSelectChange}
            >
              <option value="">Reviews</option>

              <option value="">No Filters</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <div  className="mx-2">
            <select style={{backgroundColor:'#B5972F'}}  class="form-select py-1 rounded-5" aria-label="Default select example"

                value={selectedSpecialization}
                onChange={handleSpecializationChange}>
                  <option selected>Specialization</option>
                  <option value="">No Flters</option>
                  <option value="Child Specialized">Child Specialist</option>
                  <option value="Eye">Eye Specialist</option>
                  <option value="Gestro">Gestrologist</option>
              </select>
              </div>
              <div  className="mx-2">
                <select
                style={{ backgroundColor: "#B5972F" }}
                className="form-select py-1 rounded-5"
                aria-label="Default select example"
                value={selectedPrice}
                onChange={handlePriceChange}
              >
                <option value="">Price</option>
                <option value="">No Filters</option>
                <option value="1000">1000</option>
                <option value="1500">1500</option>
                <option value="2000">2000</option>
              </select>
            </div>
          
    </div>
      {filteredData.map((item) => (
        <div className="col-md-4" key={item.id}>
          <div className="card p-4 rounded-4" style={{ backgroundColor: "#B5972F" }}>
            <div className="text-center">
              <img src={require("../../assets/image/img4.png")} width="90px" alt="" />
            </div>
            <div className="text-left">
              <div className="col-md-4 mb-4">
                <p className="d-inline-block me-2 fw-bold">Name:</p>
                <p className="d-inline-block">{item.name}</p>
                <br />
                <p className="d-inline-block me-2 fw-bold">Qualification:</p>
                <p className="d-inline-block">{item.qualification}</p>
                <br />
                <p className="d-inline-block me-2 fw-bold">Specialization:</p>
                <p className="d-inline-block">{item.specialization}</p>
              </div>
              <div className="d-flex ">
                <div className="">{getStars(item.review)}</div>
                <div>
                  <h5>Charges: {item.charges}</h5>
                </div>
              </div>
            </div>
            <div className="text-center mt-3">
              <NavLink to="/payment" className="btn btn-light w-50">
                Chat <i className="fa ps-2 fa-arrow-right"></i>
              </NavLink>
            </div>
          </div>
        </div>
      ))}
    
          
              
              
           
            
          
          </div>
        
        </div>
      </section>
      <div className="py-4" style={{backgroundColor:'#B1942E'}}>

      </div>
    </>
  );
};

export default DoctorConsultancy;
