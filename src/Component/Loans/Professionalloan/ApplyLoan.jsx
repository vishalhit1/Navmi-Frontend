import React, { useEffect, useState } from 'react';
import { Col, Container, Form, Modal, Row } from "react-bootstrap";
import LoginModal from "../../Common/LoginModal";
import axios from 'axios';
import Swal from 'sweetalert2';

const ApplyLoan = () => {
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);

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
    const handleClose2 = () => setShow2(false);

    // Form fields based on the actual form in the UI
    const [fullName, setFullName] = useState('');
    const [age, setAge] = useState('');
    const [panNo, setPanNo] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [emailId, setEmailId] = useState('');
    const [profession, setProfession] = useState('');
    const [firmName, setFirmName] = useState('');
    const [businessAddress, setBusinessAddress] = useState('');
    const [registrationNumber, setRegistrationNumber] = useState('');
    const [yearsInProfession, setYearsInProfession] = useState('');
    const [annualTurnover, setAnnualTurnover] = useState('');
    const [existingLoanDetails, setExistingLoanDetails] = useState('');
    const [loanAmountRequired, setLoanAmountRequired] = useState('');
    const [purposeOfLoan, setPurposeOfLoan] = useState('');
    const [repaymentTenure, setRepaymentTenure] = useState('');

    // Form validation states
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [shouldSubmit, setShouldSubmit] = useState(false);

    useEffect(() => {
        // Check if toploc is defined before calling it
        if (typeof toploc === 'function') {
            toploc();
        }
    }, []);

    // Form validation function
    const validateForm = () => {
        let tempErrors = {};
        let isValid = true;

        if (!fullName) {
            tempErrors.fullName = "Full Name is required";
            isValid = false;
        }

        if (!age) {
            tempErrors.age = "Age is required";
            isValid = false;
        }

        if (!panNo) {
            tempErrors.panNo = "PAN No is required";
            isValid = false;
        }

        if (!contactNumber) {
            tempErrors.contactNumber = "Contact Number is required";
            isValid = false;
        } else if (!/^\d{10}$/.test(contactNumber.replace(/\s/g, ''))) {
            tempErrors.contactNumber = "Contact Number must be 10 digits";
            isValid = false;
        }

        if (!emailId) {
            tempErrors.emailId = "Email ID is required";
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(emailId)) {
            tempErrors.emailId = "Email address is invalid";
            isValid = false;
        }

        if (!profession) {
            tempErrors.profession = "Profession is required";
            isValid = false;
        }

        if (!loanAmountRequired) {
            tempErrors.loanAmountRequired = "Loan Amount is required";
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
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            setShouldSubmit(true);
        }
    };

    // Reset form after submission
    const resetForm = () => {
        setFullName('');
        setAge('');
        setPanNo('');
        setContactNumber('');
        setEmailId('');
        setProfession('');
        setFirmName('');
        setBusinessAddress('');
        setRegistrationNumber('');
        setYearsInProfession('');
        setAnnualTurnover('');
        setExistingLoanDetails('');
        setLoanAmountRequired('');
        setPurposeOfLoan('');
        setRepaymentTenure('');
        setErrors({});
    };

    // UseEffect for form submission with try/catch
    useEffect(() => {
        if (!shouldSubmit) return;

        const sendLoanApplication = async () => {
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
                const response = await axios.post("http://localhost:8000/mail/loan-application", {
                    fullName,
                    age,
                    panNo,
                    contactNumber,
                    emailId,
                    profession,
                    firmName,
                    businessAddress,
                    registrationNumber,
                    yearsInProfession,
                    annualTurnover,
                    existingLoanDetails,
                    loanAmountRequired,
                    purposeOfLoan,
                    repaymentTenure
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
                setShouldSubmit(false);
            }
        };

        sendLoanApplication();
    }, [shouldSubmit]);

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
                                                <label htmlFor="age">Age</label>
                                                <input
                                                    type="number"
                                                    id="age"
                                                    className={`form-control ${errors.age ? 'is-invalid' : ''}`}
                                                    placeholder="Enter Your Age"
                                                    value={age}
                                                    onChange={(e) => setAge(e.target.value)}
                                                />
                                                {errors.age && <div className="invalid-feedback">{errors.age}</div>}
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
                                                <label htmlFor="contactNumber">Contact Number</label>
                                                <input
                                                    type="number"
                                                    id="contactNumber"
                                                    className={`form-control ${errors.contactNumber ? 'is-invalid' : ''}`}
                                                    placeholder="Enter Your Contact Number"
                                                    value={contactNumber}
                                                    onChange={(e) => setContactNumber(e.target.value)}
                                                />
                                                {errors.contactNumber && <div className="invalid-feedback">{errors.contactNumber}</div>}
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
                                                <label htmlFor="profession">Profession</label>
                                                <select 
                                                    id="profession"
                                                    className={`form-control ${errors.profession ? 'is-invalid' : ''}`}
                                                    value={profession}
                                                    onChange={(e) => setProfession(e.target.value)}
                                                >
                                                    <option value="" disabled>Select Your Profession</option>
                                                    <option value="Doctors">Doctors</option>
                                                    <option value="C.A.s">C. A.s</option>
                                                    <option value="C.S.s">C. S.s</option>
                                                    <option value="Lawyers">Lawyers</option>
                                                    <option value="Architects">Architects</option>
                                                    <option value="Engineers">Engineers</option>
                                                    <option value="Others">Others</option>
                                                </select>
                                                {errors.profession && <div className="invalid-feedback">{errors.profession}</div>}
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className="loanperform">
                                            <div className="form-group">
                                                <label htmlFor="firmName">Name of Firm/Clinic/Organization</label>
                                                <input
                                                    type="text"
                                                    id="firmName"
                                                    className="form-control"
                                                    placeholder="Enter Your Name of Firm/Clinic/Organization"
                                                    value={firmName}
                                                    onChange={(e) => setFirmName(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className="loanperform">
                                            <div className="form-group">
                                                <label htmlFor="businessAddress">Business Address</label>
                                                <input
                                                    type="text"
                                                    id="businessAddress"
                                                    className="form-control"
                                                    placeholder="Enter Your Business Address"
                                                    value={businessAddress}
                                                    onChange={(e) => setBusinessAddress(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className="loanperform">
                                            <div className="form-group">
                                                <label htmlFor="registrationNumber">Business Registration Number</label>
                                                <input
                                                    type="text"
                                                    id="registrationNumber"
                                                    className="form-control"
                                                    placeholder="Enter Your Business Registration Number"
                                                    value={registrationNumber}
                                                    onChange={(e) => setRegistrationNumber(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className="loanperform">
                                            <div className="form-group">
                                                <label htmlFor="yearsInProfession">Years in Profession</label>
                                                <input
                                                    type="number"
                                                    id="yearsInProfession"
                                                    className="form-control"
                                                    placeholder="Enter Your Years in Profession"
                                                    value={yearsInProfession}
                                                    onChange={(e) => setYearsInProfession(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className="loanperform">
                                            <div className="form-group">
                                                <label htmlFor="annualTurnover">Annual Turnover</label>
                                                <input
                                                    type="number"
                                                    id="annualTurnover"
                                                    className="form-control"
                                                    placeholder="Enter Your Annual Turnover"
                                                    value={annualTurnover}
                                                    onChange={(e) => setAnnualTurnover(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className="loanperform">
                                            <div className="form-group">
                                                <label htmlFor="existingLoanDetails">Existing Loan Details (if any)</label>
                                                <input
                                                    type="text"
                                                    id="existingLoanDetails"
                                                    className="form-control"
                                                    placeholder="Enter Your Existing Loan Details (if any)"
                                                    value={existingLoanDetails}
                                                    onChange={(e) => setExistingLoanDetails(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className="loanperform">
                                            <div className="form-group">
                                                <label htmlFor="loanAmountRequired">Loan Amount Required</label>
                                                <input
                                                    type="number"
                                                    id="loanAmountRequired"
                                                    className={`form-control ${errors.loanAmountRequired ? 'is-invalid' : ''}`}
                                                    placeholder="Enter Your Loan Amount Required"
                                                    value={loanAmountRequired}
                                                    onChange={(e) => setLoanAmountRequired(e.target.value)}
                                                />
                                                {errors.loanAmountRequired && <div className="invalid-feedback">{errors.loanAmountRequired}</div>}
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className="loanperform">
                                            <div className="form-group">
                                                <label htmlFor="purposeOfLoan">Purpose of Loan</label>
                                                <input
                                                    type="text"
                                                    id="purposeOfLoan"
                                                    className={`form-control ${errors.purposeOfLoan ? 'is-invalid' : ''}`}
                                                    placeholder="Enter Your Purpose of Loan"
                                                    value={purposeOfLoan}
                                                    onChange={(e) => setPurposeOfLoan(e.target.value)}
                                                />
                                                {errors.purposeOfLoan && <div className="invalid-feedback">{errors.purposeOfLoan}</div>}
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className="loanperform">
                                            <div className="form-group">
                                                <label htmlFor="repaymentTenure">Repayment Tenure</label>
                                                <select 
                                                    id="repaymentTenure"
                                                    className="form-control"
                                                    value={repaymentTenure}
                                                    onChange={(e) => setRepaymentTenure(e.target.value)}
                                                >
                                                    <option value="" disabled>Select Your Repayment Tenure</option>
                                                    <option value="12 months">12 months</option>
                                                    <option value="24 months">24 months</option>
                                                    <option value="36 months">36 months</option>
                                                    <option value="48 months">48 months</option>
                                                    <option value="Others">Others</option>
                                                </select>
                                            </div>
                                        </div>
                                    </Col>
                                    <div
                                        className="submitbuttonloanform"
                                        style={{ textAlign: "center" }}
                                    >
                                        <button type="submit" className="submit12" disabled={isSubmitting}>
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

            <Modal 
                className='QuickEnqu' 
                size="xl"
                aria-labelledby="contained-modal-title-vcenter"
                centered backdrop="static" keyboard={false} 
                show={show2} 
                onHide={handleClose2}
            >
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <LoginModal handleClose2={handleClose2}/>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default ApplyLoan;