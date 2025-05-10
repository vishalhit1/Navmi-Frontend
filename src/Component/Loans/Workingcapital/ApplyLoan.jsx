import { useState, useEffect } from "react";
import { Col, Container, Modal, Row } from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";
import LoginModal from "../../Common/LoginModal";

const ApplyLoan = () => {
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
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

    // State for all form fields
    const [formData, setFormData] = useState({
        fullName: '',
        age: '',
        panNo: '',
        contactNumber: '',
        emailId: '',
        businessType: '',
        businessName: '',
        businessAddress: '',
        businessRegistrationNumber: '',
        yearsInBusiness: '',
        annualTurnover: '',
        existingLoanDetails: '',
        loanAmountRequired: '',
        purposeOfLoan: '',
        repaymentTenure: ''
    });

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


    // Function to handle successful login
    const handleLoginSuccess = () => {
        handleClose2(); // Close login modal
        setShow(true);  // Open the insurance modal
    }

    // Handle field changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));

        // Clear error for this field if it passes validation
        if (validateField(name, value)) {
            setErrors(prev => ({ ...prev, [name]: undefined }));
        }
    };

    // Validate individual field
    const validateField = (name, value) => {
        switch (name) {
            case 'fullName':
                return value.trim().length >= 3;
            case 'age':
                return parseInt(value) > 18 && parseInt(value) < 100;
            case 'panNo':
                return /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(value);
            case 'contactNumber':
                return /^\d{10}$/.test(value.replace(/\s/g, ''));
            case 'emailId':
                return /\S+@\S+\.\S+/.test(value);
            case 'businessType':
                return value !== '';
            case 'businessName':
                return value.trim().length >= 3;
            case 'businessAddress':
                return value.trim().length >= 5;
            case 'businessRegistrationNumber':
                return value.trim().length >= 5;
            case 'yearsInBusiness':
                return parseInt(value) >= 0;
            case 'annualTurnover':
                return parseInt(value) > 0;
            case 'loanAmountRequired':
                return parseInt(value) > 0;
            case 'purposeOfLoan':
                return value !== '';
            case 'repaymentTenure':
                return value !== '';
            default:
                return true;
        }
    };

    // Form validation function
    const validateForm = () => {
        let tempErrors = {};
        let isValid = true;

        // Required fields
        const requiredFields = [
            'fullName', 'age', 'panNo', 'contactNumber', 'emailId',
            'businessType', 'businessName', 'businessAddress',
            'businessRegistrationNumber', 'yearsInBusiness',
            'annualTurnover', 'loanAmountRequired',
            'purposeOfLoan', 'repaymentTenure'
        ];

        // Check required fields
        requiredFields.forEach(field => {
            if (!formData[field]) {
                tempErrors[field] = `${field.replace(/([A-Z])/g, ' $1').trim()} is required`;
                isValid = false;
            }
        });

        // Specific validations
        if (formData.fullName && formData.fullName.length < 3) {
            tempErrors.fullName = "Full Name must be at least 3 characters";
            isValid = false;
        }

        if (formData.age && (parseInt(formData.age) <= 18 || parseInt(formData.age) >= 100)) {
            tempErrors.age = "Age must be between 18 and 100";
            isValid = false;
        }

        if (formData.panNo && !/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(formData.panNo)) {
            tempErrors.panNo = "PAN Number must be in valid format (e.g., ABCDE1234F)";
            isValid = false;
        }

        if (formData.contactNumber && !/^\d{10}$/.test(formData.contactNumber.replace(/\s/g, ''))) {
            tempErrors.contactNumber = "Contact number must be 10 digits";
            isValid = false;
        }

        if (formData.emailId && !/\S+@\S+\.\S+/.test(formData.emailId)) {
            tempErrors.emailId = "Email address is invalid";
            isValid = false;
        }

        if (formData.businessAddress && formData.businessAddress.length < 5) {
            tempErrors.businessAddress = "Business address is too short";
            isValid = false;
        }

        // Check numeric fields are positive
        ['yearsInBusiness', 'annualTurnover', 'loanAmountRequired'].forEach(field => {
            if (formData[field] && parseInt(formData[field]) <= 0) {
                tempErrors[field] = `${field.replace(/([A-Z])/g, ' $1').trim()} must be greater than 0`;
                isValid = false;
            }
        });

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
        setFormData({
            fullName: '',
            age: '',
            panNo: '',
            contactNumber: '',
            emailId: '',
            businessType: '',
            businessName: '',
            businessAddress: '',
            businessRegistrationNumber: '',
            yearsInBusiness: '',
            annualTurnover: '',
            existingLoanDetails: '',
            loanAmountRequired: '',
            purposeOfLoan: '',
            repaymentTenure: ''
        });
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
                const response = await axios.post("http://localhost:8000/mail/workingcapital", formData);

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
                    <div className="loanpopup persoanl-form">
                        <Container>
                            <Row>
                                <Col lg={4}>
                                    <div className="loanperform">
                                        <div className="form-group">
                                            <label htmlFor="fullName">Full Name</label>
                                            <input
                                                type="text"
                                                className={`form-control ${errors.fullName ? 'is-invalid' : ''}`}
                                                placeholder="Enter Your Full Name"
                                                name="fullName"
                                                value={formData.fullName}
                                                onChange={handleChange}
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
                                                className={`form-control ${errors.age ? 'is-invalid' : ''}`}
                                                placeholder="Enter Your Age"
                                                name="age"
                                                value={formData.age}
                                                onChange={handleChange}
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
                                                className={`form-control ${errors.panNo ? 'is-invalid' : ''}`}
                                                placeholder="Enter Your PAN No"
                                                name="panNo"
                                                value={formData.panNo}
                                                onChange={handleChange}
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
                                                type="text"
                                                className={`form-control ${errors.contactNumber ? 'is-invalid' : ''}`}
                                                placeholder="Enter Your Contact Number"
                                                name="contactNumber"
                                                value={formData.contactNumber}
                                                onChange={handleChange}
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
                                                className={`form-control ${errors.emailId ? 'is-invalid' : ''}`}
                                                placeholder="Enter Your Email Address"
                                                name="emailId"
                                                value={formData.emailId}
                                                onChange={handleChange}
                                            />
                                            {errors.emailId && <div className="invalid-feedback">{errors.emailId}</div>}
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="loanperform">
                                        <div className="form-group">
                                            <label htmlFor="businessType">Type of Business</label>
                                            <select
                                                name="businessType"
                                                className={`form-control ${errors.businessType ? 'is-invalid' : ''}`}
                                                value={formData.businessType}
                                                onChange={handleChange}
                                            >
                                                <option value="" disabled>Select Your Type of Business</option>
                                                <option value="Manufacturing">Manufacturing</option>
                                                <option value="Trading">Trading</option>
                                                <option value="Services">Services</option>
                                                <option value="Others">Others</option>
                                            </select>
                                            {errors.businessType && <div className="invalid-feedback">{errors.businessType}</div>}
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="loanperform">
                                        <div className="form-group">
                                            <label htmlFor="businessName">Business Name</label>
                                            <input
                                                type="text"
                                                className={`form-control ${errors.businessName ? 'is-invalid' : ''}`}
                                                placeholder="Enter Your Business Name"
                                                name="businessName"
                                                value={formData.businessName}
                                                onChange={handleChange}
                                            />
                                            {errors.businessName && <div className="invalid-feedback">{errors.businessName}</div>}
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="loanperform">
                                        <div className="form-group">
                                            <label htmlFor="businessAddress">Business Address</label>
                                            <input
                                                type="text"
                                                className={`form-control ${errors.businessAddress ? 'is-invalid' : ''}`}
                                                placeholder="Enter Your Business Address"
                                                name="businessAddress"
                                                value={formData.businessAddress}
                                                onChange={handleChange}
                                            />
                                            {errors.businessAddress && <div className="invalid-feedback">{errors.businessAddress}</div>}
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="loanperform">
                                        <div className="form-group">
                                            <label htmlFor="businessRegistrationNumber">GSTIN Number</label>
                                            <input
                                                type="text"
                                                className={`form-control ${errors.businessRegistrationNumber ? 'is-invalid' : ''}`}
                                                placeholder="Enter Your GSTIN Number"
                                                name="businessRegistrationNumber"
                                                value={formData.businessRegistrationNumber}
                                                onChange={handleChange}
                                            />
                                            {errors.businessRegistrationNumber && <div className="invalid-feedback">{errors.businessRegistrationNumber}</div>}
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="loanperform">
                                        <div className="form-group">
                                            <label htmlFor="yearsInBusiness">Years in Business</label>
                                            <input
                                                type="number"
                                                className={`form-control ${errors.yearsInBusiness ? 'is-invalid' : ''}`}
                                                placeholder="Enter Your Years in Business"
                                                name="yearsInBusiness"
                                                value={formData.yearsInBusiness}
                                                onChange={handleChange}
                                            />
                                            {errors.yearsInBusiness && <div className="invalid-feedback">{errors.yearsInBusiness}</div>}
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="loanperform">
                                        <div className="form-group">
                                            <label htmlFor="annualTurnover">Annual Turnover</label>
                                            <input
                                                type="number"
                                                className={`form-control ${errors.annualTurnover ? 'is-invalid' : ''}`}
                                                placeholder="Enter Your Annual Turnover"
                                                name="annualTurnover"
                                                value={formData.annualTurnover}
                                                onChange={handleChange}
                                            />
                                            {errors.annualTurnover && <div className="invalid-feedback">{errors.annualTurnover}</div>}
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="loanperform">
                                        <div className="form-group">
                                            <label htmlFor="existingLoanDetails">Existing Loan Details (if any)</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter Your Existing Loan Details (if any)"
                                                name="existingLoanDetails"
                                                value={formData.existingLoanDetails}
                                                onChange={handleChange}
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
                                                className={`form-control ${errors.loanAmountRequired ? 'is-invalid' : ''}`}
                                                placeholder="Enter Your Loan Amount Required"
                                                name="loanAmountRequired"
                                                value={formData.loanAmountRequired}
                                                onChange={handleChange}
                                            />
                                            {errors.loanAmountRequired && <div className="invalid-feedback">{errors.loanAmountRequired}</div>}
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="loanperform">
                                        <div className="form-group">
                                            <label htmlFor="purposeOfLoan">Purpose of Loan</label>
                                            <select
                                                name="purposeOfLoan"
                                                className={`form-control ${errors.purposeOfLoan ? 'is-invalid' : ''}`}
                                                value={formData.purposeOfLoan}
                                                onChange={handleChange}
                                            >
                                                <option value="" disabled>Select Your Purpose of Loan</option>
                                                <option value="Working Capital">Working Capital</option>
                                                <option value="Machinery">Machinery</option>
                                                <option value="Business Expansion">Business Expansion</option>
                                                <option value="Others">Others</option>
                                            </select>
                                            {errors.purposeOfLoan && <div className="invalid-feedback">{errors.purposeOfLoan}</div>}
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="loanperform">
                                        <div className="form-group">
                                            <label htmlFor="repaymentTenure">Repayment Tenure</label>
                                            <select
                                                name="repaymentTenure"
                                                className={`form-control ${errors.repaymentTenure ? 'is-invalid' : ''}`}
                                                value={formData.repaymentTenure}
                                                onChange={handleChange}
                                            >
                                                <option value="" disabled>Select Your Repayment Tenure</option>
                                                <option value="12 months">12 months</option>
                                                <option value="24 months">24 months</option>
                                                <option value="36 months">36 months</option>
                                                <option value="48 months">48 months</option>
                                                <option value="Others">Others</option>
                                            </select>
                                            {errors.repaymentTenure && <div className="invalid-feedback">{errors.repaymentTenure}</div>}
                                        </div>
                                    </div>
                                </Col>
                                <div
                                    className="submitbuttonloanform"
                                    style={{ textAlign: "center" }}
                                >
                                    <button
                                        className="submit12"
                                        onClick={handleSubmit}
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? 'Submitting...' : 'Submit'}
                                    </button>
                                </div>
                            </Row>
                        </Container>
                    </div>
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
                <LoginModal handleClose2={handleClose2} onLoginSuccess={handleLoginSuccess} />
                </Modal.Body>
            </Modal>
        </>
    )
}

export default ApplyLoan