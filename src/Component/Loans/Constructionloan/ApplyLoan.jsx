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
                                            <label htmlFor="exampleInputEmail1">Age</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                placeholder="Enter Your Age"
                                            />
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
                                            <label htmlFor="exampleInputEmail1">Contact Number</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                placeholder="Enter Your Contact Number"
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
                                            <label htmlFor="exampleInputEmail1">Property Type</label>
                                            <select name="" className="form-control">
                                                <option value="Select Your Property Type" disabled>
                                                    Select Your Property Type
                                                </option>
                                                <option value="1">Residential</option>
                                                <option value="1"> Commercial</option>
                                                <option value="1">Others</option>
                                            </select>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="loanperform">
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Property Address</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter Your Property Address"
                                            />
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="loanperform">
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Estimated Construction Cost</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter Your Estimated Construction Cost"
                                            />
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="loanperform">
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Loan Amount Required</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                placeholder="Enter Your Loan Amount Required"
                                            />
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="loanperform">
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Years in Profession</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                placeholder="Enter Your Years in Profession"
                                            />
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="loanperform">
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Existing Loan Details (if any)</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                placeholder="Enter Your Existing Loan Details (if any)"
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
                                                <option value="1">New Construction</option>
                                                <option value="1">Renovation</option>
                                                <option value="1">Expansion</option>
                                            </select>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="loanperform">
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Repayment Tenure</label>
                                            <select name="" className="form-control">
                                                <option value="Select Your Repayment Tenure" disabled>
                                                    Select Your Net Salary
                                                </option>
                                                <option value="1">5 months</option>
                                                <option value="1">10 months</option>
                                                <option value="1">15 months</option>
                                                <option value="1">Others</option>
                                            </select>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="loanperform">
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Approved Building Plan</label>
                                            <select name="" className="form-control">
                                                <option value="Select Your Approved Building Plan" disabled>
                                                    Select Your Approved Building Plan
                                                </option>
                                                <option value="1">Yes</option>
                                                <option value="1">No</option>
                                            </select>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="loanperform">
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Expected Completion Date</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter Your Expected Completion Date"
                                            />
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
