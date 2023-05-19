import React from "react";
import { Link, NavLink } from "react-router-dom";
import $ from 'jquery'
import { useState } from "react";
import axios from "axios";
import Vaccinaction from "./Vaccinaction";

const VaccinationList = () => {

  const [selectedVaccine, setSelectedVaccine] = useState(null);
  const [date, setDate] = useState("");

  const handleVaccineSelect = (vaccine) => {
    setSelectedVaccine(vaccine);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (selectedVaccine && date) {
      const payload = {
        key: selectedVaccine.key,
        vaccname: selectedVaccine.vaccname,
        date: date,
      };

      axios.post("http://localhost:3000/vaccinations", payload)
        .then(res => console.log(res))
        .catch(err => console.log(err));

      setSelectedVaccine(null);
      setDate("");
    }
  };

  const data = [
    { 'key': '1', 'vaccname': 'BCG' ,'space':''},
    { 'key': '2', 'vaccname': 'OPV-0','space':'' },
    { 'key': '3', 'vaccname': 'Hep-B','space':'' },
    { 'key': '4', 'vaccname': 'OPV-I','space':'' },
    { 'key': '5', 'vaccname': 'Pneumococcal-I','space':'' },
    { 'key': '6', 'vaccname': 'Rotavirus-I','space':'' },
    { 'key': '7', 'vaccname': 'Pentavalent-I','space':'' },
    { 'key': '8', 'vaccname': 'OPV-II','space':'' },
    { 'key': '9', 'vaccname': 'Pneumococcal-II','space':'' },
    { 'key': '10', 'vaccname': 'Rotavirus-II','space':'' },
    { 'key': '11', 'vaccname': 'Pentavalent-II','space':'' },
    { 'key': '12', 'vaccname': 'OPV-III','space':'' },
    { 'key': '13', 'vaccname': 'Pneumococcal-III','space':'' },
    { 'key': '14', 'vaccname': 'IPV-I','space':'' },
    { 'key': '15', 'vaccname': 'Pentavalent-III','space':'' },
    { 'key': '16', 'vaccname': ' MR-I','space':'' },
    { 'key': '17', 'vaccname': 'Typhoid','space':'' },
  ]


  $(".navbar .nav-link").on("click", function(){
    $(".navbar").find(".activeNav").removeClass("activeNav");
    $(this).addClass("activeNav");
 });

 

  return (
    <div>
      <nav class={`navbar navbar-expand-lg navbar-light`} id="navbar2">
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
                <Link class="nav-link" href="#">
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
            <div class="">
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
            </div>
          </div>
        </div>
      </nav>
      <section className="" style={{ backgroundColor: "#FFD7F6" }}>
        <div className="container pb-5">
        <h5 className="pt-3"> Home / Baby / Vaccination /  Vaccination List </h5>
          <div className="row">
            <div className="col-md-5 mx-auto">
              <div className="py-4" style={{ position: "relative" }}>
                <input
                  type="search"
                  className="form-control py-3 btn btn border-0 search_btn rounded-4"
                />
                <label
                  style={{ position: "absolute", top: "40px", right: "12px" }}
                >
                  <i className="fa  fa-search" style={{ fontSize: "20px" }}></i>
                </label>
              </div>
            </div>

            <div className="col-md-10 mx-auto">
              <form onSubmit={handleFormSubmit}>
                <ul
                  className="list-group p-4 mb-4 rounded-4"
                  style={{
                    backgroundColor: "#CC3FB1",
                    listStyle: "none",
                    lineHeight: "10px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {data.map((item) => (
                    <li
                      key={item.key}
                      style={{
                        marginBottom: "10px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                      onClick={() => handleVaccineSelect(item)}
                    >
                      <span style={{ marginRight: "10px" }}>{item.vaccname}</span>
                      <input
                        placeholder="Date of Birth"
                        className="form-control let_baby_search text-white"
                        type="date"
                        value={selectedVaccine && selectedVaccine.key === item.key ? date : ""}
                        onChange={(e) => setDate(e.target.value)}
                        style={{ marginLeft: "auto", width: "150px" }}
                      />
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary">
                    Add Vaccinaction
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <footer className="py-4" style={{ backgroundColor: "#F841CE" }}></footer>
    </div>
  );
};

export default VaccinationList;
