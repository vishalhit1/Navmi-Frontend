import { useState } from "react";
import { Col, Container, Form, Modal, Row, Table } from "react-bootstrap";
const ApplyLoan = () => {
    const [show, setShow] = useState(false);
    const [employmentType, setEmploymentType] = useState("salaried");

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleEmploymentTypeChange = (type) => {
        setEmploymentType(type);
    };
    return (
        <>
            <button onClick={handleShow} className="applynow blink">Apply Now</button>

            <Modal show={show} onHide={handleClose} centered backdrop="static" keyboard={false} size="xl">
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
                                marginBottom: "30px",
                                color: '#283E87',
                            }}
                        >
                            Apply Now
                        </h3>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="salareeieed mb-5">
                        <Form.Check
                            type="radio"
                            name="employmentType"
                            checked={employmentType === "salaried"}
                            onChange={() => handleEmploymentTypeChange("salaried")}
                            inline
                        />{" "}
                        <label>Salaried</label>
                        <Form.Check
                            type="radio"
                            name="employmentType"
                            checked={employmentType === "selfEmployed"}
                            onChange={() => handleEmploymentTypeChange("selfEmployed")}
                            inline
                        />{" "}
                        <label>Self Employed</label>
                    </div>
                    {employmentType === "salaried" && (
                        <div className="loanpopup persoanl-form salaried">
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
                                                    <option value="1">₹30 - ₹50 Lacs </option>
                                                    <option value="1">₹50 - ₹1 Cr</option>
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
                                                <label htmlFor="exampleInputEmail1">Net Salary</label>
                                                <select name="" className="form-control">
                                                    <option value="Select Your Turn Over" disabled>
                                                        Select Your Net Salary
                                                    </option>
                                                    <option value="1">₹40 - ₹60k</option>
                                                    <option value="1">₹60k - ₹1 Lacs </option>
                                                    <option value="1">₹1 Lacs – ₹3 Lacs</option>
                                                    <option value="1">₹3 Lacs - ₹5 Lacs </option>
                                                    <option value="1">₹5 Lacs + </option>
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
                                                    <option value="Select Your Line of Business" disabled>
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
                                                <label htmlFor="exampleInputEmail1">Total Exp (In Years)</label>
                                                <select name="" className="form-control">
                                                    <option value="Select Your Total Experience (In years)" disabled>
                                                        Select Your Total Exp (In Years)
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
                                                <label htmlFor="exampleInputEmail1">Date of Birth</label>
                                                <input
                                                    type="date"
                                                    className="form-control"
                                                    placeholder="Enter Your Date of Birth"
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
                                                    <option value="1">Builder Purchase / Under Construction</option>
                                                    <option value="1">Resale</option>
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
                                                    type="email"
                                                    className="form-control"
                                                    placeholder="Enter Your Email Address"
                                                />
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className="loanperform">
                                            <div className="form-group">
                                                <label htmlFor="exampleInputEmail1">Existing Loan</label>
                                                <select name="" className="form-control">
                                                    <option value="Select YourExisting EMI (Amount)" disabled>
                                                        Select Your Existing Loan
                                                    </option>
                                                    <option value="1">Personal Loan</option>
                                                    <option value="1">Home Loan</option>
                                                    <option value="1">Car Loan</option>
                                                    <option value="1">Credit Card Loan</option>
                                                    <option value="1">Others</option>
                                                </select>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className="loanperform">
                                            <div className="form-group">
                                                <label htmlFor="exampleInputEmail1">Existing EMI (Amount)</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter Your Existing EMI (Amount)"
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
                    )}
                    {employmentType === "selfEmployed" && (
                        <div className="loanpopup persoanl-form self-employed">
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
                                                    <option value="1">₹30 - ₹50 Lacs</option>
                                                    <option value="1">₹50 - ₹1 Cr</option>
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
                                                        Select Your Turn Over
                                                    </option>
                                                    <option value="1">Up to ₹50 Lacs</option>
                                                    <option value="1">₹50 Lacs - ₹1 Cr</option>
                                                    <option value="1">₹1 Cr - ₹3 Cr</option>
                                                    <option value="1"> ₹3 Cr - ₹5 Cr</option>
                                                    <option value="1"> Over ₹5 Cr</option>
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
                                                <label htmlFor="exampleInputEmail1">Company Type</label>
                                                <select name="" className="form-control">
                                                    <option value="Select Your Company Type" disabled>
                                                        Select Your Company Type
                                                    </option>
                                                    <option value="1">Proprietor</option>
                                                    <option value="1">Partnership</option>
                                                    <option value="1">Private Limited / Limited</option>
                                                    <option value="1">LLP</option>
                                                </select>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className="loanperform">
                                            <div className="form-group">
                                                <label htmlFor="exampleInputEmail1">Line of Business</label>
                                                <select name="" className="form-control">
                                                    <option value="Select Your Line of Business" disabled>
                                                        Select Your Current Company Exp (In years)
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
                                                <label htmlFor="exampleInputEmail1">Property Type</label>
                                                <select name="" className="form-control">
                                                    <option value="Select Your Property Type" disabled>
                                                        Select Your Property Type
                                                    </option>
                                                    <option value="1">Builder Purchase / Under Construction </option>
                                                    <option value="1">Resale </option>
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
                                                    type="email"
                                                    className="form-control"
                                                    placeholder="Enter Your Email Address"
                                                />
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className="loanperform">
                                            <div className="form-group">
                                                <label htmlFor="exampleInputEmail1">Existing Loan</label>
                                                <select name="" className="form-control">
                                                    <option value="Select Your Existing Loan" disabled>
                                                        Select Your Existing Loan
                                                    </option>
                                                    <option value="1">Business Loan</option>
                                                    <option value="1">Home Loan</option>
                                                    <option value="1">Car Loan</option>
                                                    <option value="1">Credit Card Loan</option>
                                                    <option value="1">Others</option>
                                                </select>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className="loanperform">
                                            <div className="form-group">
                                                <label htmlFor="exampleInputEmail1">Existing EMI (Amount)</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter Your Existing EMI (Amount)"
                                                />
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className="loanperform">
                                            <div className="form-group">
                                                <label htmlFor="exampleInputEmail1">Date of Birth</label>
                                                <input
                                                    type="date"
                                                    className="form-control"
                                                    placeholder="Enter Your Date of Birth"
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
                    )}
                    <h3 className="mandoty">
                        *Required documents shared to your mail id
                    </h3>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default ApplyLoan
