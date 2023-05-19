import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import $ from 'jquery'
import axios from "axios";
import { useEffect } from "react";

const Milestones = () => {

  const [milestoneName,setMileStoneName] = useState('');
  const [description,setDescription] = useState('');
  const [date,setDate] = useState('');
  const [data,setData] = useState([]);

  const handleAddMilestones = () => {
    axios.post('http://localhost:3000/milestones', {
     milestoneName,
     description,
     date

    })
      .then(response => {
        console.log(response.data)
      })
      .catch(error => {
        console.error(error)
      })
  }

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/deleteMilestones/${id}`)
      .then(response => {
        const updatedData = data.filter((item) => item.id !== id);
        setData(updatedData);
      })
      .catch(error => {
        console.error(error)
      })
  }
  

  /*useEffect(() => {
    fetch("http://localhost:3000/getMilestones") // replace with your backend endpoint URL
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);*/

  useEffect(() => {
    fetch("http://localhost:3000/getMilestones") // replace with your backend endpoint URL
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched data:", data);
        setData(data);
      })
      .catch((error) => console.error(error));
  },[]);

  console.log("Data:", data);

  $(".navbar .nav-link").on("click", function(){
    $(".navbar").find(".activeNav").removeClass("activeNav");
    $(this).addClass("activeNav");
 });
  return (
    <>
       <nav class={`navbar navbar-expand-lg navbar-light`} id="navbar4"  >
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
      <section className="Milestones_page" style={{backgroundColor:'#B8E0FD'}} >
        <div className="container pb-5">
          <div className="text-left pb-4 pt-3">
           <h4>Home / Baby / Milestones </h4>
          </div>
          <div  style={{marginTop:"20px"}} className="text-center">
             <h2>MIlestones</h2>
             <p>“It’s Link Big Deal. Each Milestone is Link Big Step.”</p>
          </div>
          <div className="row g-5">
         
         
<div>
  <div className="container" style={{ height: "600px", overflowY: "auto" }}>
    <div className="row justify-content-between mx-0">
      {data.map((item) => (
        <div className="col-md-4 mb-4" key={item.id}>
          <div className="card text-center p-4 rounded-4" style={{ backgroundColor: '#497BAA' }}>
            <div className="text-center">
              <img src={item.image} width="90px" alt="" />
              <h4 className="pt-2">{item.title}</h4>
            </div>
            <div className="text-left">
              <p>{item.description}</p>
              <p>Date: {item.date}</p>
            </div>
            <button onClick={() => handleDelete(item.id)}>Delete Milestone</button>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>





       
          
           
          </div>
           <div className="text-end">
            <img 
             type="button"  data-bs-toggle="modal" data-bs-target="#exampleModal"
            src={require('../../assets/image/Group 15.png')} alt="" />
           </div>
        </div>
      </section>
      <div class="modal fade pt-5 " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog "  >
    <div class="modal-content">
     
      <div class="modal-body pt-5 ">
        <form>
        <div className="row pt-4">
          <div className="col-md-12">
            <div>
              <label className="text-white" >Milestone name</label>
              <input className="form-control text-white" 
                value={milestoneName} 
                onChange={e => setMileStoneName(e.target.value)}
              />
            </div>
          </div>
          <div className="col-md-12 pt-4">
            <div>
              <label className="text-white" >Description</label>
              <input className="form-control text-white " 
                value={description}
                onChange={e => setDescription(e.target.value)}
               />
            </div>
          </div>
          <div className="col-md-12 pt-4">
            <div>
              <label className="text-white" >Date</label>
              <input
                                  placeholder='Date of Birth'
                                  className='form-control let_baby_search text-white'
                                  type='date'
                                  value={date}
                                  onChange={e => setDate(e.target.value)}
                                />
            </div>
          </div>
          <div className="col-md-12 pt-4 text-center">
          <button onClick={handleAddMilestones} type="button" class=" text-bold btn"  style={{backgroundColor:'#B8E0FD'}}  data-bs-dismiss="modal">Add Milestone</button>
          </div>
        </div>
        </form>
      </div>
      
    </div>
  </div>
</div>
      <div className="py-4" style={{backgroundColor:'#497BAA'}}>

      </div>
    </>
  );
};

export default Milestones;
