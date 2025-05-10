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
    const sessionStoragetoken = sessionStorage.getItem('token');

    const handleShow = () => {
        if (!sessionStoragetoken) {
            setShow2(true);
            return;
        } else {
            setShow(true);
        }
    }

    // Form state variables
    const [formData, setFormData] = useState({
        fullName: '',
        age: '',
        panNo: '',
        contactNumber: '',
        emailId: '',
        propertyType: '',
        propertyAddress: '',
        estimatedCost: '',
        loanAmount: '',
        yearsInProfession: '',
        existingLoanDetails: '',
        purposeOfLoan: '',
        repaymentTenure: '',
        approvedBuildingPlan: '',
        expectedCompletionDate: ''
    });

    // Function to handle successful login
    const handleLoginSuccess = () => {
        handleClose2(); // Close login modal
        setShow(true);  // Open the insurance modal
    }

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

    // Handle input change for all form fields
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

        // Clear error for the field
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

        // Required fields validation
        const requiredFields = [
            { name: 'fullName', label: 'Full Name', minLength: 3 },
            { name: 'age', label: 'Age' },
            { name: 'panNo', label: 'PAN No' },
            { name: 'contactNumber', label: 'Contact Number', pattern: /^\d{10}$/ },
            { name: 'emailId', label: 'Email ID', pattern: /\S+@\S+\.\S+/ },
            { name: 'propertyType', label: 'Property Type' },
            { name: 'propertyAddress', label: 'Property Address' },
            { name: 'estimatedCost', label: 'Estimated Construction Cost' },
            { name: 'loanAmount', label: 'Loan Amount Required' },
            { name: 'purposeOfLoan', label: 'Purpose of Loan' },
            { name: 'repaymentTenure', label: 'Repayment Tenure' },
            { name: 'approvedBuildingPlan', label: 'Approved Building Plan' },
            { name: 'expectedCompletionDate', label: 'Expected Completion Date' }
        ];

        requiredFields.forEach(field => {
            if (!formData[field.name]) {
                tempErrors[field.name] = `${field.label} is required`;
                isValid = false;
            } else if (field.minLength && formData[field.name].length < field.minLength) {
                tempErrors[field.name] = `${field.label} must be at least ${field.minLength} characters`;
                isValid = false;
            } else if (field.pattern && !field.pattern.test(formData[field.name])) {
                tempErrors[field.name] = `Please enter a valid ${field.label}`;
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
            propertyType: '',
            propertyAddress: '',
            estimatedCost: '',
            loanAmount: '',
            yearsInProfession: '',
            existingLoanDetails: '',
            purposeOfLoan: '',
            repaymentTenure: '',
            approvedBuildingPlan: '',
            expectedCompletionDate: ''
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
                html: 'Please wait while we process your request',
                allowOutsideClick: false,
                didOpen: () => {
                    Swal.showLoading();
                }
            });

            try {
                const response = await axios.post("http://localhost:8000/mail/constructionloans", formData);

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
                            <form onSubmit={handleSubmit}>
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
                                                    className={`form-control ${errors.age ? 'is-invalid' : ''}`}
                                                    placeholder="Enter Your Age"
                                                    name="age"
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
                                                    className={`form-control ${errors.panNo ? 'is-invalid' : ''}`}
                                                    placeholder="Enter Your PAN No"
                                                    name="panNo"
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
                                                    className={`form-control ${errors.contactNumber ? 'is-invalid' : ''}`}
                                                    placeholder="Enter Your Contact Number"
                                                    name="contactNumber"
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
                                                    className={`form-control ${errors.emailId ? 'is-invalid' : ''}`}
                                                    placeholder="Enter Your Email Address"
                                                    name="emailId"
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
                                                <label htmlFor="propertyType">Property Type</label>
                                                <select
                                                    className={`form-control ${errors.propertyType ? 'is-invalid' : ''}`}
                                                    name="propertyType"
                                                    value={formData.propertyType}
                                                    onChange={handleInputChange}
                                                >
                                                    <option value="" disabled>
                                                        Select Your Property Type
                                                    </option>
                                                    <option value="Residential">Residential</option>
                                                    <option value="Commercial">Commercial</option>
                                                    <option value="Others">Others</option>
                                                </select>
                                                {errors.propertyType && <div className="invalid-feedback">{errors.propertyType}</div>}
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className="loanperform">
                                            <div className="form-group">
                                                <label htmlFor="propertyAddress">Property Address</label>
                                                <input
                                                    type="text"
                                                    className={`form-control ${errors.propertyAddress ? 'is-invalid' : ''}`}
                                                    placeholder="Enter Your Property Address"
                                                    name="propertyAddress"
                                                    value={formData.propertyAddress}
                                                    onChange={handleInputChange}
                                                />
                                                {errors.propertyAddress && <div className="invalid-feedback">{errors.propertyAddress}</div>}
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className="loanperform">
                                            <div className="form-group">
                                                <label htmlFor="estimatedCost">Estimated Construction Cost</label>
                                                <input
                                                    type="text"
                                                    className={`form-control ${errors.estimatedCost ? 'is-invalid' : ''}`}
                                                    placeholder="Enter Your Estimated Construction Cost"
                                                    name="estimatedCost"
                                                    value={formData.estimatedCost}
                                                    onChange={handleInputChange}
                                                />
                                                {errors.estimatedCost && <div className="invalid-feedback">{errors.estimatedCost}</div>}
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className="loanperform">
                                            <div className="form-group">
                                                <label htmlFor="loanAmount">Loan Amount Required</label>
                                                <input
                                                    type="number"
                                                    className={`form-control ${errors.loanAmount ? 'is-invalid' : ''}`}
                                                    placeholder="Enter Your Loan Amount Required"
                                                    name="loanAmount"
                                                    value={formData.loanAmount}
                                                    onChange={handleInputChange}
                                                />
                                                {errors.loanAmount && <div className="invalid-feedback">{errors.loanAmount}</div>}
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className="loanperform">
                                            <div className="form-group">
                                                <label htmlFor="yearsInProfession">Years in Profession</label>
                                                <input
                                                    type="number"
                                                    className={`form-control ${errors.yearsInProfession ? 'is-invalid' : ''}`}
                                                    placeholder="Enter Your Years in Profession"
                                                    name="yearsInProfession"
                                                    value={formData.yearsInProfession}
                                                    onChange={handleInputChange}
                                                />
                                                {errors.yearsInProfession && <div className="invalid-feedback">{errors.yearsInProfession}</div>}
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className="loanperform">
                                            <div className="form-group">
                                                <label htmlFor="existingLoanDetails">Existing Loan Details</label>
                                                <input
                                                    type="text"
                                                    className={`form-control ${errors.existingLoanDetails ? 'is-invalid' : ''}`}
                                                    placeholder="Enter Your Existing Loan Details"
                                                    name="existingLoanDetails"
                                                    value={formData.existingLoanDetails}
                                                    onChange={handleInputChange}
                                                />
                                                {errors.existingLoanDetails && <div className="invalid-feedback">{errors.existingLoanDetails}</div>}
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className="loanperform">
                                            <div className="form-group">
                                                <label htmlFor="purposeOfLoan">Purpose of Loan</label>
                                                <select
                                                    className={`form-control ${errors.purposeOfLoan ? 'is-invalid' : ''}`}
                                                    name="purposeOfLoan"
                                                    value={formData.purposeOfLoan}
                                                    onChange={handleInputChange}
                                                >
                                                    <option value="" disabled>
                                                        Select Your Purpose of Loan
                                                    </option>
                                                    <option value="New Construction">New Construction</option>
                                                    <option value="Renovation">Renovation</option>
                                                    <option value="Expansion">Expansion</option>
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
                                                    className={`form-control ${errors.repaymentTenure ? 'is-invalid' : ''}`}
                                                    name="repaymentTenure"
                                                    value={formData.repaymentTenure}
                                                    onChange={handleInputChange}
                                                >
                                                    <option value="" disabled>
                                                        Select Your Repayment Tenure
                                                    </option>
                                                    <option value="5 months">5 months</option>
                                                    <option value="10 months">10 months</option>
                                                    <option value="15 months">15 months</option>
                                                    <option value="Others">Others</option>
                                                </select>
                                                {errors.repaymentTenure && <div className="invalid-feedback">{errors.repaymentTenure}</div>}
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className="loanperform">
                                            <div className="form-group">
                                                <label htmlFor="approvedBuildingPlan">Approved Building Plan</label>
                                                <select
                                                    className={`form-control ${errors.approvedBuildingPlan ? 'is-invalid' : ''}`}
                                                    name="approvedBuildingPlan"
                                                    value={formData.approvedBuildingPlan}
                                                    onChange={handleInputChange}
                                                >
                                                    <option value="" disabled>
                                                        Select Your Approved Building Plan
                                                    </option>
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                                </select>
                                                {errors.approvedBuildingPlan && <div className="invalid-feedback">{errors.approvedBuildingPlan}</div>}
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className="loanperform">
                                            <div className="form-group">
                                                <label htmlFor="expectedCompletionDate">Expected Completion Date</label>
                                                <input
                                                    type="date"
                                                    className={`form-control ${errors.expectedCompletionDate ? 'is-invalid' : ''}`}
                                                    name="expectedCompletionDate"
                                                    value={formData.expectedCompletionDate}
                                                    onChange={handleInputChange}
                                                />
                                                {errors.expectedCompletionDate && <div className="invalid-feedback">{errors.expectedCompletionDate}</div>}
                                            </div>
                                        </div>
                                    </Col>
                                    <div
                                        className="submitbuttonloanform"
                                        style={{ textAlign: "center", width: "100%" }}
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

            {/* Login Modal */}
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
    );
};

export default ApplyLoan;