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

    // Form field states
    const [fullName, setFullName] = useState('');
    const [age, setAge] = useState('');
    const [panNo, setPanNo] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [emailId, setEmailId] = useState('');
    const [loanType, setLoanType] = useState('');
    const [loanAmount, setLoanAmount] = useState('');
    const [loanTenureRemaining, setLoanTenureRemaining] = useState('');
    const [currentEmi, setCurrentEmi] = useState('');
    const [interestRate, setInterestRate] = useState('');
    const [transferAmount, setTransferAmount] = useState('');
    const [requiredTenure, setRequiredTenure] = useState('');

    // Form validation states
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [shouldSubmit, setShouldSubmit] = useState(false);

    // For backward compatibility with previous code
    const [loantype, setLoantype] = useState('health');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

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

    // New form field handlers
    const handleFullNameChange = (e) => {
        const value = e.target.value;
        setFullName(value);
        if (value.length >= 3) {
            setErrors(prev => ({ ...prev, fullName: undefined }));
        }
    };

    const handleAgeChange = (e) => {
        const value = e.target.value;
        setAge(value);
        if (value >= 18 && value <= 80) {
            setErrors(prev => ({ ...prev, age: undefined }));
        }
    };

    const handlePanNoChange = (e) => {
        const value = e.target.value.toUpperCase();
        setPanNo(value);
        // PAN format: ABCDE1234F (5 alphabets, 4 numbers, 1 alphabet)
        if (/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(value)) {
            setErrors(prev => ({ ...prev, panNo: undefined }));
        }
    };

    const handleContactNumberChange = (e) => {
        const value = e.target.value;
        setContactNumber(value);
        if (/^\d{10}$/.test(value.replace(/\s/g, ''))) {
            setErrors(prev => ({ ...prev, contactNumber: undefined }));
        }
    };

    const handleEmailIdChange = (e) => {
        const value = e.target.value;
        setEmailId(value);
        if (/\S+@\S+\.\S+/.test(value)) {
            setErrors(prev => ({ ...prev, emailId: undefined }));
        }
    };

    const handleLoanTypeChange = (e) => {
        const value = e.target.value;
        setLoanType(value);
        if (value) {
            setErrors(prev => ({ ...prev, loanType: undefined }));
        }
    };

    const handleLoanAmountChange = (e) => {
        const value = e.target.value;
        setLoanAmount(value);
        if (value > 0) {
            setErrors(prev => ({ ...prev, loanAmount: undefined }));
        }
    };

    const handleLoanTenureRemainingChange = (e) => {
        const value = e.target.value;
        setLoanTenureRemaining(value);
        if (value) {
            setErrors(prev => ({ ...prev, loanTenureRemaining: undefined }));
        }
    };

    const handleCurrentEmiChange = (e) => {
        const value = e.target.value;
        setCurrentEmi(value);
        if (value > 0) {
            setErrors(prev => ({ ...prev, currentEmi: undefined }));
        }
    };

    const handleInterestRateChange = (e) => {
        const value = e.target.value;
        setInterestRate(value);
        if (value > 0 && value <= 50) {
            setErrors(prev => ({ ...prev, interestRate: undefined }));
        }
    };

    const handleTransferAmountChange = (e) => {
        const value = e.target.value;
        setTransferAmount(value);
        if (value > 0) {
            setErrors(prev => ({ ...prev, transferAmount: undefined }));
        }
    };

    const handleRequiredTenureChange = (e) => {
        const value = e.target.value;
        setRequiredTenure(value);
        if (value) {
            setErrors(prev => ({ ...prev, requiredTenure: undefined }));
        }
    };

    // Form validation function for the legacy form
    const validateForm = () => {
        let tempErrors = {};
        let isValid = true;

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

    // Form validation function for the new form
    const validateNewForm = () => {
        let tempErrors = {};
        let isValid = true;

        if (!fullName) {
            tempErrors.fullName = "Full Name is required";
            isValid = false;
        } else if (fullName.length < 3) {
            tempErrors.fullName = "Full Name must be at least 3 characters";
            isValid = false;
        }

        if (!age) {
            tempErrors.age = "Age is required";
            isValid = false;
        } else if (age < 18 || age > 80) {
            tempErrors.age = "Age must be between 18 and 80";
            isValid = false;
        }

        if (!panNo) {
            tempErrors.panNo = "PAN Number is required";
            isValid = false;
        } else if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(panNo)) {
            tempErrors.panNo = "PAN Number format is invalid (e.g., ABCDE1234F)";
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
            tempErrors.emailId = "Email ID is invalid";
            isValid = false;
        }

        if (!loanType) {
            tempErrors.loanType = "Loan Type is required";
            isValid = false;
        }

        if (!loanAmount) {
            tempErrors.loanAmount = "Loan Amount is required";
            isValid = false;
        } else if (loanAmount <= 0) {
            tempErrors.loanAmount = "Loan Amount must be greater than 0";
            isValid = false;
        }

        if (!loanTenureRemaining) {
            tempErrors.loanTenureRemaining = "Loan Tenure Remaining is required";
            isValid = false;
        }

        if (!currentEmi) {
            tempErrors.currentEmi = "Current EMI is required";
            isValid = false;
        } else if (currentEmi <= 0) {
            tempErrors.currentEmi = "Current EMI must be greater than 0";
            isValid = false;
        }

        if (!interestRate) {
            tempErrors.interestRate = "Interest Rate is required";
            isValid = false;
        } else if (interestRate <= 0 || interestRate > 50) {
            tempErrors.interestRate = "Interest Rate must be between 0 and 50";
            isValid = false;
        }

        if (!transferAmount) {
            tempErrors.transferAmount = "Transfer Amount is required";
            isValid = false;
        } else if (transferAmount <= 0) {
            tempErrors.transferAmount = "Transfer Amount must be greater than 0";
            isValid = false;
        }

        if (!requiredTenure) {
            tempErrors.requiredTenure = "Required Tenure is required";
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

    // Handle new form submission
    const handleNewFormSubmit = (e) => {
        e.preventDefault();
        if (validateNewForm()) {
            // Prepare data for submission
            const formData = {
                fullName,
                age,
                panNo,
                contactNumber,
                emailId,
                loanType,
                loanAmount,
                loanTenureRemaining,
                currentEmi,
                interestRate,
                transferAmount,
                requiredTenure
            };

            // Show loading state
            Swal.fire({
                title: 'Submitting...',
                html: 'Please wait while we process your request',
                allowOutsideClick: false,
                didOpen: () => {
                    Swal.showLoading();
                }
            });

            // Here you would normally send the data to your API
            // For demonstration, we'll just simulate a successful submission
            setTimeout(() => {
                Swal.fire({
                    title: 'Success!',
                    text: 'Your loan application has been submitted successfully',
                    icon: 'success',
                    timer: 2000,
                    showConfirmButton: false
                }).then(() => {
                    handleClose();
                    resetNewForm();
                });
            }, 1500);
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

    // Reset new form after submission
    const resetNewForm = () => {
        setFullName('');
        setAge('');
        setPanNo('');
        setContactNumber('');
        setEmailId('');
        setLoanType('');
        setLoanAmount('');
        setLoanTenureRemaining('');
        setCurrentEmi('');
        setInterestRate('');
        setTransferAmount('');
        setRequiredTenure('');
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
                const response = await axios.post("http://localhost:8000/mail/balancetransfer", {
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
                            <form onSubmit={handleNewFormSubmit}>
                                <Row>
                                    <Col lg={4}>
                                        <div className="loanperform">
                                            <div className="form-group">
                                                <label htmlFor="fullName">Full Name</label>
                                                <input
                                                    type="text"
                                                    className={`form-control ${errors.fullName ? 'is-invalid' : ''}`}
                                                    placeholder="Enter Your Full Name"
                                                    id="fullName"
                                                    value={fullName}
                                                    onChange={handleFullNameChange}
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
                                                    id="age"
                                                    value={age}
                                                    onChange={handleAgeChange}
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
                                                    id="panNo"
                                                    value={panNo}
                                                    onChange={handlePanNoChange}
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
                                                    id="contactNumber"
                                                    value={contactNumber}
                                                    onChange={handleContactNumberChange}
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
                                                    id="emailId"
                                                    value={emailId}
                                                    onChange={handleEmailIdChange}
                                                />
                                                {errors.emailId && <div className="invalid-feedback">{errors.emailId}</div>}
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className="loanperform">
                                            <div className="form-group">
                                                <label htmlFor="loanType">Loan Type</label>
                                                <select
                                                    name="loanType"
                                                    id="loanType"
                                                    className={`form-control ${errors.loanType ? 'is-invalid' : ''}`}
                                                    value={loanType}
                                                    onChange={handleLoanTypeChange}
                                                >
                                                    <option value="" disabled>
                                                        Select Your Loan Type
                                                    </option>
                                                    <option value="Home Loan">Home Loan</option>
                                                    <option value="Personal Loan">Personal Loan</option>
                                                    <option value="Auto Loan">Auto Loan</option>
                                                    <option value="Business Loan">Business Loan</option>
                                                    <option value="Others">Others</option>
                                                </select>
                                                {errors.loanType && <div className="invalid-feedback">{errors.loanType}</div>}
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className="loanperform">
                                            <div className="form-group">
                                                <label htmlFor="loanAmount">Loan Amount</label>
                                                <input
                                                    type="number"
                                                    className={`form-control ${errors.loanAmount ? 'is-invalid' : ''}`}
                                                    placeholder="Enter Your Loan Amount"
                                                    id="loanAmount"
                                                    value={loanAmount}
                                                    onChange={handleLoanAmountChange}
                                                />
                                                {errors.loanAmount && <div className="invalid-feedback">{errors.loanAmount}</div>}
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className="loanperform">
                                            <div className="form-group">
                                                <label htmlFor="loanTenureRemaining">Loan Tenure Remaining</label>
                                                <input
                                                    type="text"
                                                    className={`form-control ${errors.loanTenureRemaining ? 'is-invalid' : ''}`}
                                                    placeholder="Enter Your Loan Tenure Remaining"
                                                    id="loanTenureRemaining"
                                                    value={loanTenureRemaining}
                                                    onChange={handleLoanTenureRemainingChange}
                                                />
                                                {errors.loanTenureRemaining && <div className="invalid-feedback">{errors.loanTenureRemaining}</div>}
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className="loanperform">
                                            <div className="form-group">
                                                <label htmlFor="currentEmi">Current EMI</label>
                                                <input
                                                    type="text"
                                                    className={`form-control ${errors.currentEmi ? 'is-invalid' : ''}`}
                                                    placeholder="Enter Your Current EMI"
                                                    id="currentEmi"
                                                    value={currentEmi}
                                                    onChange={handleCurrentEmiChange}
                                                />
                                                {errors.currentEmi && <div className="invalid-feedback">{errors.currentEmi}</div>}
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className="loanperform">
                                            <div className="form-group">
                                                <label htmlFor="interestRate">Interest Rate with Existing Lender</label>
                                                <input
                                                    type="number"
                                                    className={`form-control ${errors.interestRate ? 'is-invalid' : ''}`}
                                                    placeholder="Enter Your Interest Rate with Existing Lender"
                                                    id="interestRate"
                                                    value={interestRate}
                                                    onChange={handleInterestRateChange}
                                                />
                                                {errors.interestRate && <div className="invalid-feedback">{errors.interestRate}</div>}
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className="loanperform">
                                            <div className="form-group">
                                                <label htmlFor="transferAmount">Loan Amount to be Transferred</label>
                                                <input
                                                    type="number"
                                                    className={`form-control ${errors.transferAmount ? 'is-invalid' : ''}`}
                                                    placeholder="Enter Your Loan Amount to be Transferred"
                                                    id="transferAmount"
                                                    value={transferAmount}
                                                    onChange={handleTransferAmountChange}
                                                />
                                                {errors.transferAmount && <div className="invalid-feedback">{errors.transferAmount}</div>}
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className="loanperform">
                                            <div className="form-group">
                                                <label htmlFor="requiredTenure">Required Tenure</label>
                                                <select
                                                    name="requiredTenure"
                                                    id="requiredTenure"
                                                    className={`form-control ${errors.requiredTenure ? 'is-invalid' : ''}`}
                                                    value={requiredTenure}
                                                    onChange={handleRequiredTenureChange}
                                                >
                                                    <option value="" disabled>
                                                        Select Your Required Tenure
                                                    </option>
                                                    <option value="5 years">5 years</option>
                                                    <option value="10 years">10 years</option>
                                                    <option value="15 years">15 years</option>
                                                    <option value="Others">Others</option>
                                                </select>
                                                {errors.requiredTenure && <div className="invalid-feedback">{errors.requiredTenure}</div>}
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
                centered backdrop="static" keyboard={false} show={show2} onHide={handleClose2}>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <LoginModal handleClose2={handleClose2} />
                </Modal.Body>
            </Modal>
        </>
    )
}

export default ApplyLoan