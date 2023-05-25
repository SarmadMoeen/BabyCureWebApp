import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { FaCheck } from "react-icons/fa";


import $ from 'jquery'
const Vaccinaction = () => {
  
  
  const [data, setData] = useState([]);
  const [doneVaccinations, setDoneVaccinations] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/getVaccinations")
      .then((response) => response.json())
      .then((data) => {
        // Add an index property to each object in the fetched data
        const indexedData = data.map((obj, index) => ({...obj, index}));
        setData(indexedData);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleDoneClick = (index, e) => {
    e.stopPropagation(); // Prevent click event from bubbling up to parent elements
  
    // Remove the clicked vaccination from data array
    const updatedData = data.filter((obj) => obj.index !== index);
    setData(updatedData);
  
    // Add the clicked vaccination to doneVaccinations array
    const clickedVaccination = data.find((obj) => obj.index === index);
    setDoneVaccinations([...doneVaccinations, clickedVaccination]);
  };

  console.log(data);
  /*useEffect(() => {
    axios.get('http://localhost:3000/getVaccinations')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  if (data === null) {
    return <div>Loading...</div>;
  }*/


  $(".navbar .nav-link").on("click", function(){
    $(".navbar").find(".activeNav").removeClass("activeNav");
    $(this).addClass("activeNav");
 });
  return (
    <div>
       <nav class={`navbar navbar-expand-lg navbar-light`}  id="navbar2">
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
          <Link class="nav-link" href="#">physical Activities</Link>
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
        <section className=''  style={{backgroundColor:'#FFD7F6'}} >
             <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-4 p-0'>
                        <div className=''>
                            <img src={require('../../assets/image/Rectangle 52.png')} width="100%" height="620px" alt='' />
                        </div>
                    </div>
                    <div className='col-md-8'>
                        <div className='row mt-4'>
                            <div className='col-md-10 mx-auto'>
                                <div className='rounded-4 p-4 pt-5'  style={{backgroundColor:'#F841CE'}}>
                                <div className='card p-3'  style={{backgroundColor:'#FFD7F6',border:'2px solid #000'}}>
                                <div>
                                <div>
  <h6>Upcoming Vaccination</h6>
  <div className="vaccine-list">
    {data.length > 0 ? (
      data.map((item) => (
        <div
          key={item.index}
          className="vaccine-item"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "80%",
            padding: "10px",
            margin: "10px 0",
            border: "1px solid #ccc",
            borderRadius: "5px",
            boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.2)",
          }}
          onClick={() => handleDoneClick(item.index)}
        >
          <div
            style={{
              fontWeight: "bold",
              fontSize: "20px",
              marginRight: "10px",
            }}
          >
            {item.vaccname}
          </div>
          <div style={{ fontSize: "16px" }}>{item.date}</div>
          <div onClick={(e) => handleDoneClick(item.index, e)}>
            <FaCheck />
          </div>
        </div>
      ))
    ) : (
      <div>Loading...</div>
    )}
  </div>
</div>
      

                                </div>
                                </div>
                                <div className='card p-3 mt-4'  style={{backgroundColor:'#FFD7F6',border:'2px solid #000'}}>
                               
<div className="vaccine-list done">
  <h6>Done Vaccination</h6>
  {doneVaccinations.length > 0 ? (
    doneVaccinations.map((item) => (
      <div
        key={item.id}
        className="vaccine-item"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          padding: '10px',
          marginBottom: '10px',
          border: '1px solid #ccc',
          borderRadius: '5px',
          boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.2)',
          cursor: 'default',
        }}
      >
        <div style={{ fontWeight: 'bold', fontSize: '20px', marginRight: '10px' }}>{item.vaccname}</div>
        <div style={{ fontSize: '16px' }}>{item.date}</div>
      </div>
    ))
  ) : (
    <div>No vaccinations done yet.</div>
  )}
</div>
                                          </div>
                                       
                               
                                <div className='text-end pt-5'>
                                    <Link  to="/vaccination_list">
                                    <img
                                     
                                     src={require('../../assets/image/Vector.png')}  alt='' />
                                    </Link>
                               
                                </div>
                                </div>
                             
                            </div>
                        </div>
                    </div>
                </div>
             </div>
        </section>
        <footer className='py-4' style={{backgroundColor:'#F841CE'}}></footer>
    </div>
  )
}

export default Vaccinaction