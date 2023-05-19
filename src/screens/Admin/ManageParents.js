import React from "react";
import { Link, NavLink } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import AdminNavbar from "./AdminNavbar";
import { useState } from "react";
import { useEffect } from "react";

const ManageParents = () => {

  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) // Case-insensitive search
  );

  useEffect(() => {
    const token = localStorage.getItem('token'); // Assuming you store the token in local storage
  
    fetch('http://localhost:3000/users', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log(error));
  }, []);

  const handleBlockUser = (id) => {
    // find the index of the user with the given id
    const index = users.findIndex(user => user.id === id);
  
    // make a request to the server to delete the user data
    /*fetch(`http://localhost:3000/deleteUsers/${id}`, {
      method: 'DELETE'
    })
      .then(response => {
        if (response.ok) {
          // remove the user from the array
          const updatedUsers = [...users];
          updatedUsers.splice(index, 1);
  
          // update the state
          setUsers(updatedUsers);
        } else {
          throw new Error('Failed to delete user data');
        }
      })
      .catch(error => {
        console.error(error);
      });*/
  }
  


  return (
    <>
      <AdminNavbar/>
      <section className="ManageDoctor_page" style={{backgroundColor:'#B8E0FD'}} >

        <div className="container pb-5">

          <div className="text-left pb-4 pt-3">
           <h4>Home / Mange Doctor</h4>
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
                  style={{ position: "absolute", top: "40px", right: "12px" }}
                >
                  <i className="fa  fa-search" style={{ fontSize: "20px" }}></i>
                </label>
              </div>
                </div>
             </div>
          </div>
          <div className="d-flex ">
            <div className="mx-2">
                <button className="btn rounded-0 px-4 py-2" style={{backgroundColor:'#42709B'}} >Filter</button>
            </div>
            <div  className="mx-2" >
            <select style={{backgroundColor:'#42709B'}}  class="form-select py-1 rounded-5 px-5 py-2 text-bold" aria-label="Default select example">
  <option selected>Amma</option>
  <option value="1">Adnan</option>
  <option value="2">Mustafa</option>
  <option value="3">Ali</option>
</select>
            </div>
          
         
          </div>

          <div className="col-md-12">
         <div className="table-responsive">
         <table class="table  align-middle">

<tbody className="rounded-3 "    style={{backgroundColor:'#497BAA'}} >
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
      <div className="py-4" style={{backgroundColor:'#497BAA'}}>

      </div>
    </>
  );
};

export default ManageParents;
