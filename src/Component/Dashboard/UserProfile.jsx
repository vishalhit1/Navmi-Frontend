import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "./Sidebar";
import { useState } from "react";
import Headerdashboard from "./Headerdashboard";
import Footerdashboard from "./Footerdashboard";
const UserProfile = () => {
  const [isOpened, setIsOpened] = useState(null)

  const toggleSidebars = (val) => {
    setIsOpened(val)
  }

  return (
    <div>
      <Headerdashboard/>
      <Container fluid>
        <Row>
          <Sidebar toggleSidebars={toggleSidebars} />
          <Col lg={9} className={`sidebarcontent ${isOpened ? '' : 'full-width'}`}>
            <h3>Profile Details</h3>
            <div className="profiledetails">
              <Row>
                <Col lg={6}>
                  <form>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Loan Amount</label>
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Enter Your Loan Amount ( In Lakhs )"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Company Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Company Name"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">
                        Total Work of experience
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Enter Your Total Works Of Experience ( In Years )"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Residence Type</label>
                      <select name="" className="form-control">
                        <option value="Select Your Residence Type" disabled>
                          Select Your Residence Type
                        </option>
                        <option value="1">1</option>
                        <option value="1">1</option>
                        <option value="1">1</option>
                        <option value="1">1</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Full name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Full name"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Email ID</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter Email Id"
                      />
                    </div>
                  </form>
                </Col>
                <Col lg={6}>
                  <form>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">
                        Net Monthly Salary
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Enter Your Net Monthly Salary"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">
                        Current Company
                      </label>
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Enter Your Current Company ( in Years )"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Existing EMI</label>
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Enter Your Existing EMI ( Amount )"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">
                        Date of personal loan
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        placeholder="Enter Your Date Of Birth"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Phone Number</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter Your Phone Number"
                      />
                    </div>
                  </form>
                </Col>
                <div
                  className="submitbuttonloanform"
                  style={{ textAlign: "center" }}
                >
                  <button className="submit12">Submit</button>
                </div>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
      <Footerdashboard/>
    </div>
  );
};

export default UserProfile;
