import React from "react";
import { Link, NavLink } from "react-router-dom";
import AdminNavbar from "../Admin/AdminNavbar";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Requests = () => {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedName, setSelectedName] = useState("");
  const [data, setData] = useState("");

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) // Case-insensitive search
  );

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`http://localhost:3000/users?review=${selectedName}`);
      setData(response.data);
    }
    fetchData();
  }, [selectedName]);

  const handleSelectChange = (event) => {
    setSelectedName(event.target.value);
  };

  const handleBlockUser = (id) => {
    // find the index of the user with the given id
    const index = users.findIndex((user) => user.id === id);

    // make a request to the server to delete the user data
    fetch(`http://localhost:3000/deleteUsers/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          // remove the user from the array
          const updatedUsers = [...users];
          updatedUsers.splice(index, 1);

          // update the state
          setUsers(updatedUsers);
        } else {
          throw new Error("Failed to delete user data");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <AdminNavbar />
      <section className="Requests_page" style={{ backgroundColor: "#B8E0FD", minHeight: "100vh" }}>
        <div className="container pb-5">
          <div className="text-left pb-4 pt-3">
            <h4>Home/Parent’s Consultancy Request</h4>
          </div>
          <div className="row g-5">
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-6 mx-auto">
                  <div className="py-4" style={{ position: "relative" }}>
                    <input
                      type="search"
                      className="form-control py-3 btn btn border-0 search_admin rounded-5"
                      onChange={handleSearch}
                      placeholder="Search by name"
                    />
                    <label
                      style={{
                        position: "absolute",
                        top: "40px",
                        right: "12px",
                      }}
                    >
                      <i
                        className="fa fa-search"
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
                  style={{ backgroundColor: "#42709B" }}
                >
                  Filter
                </button>
              </div>
              <div className="mx-2">
                <select
                  style={{ backgroundColor: "#B5972F" }}
                  className="form-select py-1 rounded-5"
                  aria-label="Default select example"
                  value={selectedName}
              onChange={handleSelectChange}
            >
              <option value="">Reviews</option>

              <option value="">No Filters</option>
              <option value="sarmad">Sarmad</option>
              <option value="A">Start with A</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
              </div>
            </div>

            <div className="col-md-12">
              <div className="table-responsive">
                <table class="table  align-middle">
                 
                   <tbody className="rounded-3" style={{ backgroundColor: '#497BAA' }}>
          {filteredUsers.map((user, index) => (
            <tr key={user.id}>
              <th scope="row">{index + 1}</th>
              <td>
                <img src={require('../../assets/image/tableimg.png')} alt="" />
                {user.name}
              </td>
              <td>
                <img src={require('../../assets/image/note.png')} width="30px" alt="" />
                <span className="ms-3">User's info</span>
              </td>
              <td>
                <img src={require('../../assets/image/block.png')} width="30px" alt="" />
                <button className="ms-3" onClick={() => handleBlockUser(user.id)}>
                  Block
                </button>
              </td>
            </tr>
          ))}
     
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="py-4" style={{ backgroundColor: "#497BAA" }}></div>
    </>
  );
};

export default Requests;
