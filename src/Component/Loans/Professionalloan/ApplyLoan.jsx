import React,{ useEffect, useState } from 'react';
import { Col, Container, Form, Modal, Row, Table } from "react-bootstrap";
const ApplyLoan = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
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
                    <Form>
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
                                            <label htmlFor="exampleInputEmail1">Profession</label>
                                            <select name="" className="form-control">
                                                <option value="Select Your Profession" disabled>
                                                    Select Your Profession
                                                </option>
                                                <option value="1">Doctors</option>
                                                <option value="1"> C. A.s</option>
                                                <option value="1">C. S.s</option>
                                                <option value="1">Lawyers</option>
                                                <option value="1">Architects</option>
                                                <option value="1"> Engineers</option>
                                                <option value="1">Others</option>
                                            </select>
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="loanperform">
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Name of Firm/Clinic/Organization</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter Your Name of Firm/Clinic/Organization"
                                            />
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="loanperform">
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Business Address</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter Your Business Address"
                                            />
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="loanperform">
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Business Registration Number</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                placeholder="Enter Your Business Registration Number"
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
                                            <label htmlFor="exampleInputEmail1">Annual Turnover</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                placeholder="Enter Your Annual Turnover"
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
                                            <label htmlFor="exampleInputEmail1">Purpose of Loan</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter Your Purpose of Loan"
                                            />
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
                                                <option value="1">12 months</option>
                                                <option value="1">24 months</option>
                                                <option value="1">36 months</option>
                                                <option value="1">12 months</option>
                                                <option value="1">Others</option>
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
                    </Form>
                    <h3 className="mandoty">
                        *Required documents shared to your mail id
                    </h3>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default ApplyLoan
