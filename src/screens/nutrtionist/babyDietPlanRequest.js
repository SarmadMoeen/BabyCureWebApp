import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const BabyDietPlanRequest = () => {
  const [requests, setRequests] = useState([]);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [updatedData, setUpdatedData] = useState({
    name: "",
    age: "",
    weight: "",
    cause: ""
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/getCustomizeDietPlanReq"); // Replace "/api/baby-diet-plan-requests" with the actual API endpoint for fetching the data
        setRequests(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleUpdateClick = (request) => {
    setSelectedRequest(request);
    setShowModal(true);
    setUpdatedData({
      
      cause: request.description
    });
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleInputChange = (e) => {
    setUpdatedData({
      ...updatedData,
      [e.target.name]: e.target.value
    });
  };

  const handleUpdateSubmit = async () => {
    try {
      await axios.put(`http://localhost:3000/updateDietPlan/${selectedRequest.id}`, updatedData);
      // Rest of the code
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header />
      <section
        className="HomeAdminPage_page"
        style={{ backgroundColor: "#B8E0FD", minHeight: "100vh" }}
      >
        <div className="container-fluid pb-5 pt-3">
          <h4>Baby Diet Plan Requests</h4>
          <div className="text-center mx-5 pt-3">
            <h3 className="heading">Welcome to Baby Cure!</h3>
            <h5 className="para pt-3 pb-4">
              “When the baby is going through growth spurts or mood changes, I
              use The Wonder Weeks to keep track of it all and why he behaves
              differently.” – Devinda, Momatu team.
            </h5>
          </div>
          <div>
            <table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Weight</th>
                  <th>Cause</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {requests.map((request) => (
                  <tr key={request.id}>
                    <td>{request.name}</td>
                    <td>{request.age}</td>
                    <td>{request.weight}</td>
                    <td>{request.description}</td>
                    <td>
                      <Button
                        variant="primary"
                        onClick={() => handleUpdateClick(request)}
                      >
                        Update
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <Footer />

      {/* Update Modal */}
      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
          
            <div className="form-group">
              <label>Updated Diet Plan</label>
              <input
                type="text"
                className="form-control"
                name="cause"
                value={updatedData.description}
                onChange={handleInputChange}
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdateSubmit}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default BabyDietPlanRequest;
