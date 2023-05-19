import React, { useState } from "react";
import { Link } from "react-router-dom";


import axios from "axios";

const Signup = () => {

const [email,setEmail]=useState()
const [username,setUserName]=useState()
const [password,setPassword]=useState()
const [confirmPassword,setConfirmPassword]=useState()


const handleSignIn = async () => {
  axios.post('http://localhost:3000/register', {
    name:username,
    email,
    password,
    confirmPassword,
    
  })
    .then(response => {
      console.log(response.data)
    })
    .catch(error => {
      console.error(error)
    })

    
      
}
;





 



  return (
    <div className="signup_page">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-7 p-0">
            <div className="" style={{overflow:'hidden'}} >
              <img
                src={require("../../assets/image/Rectangle 2 (1).png")}
                alt=""
                width="100%"  height="649px"
              />
            </div>
          </div>
          <div className="col-md-5">
            <div>
              <form >
                <div className="row">
                  <div className="col-md-10 pt-5 mx-auto">
                    <div className="text-center">
                      <h2 className="text-bold">Signup</h2>
                      <hr className="underline" />
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                      <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label m-0">
                          email
                        </label>
                        <input
                          placeholder=''
                          className='form-control let_baby_search'
                          type='text'
                          value={email}
                          onChange={e => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="col-md-12">
                        <div class="mb-3">
                          <label for="exampleInputEmail1" class="form-label m-0">
                            username
                          </label>
                          <input
                            placeholder=''
                            className='form-control let_baby_search'
                            type='text'
                            value={username}
                            onChange={e => setUserName(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div class="mb-3">
                          <label for="exampleInputEmail1" class="form-label m-0">
                            password
                          </label>
                          <input
                            placeholder=''
                            className='form-control let_baby_search'
                            type='text'
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div class="mb-3">
                          <label for="exampleInputEmail1" class="form-label m-0">
                            confirm password
                          </label>
                          <input
                            placeholder=''
                            className='form-control let_baby_search'
                            type='text'
                            value={confirmPassword}
                            onChange={e => setConfirmPassword(e.target.value)}
                          />
                        </div>
                      </div>
                                        </div>
                  <div className="col-md-12 text-center">
                    <h6 className="py-3" >Already a Member?<Link to="/login" className="btn text-danger" >Log in</Link> </h6>
                    <Link to="/let_add_baby"><button onClick={handleSignIn} className="btn btn-primary border-0 px-3 rounded-3 " >SIGNUP</button></Link>
                  </div>
                        </div>
                    </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
