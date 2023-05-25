import React from "react";
import { Link } from "react-router-dom";
import $ from 'jquery'
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const Recipes = () => {

  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [durationFilter, setDurationFilter] = useState("");
  const [selectedValue,setSelectedValue] = useState("");


  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

 const filterData = (data) => {
  let filteredData = data;

  // apply duration filter
  if (durationFilter !== "") {
    filteredData = filteredData.filter((activity) => {
      const activityDuration = parseFloat(activity.duration);
      if (activityDuration < parseFloat(durationFilter)) {
        return false;
      }
      return true;
    });
  }

  // apply search filter
  if (searchQuery !== "") {
    filteredData = filteredData.filter((activity) => {
      const title = activity.title.toLowerCase();
      const query = searchQuery.toLowerCase();
      return title.includes(query);
    });
  }

  return filteredData;
};

  
  

  /*useEffect(() => {
    fetch('http://localhost:3000/getPhysicalActivities')
      .then(response => response.json())
      .then(data => setActivities(data))
      .catch(error => console.error(error));
  }, []);*/
  useEffect(() => {
    fetch('http://localhost:3000/getDiyRemediesRecipies')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`http://localhost:3000/getDiyRemediesRecipies?review=${selectedValue}`);
      setData(response.data);
    }
    fetchData();
  }, [selectedValue]);

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };



  $(".navbar .nav-link").on("click", function(){
    $(".navbar").find(".activeNav").removeClass("activeNav");
    $(this).addClass("activeNav");
 });
  return (
    <>
      <nav class={`navbar navbar-expand-lg navbar-light`} id="navbar15">
        <div class="container-fluid">
          <Link class="navbar-brand" href="#">
          <img style={{width:"80px", borderRadius:"10px",marginLeft:"35px"}} src={require('../../assets/image/Baby Care.png')}></img>
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
                <Link class="nav-link" to="/physical_activities">
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
      <section
        className="PhysicalActivies_page"
        style={{ backgroundColor: "#B8E0FD" }}
      >
        <div className="container-fluid pb-5">
          <div className="text-left pb-4 pt-3">
            <h4>Home / DIY Remedies & Recipes</h4>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-6 mx-auto">
                  <div className="py-4" style={{ position: "relative" }}>

                  <input
                    type="search"
                    className="form-control py-3 btn btn border-0 search_btn12 rounded-5"
                    placeholder="Search by title"
                    value={searchQuery}
                    onChange={handleSearch}
                  />

                    <label
                      style={{
                        position: "absolute",
                        top: "40px",
                        right: "12px",
                      }}
                    >
                      <i
                        className="fa  fa-search"
                        style={{ fontSize: "20px" }}
                      ></i>
                    </label>
                  </div>
                </div>
              </div>
            </div>


            <div className="d-flex ">
      <div className="mx-2">
        <button
          className="btn rounded-0 px-4 py-2"
          style={{ backgroundColor: "#497BAA" }}
        >
          Filter
        </button>
      </div>
      <div className="mx-2">
      <select
  style={{ backgroundColor: "#42709B" }}
  className="form-select py-1 rounded-5"
  aria-label="Default select example"
  value={selectedValue}
  onChange={handleSelectChange}
>
  <option value="">All</option>
  <option value="">No Filters</option>
  <option value="24Months">24 months|</option>
  <option value="Solid">Solid</option>
  <option value="Liquid">liquid</option>
  <option value="12Month">12 Month</option>
</select>
      </div>
    </div>


    <div className="container-fluid">
  <div className="row">
    {filterData(data).filter((activity) => {
      if (searchQuery === "") {
        return true;
      } else if (
        activity.title.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        return true;
      } else {
        return false;
      }
    }).filter((activity) => {
      if (selectedValue === "" || selectedValue === "No Filters") {
        return true;
      } else if (activity.title.includes(selectedValue)) {
        return true;
      } else {
        return false;
      }
    }).map((activity) => (
      <div
        className="col-md-12"
        style={{
          marginTop: "20px",
          padding: "20px",
        }}
      >
        <div className="row">
          <div className="col-md-4 p-0">
            <div>
              <img
                src={activity.imageUrl}
                width="100%"
                height="100%"
                alt=""
              />
            </div>
          </div>
          <div className="col-md-8 p-0">
            <div
              className="p-4 w-100 h-100 text-white"
              style={{ backgroundColor: "#42709B" }}
            >
              <h3>{activity.title}</h3>
              <p style={{ fontSize: "20px" }}>
                {activity.description.substring(0, 100)}...{" "}
                <Link to={`/activity/${activity.id}`}>continue reading</Link>
              </p>
              <div className="text-center">
                <Link to="/list_physical_activities" style={{ color: "blue" }}>
                  continue reading
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>


          </div>
        </div>
      </section>
      <div className="py-4" style={{ backgroundColor: "#42709B" }}></div>
    </>
  );
};

export default Recipes;
