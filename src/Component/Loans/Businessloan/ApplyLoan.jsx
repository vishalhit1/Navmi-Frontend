import React, { useState } from "react";
import { Col, Container, Form, Modal, Row } from "react-bootstrap";
import axios from 'axios';
import Swal from 'sweetalert2';
import LoginModal from "../../Common/LoginModal";

const ApplyLoan = () => {
    const [emi, setEmi] = useState('');
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleClose = () => setShow(false);
    const sessionStoragetoken = sessionStorage.getItem('token');

    const handleShow = () => {
        if (!sessionStoragetoken) {
            setShow2(true);
            return;
        } else {
            setShow(true);
        }
    }

    // Form state variables to match the form fields
    const [fullName, setFullName] = useState('');
    const [loanAmount, setLoanAmount] = useState('');
    const [turnOver, setTurnOver] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [lineOfBusiness, setLineOfBusiness] = useState('');
    const [businessExperience, setBusinessExperience] = useState('');
    const [loanDate, setLoanDate] = useState('');
    const [residenceType, setResidenceType] = useState('');
    const [panNo, setPanNo] = useState('');
    const [emailId, setEmailId] = useState('');
    const [purposeOfLoan, setPurposeOfLoan] = useState('');

    // Form validation states
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Form validation function
    const validateForm = () => {
        let tempErrors = {};
        let isValid = true;

        if (!fullName) {
            tempErrors.fullName = "Full Name is required";
            isValid = false;
        }

        if (!loanAmount) {
            tempErrors.loanAmount = "Loan Amount is required";
            isValid = false;
        }

        if (!turnOver) {
            tempErrors.turnOver = "Turn Over is required";
            isValid = false;
        }

        if (!companyName) {
            tempErrors.companyName = "Company Name is required";
            isValid = false;
        }

        if (!lineOfBusiness) {
            tempErrors.lineOfBusiness = "Line of Business is required";
            isValid = false;
        }

        if (!businessExperience) {
            tempErrors.businessExperience = "Business Experience is required";
            isValid = false;
        }

        if (!panNo) {
            tempErrors.panNo = "PAN No is required";
            isValid = false;
        } else if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(panNo)) {
            tempErrors.panNo = "Invalid PAN format";
            isValid = false;
        }

        if (!emailId) {
            tempErrors.emailId = "Email ID is required";
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(emailId)) {
            tempErrors.emailId = "Email address is invalid";
            isValid = false;
        }

        if (!purposeOfLoan) {
            tempErrors.purposeOfLoan = "Purpose of Loan is required";
            isValid = false;
        }

        setErrors(tempErrors);

        if (!isValid) {
            // Show validation errors with SweetAlert
            Swal.fire({
                icon: 'warning',
                title: 'Validation Error',
                text: 'Please check all fields and try again.',
                confirmButtonColor: '#DA3731'
            });
        }

        return isValid;
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validateForm()) {
            setIsSubmitting(true);

            // Show loading state
            Swal.fire({
                title: 'Submitting...',
                html: 'Please wait while we process your request',
                allowOutsideClick: false,
                didOpen: () => {
                    Swal.showLoading();
                }
            });

            try {
                const response = await axios.post("http://localhost:8000/mail/businessloan", {
                    fullName,
                    loanAmount,
                    turnOver,
                    companyName,
                    lineOfBusiness,
                    businessExperience,
                    loanDate,
                    residenceType,
                    panNo,
                    emailId,
                    purposeOfLoan
                });

                console.log("Form submission response:", response.data);

                // Show success message
                Swal.fire({
                    title: 'Success!',
                    text: 'Your loan application has been submitted successfully',
                    icon: 'success',
                    timer: 2000,
                    showConfirmButton: false
                }).then(() => {
                    handleClose();
                    resetForm();
                });

            } catch (error) {
                console.error("Form submission error:", error);

                // Show error message
                Swal.fire({
                    title: 'Submission Failed',
                    text: error.response?.data?.message || 'Failed to submit form. Please try again.',
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
            } finally {
                setIsSubmitting(false);
            }
        }
    };

    React.useEffect(() => {
        const principal = parseFloat(loanAmount);
        const rate = 15 / 12 / 100; // Monthly interest rate (15% annual)
        const tenure = 3 * 12; // 3 years in months

        if (!isNaN(principal) && principal > 0) {
            const emiCalculated = (principal * rate * Math.pow(1 + rate, tenure)) / (Math.pow(1 + rate, tenure) - 1);
            setEmi(emiCalculated.toFixed(2));
        } else {
            setEmi('');
        }
    }, [loanAmount]);

    // Reset form after submission
    const resetForm = () => {
        setFullName('');
        setLoanAmount('');
        setTurnOver('');
        setCompanyName('');
        setLineOfBusiness('');
        setBusinessExperience('');
        setLoanDate('');
        setResidenceType('');
        setPanNo('');
        setEmailId('');
        setPurposeOfLoan('');
        setErrors({});
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
                                marginBottom: "40px",
                                color: '#283E87',
                            }}
                        >
                            Apply Now
                        </h3>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <div className="loanpopup persoanl-form">
                            <Container>
                                <Row>
                                    <Col lg={4}>
                                        <div className="loanperform">
                                            <div className="form-group">
                                                <label htmlFor="fullName">Full Name</label>
                                                <input
                                                    type="text"
                                                    id="fullName"
                                                    className={`form-control ${errors.fullName ? 'is-invalid' : ''}`}
                                                    placeholder="Enter Your Full Name"
                                                    value={fullName}
                                                    onChange={(e) => setFullName(e.target.value)}
                                                />
                                                {errors.fullName && <div className="invalid-feedback">{errors.fullName}</div>}
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className="loanperform">
                                            <div className="form-group">
                                                <label htmlFor="loanAmount">Loan Amount</label>
                                                <input
                                                    type="text"
                                                    id="loanAmount"
                                                    className={`form-control ${errors.loanAmount ? 'is-invalid' : ''}`}
                                                    value={loanAmount}
                                                    onChange={(e) => setLoanAmount(e.target.value)}
                                                    placeholder="Enter Loan Amount (e.g., 500000)"
                                                />
                                                {errors.loanAmount && <div className="invalid-feedback">{errors.loanAmount}</div>}
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className="loanperform">
                                            <div className="form-group">
                                                <label>Estimated EMI</label>
                                                <input
                                                    type="text"
                                                    placeholder="Estimated EMI"
                                                    className="form-control"
                                                    value={emi ? `₹ ${emi}` : ''}
                                                    readOnly
                                                />
                                                {emi && (
                                                    <p className="emi-details-abcd">
                                                        *For details or any changes use EMI calculator
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className="loanperform">
                                            <div className="form-group">
                                                <label htmlFor="turnOver">Turn Over</label>
                                                <input
                                                    type="text"
                                                    id="turnOver"
                                                    className={`form-control ${errors.turnOver ? 'is-invalid' : ''}`}
                                                    value={turnOver}
                                                    onChange={(e) => setTurnOver(e.target.value)}
                                                    placeholder="Enter Turn Over (e.g., 10000000)"
                                                />
                                                {errors.turnOver && <div className="invalid-feedback">{errors.turnOver}</div>}
                                            </div>
                                        </div>
                                    </Col>

                                    <Col lg={4}>
                                        <div className="loanperform">
                                            <div className="form-group">
                                                <label htmlFor="companyName">Company Name</label>
                                                <input
                                                    type="text"
                                                    id="companyName"
                                                    className={`form-control ${errors.companyName ? 'is-invalid' : ''}`}
                                                    placeholder="Enter Your Company Name"
                                                    value={companyName}
                                                    onChange={(e) => setCompanyName(e.target.value)}
                                                />
                                                {errors.companyName && <div className="invalid-feedback">{errors.companyName}</div>}
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className="loanperform">
                                            <div className="form-group">
                                                <label htmlFor="lineOfBusiness">Line of Business</label>
                                                <select
                                                    id="lineOfBusiness"
                                                    className={`form-control ${errors.lineOfBusiness ? 'is-invalid' : ''}`}
                                                    value={lineOfBusiness}
                                                    onChange={(e) => setLineOfBusiness(e.target.value)}
                                                >
                                                    <option value="" disabled>Select Your Line of Business</option>
                                                    <option value="Manufacturer">Manufacturer</option>
                                                    <option value="Retailer / Traders">Retailer / Traders</option>
                                                    <option value="Service Provider">Service Provider</option>
                                                    <option value="Professionals">Professionals</option>
                                                    <option value="Others">Others</option>
                                                </select>
                                                {errors.lineOfBusiness && <div className="invalid-feedback">{errors.lineOfBusiness}</div>}
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className="loanperform">
                                            <div className="form-group">
                                                <label htmlFor="businessExperience">Total Business Experience (In Years)</label>
                                                <select
                                                    id="businessExperience"
                                                    className={`form-control ${errors.businessExperience ? 'is-invalid' : ''}`}
                                                    value={businessExperience}
                                                    onChange={(e) => setBusinessExperience(e.target.value)}
                                                >
                                                    <option value="" disabled>Select Total Business Exp</option>
                                                    <option value="1 Year">1 Year</option>
                                                    <option value="2 Years">2 Years</option>
                                                    <option value="3 Years">3 Years</option>
                                                    <option value="4 Years">4 Years</option>
                                                    <option value="5 Years">5 Years</option>
                                                    <option value="5 years & Above">5 years & Above</option>
                                                </select>
                                                {errors.businessExperience && <div className="invalid-feedback">{errors.businessExperience}</div>}
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className="loanperform">
                                            <div className="form-group">
                                                <label htmlFor="loanDate">Date of birth</label>
                                                <input
                                                    type="date"
                                                    id="loanDate"
                                                    className="form-control"
                                                    value={loanDate}
                                                    onChange={(e) => setLoanDate(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className="loanperform">
                                            <div className="form-group">
                                                <label htmlFor="residenceType">Select Residence Type</label>
                                                <select
                                                    id="residenceType"
                                                    className="form-control"
                                                    value={residenceType}
                                                    onChange={(e) => setResidenceType(e.target.value)}
                                                >
                                                    <option value="" disabled>Select Your Residence Type</option>
                                                    <option value="Owned by Self / Spouse">Owned by Self / Spouse</option>
                                                    <option value="Owned by Parents / Siblings">Owned by Parents / Siblings</option>
                                                    <option value="Rented with Family / Stay alone">Rented with Family / Stay alone</option>
                                                </select>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className="loanperform">
                                            <div className="form-group">
                                                <label htmlFor="panNo">PAN No</label>
                                                <input
                                                    type="text"
                                                    id="panNo"
                                                    className={`form-control ${errors.panNo ? 'is-invalid' : ''}`}
                                                    placeholder="Enter Your PAN No"
                                                    value={panNo}
                                                    onChange={(e) => setPanNo(e.target.value)}
                                                />
                                                {errors.panNo && <div className="invalid-feedback">{errors.panNo}</div>}
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className="loanperform">
                                            <div className="form-group">
                                                <label htmlFor="emailId">Email ID</label>
                                                <input
                                                    type="email"
                                                    id="emailId"
                                                    className={`form-control ${errors.emailId ? 'is-invalid' : ''}`}
                                                    placeholder="Enter Your Email Address"
                                                    value={emailId}
                                                    onChange={(e) => setEmailId(e.target.value)}
                                                />
                                                {errors.emailId && <div className="invalid-feedback">{errors.emailId}</div>}
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className="loanperform">
                                            <div className="form-group">
                                                <label htmlFor="purposeOfLoan">Purpose of Loan</label>
                                                <select
                                                    id="purposeOfLoan"
                                                    className={`form-control ${errors.purposeOfLoan ? 'is-invalid' : ''}`}
                                                    value={purposeOfLoan}
                                                    onChange={(e) => setPurposeOfLoan(e.target.value)}
                                                >
                                                    <option value="" disabled>Select Your Purpose of Loan</option>
                                                    <option value="Working Capital Expense">Working Capital Expense</option>
                                                    <option value="Purchase Stock / Raw Material">Purchase Stock / Raw Material</option>
                                                    <option value="Buy / Upgrade - machine / equipment">Buy / Upgrade - machine / equipment</option>
                                                    <option value="Buy office / factory space">Buy office / factory space</option>
                                                    <option value="Marketing Expense">Marketing Expense</option>
                                                    <option value="Payback Existing Loans/ Credit card bills">Payback Existing Loans/ Credit card bills</option>
                                                    <option value="Home buying/renovation">Home buying/renovation</option>
                                                    <option value="Purpose not listed">Purpose not listed</option>
                                                </select>
                                                {errors.purposeOfLoan && <div className="invalid-feedback">{errors.purposeOfLoan}</div>}
                                            </div>
                                        </div>
                                    </Col>

                                    <div
                                        className="submitbuttonloanform"
                                        style={{ textAlign: "center" }}
                                    >
                                        <button
                                            type="submit"
                                            className="submit12"
                                            disabled={isSubmitting}
                                        >
                                            {isSubmitting ? 'Submitting...' : 'Submit'}
                                        </button>
                                    </div>
                                </Row>
                            </Container>
                        </div>
                    </Form>
                    <h3 className="mandoty">
                        *Required documents shared to your mail id
                    </h3>
                </Modal.Body>
            </Modal>
            <Modal className='QuickEnqu' size="xl"
                aria-labelledby="contained-modal-title-vcenter"
                centered backdrop="static" keyboard={false} show={show2} onHide={handleClose2}>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <LoginModal handleClose2={handleClose2} />
                </Modal.Body>
            </Modal>
        </>
    );
};

export default ApplyLoan;