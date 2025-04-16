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
                                color:'#283E87',
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
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter Your Loan Amount"
                                            />
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="loanperform">
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Net Salary</label>
                                            <select name="" className="form-control">
                                                <option value="Select Your Residence Type" disabled>
                                                    Select Your Net Salary
                                                </option>
                                                <option value="1">Up to ₹50k</option>
                                                <option value="1">₹50k - ₹1.2 Lacs</option>
                                                <option value="1">₹1.2 – ₹1.8 Lacs</option>
                                                <option value="1">₹1.8 – ₹2.2 Lacs</option>
                                                <option value="1">₹2.4 – ₹3 Lacs</option>
                                                <option value="1">₹3 - ₹4 Lacs</option>
                                                <option value="1">₹4 - ₹5 Lacs</option>
                                                <option value="1">₹5 - ₹10 Lacs</option>
                                                <option value="1">₹10 Lacs +</option>
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
                                            <label htmlFor="exampleInputEmail1">Current Company Exp (In years)</label>
                                            <select name="" className="form-control">
                                                <option value="Select Your Current Company Exp (In years)" disabled>
                                                    Select Your Current Company Exp (In years)
                                                </option>
                                                <option value="1">1 to 5yrs</option>
                                                <option value="1">5 to 10yrs</option>
                                                <option value="1">10+ yrs</option>
                                            </select>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="loanperform">
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Total Experience (In years)</label>
                                            <select name="" className="form-control">
                                                <option value="Select Your Total Experience (In years)" disabled>
                                                    Select Your Total Experience (In years)
                                                </option>
                                                <option value="1">1 to 5yrs</option>
                                                <option value="1">5 to 10yrs</option>
                                                <option value="1">10+ yrs</option>
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
                                                <option value="1">Paying Guest / Hostel</option>
                                                <option value="1">Company provided</option>
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
                                            <label htmlFor="exampleInputEmail1">Existing EMI</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                placeholder="Enter Your Existing EMI ( Amount )"
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
                                                <option value="1">Home buying/renovation</option>
                                                <option value="1">Payback existing loans/credit card bill</option>
                                                <option value="1">Medical Expenses</option>
                                                <option value="1">Education Expenses</option>
                                                <option value="1">Wedding/related expenses</option>
                                                <option value="1">Travel/Vacation expense</option>
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
