import React from 'react'
import { Link } from 'react-router-dom'
import $ from 'jquery'
import { useState } from 'react'
import axios from 'axios'

const Payment = () => {

  const [cardHolder,setCardHolder] = useState("");
  const [cardHolderNumber,setCardHolderNumber] = useState("");
  const [date,setDate] = useState("");
  const [cv,setCV] = useState("");

  const handlePayment = () => {
    axios.post('http://localhost:3000/payment', {
    cardHolder,
    cardHolderNumber,
    date,
    cv

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
    <div className='' style={{backgroundColor:'#C2FFFF'}} >
        <div className='  container py-4'>
            <h4>Payment</h4>
           <div className='row py-5'>
             <div className='col-md-8 mx-auto'>
             <div className='row'>
             <div className='col-md-12'>
                <div>
                    <label>Card Holder Name</label>
                    <input type="text" className='form-control'
                    value={cardHolder}
                    onChange={e => setCardHolder(e.target.value)} />
                </div>
             </div>
             <div className='col-md-12 pt-4'>
                <div>
                    <label>Card Number</label>
                    <input type="number" className='form-control' 
                      value={cardHolderNumber}
                      onChange={e => setCardHolderNumber(e.target.value)}
                    />
                </div>
             </div>
             <div className='col-md-6 pt-4'>
                <div>
                    <label>Expired Date</label>
                    <input type="date" className='form-control' 
                      value={date}
                      onChange={e => setDate(e.target.value)}
                    />
                </div>
             </div>
             <div className='col-md-6 pt-4'>
                <div>
                    <label>CVV</label>
                    <input type="number" className='form-control'
                      value={cv} 
                      onChange={e => setCV(e.target.value)}
                      />
                </div>
             </div>
             <div className='col-md-6 pb-4 text-center pt-5'>
                 <Link to="/chat"><button onClick={handlePayment} className='btn text-white px-4' style={{backgroundColor:'#079AAD'}} >PAY</button></Link>
             </div>
        </div>
             </div>
           </div>
        </div>
    </div>
    <footer className='py-4' style={{backgroundColor:'#079AAD'}} >

</footer>
    </>
    
  )
}

export default Payment