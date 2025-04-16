import React,{ useEffect, useState } from 'react';
import axios from "axios";
import { Link, useLocation } from 'react-router-dom';
import { Navbar, Container, Nav, NavDropdown, Offcanvas, Button, Form, Modal, Row, Col } from 'react-bootstrap';
import logo from '../../assets/logo.svg';
import Creditscore from '../../assets/creditscore.jpeg';
import Swal from 'sweetalert2';
import LoginModal from './LoginModal';

const Header = () => {
    const location = useLocation();
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);
    const [show1, setShow1] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => {
        if (!sessionStoragetoken) {
            setShow2(true);
            return;
        } else {
            setShow(true);
        }
    }
    const sessionStoragetoken = sessionStorage.getItem('token');
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    //login states
    const [phoneno, setPhoneno] = useState("");
    const [otp, setOtp] = useState("");
    const [otpSent, setOtpSent] = useState(false);
    const [otploader, setOtploader] = useState(false)
    const [resendDisabled, setResendDisabled] = useState(false);
    const [timer, setTimer] = useState(60);


    const isActive = (path) => {
        return location.pathname === path ? { fontSize: '16px', fontWeight: '600', color: '#DA3731' } : {};
    };

    // Form states
    const [loantype, setLoantype] = useState("");
    const [bankname, setBankname] = useState("");
    const [phone, setPhone] = useState("");
    const [loanamount, setLoanamount] = useState("");
    const [email, setEmail] = useState(""); // New state for email field

    // Validation states
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);

    // Validation function
    const validateForm = () => {
        let tempErrors = {};

        if (!bankname) tempErrors.bankname = "Bank name is required";
        if (!loantype) tempErrors.loantype = "Please select a loan type";
        if (!loanamount) tempErrors.loanamount = "Loan account number is required";

        // Email validation
        if (!email) {
            tempErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            tempErrors.email = "Invalid email format";
        }

        // Phone validation
        if (!phone) {
            tempErrors.phone = "Phone number is required";
        } else if (!/^\d{10}$/.test(phone)) {
            tempErrors.phone = "Phone number must be 10 digits";
        }

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    // useEffect with try/catch to handle form submission
    useEffect(() => {
        const submitForm = async () => {
            if (isSubmitting && Object.keys(errors).length === 0) {
                try {
                    const response = await axios.post("http://localhost:8000/mail/otherform", {
                        loantype,
                        bankname,
                        phone,
                        loanamount,
                        email // Include email in form submission
                    });

                    // Show success message
                    Swal.fire({
                        icon: 'success',
                        title: 'Form Submitted Successfully',
                        text: 'We will get back to you soon.',
                        confirmButtonColor: '#DA3731'
                    });

                    // Clear form fields
                    setBankname("");
                    setLoantype("");
                    setPhone("");
                    setLoanamount("");
                    setEmail(""); // Clear email field

                    // Close modal
                    handleClose();

                    console.log("Form submission response:", response);
                } catch (error) {
                    // Handle error with Sweet Alert
                    Swal.fire({
                        icon: 'error',
                        title: 'Something went wrong',
                        text: error.response?.data?.message || 'Failed to submit form. Please try again later.',
                        confirmButtonColor: '#DA3731'
                    });
                    console.error("Form submission error:", error);
                } finally {
                    setIsSubmitting(false);
                }
            }
        };

        submitForm();
    }, [isSubmitting, errors, loantype, bankname, phone, loanamount, email]); // Add email to dependency array

    // Form submission handler
    const sendMail = (e) => {
        e.preventDefault();
        setFormSubmitted(true);

        if (validateForm()) {
            setIsSubmitting(true);
        } else {
            // Show validation errors with Sweet Alert
            Swal.fire({
                icon: 'warning',
                title: 'Validation Error',
                text: 'Please check all fields and try again.',
                confirmButtonColor: '#DA3731'
            });
        }
    };

    // Credit Score form validation
    const [creditForm, setCreditForm] = useState({
        mobile: "",
        otp: "",
        pan: "",
        pincode: "",
        dob: "",
        email: ""
    });

    const [creditFormErrors, setCreditFormErrors] = useState({});

    const handleCreditFormChange = (e) => {
        const { name, value } = e.target;
        setCreditForm({
            ...creditForm,
            [name]: value
        });
    };

    const validateCreditForm = () => {
        let tempErrors = {};

        if (!creditForm.mobile) tempErrors.mobile = "Mobile number is required";
        else if (!/^\d{10}$/.test(creditForm.mobile)) tempErrors.mobile = "Mobile number must be 10 digits";

        if (!creditForm.otp) tempErrors.otp = "OTP is required";

        if (!creditForm.pan) tempErrors.pan = "PAN number is required";
        else if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(creditForm.pan)) tempErrors.pan = "Invalid PAN format";

        if (!creditForm.pincode) tempErrors.pincode = "Pin code is required";
        else if (!/^\d{6}$/.test(creditForm.pincode)) tempErrors.pincode = "Pin code must be 6 digits";

        if (!creditForm.dob) tempErrors.dob = "Date of birth is required";

        if (!creditForm.email) tempErrors.email = "Email is required";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(creditForm.email)) tempErrors.email = "Invalid email format";

        setCreditFormErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const submitCreditForm = (e) => {
        e.preventDefault();

        if (validateCreditForm()) {
            try {
                // API call would go here
                Swal.fire({
                    icon: 'success',
                    title: 'Request Submitted',
                    text: 'Your credit score check request has been submitted.',
                    confirmButtonColor: '#DA3731'
                });

                // Reset form
                setCreditForm({
                    mobile: "",
                    otp: "",
                    pan: "",
                    pincode: "",
                    dob: "",
                    email: ""
                });

                handleClose1();
            } catch (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Submission Failed',
                    text: 'Unable to process your request. Please try again later.',
                    confirmButtonColor: '#DA3731'
                });
            }
        } else {
            Swal.fire({
                icon: 'warning',
                title: 'Validation Error',
                text: 'Please check all fields and try again.',
                confirmButtonColor: '#DA3731'
            });
        }
    };

    const SendLoginOtp = async (e) => {
        try {
            e.preventDefault();
            setOtploader(true)

            // API call would go here
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ "phone": phoneno })
            };
            await fetch('http://localhost:8000/send-otp', requestOptions)
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        Swal.fire({
                            icon: 'success',
                            title: 'OTP Sent',
                            text: 'Your OTP has been sent successfully.',
                            confirmButtonColor: '#DA3731'
                        });
                        setOtpSent(true);
                        setResendDisabled(true);
                        setTimer(60);
                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Error',
                            text: data.message,
                            confirmButtonColor: '#DA3731'
                        });
                    }
                })
        } catch (error) {
            console.log(error);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Failed to send OTP. Please try again later.',
                confirmButtonColor: '#DA3731'
            });
        } finally {
            setOtploader(false)
        }
    }

    const LoginOtpSubmit = async (e) => {
        try {
            e.preventDefault();
            setOtploader(true)

            // API call would go here
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ "phone": phoneno, "otp": otp })
            };
            await fetch('http://localhost:8000/login', requestOptions)
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        Swal.fire({
                            icon: 'success',
                            title: 'Login Successful',
                            text: 'You are now logged in.',
                            confirmButtonColor: '#DA3731'
                        });
                        handleClose2()
                        
                        console.log(data.data);
                        console.log(data.token);
                        sessionStorage.setItem("token", JSON.stringify(data.token));
                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Error',
                            text: data.message,
                            confirmButtonColor: '#DA3731'
                        });
                    }
                })
        } catch (error) {
            console.log(error);
        } finally {
            setPhoneno("");
            setOtp("");
            setOtpSent(false);
            setResendDisabled(false)
            setOtploader(false)
        }
    }

    const allowOnlyNumbers = (e) => {
        const input = e.target.value;
        const regex = /^[0-9]*$/;
        if (!regex.test(input)) {
            e.target.value = input.replace(/[^0-9]/g, '');
        }
    }

    return (
        <div id="toplocation">
            <div className="header-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-8">
                            <div className="last_no_bullet">
                                <ul className="header__top-menu d-flex ">
                                    <li>
                                        <a href="mailto:info@navmifinserrv.com">
                                            <span>
                                                <svg
                                                    width={16}
                                                    height={14}
                                                    viewBox="0 0 16 14"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M2.4 1H13.6C14.37 1 15 1.63984 15 2.42188V10.9531C15 11.7352 14.37 12.375 13.6 12.375H2.4C1.63 12.375 1 11.7352 1 10.9531V2.42188C1 1.63984 1.63 1 2.4 1Z"
                                                        stroke="#906E50"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    ></path>
                                                    <path
                                                        d="M15 2.42188L8 7.39844L1 2.42188"
                                                        stroke="#906E50"
                                                        strokeWidth="1.5"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </span>
                                            info@navmifinserrv.com
                                        </a>
                                    </li>
                                    <li className="no_bullet">
                                        <a href="tel:+919594450450">
                                            <span>
                                                <svg
                                                    width={16}
                                                    height={16}
                                                    viewBox="0 0 16 16"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M9.67161 3.67583C10.3263 3.80331 10.9279 4.12286 11.3995 4.59359C11.8712 5.06432 12.1913 5.66481 12.319 6.3182M9.67161 1C11.0317 1.15081 12.3 1.75871 13.2683 2.72391C14.2365 3.6891 14.8472 4.95421 15 6.31151M14.3298 11.6498V13.6567C14.3305 13.843 14.2923 14.0274 14.2175 14.1981C14.1427 14.3688 14.033 14.522 13.8955 14.648C13.758 14.7739 13.5956 14.8698 13.4187 14.9295C13.2419 14.9892 13.0546 15.0113 12.8686 14.9946C10.8062 14.7709 8.8251 14.0675 7.08449 12.9409C5.46509 11.9138 4.09211 10.5434 3.06307 8.92713C1.93035 7.18196 1.22544 5.19502 1.00544 3.12728C0.988691 2.94229 1.01072 2.75585 1.07012 2.57982C1.12952 2.4038 1.22499 2.24204 1.35046 2.10486C1.47592 1.96768 1.62863 1.85808 1.79886 1.78303C1.96909 1.70798 2.15312 1.66913 2.33921 1.66896H4.34993C4.6752 1.66576 4.99053 1.78072 5.23716 1.99242C5.48379 2.20411 5.64488 2.49809 5.6904 2.81956C5.77527 3.4618 5.93266 4.0924 6.15957 4.69933C6.24974 4.93876 6.26926 5.19898 6.2158 5.44915C6.16235 5.69932 6.03816 5.92895 5.85796 6.11083L5.00676 6.9604C5.96088 8.63517 7.35021 10.0218 9.02818 10.9741L9.87939 10.1246C10.0616 9.94471 10.2917 9.82076 10.5423 9.76741C10.793 9.71405 11.0537 9.73353 11.2936 9.82354C11.9017 10.05 12.5335 10.2071 13.177 10.2918C13.5025 10.3376 13.7999 10.5013 14.0124 10.7517C14.225 11.0021 14.3379 11.3217 14.3298 11.6498Z"
                                                        stroke="#906E50"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    ></path>
                                                </svg>
                                            </span>
                                            +91 9594450450
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 col-4">
                            <div className="header__top-wrapper d-flex">
                                <ul className="header__top-socail d-flex ">
                                    <li>
                                        <a href="https://www.facebook.com/Navmifinserrv/">
                                            <i className="fa fa-facebook" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://x.com/Navmi_finserrv">
                                            <i className="fa fa-twitter" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/navmifinserrv/?next=%2F">
                                            <i className="fa fa-instagram" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.youtube.com/@NavmiFinserrv/shorts">
                                            <i className="fa fa-youtube" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/in/navmi-finserrv-68140733a/">
                                            <i className="fa fa-linkedin" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {['sm'].map((expand) => (
                <Navbar key={expand} expand={expand} className="bg-body-tertiary">
                    <Container fluid>
                        <Link to="/"><Navbar.Brand><img style={{ width: '200px' }} src={logo} alt="" /></Navbar.Brand></Link>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    <img className='mb-logo' src={logo} alt="" />
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-center flex-grow-1 pe-3">
                                    <Nav.Link href='/'>Home</Nav.Link>
                                    <Nav.Link href="about-us" style={isActive('/about-us')}>About</Nav.Link>
                                    <NavDropdown title="Loans" id={`offcanvasNavbarDropdown-expand-${expand}`}>
                                        <NavDropdown.Item href="personal-loan" style={isActive('/personal-loan')}>Personal loan</NavDropdown.Item>
                                        <NavDropdown.Item href="home-loan" style={isActive('/home-loan')}>Home loan</NavDropdown.Item>
                                        <NavDropdown.Item href="business-loan" style={isActive('/business-loan')}>Business loan</NavDropdown.Item>
                                        <NavDropdown.Item href="car-loan" style={isActive('/car-loan')}>Car loan</NavDropdown.Item>
                                        <NavDropdown.Item href="loan-against-property" style={isActive('/loan-against-property')}>Loan Against Property</NavDropdown.Item>
                                        <NavDropdown.Item href="construction-loan" style={isActive('/construction-loan')}>Construction loan</NavDropdown.Item>
                                        <NavDropdown.Item href="professional-loan" style={isActive('/professional-loan')}>Professional loan</NavDropdown.Item>
                                        <NavDropdown.Item href="balance-transfer" style={isActive('/balance-transfer')}>Balance Transfer</NavDropdown.Item>
                                        <NavDropdown.Item href="working-capital" style={isActive('/working-capital')}>Working Capital</NavDropdown.Item>
                                        <NavDropdown.Item href="cgtmse" style={isActive('/cgtmse')}>CGTMSE (Gvt.)</NavDropdown.Item>
                                    </NavDropdown>
                                    <NavDropdown title="Insurance" id={`offcanvasNavbarDropdown-expand-${expand}`}>
                                        <NavDropdown.Item href="lifeinsurance" style={isActive('/lifeinsurance')}>Life Insurance</NavDropdown.Item>
                                        <NavDropdown.Item href="healthinsurance" style={isActive('/healthinsurance')}>Health Insurance</NavDropdown.Item>
                                    </NavDropdown>
                                    <Nav.Link href="became-a-partner" style={isActive('/became-a-partner')}>Become a Partner</Nav.Link>
                                    <Nav.Link href="https://navmifinserrv.blogspot.com/" target='_blank' style={isActive('https://navmifinserrv.blogspot.com/')}>Blogs</Nav.Link>
                                    <NavDropdown title="Document" id={`offcanvasNavbarDropdown-expand-${expand}`}>
                                        <NavDropdown.Item onClick={handleShow}>Interest Certificate</NavDropdown.Item>
                                        <NavDropdown.Item onClick={handleShow}>Repayment Schedule</NavDropdown.Item>
                                        <NavDropdown.Item onClick={handleShow}>Statement of Account</NavDropdown.Item>
                                        <NavDropdown.Item onClick={handleShow}>Sanction Letter</NavDropdown.Item>
                                        <NavDropdown.Item onClick={handleShow}>List of Documents (Originals)</NavDropdown.Item>
                                        <NavDropdown.Item onClick={handleShow}>Foreclosure Letter</NavDropdown.Item>
                                    </NavDropdown>
                                    <NavDropdown title="Tool" id={`offcanvasNavbarDropdown-expand-${expand}`}>
                                        <NavDropdown.Item href="/emi-calculator-list" style={isActive('/emi-calculator-list')}>Emi Calculator</NavDropdown.Item>
                                    </NavDropdown>
                                    <Nav.Link href="contact-us" style={isActive('/contact-us')}>Contact Us</Nav.Link>
                                </Nav>
                                {sessionStoragetoken ?
                                    <Button variant="outline-success">Dashboard</Button>
                                    :
                                <Form className="d-flex">
                                    <a onClick={handleShow2}><Button variant="outline-success">Login now</Button></a>
                                </Form>
                                }
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
            <Modal className='QuickEnqu' size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <div className="LoginPopup">
                        <Row>
                            <Col lg={12}>
                                <h3 style={{ fontWeight: '600', letterSpacing: '0em', textAlign: 'center', marginTop: '40px' }}>Enquire Now</h3>
                                <div className='loginform'>
                                    <form onSubmit={sendMail}>
                                        <div className="form-group">
                                            <label htmlFor="bankname">Enter Bank Name:</label>
                                            <input
                                                type="text"
                                                id="bankname"
                                                value={bankname}
                                                onChange={(e) => setBankname(e.target.value)}
                                                className={`form-control ${formSubmitted && errors.bankname ? 'is-invalid' : ''}`}
                                                placeholder="Enter Bank Name"
                                            />
                                            {formSubmitted && errors.bankname && (
                                                <div className="invalid-feedback">{errors.bankname}</div>
                                            )}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="loantype">Enter Loan Type:</label>
                                            <select
                                                id="loantype"
                                                className={`form-control ${formSubmitted && errors.loantype ? 'is-invalid' : ''}`}
                                                value={loantype}
                                                onChange={(e) => setLoantype(e.target.value)}
                                            >
                                                <option value="">Select Loan Type</option>
                                                <option value="Personal Loan">Personal loan</option>
                                                <option value="Home loan">Home loan</option>
                                                <option value="Business loan">Business loan</option>
                                                <option value="Car loan">Car loan</option>
                                                <option value="Loan Against Property">Loan Against Property</option>
                                                <option value="Construction loan">Construction loan</option>
                                                <option value="Professional loan">Professional loan</option>
                                                <option value="Balance Transfer">Balance Transfer</option>
                                                <option value="Working Capital">Working Capital</option>
                                                <option value="CGTMSE (Gvt.)">CGTMSE (Gvt.)</option>
                                            </select>
                                            {formSubmitted && errors.loantype && (
                                                <div className="invalid-feedback">{errors.loantype}</div>
                                            )}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email">Enter Email Id:</label>
                                            <input
                                                type="email"
                                                id="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                className={`form-control ${formSubmitted && errors.email ? 'is-invalid' : ''}`}
                                                placeholder="Enter Email Address"
                                            />
                                            {formSubmitted && errors.email && (
                                                <div className="invalid-feedback">{errors.email}</div>
                                            )}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="loanamount">Enter Loan Account Number:</label>
                                            <input
                                                type="text"
                                                id="loanamount"
                                                value={loanamount}
                                                onChange={(e) => setLoanamount(e.target.value)}
                                                className={`form-control ${formSubmitted && errors.loanamount ? 'is-invalid' : ''}`}
                                                placeholder="Enter Loan Account Number"
                                            />
                                            {formSubmitted && errors.loanamount && (
                                                <div className="invalid-feedback">{errors.loanamount}</div>
                                            )}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="phone">Enter Your Mobile Number:</label>
                                            <input
                                                type="text"
                                                id="phone"
                                                value={phone}
                                                onChange={(e) => setPhone(e.target.value)}
                                                className={`form-control ${formSubmitted && errors.phone ? 'is-invalid' : ''}`}
                                                placeholder="Enter Mobile Number"
                                                maxLength="10"
                                            />
                                            {formSubmitted && errors.phone && (
                                                <div className="invalid-feedback">{errors.phone}</div>
                                            )}
                                        </div>
                                        <button type="submit" className="submit12" disabled={isSubmitting}>
                                            {isSubmitting ? 'Submitting...' : 'Submit'}
                                        </button>
                                    </form>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Modal.Body>
            </Modal>
            <Modal className='QuickEnqu' size="xl"
                aria-labelledby="contained-modal-title-vcenter"
                centered show={show2} onHide={handleClose2}>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                  <LoginModal handleClose2={handleClose2}/>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default Header;