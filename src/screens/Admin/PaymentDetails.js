import React from "react";
import AdminNavbar from "./AdminNavbar";

const PaymentDetails = () => {
  return (
    <>
      <AdminNavbar />
      <section
        className="PaymentDetails_page"
        style={{ backgroundColor: "#B8E0FD" }}
      >
        <div className="container pb-5">
          <div className="text-left pb-4 pt-3">
            <h4>Home / Payments</h4>
          </div>
          <div className="row g-5">
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-6 mx-auto">
                  <div className="py-4" style={{ position: "relative" }}>
                    <input
                      type="search"
                      className="  form-control py-3 btn btn border-0 search_admin rounded-5"
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
                  style={{ backgroundColor: "#42709B" }}
                >
                  Filter
                </button>
              </div>
              <div className="mx-2">
                <select
                  style={{ backgroundColor: "#42709B" }}
                  class="form-select py-1 rounded-5 px-5 py-2 text-bold"
                  aria-label="Default select example"
                >
                  <option selected>Amma</option>
                  <option value="1">Adnan</option>
                  <option value="2">Mustafa</option>
                  <option value="3">Ali</option>
                </select>
              </div>
            </div>

            <div className="col-md-12">
              <div className="table-responsive">
              <h3>Padding</h3>
                <table class="table  align-middle">
                  <tbody
                    className="rounded-3 "
                    style={{ backgroundColor: "#497BAA" }}
                  >
                    <tr>
                      <th scope="row">2</th>
                      <td>
                        <img
                          src={require("../../assets/image/tableimg.png")}
                          width="30px"
                          alt=""
                        />
                        Amna
                      </td>
                      <td>
                      Payment Method:  By Card
                      </td>
                      <td>Amount: 1000 Rs.</td>
                      <td>
                        <img
                          src={require("../../assets/image/details.png")}
                          width="30px"
                          alt=""
                        />
                        <span className="ms-3">Paymemt Status :</span>
                      </td>
                      <td>
                        <img
                          src={require("../../assets/image/paid.png")}
                          width="30px"
                          alt=""
                        />
                        <span className="ms-3">Paid</span>
                      </td>
                    </tr>

                    <tr>
                      <th scope="row">2</th>
                      <td>
                        <img
                          src={require("../../assets/image/tableimg.png")}
                          width="30px"
                          alt=""
                        />
                        Amna
                      </td>
                      <td>
                      Payment Method:  By Card
                      </td>
                      <td>Amount: 1000 Rs.</td>
                      <td>
                        <img
                          src={require("../../assets/image/details.png")}
                          width="30px"
                          alt=""
                        />
                        <span className="ms-3">Paymemt Status :</span>
                      </td>
                      <td>
                        <img
                          src={require("../../assets/image/paid.png")}
                          width="30px"
                          alt=""
                        />
                        <span className="ms-3">Paid</span>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>
                        <img
                          src={require("../../assets/image/tableimg.png")}
                          width="30px"
                          alt=""
                        />
                        Amna
                      </td>
                      <td>
                      Payment Method:  By Card
                      </td>
                      <td>Amount: 1000 Rs.</td>
                      <td>
                        <img
                          src={require("../../assets/image/details.png")}
                          width="30px"
                          alt=""
                        />
                        <span className="ms-3">Paymemt Status :</span>
                      </td>
                      <td>
                        <img
                          src={require("../../assets/image/paid.png")}
                          width="30px"
                          alt=""
                        />
                        <span className="ms-3">Paid</span>
                      </td>
                    </tr>

                   
                  </tbody>
                </table>
              </div>
              <div className="table-responsive pt-4">
                <h3>Padding</h3>
                <table class="table  align-middle">
                  <tbody
                    className="rounded-3 "
                    style={{ backgroundColor: "#497BAA" }}
                  >
                    <tr>
                      <th scope="row">2</th>
                      <td>
                        <img
                          src={require("../../assets/image/tableimg.png")}
                          width="30px"
                          alt=""
                        />
                        Amna
                      </td>
                      <td>
                      Payment Method:  By Card
                      </td>
                      <td>Amount: 1000 Rs.</td>
                      <td>
                        <img
                          src={require("../../assets/image/details.png")}
                          width="30px"
                          alt=""
                        />
                        <span className="ms-3">Paymemt Status :</span>
                      </td>
                      <td>
                        <img
                          src={require("../../assets/image/padding.png")}
                          width="30px"
                          alt=""
                        />
                        <span className="ms-3">Padding</span>
                      </td>
                    </tr>


                   
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

export default PaymentDetails;
