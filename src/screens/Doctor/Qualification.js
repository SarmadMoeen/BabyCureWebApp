import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import AdminNavbar from '../Admin/AdminNavbar'

import axios from 'axios'

const Qualification = () => {

  const [name,setName] = useState('')
  const [qualification,setQualification] = useState('');
  const [specialization,setSpecialization] = useState('');
  const [contactNo,setContactNo] = useState('');
  const [charges,setCharges] = useState('');
  const [review,setReview] = useState('');

  const handleDoctor = async () => {
    axios.post('http://localhost:3000/doctorInfo', {
      name,
      qualification,
      specialization,
      contactNo,
      charges,
      review
      
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
    <AdminNavbar/>
       <div className='container-fluid' style={{backgroundColor:'#B8E0FD'}} >
        <div className='row '>
             <div className='col-md-7 pt-5'>
                <div className='card mx-5 rounded-0 p-3 pt-5' style={{backgroundColor:'#497BAA',border:'3px solid #000'}} >
                   <div className='row pt-4'>
                      <div className='col-md-4'>
                        <h4 className='text-white pt-3' >Name</h4>
                      </div>
                      <div className='col-md-8'>
                         <input  type="text" className='w-100 form-control text-white '
                         value={name}
                         onChange={e=> setName(e.target.value)}  />
                      </div>
                    </div>  
                   <div className='row pt-4'>
                      <div className='col-md-4'>
                        <h4 className='text-white pt-3' > Qualification</h4>
                      </div>
                      <div className='col-md-8'>
                         <input  type="text" className='w-100 form-control text-white '
                         value={qualification}
                         onChange={e=>setQualification(e.target.value)}  />
                      </div>
                    </div>  
                    <div className='row pt-4'>
                      <div className='col-md-4'>
                        <h4 className='text-white pt-3' > Specialization</h4>
                      </div>
                      <div className='col-md-8'>
                         <input  type="text" className='w-100 form-control text-white '
                         value={specialization}
                         onChange={e=>setSpecialization(e.target.value)}  />
                      </div>
                    </div>  
                    <div className='row pt-4'>
                      <div className='col-md-4'>
                        <h4 className='text-white pt-3' > Contact No:</h4>
                      </div>
                      <div className='col-md-8'>
                         <input  type="text" className='w-100 form-control text-white '
                         value={contactNo}
                         onChange={e=>setContactNo(e.target.value)}  />
                      </div>
                    </div>  
                    <div className='row pt-4'>
                      <div className='col-md-4'>
                        <h4 className='text-white pt-3' > Charges:</h4>
                      </div>
                      <div className='col-md-8'>
                         <input  type="text" className='w-100 form-control text-white '
                         value={charges}
                         onChange={e=>setCharges(e.target.value)}  />
                      </div>
                    </div>  
                    <div className='row  pt-4'  >
                      <div className='col-md-4'>
                        <h4 className='text-white pt-3' >Review</h4>
                      </div>
                      <div className='col-md-8'>
                         <input  type="text" className='w-100 form-control text-white '  
                          value={review}
                         onChange={e=>setReview(e.target.value)}
                         />
                      </div>
                    </div> 
                    <div className='row text-center'>
                       <div className='col-md-12 py-5'>
                        <Link to="/doctor_admin2" ><button onClick={handleDoctor} style={{backgroundColor:'#B8E0FD'}} className='btn px-5 text-bold rounded-pill'>Done</button></Link>



                       </div>
                       <div  className='text-end'>
                        <Link to="/doctor_admin2"  style={{color:'red'}} >Skip for Now</Link>
                       </div>
                    </div>  
                </div>
             </div>
             <div className='col-md-5 pt-2'>
                <div className=' border-0'>
                    <img  src={require('../../assets/image/qua.png')} 
                    
                     
                    alt='' height="540px" width="100%" />
                </div>
             </div>
        </div>
    </div>
    <div className="py-4" style={{backgroundColor:'#497BAA'}}>

      </div>
    </>
  )
}

export default Qualification