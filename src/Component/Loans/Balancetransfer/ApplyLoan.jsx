import { useState } from "react";
import { Col, Container, Modal, Row } from "react-bootstrap";
import axios from "axios";
import Swal from "sweetalert2";
import LoginModal from "../../Common/LoginModal";

const ApplyLoan = () => {
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState({});

    const [formData, setFormData] = useState({
        fullName: '',
        age: '',
        panNo: '',
        contactNumber: '',
        emailId: '',
        loanType: '',
        loanAmount: '',
        loanTenureRemaining: '',
        currentEmi: '',
        interestRate: '',
        transferAmount: '',
        requiredTenure: ''
    });

    const handleClose2 = () => setShow2(false);
    const handleClose = () => setShow(false);
    
    const handleShow = () => {
        const token = sessionStorage.getItem('token');
        if (!token) {
            setShow2(true);
        } else {
            setShow(true);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        
        // Clear error when user types
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: undefined
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};
        let isValid = true;

        // Required fields validation
        const requiredFields = [
            'fullName', 'age', 'panNo', 'contactNumber', 'emailId', 
            'loanType', 'loanAmount', 'loanTenureRemaining', 
            'currentEmi', 'interestRate', 'transferAmount', 'requiredTenure'
        ];

        requiredFields.forEach(field => {
            if (!formData[field]) {
                newErrors[field] = "This field is required";
                isValid = false;
            }
        });

        // Specific validations
        if (formData.fullName && formData.fullName.length < 3) {
            newErrors.fullName = "Name must be at least 3 characters";
            isValid = false;
        }

        if (formData.age && (formData.age < 18 || formData.age > 80)) {
            newErrors.age = "Age must be between 18 and 80";
            isValid = false;
        }

        if (formData.panNo && !/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(formData.panNo)) {
            newErrors.panNo = "Invalid PAN format (e.g., ABCDE1234F)";
            isValid = false;
        }

        if (formData.contactNumber && !/^\d{10}$/.test(formData.contactNumber)) {
            newErrors.contactNumber = "Phone must be 10 digits";
            isValid = false;
        }

        if (formData.emailId && !/\S+@\S+\.\S+/.test(formData.emailId)) {
            newErrors.emailId = "Invalid email format";
            isValid = false;
        }

        if (formData.loanAmount && formData.loanAmount <= 0) {
            newErrors.loanAmount = "Loan amount must be positive";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!validateForm()) {
            Swal.fire({
                icon: 'error',
                title: 'Validation Error',
                text: 'Please fill all required fields correctly',
                confirmButtonColor: '#DA3731'
            });
            return;
        }

        setIsSubmitting(true);

        try {
            // Show loading
            Swal.fire({
                title: 'Processing...',
                html: 'Please wait while we submit your application',
                allowOutsideClick: false,
                didOpen: () => Swal.showLoading()
            });

            // Submit to your API endpoint
            const response = await axios.post("http://localhost:8000/mail/balancetransfer", formData);
            
            // Success handling
            Swal.fire({
                title: 'Success!',
                text: 'Your application has been submitted successfully',
                icon: 'success',
                confirmButtonColor: '#DA3731'
            });

            // Reset form and close modal
            setFormData({
                fullName: '',
                age: '',
                panNo: '',
                contactNumber: '',
                emailId: '',
                loanType: '',
                loanAmount: '',
                loanTenureRemaining: '',
                currentEmi: '',
                interestRate: '',
                transferAmount: '',
                requiredTenure: ''
            });
            handleClose();

        } catch (error) {
            console.error('Submission error:', error);
            Swal.fire({
                title: 'Error!',
                text: error.response?.data?.message || 'Failed to submit application',
                icon: 'error',
                confirmButtonColor: '#DA3731'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <button onClick={handleShow} className="applynow blink">Apply Now</button>

            <Modal show={show} onHide={handleClose} centered backdrop="static" keyboard={false} size="xl">
                <Modal.Header closeButton style={{ justifyContent: "center", marginTop: "40px" }}>
                    <Modal.Title>
                        <h3 style={{ fontWeight: "600", letterSpacing: "0em", textAlign: "center", marginBottom: "40px", color: '#283E87' }}>
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
                                                <label>Full Name</label>
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
                                                <label>Age</label>
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
                                                <label>PAN No</label>
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
                                                <label>Contact Number</label>
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
                                                <label>Email ID</label>
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
                                                <label>Loan Type</label>
                                                <select
                                                    name="loanType"
                                                    className={`form-control ${errors.loanType ? 'is-invalid' : ''}`}
                                                    value={formData.loanType}
                                                    onChange={handleChange}
                                                >
                                                    <option value="">Select Loan Type</option>
                                                    <option value="Home Loan">Home Loan</option>
                                                    <option value="Personal Loan">Personal Loan</option>
                                                    <option value="Auto Loan">Auto Loan</option>
                                                    <option value="Business Loan">Business Loan</option>
                                                </select>
                                                {errors.loanType && <div className="invalid-feedback">{errors.loanType}</div>}
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className="loanperform">
                                            <div className="form-group">
                                                <label>Loan Amount</label>
                                                <input
                                                    type="number"
                                                    className={`form-control ${errors.loanAmount ? 'is-invalid' : ''}`}
                                                    placeholder="Enter Loan Amount"
                                                    name="loanAmount"
                                                    value={formData.loanAmount}
                                                    onChange={handleChange}
                                                />
                                                {errors.loanAmount && <div className="invalid-feedback">{errors.loanAmount}</div>}
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className="loanperform">
                                            <div className="form-group">
                                                <label>Loan Tenure Remaining</label>
                                                <input
                                                    type="text"
                                                    className={`form-control ${errors.loanTenureRemaining ? 'is-invalid' : ''}`}
                                                    placeholder="Enter Tenure Remaining"
                                                    name="loanTenureRemaining"
                                                    value={formData.loanTenureRemaining}
                                                    onChange={handleChange}
                                                />
                                                {errors.loanTenureRemaining && <div className="invalid-feedback">{errors.loanTenureRemaining}</div>}
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className="loanperform">
                                            <div className="form-group">
                                                <label>Current EMI</label>
                                                <input
                                                    type="text"
                                                    className={`form-control ${errors.currentEmi ? 'is-invalid' : ''}`}
                                                    placeholder="Enter Current EMI"
                                                    name="currentEmi"
                                                    value={formData.currentEmi}
                                                    onChange={handleChange}
                                                />
                                                {errors.currentEmi && <div className="invalid-feedback">{errors.currentEmi}</div>}
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className="loanperform">
                                            <div className="form-group">
                                                <label>Interest Rate</label>
                                                <input
                                                    type="number"
                                                    className={`form-control ${errors.interestRate ? 'is-invalid' : ''}`}
                                                    placeholder="Enter Interest Rate"
                                                    name="interestRate"
                                                    value={formData.interestRate}
                                                    onChange={handleChange}
                                                />
                                                {errors.interestRate && <div className="invalid-feedback">{errors.interestRate}</div>}
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className="loanperform">
                                            <div className="form-group">
                                                <label>Transfer Amount</label>
                                                <input
                                                    type="number"
                                                    className={`form-control ${errors.transferAmount ? 'is-invalid' : ''}`}
                                                    placeholder="Enter Transfer Amount"
                                                    name="transferAmount"
                                                    value={formData.transferAmount}
                                                    onChange={handleChange}
                                                />
                                                {errors.transferAmount && <div className="invalid-feedback">{errors.transferAmount}</div>}
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className="loanperform">
                                            <div className="form-group">
                                                <label>Required Tenure</label>
                                                <select
                                                    name="requiredTenure"
                                                    className={`form-control ${errors.requiredTenure ? 'is-invalid' : ''}`}
                                                    value={formData.requiredTenure}
                                                    onChange={handleChange}
                                                >
                                                    <option value="">Select Tenure</option>
                                                    <option value="5 years">5 years</option>
                                                    <option value="10 years">10 years</option>
                                                    <option value="15 years">15 years</option>
                                                </select>
                                                {errors.requiredTenure && <div className="invalid-feedback">{errors.requiredTenure}</div>}
                                            </div>
                                        </div>
                                    </Col>
                                    <div className="submitbuttonloanform" style={{ textAlign: "center" }}>
                                        <button type="submit" className="submit12" disabled={isSubmitting}>
                                            {isSubmitting ? 'Submitting...' : 'Submit'}
                                        </button>
                                    </div>
                                </Row>
                            </form>
                        </Container>
                    </div>
                    <h3 className="mandoty">
                        *Required documents will be shared to your mail id
                    </h3>
                </Modal.Body>
            </Modal>
            
            <Modal className='QuickEnqu' size="xl" centered backdrop="static" keyboard={false} show={show2} onHide={handleClose2}>
                <Modal.Header closeButton />
                <Modal.Body>
                    <LoginModal handleClose2={handleClose2} />
                </Modal.Body>
            </Modal>
        </>
    );
};

export default ApplyLoan;