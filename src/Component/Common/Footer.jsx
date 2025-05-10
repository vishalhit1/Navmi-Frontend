import { useEffect, useState } from 'react';
import axios from "axios";
import { Container, Row, Col, Modal ,Form } from 'react-bootstrap';
import logo from '../../assets/logo.svg';
import { Link, useLocation } from "react-router-dom";
import Arrow from '../../assets/arrow.svg';
import facebook from '../../assets/social/facebook.png';
import twitter from '../../assets/social/twitter.png';
import instagram from '../../assets/social/instagram.png';
import linkedin from '../../assets/social/linkedin.png';
import youtube from '../../assets/social/youtube.png';
import whatsapicon from '../../assets/footerwhatsapp.png';
import Enquire from '../../assets/Homepage/enquirenow.svg';
import Popup from '../../assets/Homepage/enqpopup.jpg';
import Swal from 'sweetalert2';
import LoginModal from './LoginModal';

const Footer = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleClose2 = () => setShow2(false);
    const [show2, setShow2] = useState(false);

    const handleShow = () => {
        if (!sessionStoragetoken) {
            setShow2(true);
            return;
        } else {
            setShow(true);
        }
    }
    const location = useLocation();

    const sessionStoragetoken = sessionStorage.getItem('token');

    // Form states
    const [loantype, setLoantype] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    // Form validation states
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [shouldSubmit, setShouldSubmit] = useState(false);

    const toploc = () => {
        const element = document.getElementById("toplocation");
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "nearest",
            });
        }
    }

    useEffect(() => {
        toploc();
    }, [location.pathname]);

    // Form validation function
    const validateForm = () => {
        let tempErrors = {};
        let isValid = true;

        if (!loantype) {
            tempErrors.loantype = "Please select a loan type";
            isValid = false;
        }

        if (!name) {
            tempErrors.name = "Name is required";
            isValid = false;
        } else if (name.length < 3) {
            tempErrors.name = "Name must be at least 3 characters";
            isValid = false;
        }

        if (!email) {
            tempErrors.email = "Email is required";
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            tempErrors.email = "Email address is invalid";
            isValid = false;
        }

        if (!phone) {
            tempErrors.phone = "Phone number is required";
            isValid = false;
        } else if (!/^\d{10}$/.test(phone.replace(/\s/g, ''))) {
            tempErrors.phone = "Phone number must be 10 digits";
            isValid = false;
        }

        setErrors(tempErrors);

        if (!isValid) {
            // Show validation errors with SweetAlert
            const errorList = Object.values(tempErrors).map(err => `• ${err}`).join('<br>');
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
        setLoantype('');
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
        setErrors({});
    };

    // UseEffect for form submission with try/catch
    useEffect(() => {
        if (!shouldSubmit) return;

        const sendMail = async () => {
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
                const response = await axios.post("http://localhost:8000/mail/enquiryform", {
                    loantype,
                    name,
                    email,
                    phone,
                    message
                });

                console.log("Form submission response:", response.data);

                // Show success message
                Swal.fire({
                    title: 'Success!',
                    text: 'Your enquiry has been submitted successfully',
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

        sendMail();
    }, [shouldSubmit, loantype, name, email, phone, message]);

    return (
        <div>
            {/* <a className='what-icons' href="https://api.whatsapp.com/send?phone=919594450450">
                <img src={whatsapicon} alt="" />
            </a> */}
            <img className="enquire" src={Enquire} alt="" onClick={handleShow} />
            <Container fluid className='footer'>
                <Row>
                    <Col lg={4} md={6} sm={12}>
                        <img src={logo} style={{ width: '200px' }} alt="" />
                        <p className='footetxt'>Navmi Finserrv Pvt. Ltd, is in the market since 2007, has rapidly grown over the period of time in terms of depth and breadth of services offered, number of satisfied clients and associates, extent of interfacing with institutions / banks and building-up a team of committed professionals.
                        </p>
                        <a href="https://www.facebook.com/Navmifinserrv/" className='socials-as' target='_blank' rel="noopener noreferrer"><img className='social' src={facebook} alt="" /></a>
                        <a href="https://x.com/Navmi_finserrv" className='socials-as' target='_blank' rel="noopener noreferrer"><img className='social' src={twitter} alt="" /></a>
                        <a href="https://www.instagram.com/navmifinserrv/?next=%2F" className='socials-as' target='_blank' rel="noopener noreferrer"><img className='social' src={instagram} alt="" /></a>
                        <a href="https://www.youtube.com/@NavmiFinserrv/shorts" className='socials-as' target='_blank' rel="noopener noreferrer"><img className='social' src={youtube} alt="" /></a>
                        <a href="https://www.linkedin.com/in/navmi-finserrv-68140733a/" className='socials-as' target='_blank' rel="noopener noreferrer"><img className='social' src={linkedin} alt="" /></a>
                    </Col>
                    <Col lg={2} md={6} sm={12} className='foothead'>
                        <h3>Company</h3>
                        <hr />
                        <ul className='lists'>
                            <Link to="/about-us"><li><img src={Arrow} alt="arrow" /> About Us</li></Link>
                            <Link to="/contact-us"> <li><img src={Arrow} alt="arrow" /> Contact Us</li></Link>
                            <Link to="/join-us"> <li><img src={Arrow} alt="arrow" /> Join Us</li></Link>
                            <Link to="https://navmifinserrv.blogspot.com/" target='_blank'> <li><img src={Arrow} alt="arrow" /> Blog</li></Link>
                            <Link to="/about-us"> <li><img src={Arrow} alt="arrow" /> Credit Report</li></Link>
                        </ul>
                    </Col>
                    <Col lg={4} md={6} sm={12} className='foothead'>
                        <h3>Loans</h3>
                        <hr />
                        <ul className='lists divide'>
                            <li><Link to="/personal-loan"><img src={Arrow} alt="arrow" /> Personal Loan</Link></li>
                            <li><Link to="/home-loan"><img src={Arrow} alt="arrow" /> Home Loan</Link></li>
                            <li><Link to="/business-loan"><img src={Arrow} alt="arrow" /> Business Loan</Link></li>
                            <li><Link to="/construction-loan"><img src={Arrow} alt="arrow" /> Construction loan</Link></li>
                            <li><Link to="/car-loan"><img src={Arrow} alt="arrow" /> Car Loan</Link></li>
                            <li><Link to="/loan-against-property"><img src={Arrow} alt="arrow" /> Loan Against Property</Link></li>
                            <li><Link to="/professional-loan"><img src={Arrow} alt="arrow" /> Professional loan</Link></li>
                            <li><Link to="/balance-transfer"><img src={Arrow} alt="arrow" /> Balance Transfer</Link></li>
                            <li><Link to="/working-capital"><img src={Arrow} alt="arrow" /> Working Capital</Link></li>
                            <li><Link to="/cgtmse"><img src={Arrow} alt="arrow" /> CGTMSE (Gvt.)</Link></li>
                        </ul>
                    </Col>
                    <Col lg={2} md={6} sm={12} className='foothead'>
                        <h3>Insurance</h3>
                        <hr />
                        <ul className='lists new'>
                            <Link to="/lifeinsurance"><li><img src={Arrow} alt="arrow" /> Life Insurance</li></Link>
                            <Link to="/healthinsurance"><li><img src={Arrow} alt="arrow" /> Health Insurance</li></Link>
                            <li><img src={Arrow} alt="arrow" /> +91 9594450450</li>
                            <li><img src={Arrow} alt="arrow" /> info@navmifinserrv.com</li>
                        </ul>
                    </Col>
                </Row>
            </Container>
            <div className="copyright">
                <p>© Copyright 2025 by Navmifinserrv.com</p>
            </div>
            <Modal className='QuickEnqu' size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered backdrop="static"
                keyboard={false} show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <div className="enqpopup">
                        <img src={Popup} alt="" />
                        <Row>
                            <Col lg={10}>
                                <h3>Quick Enquiry</h3>
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="loanType">Loan Type</label>
                                        <select
                                            id="loanType"
                                            className={`form-control ${errors.loantype ? 'is-invalid' : ''}`}
                                            value={loantype}
                                            onChange={(e) => setLoantype(e.target.value)}
                                        >
                                            <option value="" disabled>Select Loan Type</option>
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
                                        {errors.loantype && <div className="invalid-feedback">{errors.loantype}</div>}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="name">Your Name</label>
                                        <input
                                            id="name"
                                            type="text"
                                            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            placeholder="Enter Name"
                                        />
                                        {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Your Email</label>
                                        <input
                                            id="email"
                                            type="email"
                                            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Enter Email"
                                        />
                                        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="phone">Your Phone Number</label>
                                        <input
                                            id="phone"
                                            type="tel"
                                            className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                                            value={phone}
                                            onChange={(e) => {
                                                // Only allow numbers
                                                const re = /^[0-9\b]+$/;
                                                if (e.target.value === '' || re.test(e.target.value)) {
                                                    setPhone(e.target.value);
                                                }
                                            }}
                                            maxLength="10"
                                            placeholder="Enter Phone Number"
                                        />
                                        {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="message">Your Comment</label>
                                        <textarea
                                            id="message"
                                            className="form-control"
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                            placeholder="Enter Comment (Optional)"
                                            rows="3"
                                        />
                                    </div>
                                    <Form.Check // prettier-ignore
                                    required
                                        type="checkbox"
                                        id="checkbox"
                                        label="Request a Call Back"
                                    />           
                                    <button
                                        type="submit"
                                        className="submit12"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? 'Submitting...' : 'Submit'}
                                    </button>
                                </form>
                            </Col>
                        </Row>
                    </div>
                </Modal.Body>
            </Modal>
            <Modal className='QuickEnqu' size="xl"
                aria-labelledby="contained-modal-title-vcenter"
                centered backdrop="static"
                keyboard={false} show={show2} onHide={handleClose2}>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <LoginModal handleClose2={handleClose2} />
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default Footer;