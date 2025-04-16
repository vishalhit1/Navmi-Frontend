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

    // Form state variables
    const [formData, setFormData] = useState({
        fullName: '',
        age: '',
        panNo: '',
        contactNumber: '',
        emailId: '',
        businessType: '',
        businessName: '',
        businessAddress: '',
        businessRegNumber: '',
        yearsInBusiness: '',
        annualTurnover: '',
        existingLoanDetails: '',
        loanAmountRequired: '',
        purposeOfLoan: '',
        repaymentTenure: '',
        udyamRegNumber: '',
        numberOfEmployees: ''
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

    // Handle field changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

        // Clear error for the field being edited
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: undefined
            });
        }
    };

    // Form validation function
    const validateForm = () => {
        let tempErrors = {};
        let isValid = true;

        // Full Name validation
        if (!formData.fullName) {
            tempErrors.fullName = "Full Name is required";
            isValid = false;
        } else if (formData.fullName.length < 3) {
            tempErrors.fullName = "Full Name must be at least 3 characters";
            isValid = false;
        }

        // Age validation
        if (!formData.age) {
            tempErrors.age = "Age is required";
            isValid = false;
        } else if (isNaN(formData.age) || formData.age < 18 || formData.age > 120) {
            tempErrors.age = "Please enter a valid age between 18 and 120";
            isValid = false;
        }

        // PAN Number validation
        if (!formData.panNo) {
            tempErrors.panNo = "PAN Number is required";
            isValid = false;
        } else if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(formData.panNo)) {
            tempErrors.panNo = "Please enter a valid PAN Number";
            isValid = false;
        }

        // Contact Number validation
        if (!formData.contactNumber) {
            tempErrors.contactNumber = "Contact Number is required";
            isValid = false;
        } else if (!/^\d{10}$/.test(formData.contactNumber.toString().replace(/\s/g, ''))) {
            tempErrors.contactNumber = "Contact Number must be 10 digits";
            isValid = false;
        }

        // Email validation
        if (!formData.emailId) {
            tempErrors.emailId = "Email ID is required";
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.emailId)) {
            tempErrors.emailId = "Email address is invalid";
            isValid = false;
        }

        // Business Type validation
        if (!formData.businessType) {
            tempErrors.businessType = "Please select a Business Type";
            isValid = false;
        }

        // Business Name validation
        if (!formData.businessName) {
            tempErrors.businessName = "Business Name is required";
            isValid = false;
        } else if (formData.businessName.length < 3) {
            tempErrors.businessName = "Business Name must be at least 3 characters";
            isValid = false;
        }

        // Business Address validation
        if (!formData.businessAddress) {
            tempErrors.businessAddress = "Business Address is required";
            isValid = false;
        } else if (formData.businessAddress.length < 10) {
            tempErrors.businessAddress = "Please enter a complete business address";
            isValid = false;
        }

        // Business Registration Number validation
        if (!formData.businessRegNumber) {
            tempErrors.businessRegNumber = "Business Registration Number is required";
            isValid = false;
        }

        // Years in Business validation
        if (!formData.yearsInBusiness) {
            tempErrors.yearsInBusiness = "Years in Business is required";
            isValid = false;
        } else if (isNaN(formData.yearsInBusiness) || formData.yearsInBusiness < 0) {
            tempErrors.yearsInBusiness = "Please enter a valid number of years";
            isValid = false;
        }

        // Annual Turnover validation
        if (!formData.annualTurnover) {
            tempErrors.annualTurnover = "Annual Turnover is required";
            isValid = false;
        } else if (isNaN(formData.annualTurnover) || formData.annualTurnover <= 0) {
            tempErrors.annualTurnover = "Please enter a valid turnover amount";
            isValid = false;
        }

        // Loan Amount Required validation
        if (!formData.loanAmountRequired) {
            tempErrors.loanAmountRequired = "Loan Amount is required";
            isValid = false;
        } else if (isNaN(formData.loanAmountRequired) || formData.loanAmountRequired <= 0) {
            tempErrors.loanAmountRequired = "Please enter a valid loan amount";
            isValid = false;
        }

        // Purpose of Loan validation
        if (!formData.purposeOfLoan) {
            tempErrors.purposeOfLoan = "Please select a Purpose of Loan";
            isValid = false;
        }

        // Repayment Tenure validation
        if (!formData.repaymentTenure) {
            tempErrors.repaymentTenure = "Please select a Repayment Tenure";
            isValid = false;
        }

        // Number of Employees validation
        if (!formData.numberOfEmployees) {
            tempErrors.numberOfEmployees = "Number of Employees is required";
            isValid = false;
        } else if (isNaN(formData.numberOfEmployees) || formData.numberOfEmployees < 0) {
            tempErrors.numberOfEmployees = "Please enter a valid number of employees";
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
        setFormData({
            fullName: '',
            age: '',
            panNo: '',
            contactNumber: '',
            emailId: '',
            businessType: '',
            businessName: '',
            businessAddress: '',
            businessRegNumber: '',
            yearsInBusiness: '',
            annualTurnover: '',
            existingLoanDetails: '',
            loanAmountRequired: '',
            purposeOfLoan: '',
            repaymentTenure: '',
            udyamRegNumber: '',
            numberOfEmployees: ''
        });
        setErrors({});
    };

    // UseEffect for form submission with try/catch
    useEffect(() => {
        if (!shouldSubmit) return;

        const sendFormData = async () => {
            setIsSubmitting(true);

            // Show loading state
            Swal.fire({
                title: 'Submitting...',
                html: 'Please wait while we process your application',
                allowOutsideClick: false,
                didOpen: () => {
                    Swal.showLoading();
                }
            });

            try {
                const response = await axios.post("http://localhost:8000/mail/cgtmse", formData);

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

        sendFormData();
    }, [shouldSubmit]);

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
                            <form onSubmit={handleSubmit}>
                                <Row>
                                    <Col lg={4}>
                                        <div className="loanperform">
                                            <div className="form-group">
                                                <label htmlFor="fullName">Full Name</label>
                                                <input
                                                    type="text"
                                                    name="fullName"
                                                    className={`form-control ${errors.fullName ? 'is-invalid' : ''}`}
                                                    placeholder="Enter Your Full Name"
                                                    value={formData.fullName}
                                                    onChange={handleInputChange}
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
                                                    name="age"
                                                    className={`form-control ${errors.age ? 'is-invalid' : ''}`}
                                                    placeholder="Enter Your Age"
                                                    value={formData.age}
                                                    onChange={handleInputChange}
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
                                                    name="panNo"
                                                    className={`form-control ${errors.panNo ? 'is-invalid' : ''}`}
                                                    placeholder="Enter Your PAN No"
                                                    value={formData.panNo}
                                                    onChange={handleInputChange}
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
                                                    name="contactNumber"
                                                    className={`form-control ${errors.contactNumber ? 'is-invalid' : ''}`}
                                                    placeholder="Enter Your Contact Number"
                                                    value={formData.contactNumber}
                                                    onChange={handleInputChange}
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
                                                    name="emailId"
                                                    className={`form-control ${errors.emailId ? 'is-invalid' : ''}`}
                                                    placeholder="Enter Your Email Address"
                                                    value={formData.emailId}
                                                    onChange={handleInputChange}
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
                                                    onChange={handleInputChange}
                                                >
                                                    <option value="" disabled>
                                                        Select Your Type of Business
                                                    </option>
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
                                                    name="businessName"
                                                    className={`form-control ${errors.businessName ? 'is-invalid' : ''}`}
                                                    placeholder="Enter Your Business Name"
                                                    value={formData.businessName}
                                                    onChange={handleInputChange}
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
                                                    name="businessAddress"
                                                    className={`form-control ${errors.businessAddress ? 'is-invalid' : ''}`}
                                                    placeholder="Enter Your Business Address"
                                                    value={formData.businessAddress}
                                                    onChange={handleInputChange}
                                                />
                                                {errors.businessAddress && <div className="invalid-feedback">{errors.businessAddress}</div>}
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className="loanperform">
                                            <div className="form-group">
                                                <label htmlFor="businessRegNumber">Business Registration Number</label>
                                                <input
                                                    type="text"
                                                    name="businessRegNumber"
                                                    className={`form-control ${errors.businessRegNumber ? 'is-invalid' : ''}`}
                                                    placeholder="Enter Your Business Registration Number"
                                                    value={formData.businessRegNumber}
                                                    onChange={handleInputChange}
                                                />
                                                {errors.businessRegNumber && <div className="invalid-feedback">{errors.businessRegNumber}</div>}
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className="loanperform">
                                            <div className="form-group">
                                                <label htmlFor="yearsInBusiness">Years in Business</label>
                                                <input
                                                    type="number"
                                                    name="yearsInBusiness"
                                                    className={`form-control ${errors.yearsInBusiness ? 'is-invalid' : ''}`}
                                                    placeholder="Enter Your Years in Business"
                                                    value={formData.yearsInBusiness}
                                                    onChange={handleInputChange}
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
                                                    name="annualTurnover"
                                                    className={`form-control ${errors.annualTurnover ? 'is-invalid' : ''}`}
                                                    placeholder="Enter Your Annual Turnover"
                                                    value={formData.annualTurnover}
                                                    onChange={handleInputChange}
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
                                                    name="existingLoanDetails"
                                                    className="form-control"
                                                    placeholder="Enter Your Existing Loan Details (if any)"
                                                    value={formData.existingLoanDetails}
                                                    onChange={handleInputChange}
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
                                                    name="loanAmountRequired"
                                                    className={`form-control ${errors.loanAmountRequired ? 'is-invalid' : ''}`}
                                                    placeholder="Enter Your Loan Amount Required"
                                                    value={formData.loanAmountRequired}
                                                    onChange={handleInputChange}
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
                                                    onChange={handleInputChange}
                                                >
                                                    <option value="" disabled>
                                                        Select Your Purpose of Loan
                                                    </option>
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
                                                    onChange={handleInputChange}
                                                >
                                                    <option value="" disabled>
                                                        Select Your Repayment Tenure
                                                    </option>
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
                                    <Col lg={4}>
                                        <div className="loanperform">
                                            <div className="form-group">
                                                <label htmlFor="udyamRegNumber">Udyam Registration Number (if applicable)</label>
                                                <input
                                                    type="text"
                                                    name="udyamRegNumber"
                                                    className="form-control"
                                                    placeholder="Enter Your Udyam Registration Number (if applicable)"
                                                    value={formData.udyamRegNumber}
                                                    onChange={handleInputChange}
                                                />
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className="loanperform">
                                            <div className="form-group">
                                                <label htmlFor="numberOfEmployees">Number of Employees</label>
                                                <input
                                                    type="number"
                                                    name="numberOfEmployees"
                                                    className={`form-control ${errors.numberOfEmployees ? 'is-invalid' : ''}`}
                                                    placeholder="Enter Your Number of Employees"
                                                    value={formData.numberOfEmployees}
                                                    onChange={handleInputChange}
                                                />
                                                {errors.numberOfEmployees && <div className="invalid-feedback">{errors.numberOfEmployees}</div>}
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
                            </form>
                        </Container>
                    </div>
                    <h3 className="mandoty">
                        *Required documents shared to your mail id
                    </h3>
                </Modal.Body>
            </Modal>

            <Modal className='QuickEnqu' size="xl"
                aria-labelledby="contained-modal-title-vcenter"
                centered show={show2} onHide={handleClose2}>
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