import { useState, useEffect } from "react";
import { Col, Container, Modal, Row } from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";
import LoginModal from "../../Common/LoginModal";

const ApplyLoan = () => {
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const handleClose = () => setShow(false);
    const handleClose2 = () => setShow2(false);
    const handleShow = () => {
        if (!sessionStoragetoken) {
            setShow2(true);
            return;
        } else {
            setShow(true);
        }
    }
    const sessionStoragetoken = sessionStorage.getItem('token');
    const [loantype, setLoantype] = useState('health'); // Set default loan type to avoid validation issues
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

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

    // Handle field changes and clear errors for that field
    const handleNameChange = (e) => {
        const value = e.target.value;
        setName(value);
        if (value.length >= 3) {
            setErrors(prev => ({ ...prev, name: undefined }));
        }
    };

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        if (/\S+@\S+\.\S+/.test(value)) {
            setErrors(prev => ({ ...prev, email: undefined }));
        }
    };

    const handlePhoneChange = (e) => {
        const value = e.target.value;
        setPhone(value);
        if (/^\d{10}$/.test(value.replace(/\s/g, ''))) {
            setErrors(prev => ({ ...prev, phone: undefined }));
        }
    };

    const handleMessageChange = (e) => {
        const value = e.target.value;
        setMessage(value);
        if (value.length >= 10) {
            setErrors(prev => ({ ...prev, message: undefined }));
        }
    };

    // Form validation function
    const validateForm = () => {
        let tempErrors = {};
        let isValid = true;

        // We'll set loantype to health by default

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

        if (!message) {
            tempErrors.message = "Message is required";
            isValid = false;
        } else if (message.length < 10) {
            tempErrors.message = "Message must be at least 10 characters";
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
        setLoantype('health');
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
                const response = await axios.post("http://localhost:8000/mail/lifeinsurance", {
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
        <>
            <button onClick={handleShow} className="applynow blink">Apply Now</button>

            <Modal show={show} onHide={handleClose} centered size="lg" backdrop="static" keyboard={false}>
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
                                marginBottom: "25px",
                                color: '#283E87',
                            }}
                        >
                            Apply Now
                        </h3>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h3 className="provide-avssd">We provide simple steps to make your Health Insurance <br />process easy and hassle-free!</h3>
                    <div className="loanpopup persoanl-form salaried">
                        <Container>
                            <form onSubmit={handleSubmit}>
                                <Row>
                                    <Col lg={6}>
                                        <div className="loanperform">
                                            <div className="form-group">
                                                <label htmlFor="name">Your Name</label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    value={name}
                                                    onChange={handleNameChange}
                                                    className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                                    placeholder="Enter Your Name"
                                                />
                                                {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={6}>
                                        <div className="loanperform">
                                            <div className="form-group">
                                                <label htmlFor="phone">Phone Number</label>
                                                <input
                                                    type="tel"
                                                    id="phone"
                                                    value={phone}
                                                    onChange={handlePhoneChange}
                                                    className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                                                    placeholder="Enter Your Phone Number"
                                                />
                                                {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={6}>
                                        <div className="loanperform">
                                            <div className="form-group">
                                                <label htmlFor="email">Email ID</label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    value={email}
                                                    onChange={handleEmailChange}
                                                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                                    placeholder="Enter Your Email ID"
                                                />
                                                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={6}>
                                        <div className="loanperform">
                                            <div className="form-group">
                                                <label htmlFor="message">Message</label>
                                                <input
                                                    type="text"
                                                    id="message"
                                                    value={message}
                                                    onChange={handleMessageChange}
                                                    className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                                                    placeholder="Enter Your Message"
                                                />
                                                {errors.message && <div className="invalid-feedback">{errors.message}</div>}
                                            </div>
                                        </div>
                                    </Col>
                                    <div
                                        className="submitbuttonloanform"
                                        style={{ textAlign: "center", width: "100%", marginTop: "20px" }}
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
                            </form>
                        </Container>
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
        </>
    );
};

export default ApplyLoan;