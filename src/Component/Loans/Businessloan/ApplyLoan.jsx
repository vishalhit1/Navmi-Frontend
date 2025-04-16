import { useState } from "react";
import { Col, Container, Form, Modal, Row, Table } from "react-bootstrap";
const ApplyLoan = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <button onClick={handleShow} className="applynow blink">Apply Now</button>

            <Modal show={show} onHide={handleClose} centered size="xl">
                <Modal.Header
                    closeButton
                    style={{ justifyContent: "center", marginTop: "40px" }}
                >
                    <Modal.Title>
                        <h3
                            style={{
                                fontWeight: "600",
                                letterSpacing: "0em",
                                textAlign: "center",
                                marginBottom: "40px",
                                color: '#283E87',
                            }}
                        >
                            Apply Now
                        </h3>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="loanpopup persoanl-form">
                        <Container>
                            <Row>
                                <Col lg={4}>
                                    <div className="loanperform">
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Full Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter Your Full Name"
                                            />
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="loanperform">
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Loan Amount</label>
                                            <select name="" className="form-control">
                                                <option value="Select Your Residence Type" disabled>
                                                    Select Your Loan Amount
                                                </option>
                                                <option value="1">Below ₹2 Lacs</option>
                                                <option value="1">₹20 - ₹50 Lacs  </option>
                                                <option value="1">₹50 - ₹1 Cr </option>
                                                <option value="1">₹1 Cr - ₹3 Cr</option>
                                                <option value="1">₹3 Cr - ₹5 Cr</option>
                                                <option value="1">₹5 Cr +</option>
                                            </select>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="loanperform">
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Turn Over</label>
                                            <select name="" className="form-control">
                                                <option value="Select Your Turn Over" disabled>
                                                    Select Your Net Salary
                                                </option>
                                                <option value="1">₹50 Lacs - ₹1 Cr </option>
                                                <option value="1">₹1 Cr - ₹3 Cr </option>
                                                <option value="1">₹3 Cr - ₹5 Cr </option>
                                                <option value="1">₹5 Cr + </option>
                                            </select>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="loanperform">
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Company Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter Your Company Name"
                                            />
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="loanperform">
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Line of Business</label>
                                            <select name="" className="form-control">
                                                <option value="Select Your Line of Business" disabled>
                                                    Select Your Line of Business
                                                </option>
                                                <option value="1">Manufacturer</option>
                                                <option value="1">Retailer / Traders</option>
                                                <option value="1">Service Provider</option>
                                                <option value="1">Professionals</option>
                                                <option value="1">Others</option>
                                            </select>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="loanperform">
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Total Business Experience (In Years)</label>
                                            <select name="" className="form-control">
                                                <option value="Select Your Total Experience (In years)" disabled>
                                                    Select Your Total Business Experience (In Years)
                                                </option>
                                                <option value="1">Under 1 years </option>
                                                <option value="1">1 - 2 years </option>
                                                <option value="1">2 - 3 years </option>
                                                <option value="1">3 - 5 years </option>
                                                <option value="1">Over 5 years</option>
                                            </select>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="loanperform">
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
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="loanperform">
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Select Residence Type</label>
                                            <select name="" className="form-control">
                                                <option value="Select Your Residence Type" disabled>
                                                    Select Your Residence Type
                                                </option>
                                                <option value="1">Owned by Self / Spouse</option>
                                                <option value="1">Owned by Parents / Siblings</option>
                                                <option value="1">Rented with Family / Stay alone</option>
                                            </select>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="loanperform">
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">PAN No</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter Your PAN No"
                                            />
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="loanperform">
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Email ID</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                placeholder="Enter Your Email Address"
                                            />
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="loanperform">
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Purpose of Loan</label>
                                            <select name="" className="form-control">
                                                <option value="Select Your Purpose of Loan" disabled>
                                                    Select Your Purpose of Loan
                                                </option>
                                                <option value="1">Working Capital Expense</option>
                                                <option value="1">Purchase Stock / Raw Material </option>
                                                <option value="1">Buy / Upgrade - machine / equipment </option>
                                                <option value="1">Buy office / factory space </option>
                                                <option value="1">Marketing Expense </option>
                                                <option value="1">Payback Existing Loans/ Credit card bills </option>
                                                <option value="1">Home buying/renovation </option>
                                                <option value="1">Purpose not listed</option>
                                            </select>
                                        </div>
                                    </div>
                                </Col>


                                <div
                                    className="submitbuttonloanform"
                                    style={{ textAlign: "center" }}
                                >
                                    <button className="submit12">Submit</button>
                                </div>
                            </Row>
                        </Container>
                    </div>
                    <h3 className="mandoty">
                        *Required documents shared to your mail id
                    </h3>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default ApplyLoan
