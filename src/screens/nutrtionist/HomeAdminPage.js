import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const NutritionistHomePage = () => {
  return (
    <>
      <Header />
      <section
        className="HomeAdminPage_page"
        style={{ backgroundColor: "#B8E0FD", minHeight: "100vh" }}
      >
        <div className="container pb-5 pt-3">
          <h4>Home</h4>
          <div className="text-center mx-5 pt-3">
            <h3 className="heading">Welcome to Baby Cure!</h3>
            <h5 className="para pt-3 pb-4">
              “When the baby is going through growth spurts or mood changes, I
              use The Wonder Weeks to keep track of it all and why he behaves
              differently.” – Devinda, Momatu team.
            </h5>
          </div>
          <div className="row g-5">
            
            <div className="col-md-4">
              <div
                className="card p-4 rounded-4"
                style={{ backgroundColor: "#497BAA" }}
              >
                <div className="text-center">
                
                  <h5 className="py-3 text-white ">
                    Add Common Problems<br /> with Solutions
                  </h5>
                </div>
                <div className="text-center mt-3">
                  <Link to="/postCommonProbelms" className="btn btn-light w-50">
                    More <i class="fa ps-2  fa-arrow-right"></i>{" "}
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="card p-4 rounded-4"
                style={{ backgroundColor: "#497BAA" }}
              >
                <div className="text-center">
                 
                  <h5 className="py-3 text-white ">
                    Add Physical Activities <br /> 
                  </h5>
                </div>
                <div className="text-center mt-3">
                  <Link style={{marginTop:"20px"}} to="/postPhysicalActivites" className="btn btn-light w-50">
                    More <i class="fa ps-2  fa-arrow-right"></i>{" "}
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="card p-4 rounded-4"
                style={{ backgroundColor: "#497BAA" }}
              >
                <div className="text-center">
                 
                  <h5 className="py-3 text-white ">
                    Add Diy Remedies<br /> & Recipes
                  </h5>
                </div>
                <div className="text-center mt-3">
                  <Link to="/postDiyRemediesRecipes" className="btn btn-light w-50">
                    More <i class="fa ps-2  fa-arrow-right"></i>{" "}
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div
                className="card p-4 rounded-4"
                style={{ backgroundColor: "#497BAA" }}
              >
                <div className="text-center">
                 
                  <h5 className="py-3 text-white ">
                    Baby Customize <br />Diet Plan Requests
                  </h5>
                </div>
                <div className="text-center mt-3">
                  <Link to="/postDiyRemediesRecipes" className="btn btn-light w-50">
                    More <i class="fa ps-2  fa-arrow-right"></i>{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default NutritionistHomePage;
