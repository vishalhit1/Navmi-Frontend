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
    
    // Form fields
    const [fullName, setFullName] = useState('');
    const [loanAmount, setLoanAmount] = useState('');
    const [netSalary, setNetSalary] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [currentCompanyExp, setCurrentCompanyExp] = useState('');
    const [totalExp, setTotalExp] = useState('');
    const [loanDate, setLoanDate] = useState('');
    const [residenceType, setResidenceType] = useState('');
    const [panNo, setPanNo] = useState('');
    const [email, setEmail] = useState('');
    const [existingEmi, setExistingEmi] = useState('');
    const [loanPurpose, setLoanPurpose] = useState('');

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
    const handleFullNameChange = (e) => {
        const value = e.target.value;
        setFullName(value);
        if (value.length >= 3) {
            setErrors(prev => ({ ...prev, fullName: undefined }));
        }
    };

    const handleLoanAmountChange = (e) => {
        const value = e.target.value;
        setLoanAmount(value);
        if (value) {
            setErrors(prev => ({ ...prev, loanAmount: undefined }));
        }
    };

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        if (/\S+@\S+\.\S+/.test(value)) {
            setErrors(prev => ({ ...prev, email: undefined }));
        }
    };

    const handlePanNoChange = (e) => {
        const value = e.target.value.toUpperCase();
        setPanNo(value);
        // PAN validation: 5 letters, 4 numbers, 1 letter
        if (/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(value)) {
            setErrors(prev => ({ ...prev, panNo: undefined }));
        }
    };

    // Form validation function
    const validateForm = () => {
        let tempErrors = {};
        let isValid = true;

        if (!fullName) {
            tempErrors.fullName = "Full Name is required";
            isValid = false;
        } else if (fullName.length < 3) {
            tempErrors.fullName = "Full Name must be at least 3 characters";
            isValid = false;
        }

        if (!loanAmount) {
            tempErrors.loanAmount = "Loan Amount is required";
            isValid = false;
        }

        if (!netSalary) {
            tempErrors.netSalary = "Net Salary is required";
            isValid = false;
        }

        if (!companyName) {
            tempErrors.companyName = "Company Name is required";
            isValid = false;
        }

        if (!currentCompanyExp) {
            tempErrors.currentCompanyExp = "Current Company Experience is required";
            isValid = false;
        }

        if (!totalExp) {
            tempErrors.totalExp = "Total Experience is required";
            isValid = false;
        }

        if (!loanDate) {
            tempErrors.loanDate = "Loan Date is required";
            isValid = false;
        }

        if (!residenceType) {
            tempErrors.residenceType = "Residence Type is required";
            isValid = false;
        }

        if (!panNo) {
            tempErrors.panNo = "PAN Number is required";
            isValid = false;
        } else if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(panNo)) {
            tempErrors.panNo = "Invalid PAN format";
            isValid = false;
        }

        if (!email) {
            tempErrors.email = "Email is required";
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            tempErrors.email = "Email address is invalid";
            isValid = false;
        }

        if (!existingEmi) {
            tempErrors.existingEmi = "Existing EMI is required";
            isValid = false;
        }

        if (!loanPurpose) {
            tempErrors.loanPurpose = "Loan Purpose is required";
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
        setLoanAmount('');
        setNetSalary('');
        setCompanyName('');
        setCurrentCompanyExp('');
        setTotalExp('');
        setLoanDate('');
        setResidenceType('');
        setPanNo('');
        setEmail('');
        setExistingEmi('');
        setLoanPurpose('');
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
                html: 'Please wait while we process your application',
                allowOutsideClick: false,
                didOpen: () => {
                    Swal.showLoading();
                }
            });

            try {
                const response = await axios.post("http://localhost:8000/loan/apply", {
                    fullName,
                    loanAmount,
                    netSalary,
                    companyName,
                    currentCompanyExp,
                    totalExp,
                    loanDate,
                    residenceType,
                    panNo,
                    email,
                    existingEmi,
                    loanPurpose
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
    }, [shouldSubmit, fullName, loanAmount, netSalary, companyName, currentCompanyExp, totalExp, loanDate, residenceType, panNo, email, existingEmi, loanPurpose]);

    return (
        <>
            <button onClick={handleShow} className="applynow blink">Apply Now</button>

            <Modal show={show} onHide={handleClose} centered backdrop="static"
                keyboard={false} size="xl">
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
                                color:'#283E87',
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
                                                id="fullName"
                                                className={`form-control ${errors.fullName ? 'is-invalid' : ''}`}
                                                placeholder="Enter Your Full Name"
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
                                            <label htmlFor="loanAmount">Loan Amount</label>
                                            <input
                                                type="text"
                                                id="loanAmount"
                                                className={`form-control ${errors.loanAmount ? 'is-invalid' : ''}`}
                                                placeholder="Enter Your Loan Amount"
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
                                            <label htmlFor="netSalary">Net Salary</label>
                                            <select 
                                                id="netSalary"
                                                className={`form-control ${errors.netSalary ? 'is-invalid' : ''}`}
                                                value={netSalary}
                                                onChange={(e) => setNetSalary(e.target.value)}
                                            >
                                                <option value="" disabled>
                                                    Select Your Net Salary
                                                </option>
                                                <option value="Up to ₹50k">Up to ₹50k</option>
                                                <option value="₹50k - ₹1.2 Lacs">₹50k - ₹1.2 Lacs</option>
                                                <option value="₹1.2 – ₹1.8 Lacs">₹1.2 – ₹1.8 Lacs</option>
                                                <option value="₹1.8 – ₹2.2 Lacs">₹1.8 – ₹2.2 Lacs</option>
                                                <option value="₹2.4 – ₹3 Lacs">₹2.4 – ₹3 Lacs</option>
                                                <option value="₹3 - ₹4 Lacs">₹3 - ₹4 Lacs</option>
                                                <option value="₹4 - ₹5 Lacs">₹4 - ₹5 Lacs</option>
                                                <option value="₹5 - ₹10 Lacs">₹5 - ₹10 Lacs</option>
                                                <option value="₹10 Lacs +">₹10 Lacs +</option>
                                            </select>
                                            {errors.netSalary && <div className="invalid-feedback">{errors.netSalary}</div>}
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="loanperform">
                                        <div className="form-group">
                                            <label htmlFor="companyName">Company Name</label>
                                            <input
                                                type="text"
                                                id="companyName"
                                                className={`form-control ${errors.companyName ? 'is-invalid' : ''}`}
                                                placeholder="Enter Your Company Name"
                                                value={companyName}
                                                onChange={(e) => setCompanyName(e.target.value)}
                                            />
                                            {errors.companyName && <div className="invalid-feedback">{errors.companyName}</div>}
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="loanperform">
                                        <div className="form-group">
                                            <label htmlFor="currentCompanyExp">Current Company Exp (In years)</label>
                                            <select 
                                                id="currentCompanyExp"
                                                className={`form-control ${errors.currentCompanyExp ? 'is-invalid' : ''}`}
                                                value={currentCompanyExp}
                                                onChange={(e) => setCurrentCompanyExp(e.target.value)}
                                            >
                                                <option value="" disabled>
                                                    Select Your Current Company Exp (In years)
                                                </option>
                                                <option value="1 to 5yrs">1 to 5yrs</option>
                                                <option value="5 to 10yrs">5 to 10yrs</option>
                                                <option value="10+ yrs">10+ yrs</option>
                                            </select>
                                            {errors.currentCompanyExp && <div className="invalid-feedback">{errors.currentCompanyExp}</div>}
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="loanperform">
                                        <div className="form-group">
                                            <label htmlFor="totalExp">Total Experience (In years)</label>
                                            <select 
                                                id="totalExp"
                                                className={`form-control ${errors.totalExp ? 'is-invalid' : ''}`}
                                                value={totalExp}
                                                onChange={(e) => setTotalExp(e.target.value)}
                                            >
                                                <option value="" disabled>
                                                    Select Your Total Experience (In years)
                                                </option>
                                                <option value="1 to 5yrs">1 to 5yrs</option>
                                                <option value="5 to 10yrs">5 to 10yrs</option>
                                                <option value="10+ yrs">10+ yrs</option>
                                            </select>
                                            {errors.totalExp && <div className="invalid-feedback">{errors.totalExp}</div>}
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="loanperform">
                                        <div className="form-group">
                                            <label htmlFor="loanDate">
                                                Date of personal loan
                                            </label>
                                            <input
                                                type="date"
                                                id="loanDate"
                                                className={`form-control ${errors.loanDate ? 'is-invalid' : ''}`}
                                                value={loanDate}
                                                onChange={(e) => setLoanDate(e.target.value)}
                                            />
                                            {errors.loanDate && <div className="invalid-feedback">{errors.loanDate}</div>}
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="loanperform">
                                        <div className="form-group">
                                            <label htmlFor="residenceType">Select Residence Type</label>
                                            <select 
                                                id="residenceType"
                                                className={`form-control ${errors.residenceType ? 'is-invalid' : ''}`}
                                                value={residenceType}
                                                onChange={(e) => setResidenceType(e.target.value)}
                                            >
                                                <option value="" disabled>
                                                    Select Your Residence Type
                                                </option>
                                                <option value="Owned by Self / Spouse">Owned by Self / Spouse</option>
                                                <option value="Owned by Parents / Siblings">Owned by Parents / Siblings</option>
                                                <option value="Rented with Family / Stay alone">Rented with Family / Stay alone</option>
                                                <option value="Paying Guest / Hostel">Paying Guest / Hostel</option>
                                                <option value="Company provided">Company provided</option>
                                            </select>
                                            {errors.residenceType && <div className="invalid-feedback">{errors.residenceType}</div>}
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
                                                onChange={handlePanNoChange}
                                            />
                                            {errors.panNo && <div className="invalid-feedback">{errors.panNo}</div>}
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="loanperform">
                                        <div className="form-group">
                                            <label htmlFor="email">Email ID</label>
                                            <input
                                                type="email"
                                                id="email"
                                                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                                placeholder="Enter Your Email Address"
                                                value={email}
                                                onChange={handleEmailChange}
                                            />
                                            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="loanperform">
                                        <div className="form-group">
                                            <label htmlFor="existingEmi">Existing EMI</label>
                                            <input
                                                type="number"
                                                id="existingEmi"
                                                className={`form-control ${errors.existingEmi ? 'is-invalid' : ''}`}
                                                placeholder="Enter Your Existing EMI ( Amount )"
                                                value={existingEmi}
                                                onChange={(e) => setExistingEmi(e.target.value)}
                                            />
                                            {errors.existingEmi && <div className="invalid-feedback">{errors.existingEmi}</div>}
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={4}>
                                    <div className="loanperform">
                                        <div className="form-group">
                                            <label htmlFor="loanPurpose">Purpose of Loan</label>
                                            <select 
                                                id="loanPurpose"
                                                className={`form-control ${errors.loanPurpose ? 'is-invalid' : ''}`}
                                                value={loanPurpose}
                                                onChange={(e) => setLoanPurpose(e.target.value)}
                                            >
                                                <option value="" disabled>
                                                    Select Your Purpose of Loan
                                                </option>
                                                <option value="Home buying/renovation">Home buying/renovation</option>
                                                <option value="Payback existing loans/credit card bill">Payback existing loans/credit card bill</option>
                                                <option value="Medical Expenses">Medical Expenses</option>
                                                <option value="Education Expenses">Education Expenses</option>
                                                <option value="Wedding/related expenses">Wedding/related expenses</option>
                                                <option value="Travel/Vacation expense">Travel/Vacation expense</option>
                                                <option value="Purpose not listed">Purpose not listed</option>
                                            </select>
                                            {errors.loanPurpose && <div className="invalid-feedback">{errors.loanPurpose}</div>}
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
                centered backdrop="static"
                keyboard={false} show={show2} onHide={handleClose2}>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                  <LoginModal handleClose2={handleClose2}/>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default ApplyLoan