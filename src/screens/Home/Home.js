import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const Home = () => {
  return (
    <>
      <Header />
      <section className="home_page">
        <div className="container-fluid py-5">
          <div className="text-center mx-5 pt-5">
            <h6 className="heading">Welcome to Baby Cure!</h6>
            <p className="para pt-3">
              “When the baby is going through growth spurts or mood changes, I
              use The Wonder Weeks to keep track of it all and why he behaves
              differently.” – Devinda, Momatu team.
            </p>
          </div>
          <div className="row gy-5">
            <div className="col-md-3">
              <div className="card p-4 rounded-4">
                <div className="text-center">
                  <img
                    src={require("../../assets/image/emojione-v1_baby.png")}
                    width="90px"
                    alt=""
                  />
                  <h5 className="pt-2">Azlan</h5>
                </div>
                <div className="text-left">
                  <p>BMI of baby: 6.0</p>
                  <p>
                    Upcoming vaccine: Pneumococcal-I
                  </p>
                </div>
                <div className="text-center mt-3">
                  <Link to="/home_baby"><button className="btn btn-light w-50">More  <i class="fa ps-2  fa-arrow-right"></i> </button></Link>
                </div>
              </div>
            </div>
          
  
            <div className="col-md-3">
              <div className="card p-4 rounded-4">
                <div className="text-center">
                  <img
                    src={require("../../assets/image/emojione-v1_baby.png")}
                    width="90px"
                    alt=""
                  />
                  <h5 className="pt-2">Amna</h5>
                  
                </div>
                <div className="text-left">




                </div>
                <div className="text-center mt-3">
                  <Link to="/mother_home"><button style={{marginTop:"80px"}} className="btn btn-light w-50">More <i class="fa ps-2  fa-arrow-right"></i> </button></Link>
                </div>
              </div>
            </div>
            <div className="col-md-3 pt-5 mt-5 text-center">
              <div className="pt-5">
                <Link to="/add_baby">
                <img src={require('../../assets/image/add.png')}  alt="" />
                <h5 className="text-black">Add Baby</h5>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default Home;
