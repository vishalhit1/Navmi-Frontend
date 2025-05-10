import { useState, useEffect } from "react";
import { Col, Container, Form, Modal, Row } from "react-bootstrap";
import Swal from "sweetalert2";
import LoginModal from "../../Common/LoginModal";

const ApplyLoan = () => {
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const [emi, setEmi] = useState('');
    const [employmentType, setEmploymentType] = useState("salaried");

    const sessionStoragetoken = sessionStorage.getItem('token');

    const handleShow = () => {
        setEmploymentType("salaried");
        if (!sessionStoragetoken) {
            setShow2(true);
            return;
        } else {
            setShow(true);
        }
    }

    const [formData, setFormData] = useState({
        // Common fields
        fullName: "",
        loanamount: "",
        companyname: "",
        emailId: "",
        panno: "",
        existingLoan: "",
        existingEmi: "",
        propertyType: "",
        dob: "",

        // Salaried specific fields
        netSalary: "",
        currentCompanyExp: "",
        totalexp: "",

        // Self-employed specific fields
        turnover: "",
        companyType: "",
        lineofbusiess: "",
        totalBusinessExp: "",
    });

    useEffect(() => {
        const principal = parseFloat(formData.loanamount);
        const annualInterestRate = 8.10; // 8.10% per annum
        const tenureInMonths = 20 * 12; // 20 years in months

        if (!isNaN(principal) && principal > 0) {
            const monthlyInterestRate = annualInterestRate / 12 / 100;
            const emiCalculated = (principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, tenureInMonths)) /
                (Math.pow(1 + monthlyInterestRate, tenureInMonths) - 1);
            setEmi(emiCalculated.toFixed(2));
        } else {
            setEmi('');
        }
    }, [formData.loanamount]);


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

        // Clear error for this field when user starts typing
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: ""
            });
        }
    };

    const [errors, setErrors] = useState({});
    const [submitting, setSubmitting] = useState(false);

    const validateForm = () => {
        const newErrors = {};
        let isValid = true;

        // Common validations
        if (!formData.fullName.trim()) {
            newErrors.fullName = "Full name is required";
            isValid = false;
        } else if (formData.fullName.length < 3) {
            newErrors.fullName = "Name must be at least 3 characters";
            isValid = false;
        }

        if (!formData.loanamount) {
            newErrors.loanamount = "Loan amount is required";
            isValid = false;
        }

        if (!formData.companyname.trim()) {
            newErrors.companyname = "Company name is required";
            isValid = false;
        }

        if (!formData.emailId.trim()) {
            newErrors.emailId = "Email is required";
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.emailId)) {
            newErrors.emailId = "Email address is invalid";
            isValid = false;
        }

        if (!formData.panno.trim()) {
            newErrors.panno = "PAN number is required";
            isValid = false;
        } else if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(formData.panno)) {
            newErrors.panno = "Invalid PAN format (e.g., ABCDE1234F)";
            isValid = false;
        }

        if (!formData.existingEmi.trim()) {
            newErrors.existingEmi = "EMI amount is required";
            isValid = false;
        }

        if (!formData.existingLoan.trim()) {
            newErrors.existingLoan = "Existing loan is required";
            isValid = false;
        }

        if (!formData.propertyType.trim()) {
            newErrors.propertyType = "Property type is required";
            isValid = false;
        }
        if (!formData.dob) {
            newErrors.dob = "Date of birth is required";
            isValid = false;
        }

        // Employment type specific validations
        if (employmentType === "salaried") {
            if (!formData.netSalary) {
                newErrors.netSalary = "Net salary is required";
                isValid = false;
            }

            if (!formData.currentCompanyExp) {
                newErrors.currentCompanyExp = "Current company experience is required";
                isValid = false;
            }

            if (!formData.totalexp) {
                newErrors.totalexp = "Total experience is required";
                isValid = false;
            }
        } else {
            if (!formData.turnover) {
                newErrors.turnover = "Turnover is required";
                isValid = false;
            }

            if (!formData.companyType) {
                newErrors.companyType = "Company type is required";
                isValid = false;
            }

            if (!formData.lineofbusiess) {
                newErrors.lineofbusiess = "Line of business is required";
                isValid = false;
            }

            if (!formData.totalBusinessExp) {
                newErrors.totalBusinessExp = "Business experience is required";
                isValid = false;
            }
        }

        setErrors(newErrors);

        if (!isValid) {
            // Show validation errors with SweetAlert
            const errorList = Object.values(newErrors).map(err => `• ${err}`).join('<br>');
            Swal.fire({
                icon: 'warning',
                title: 'Validation Error',
                text: 'Please check all fields and try again.',
                confirmButtonColor: '#DA3731'
            });
        }

        return isValid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("employmentType", employmentType);
        console.log("formData", formData);
        console.log("errors", errors);

        const isValid = validateForm();

        if (!isValid) {
            return;
        }

        try {
            setSubmitting(true);

            // Here you would typically submit the data to your backend
            console.log("Form submitted with data:", {
                employmentType,
                ...formData
            });

            await fetch("http://localhost:8000/mail/homeloans", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    employmentType,
                    ...formData
                })
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log("API response:", data);
                    if (data.success === true) {
                        {
                            setSubmitting(false);
                            alert("Form submitted successfully!");
                            handleClose();
                            // Reset form data
                            setFormData({
                                fullName: "",
                                loanamount: "",
                                companyname: "",
                                emailId: "",
                                panno: "",
                                existingLoan: "",
                                existingEmi: "",
                                propertyType: "",
                                dob: "",
                                netSalary: "",
                                currentCompanyExp: "",
                                totalexp: "",
                                turnover: "",
                                companyType: "",
                                lineofbusiess: "",
                                totalBusinessExp: "",
                            });
                        }
                    } else {
                        setSubmitting(false);
                        Swal.fire({
                            icon: 'error',
                            title: 'Error',
                            text: 'Failed to submit the form. Please try again.',
                            confirmButtonColor: '#DA3731'
                        });
                    }
                })
                .catch((error) => {
                    console.error("Error submitting form:", error);
                })
        } catch (error) {
            console.error("Error:", error);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'An unexpected error occurred. Please try again later.',
                confirmButtonColor: '#DA3731'
            });
        } finally {
            setSubmitting(false);
        }
    };

    const handleClose = () => {
        setShow(false);
        // Reset form data and errors when modal is closed
        setErrors({});
    };

    const handleEmploymentTypeChange = (type) => {
        setFormData({
            fullName: "",
            loanamount: "",
            companyname: "",
            emailId: "",
            panno: "",
            existingLoan: "",
            existingEmi: "",
            propertyType: "",
            dob: "",
            netSalary: "",
            currentCompanyExp: "",
            totalexp: "",
            turnover: "",
            companyType: "",
            lineofbusiess: "",
            totalBusinessExp: "",
        });
        setErrors({});
        setEmploymentType(type);
    };
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
                                marginBottom: "30px",
                                color: '#283E87',
                            }}
                        >
                            Apply Now
                        </h3>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="salareeieed mb-5">
                        <Form.Check
                            type="radio"
                            name="employmentType"
                            checked={employmentType === "salaried"}
                            onChange={() => handleEmploymentTypeChange("salaried")}
                            inline
                        />{" "}
                        <label>Salaried</label>
                        <Form.Check
                            type="radio"
                            name="employmentType"
                            checked={employmentType === "selfEmployed"}
                            onChange={() => handleEmploymentTypeChange("selfEmployed")}
                            inline
                        />{" "}
                        <label>Self Employed</label>
                    </div>
                    {employmentType === "salaried" && (
                        <div className="loanpopup persoanl-form salaried">
                            <Container>
                                <Row>
                                    <Col lg={4}>
                                        <div className="loanperform">
                                            <div className="form-group">
                                                <label htmlFor="fullName">Full Name</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter Your Full Name"
                                                    name="fullName"
                                                    value={formData.fullName}
                                                    onChange={handleInputChange}
                                                />
                                                {errors.fullName && <div className="text-danger">{errors.fullName}</div>}
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className="loanperform">
                                            <div className="form-group">
                                                <label htmlFor="loanamount">Loan Amount</label>
                                                <input
                                                    type="text"
                                                    name="loanamount"
                                                    className={`form-control ${errors.loanamount ? 'is-invalid' : ''}`}
                                                    placeholder="Enter your Loan Amount"
                                                    value={formData.loanamount}
                                                    onChange={handleInputChange}
                                                />
                                                {errors.loanamount && <div className="invalid-feedback">{errors.loanamount}</div>}
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className="loanperform">
                                            <div className="form-group">
                                                <label>Estimated EMI</label>
                                                <input
                                                    type="text"
                                                    placeholder="Estimated EMI"
                                                    className="form-control"
                                                    value={emi ? `₹ ${emi}` : ''}
                                                    readOnly
                                                />
                                                {emi && (
                                                    <p className="emi-details-abcd">
                                                        *For details or any changes use EMI calculator
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className="loanperform">
                                            <div className="form-group">
                                                <label htmlFor="netSalary">Net Salary</label>
                                                <input
                                                    type="text"
                                                    name="netSalary"
                                                    className={`form-control ${errors.netSalary ? 'is-invalid' : ''}`}
                                                    placeholder="Enter your Net Salary"
                                                    value={formData.netSalary}
                                                    onChange={handleInputChange}
                                                />
                                                {errors.netSalary && <div className="invalid-feedback">{errors.netSalary}</div>}
                                            </div>
                                        </div>
                                    </Col>

                                    <Col lg={4}>
                                        <div className="loanperform">
                                            <div className="form-group">
                                                <label htmlFor="companyname">Company Name</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter Your Company Name"
                                                    name="companyname"
                                                    value={formData.companyname}
                                                    onChange={handleInputChange}
                                                />
                                                {errors.companyname && <div className="text-danger">{errors.companyname}</div>}
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className="loanperform">
                                            <div className="form-group">
                                                <label htmlFor="currentCompanyExp">Current Company Exp (In years)</label>
                                                <select
                                                    name="currentCompanyExp"
                                                    className="form-control"
                                                    value={formData.currentCompanyExp}
                                                    onChange={handleInputChange}
                                                >
                                                    <option value="" disabled>
                                                        Select Your Current Company Exp
                                                    </option>
                                                    <option value="1 Year">1 Year</option>
                                                    <option value="2 Years">2 Years</option>
                                                    <option value="3 Years">3 Years</option>
                                                    <option value="4 Years">4 Years</option>
                                                    <option value="5 Years">5 Years</option>
                                                    <option value="5 years & Above">5 years & Above</option>
                                                </select>
                                                {errors.currentCompanyExp && <div className="text-danger">{errors.currentCompanyExp}</div>}
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className="loanperform">
                                            <div className="form-group">
                                                <label htmlFor="totalexp">Total Exp (In Years)</label>
                                                <select
                                                    name="totalexp"
                                                    className="form-control"
                                                    value={formData.totalexp}
                                                    onChange={handleInputChange}
                                                >
                                                    <option value="" disabled>
                                                        Select Your Total Exp
                                                    </option>
                                                    <option value="1 Year">1 Year</option>
                                                    <option value="2 Years">2 Years</option>
                                                    <option value="3 Years">3 Years</option>
                                                    <option value="4 Years">4 Years</option>
                                                    <option value="5 Years">5 Years</option>
                                                    <option value="5 years & Above">5 years & Above</option>
                                                </select>
                                                {errors.totalexp && <div className="text-danger">{errors.totalexp}</div>}
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className="loanperform">
                                            <div className="form-group">
                                                <label htmlFor="dob">Date of Birth</label>
                                                <input
                                                    type="date"
                                                    className="form-control"
                                                    placeholder="Enter Your Date of Birth"
                                                    name="dob"
                                                    value={formData.dob}
                                                    onChange={handleInputChange}
                                                />
                                                {errors.dob && <div className="text-danger">{errors.dob}</div>}
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className="loanperform">
                                            <div className="form-group">
                                                <label htmlFor="propertyType">Property Type</label>
                                                <select
                                                    name="propertyType"
                                                    className="form-control"
                                                    value={formData.propertyType}
                                                    onChange={handleInputChange}
                                                >
                                                    <option value="" disabled>
                                                        Select Your Property Type
                                                    </option>
                                                    <option value="Builder Purchase">Builder Purchase</option>
                                                    <option value="Under Construction">Under Construction</option>
                                                    <option value="Resale">Resale</option>
                                                </select>
                                                {errors.propertyType && <div className="text-danger">{errors.propertyType}</div>}
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className="loanperform">
                                            <div className="form-group">
                                                <label htmlFor="panno">PAN No</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter Your PAN No"
                                                    name="panno"
                                                    value={formData.panno}
                                                    onChange={handleInputChange}
                                                />
                                                {errors.panno && <div className="text-danger">{errors.panno}</div>}
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className="loanperform">
                                            <div className="form-group">
                                                <label htmlFor="emailId">Email ID</label>
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    placeholder="Enter Your Email Address"
                                                    name="emailId"
                                                    value={formData.emailId}
                                                    onChange={handleInputChange}
                                                />
                                                {errors.emailId && <div className="text-danger">{errors.emailId}</div>}
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className="loanperform">
                                            <div className="form-group">
                                                <label htmlFor="existingLoan">Existing Loan</label>
                                                <input
                                                    type="text"
                                                    name="existingLoan"
                                                    className="form-control"
                                                    value={formData.existingLoan}
                                                    onChange={handleInputChange}
                                                    placeholder="Enter Your Existing Loan"
                                                />
                                                {errors.existingLoan && <div className="text-danger">{errors.existingLoan}</div>}
                                            </div>
                                        </div>
                                    </Col>

                                    <Col lg={4}>
                                        <div className="loanperform">
                                            <div className="form-group">
                                                <label htmlFor="existingEmi">Existing EMI (Amount)</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter Your Existing EMI (Amount)"
                                                    name="existingEmi"
                                                    value={formData.existingEmi}
                                                    onChange={handleInputChange}
                                                />
                                                {errors.existingEmi && <div className="text-danger">{errors.existingEmi}</div>}
                                            </div>
                                        </div>
                                    </Col>
                                    <div
                                        className="submitbuttonloanform"
                                        style={{ textAlign: "center" }}
                                    >
                                        <button className="submit12" onClick={handleSubmit} disabled={submitting}>
                                            {submitting ? "Submitting..." : "Submit"}
                                        </button>
                                    </div>
                                </Row>
                            </Container>
                        </div>
                    )}
                    {employmentType === "selfEmployed" && (
                        <div className="loanpopup persoanl-form self-employed">
                            <Container>
                                <Row>
                                    <Col lg={4}>
                                        <div className="loanperform">
                                            <div className="form-group">
                                                <label htmlFor="fullName">Full Name</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter Your Full Name"
                                                    name="fullName"
                                                    value={formData.fullName}
                                                    onChange={handleInputChange}
                                                />
                                                {errors.fullName && <div className="text-danger">{errors.fullName}</div>}
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className="loanperform">
                                            <div className="form-group">
                                                <label htmlFor="loanamount">Loan Amount</label>
                                                <input
                                                    type="text"
                                                    name="loanamount"
                                                    className="form-control"
                                                    placeholder="Enter Your Loan Amount"
                                                    value={formData.loanamount}
                                                    onChange={handleInputChange}
                                                />
                                                {errors.loanamount && <div className="text-danger">{errors.loanamount}</div>}
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className="loanperform">
                                            <div className="form-group">
                                                <label>Estimated EMI</label>
                                                <input
                                                    type="text"
                                                    placeholder="Estimated EMI"
                                                    className="form-control"
                                                    value={emi ? `₹ ${emi}` : ''}
                                                    readOnly
                                                />
                                                {emi && (
                                                    <p className="emi-details-abcd">
                                                        *For details or any changes use EMI calculator
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className="loanperform">
                                            <div className="form-group">
                                                <label htmlFor="turnover">Turn Over</label>
                                                <input
                                                    type="text"
                                                    name="turnover"
                                                    className="form-control"
                                                    placeholder="Enter Your Turn Over"
                                                    value={formData.turnover}
                                                    onChange={handleInputChange}
                                                />
                                                {errors.turnover && <div className="text-danger">{errors.turnover}</div>}
                                            </div>
                                        </div>
                                    </Col>

                                    <Col lg={4}>
                                        <div className="loanperform">
                                            <div className="form-group">
                                                <label htmlFor="companyname">Company Name</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter Your Company Name"
                                                    name="companyname"
                                                    value={formData.companyname}
                                                    onChange={handleInputChange}
                                                />
                                                {errors.companyname && <div className="text-danger">{errors.companyname}</div>}
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className="loanperform">
                                            <div className="form-group">
                                                <label htmlFor="companyType">Company Type</label>
                                                <select
                                                    name="companyType"
                                                    className="form-control"
                                                    value={formData.companyType}
                                                    onChange={handleInputChange}
                                                >
                                                    <option value="" disabled>
                                                        Select Your Company Type
                                                    </option>
                                                    <option value="Proprietor">Proprietor</option>
                                                    <option value="Partnership">Partnership</option>
                                                    <option value="Private Limited / Limited">Private Limited / Limited</option>
                                                    <option value="LLP">LLP</option>
                                                </select>
                                                {errors.companyType && <div className="text-danger">{errors.companyType}</div>}
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className="loanperform">
                                            <div className="form-group">
                                                <label htmlFor="lineofbusiess">Line of Business</label>
                                                <select
                                                    name="lineofbusiess"
                                                    className="form-control"
                                                    value={formData.lineofbusiess}
                                                    onChange={handleInputChange}
                                                >
                                                    <option value="" disabled>
                                                        Select Your Line of Business
                                                    </option>
                                                    <option value="Manufacturer">Manufacturer</option>
                                                    <option value="Retailer / Traders">Retailer / Traders</option>
                                                    <option value="Service Provider">Service Provider</option>
                                                    <option value="Professionals">Professionals</option>
                                                    <option value="Others">Others</option>
                                                </select>
                                                {errors.lineofbusiess && <div className="text-danger">{errors.lineofbusiess}</div>}
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className="loanperform">
                                            <div className="form-group">
                                                <label htmlFor="totalBusinessExp">Total Business Experience (In Years)</label>
                                                <select
                                                    name="totalBusinessExp"
                                                    className="form-control"
                                                    value={formData.totalBusinessExp}
                                                    onChange={handleInputChange}
                                                >
                                                    <option value="" disabled>
                                                        Select Your Total Business Exp
                                                    </option>
                                                    <option value="1 Year">1 Year</option>
                                                    <option value="2 Years">2 Years</option>
                                                    <option value="3 Years">3 Years</option>
                                                    <option value="4 Years">4 Years</option>
                                                    <option value="5 Years">5 Years</option>
                                                    <option value="5 years & Above">5 years & Above</option>
                                                </select>
                                                {errors.totalBusinessExp && <div className="text-danger">{errors.totalBusinessExp}</div>}
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className="loanperform">
                                            <div className="form-group">
                                                <label htmlFor="propertyType">Property Type</label>
                                                <select
                                                    name="propertyType"
                                                    className="form-control"
                                                    value={formData.propertyType}
                                                    onChange={handleInputChange}
                                                >
                                                    <option value="" disabled>
                                                        Select Your Property Type
                                                    </option>
                                                    <option value="Builder Purchase">Builder Purchase</option>
                                                    <option value="Under Construction">Under Construction</option>
                                                    <option value="Resale">Resale</option>
                                                </select>
                                                {errors.propertyType && <div className="text-danger">{errors.propertyType}</div>}
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className="loanperform">
                                            <div className="form-group">
                                                <label htmlFor="panno">PAN No</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter Your PAN No"
                                                    name="panno"
                                                    value={formData.panno}
                                                    onChange={handleInputChange}
                                                />
                                                {errors.panno && <div className="text-danger">{errors.panno}</div>}
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className="loanperform">
                                            <div className="form-group">
                                                <label htmlFor="emailId">Email ID</label>
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    placeholder="Enter Your Email Address"
                                                    name="emailId"
                                                    value={formData.emailId}
                                                    onChange={handleInputChange}
                                                />
                                                {errors.emailId && <div className="text-danger">{errors.emailId}</div>}
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className="loanperform">
                                            <div className="form-group">
                                                <label htmlFor="existingLoan">Existing Loan</label>
                                                <input
                                                    type="text"
                                                    name="existingLoan"
                                                    className="form-control"
                                                    value={formData.existingLoan}
                                                    onChange={handleInputChange}
                                                    placeholder="Enter Your Existing Loan"
                                                />
                                                {errors.existingLoan && <div className="text-danger">{errors.existingLoan}</div>}
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className="loanperform">
                                            <div className="form-group">
                                                <label htmlFor="existingEmi">Existing EMI (Amount)</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter Your Existing EMI (Amount)"
                                                    name="existingEmi"
                                                    value={formData.existingEmi}
                                                    onChange={handleInputChange}
                                                />
                                                {errors.existingEmi && <div className="text-danger">{errors.existingEmi}</div>}
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className="loanperform">
                                            <div className="form-group">
                                                <label htmlFor="dob">Date of Birth</label>
                                                <input
                                                    type="date"
                                                    className="form-control"
                                                    placeholder="Enter Your Date of Birth"
                                                    name="dob"
                                                    value={formData.dob}
                                                    onChange={handleInputChange}
                                                />
                                                {errors.dob && <div className="text-danger">{errors.dob}</div>}
                                            </div>
                                        </div>
                                    </Col>
                                    <div
                                        className="submitbuttonloanform"
                                        style={{ textAlign: "center" }}
                                    >
                                        <button className="submit12" onClick={handleSubmit} disabled={submitting}>
                                            {submitting ? "Submitting..." : "Submit"}
                                        </button>
                                    </div>
                                </Row>
                            </Container>
                        </div>
                    )}
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
