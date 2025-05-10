import { useState } from "react";
import { Col, Container, Form, Modal, Row, Table } from "react-bootstrap";
import Swal from "sweetalert2";
import LoginModal from "../../Common/LoginModal";
const ApplyLoan = () => {
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);
    const [employmentType, setEmploymentType] = useState("salaried");
    const handleShow = () => {
        setEmploymentType("salaried");
        if (!sessionStoragetoken) {
            setShow2(true);
            return;
        } else {
            setShow(true);
        }
    }
    const sessionStoragetoken = sessionStorage.getItem('token');
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
        emi: "", // Added emi field
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


    const calculateEMI = (principal, annualRate, years) => {
        const monthlyRate = annualRate / (12 * 100);
        const months = years * 12;
        const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
            (Math.pow(1 + monthlyRate, months) - 1);
        return emi ? emi.toFixed(2) : '';
    };



    const handleInputChange = (e) => {
        const { name, value } = e.target;

        const newFormData = {
            ...formData,
            [name]: value
        };

        // If user is entering loan amount, trigger EMI calculation
        if (name === 'loanamount') {
            const amount = parseFloat(value.replace(/[^0-9]/g, '')) || 0; // remove non-numeric
            if (!isNaN(amount)) {
                newFormData.emi = calculateEMI(amount, 9.2, 15); // Interest: 9.2%, Tenure: 15 years
            } else {
                newFormData.emi = '';
            }
        }

        setFormData(newFormData);

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
            newErrors.existingEmi = "EMI amount must be a number";
            isValid = false;
        }

        if (!formData.existingLoan.trim()) {
            newErrors.existingLoan = "Existing Loan is required";
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
        // else {
        //     const dobDate = new Date(formData.dob);
        //     const today = new Date();
        //     let age = today.getFullYear() - dobDate.getFullYear();
        //     const monthDiff = today.getMonth() - dobDate.getMonth();
        //     if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dobDate.getDate())) {
        //         age--;
        //     }
        //     if (age < 18) {
        //         newErrors.dob = "You must be at least 18 years old";
        //         isValid = false;
        //     }
        // }   

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

        const isValid = validateForm();
        if (!isValid) {
            return;
        }

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
            setSubmitting(true);

            const response = await fetch("http://localhost:8000/mail/laploans", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    employmentType,
                    ...formData
                })
            });

            const data = await response.json();
            console.log("API response:", data);

            if (data.success === true) {
                // Show success message
                await Swal.fire({
                    title: 'Success!',
                    text: 'Your loan application has been submitted successfully',
                    icon: 'success',
                    confirmButtonColor: '#DA3731',
                    timer: 2000,
                    showConfirmButton: true
                });

                // Reset form and close modal
                handleClose();
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
            } else {
                throw new Error(data.message || 'Failed to submit the form');
            }
        } catch (error) {
            console.error("Error submitting form:", error);

            // Show error message
            await Swal.fire({
                title: 'Submission Failed',
                text: error.message || 'Failed to submit form. Please try again.',
                icon: 'error',
                confirmButtonColor: '#DA3731',
                confirmButtonText: 'OK'
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
                    <Form onSubmit={handleSubmit}>

                        {employmentType === "salaried" && (
                            <div className="loanpopup persoanl-form salaried">
                                <Container>
                                    <Row>
                                        <Col lg={4}>
                                            <div className="loanperform">
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputEmail1">Full Name</label>
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
                                                    <label htmlFor="loanamount">Loan Amount</label>
                                                    <input
                                                        type="text"
                                                        name="loanamount"
                                                        placeholder="Enter your Loan Amount"
                                                        className={`form-control ${errors.loanamount ? 'is-invalid' : ''}`}
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
                                                        value={formData.emi ? `₹ ${parseFloat(formData.emi).toLocaleString('en-IN')}` : ''}
                                                        readOnly
                                                    />
                                                    {formData.emi && (
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
                                                        placeholder="Enter your Net Salary"
                                                        className={`form-control ${errors.netSalary ? 'is-invalid' : ''}`}
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
                                                    <label htmlFor="exampleInputEmail1">Company Name</label>
                                                    <input
                                                        type="text"
                                                        className={`form-control ${errors.companyname ? 'is-invalid' : ''}`}
                                                        placeholder="Enter Your Company Name"
                                                        name="companyname"
                                                        value={formData.companyname}
                                                        onChange={handleInputChange}
                                                    />
                                                    {errors.companyname && <div className="invalid-feedback">{errors.companyname}</div>}
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={4}>
                                            <div className="loanperform">
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputEmail1">Current Company Exp (In years)</label>
                                                    <select className={`form-control ${errors.currentCompanyExp ? 'is-invalid' : ''}`} name="currentCompanyExp" value={formData.currentCompanyExp} onChange={handleInputChange}>
                                                        <option value="Select Your Line of Business" disabled>
                                                            Select Your Current Company Exp (In years)
                                                        </option>
                                                        <option value="1 Year">1 Year</option>
                                                        <option value="2 Years">2 Years</option>
                                                        <option value="3 Years">3 Years</option>
                                                        <option value="4 Years">4 Years</option>
                                                        <option value="5 Years">5 Years</option>
                                                        <option value="5 years & Above">5 years & Above</option>
                                                    </select>
                                                    {errors.currentCompanyExp && <div className="invalid-feedback">{errors.currentCompanyExp}</div>}
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={4}>
                                            <div className="loanperform">
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputEmail1">Total Exp (In Years)</label>
                                                    <select className={`form-control ${errors.totalexp ? 'is-invalid' : ''}`} name="totalexp" value={formData.totalexp} onChange={handleInputChange}>
                                                        <option value="Select Your Total Experience (In years)" disabled>
                                                            Select Your Total Exp (In Years)
                                                        </option>
                                                        <option value="1 Year">1 Year</option>
                                                        <option value="2 Years">2 Years</option>
                                                        <option value="3 Years">3 Years</option>
                                                        <option value="4 Years">4 Years</option>
                                                        <option value="5 Years">5 Years</option>
                                                        <option value="5 years & Above">5 years & Above</option>
                                                    </select>
                                                    {errors.totalexp && <div className="invalid-feedback">{errors.totalexp}</div>}
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={4}>
                                            <div className="loanperform">
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputEmail1">Property Type</label>
                                                    <select className={`form-control ${errors.propertyType ? 'is-invalid' : ''}`} name="propertyType" value={formData.propertyType} onChange={handleInputChange}>
                                                        <option value="Select Your Property Type" disabled>
                                                            Select Your Property Type
                                                        </option>
                                                        <option value="Residential">Residential</option>
                                                        <option value="Commercial">Commercial </option>
                                                        <option value="Industrial Unit">Industrial Unit </option>
                                                        <option value="Land">Land</option>
                                                        <option value="Others">Others</option>
                                                    </select>
                                                    {errors.propertyType && <div className="invalid-feedback">{errors.propertyType}</div>}
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={4}>
                                            <div className="loanperform">
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputEmail1">Date of Birth</label>
                                                    <input
                                                        type="date"
                                                        className={`form-control ${errors.dob ? 'is-invalid' : ''}`}
                                                        placeholder="Enter Your Date Of Birth"
                                                        name="dob"
                                                        value={formData.dob}
                                                        onChange={handleInputChange}
                                                    />
                                                    {errors.dob && <div className="invalid-feedback">{errors.dob}</div>}
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={4}>
                                            <div className="loanperform">
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputEmail1">PAN No</label>
                                                    <input
                                                        type="text"
                                                        className={`form-control ${errors.panno ? 'is-invalid' : ''}`}
                                                        placeholder="Enter Your PAN No"
                                                        name="panno"
                                                        value={formData.panno}
                                                        onChange={handleInputChange}
                                                    />
                                                    {errors.panno && <div className="invalid-feedback">{errors.panno}</div>}
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={4}>
                                            <div className="loanperform">
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputEmail1">Email ID</label>
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
                                                    <label htmlFor="existingLoan">Existing Loan</label>
                                                    <input
                                                        type="text"
                                                        className={`form-control ${errors.existingLoan ? 'is-invalid' : ''}`}
                                                        name="existingLoan"
                                                        id="existingLoan"
                                                        placeholder="Enter your Existing Loan"
                                                        value={formData.existingLoan}
                                                        onChange={handleInputChange}
                                                    />
                                                    {errors.existingLoan && (
                                                        <div className="invalid-feedback">{errors.existingLoan}</div>
                                                    )}
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={4}>
                                            <div className="loanperform">
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputEmail1">Existing EMI (Amount)</label>
                                                    <input
                                                        type="text"
                                                        className={`form-control ${errors.existingEmi ? 'is-invalid' : ''}`}
                                                        placeholder="Enter Your Existing EMI (Amount)"
                                                        name="existingEmi"
                                                        value={formData.existingEmi}
                                                        onChange={handleInputChange}
                                                    />
                                                    {errors.existingEmi && <div className="invalid-feedback">{errors.existingEmi}</div>}
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
                        )}
                        {employmentType === "selfEmployed" && (
                            <div className="loanpopup persoanl-form self-employed">
                                <Container>
                                    <Row>
                                        <Col lg={4}>
                                            <div className="loanperform">
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputEmail1">Full Name</label>
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
                                                        value={formData.emi ? `₹ ${parseFloat(formData.emi).toLocaleString('en-IN')}` : ''}
                                                        readOnly
                                                    />
                                                    {formData.emi && (
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
                                                        className={`form-control ${errors.turnover ? 'is-invalid' : ''}`}
                                                        placeholder="Enter your Turnover"
                                                        value={formData.turnover}
                                                        onChange={handleInputChange}
                                                    />
                                                    {errors.turnover && <div className="invalid-feedback">{errors.turnover}</div>}
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={4}>
                                            <div className="loanperform">
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputEmail1">Company Name</label>
                                                    <input
                                                        type="text"
                                                        className={`form-control ${errors.companyname ? 'is-invalid' : ''}`}
                                                        placeholder="Enter Your Company Name"
                                                        name="companyname"
                                                        value={formData.companyname}
                                                        onChange={handleInputChange}
                                                    />
                                                    {errors.companyname && <div className="invalid-feedback">{errors.companyname}</div>}
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={4}>
                                            <div className="loanperform">
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputEmail1">Company Type</label>
                                                    <select className={`form-control ${errors.companyType ? 'is-invalid' : ''}`} name="companyType" value={formData.companyType} onChange={handleInputChange}>
                                                        <option value="Select Your Company Type" disabled>
                                                            Select Your Company Type
                                                        </option>
                                                        <option value="Proprietor">Proprietor</option>
                                                        <option value="Partnership">Partnership</option>
                                                        <option value="Private Limited / Limited">Private Limited / Limited</option>
                                                        <option value="LLP">LLP</option>
                                                    </select>
                                                    {errors.companyType && <div className="invalid-feedback">{errors.companyType}</div>}
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={4}>
                                            <div className="loanperform">
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputEmail1">Line of Business</label>
                                                    <select className={`form-control ${errors.lineofbusiess ? 'is-invalid' : ''}`} name="lineofbusiess" value={formData.lineofbusiess} onChange={handleInputChange}>
                                                        <option value="Select Your Line of Business" disabled>
                                                            Select Your Current Company Exp (In years)
                                                        </option>
                                                        <option value="Manufacturer">Manufacturer</option>
                                                        <option value="Retailer / Traders">Retailer / Traders</option>
                                                        <option value="Service Provider">Service Provider</option>
                                                        <option value="Professionals">Professionals</option>
                                                        <option value="Others">Others</option>
                                                    </select>
                                                    {errors.lineofbusiess && <div className="invalid-feedback">{errors.lineofbusiess}</div>}
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={4}>
                                            <div className="loanperform">
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputEmail1">Total Business Experience (In Years)</label>
                                                    <select className={`form-control ${errors.totalBusinessExp ? 'is-invalid' : ''}`} name="totalBusinessExp" value={formData.totalBusinessExp} onChange={handleInputChange}>
                                                        <option value="Select Your Total Experience (In years)" disabled>
                                                            Select Your Total Business Experience (In Years)
                                                        </option>
                                                        <option value="1 Year">1 Year</option>
                                                        <option value="2 Years">2 Years</option>
                                                        <option value="3 Years">3 Years</option>
                                                        <option value="4 Years">4 Years</option>
                                                        <option value="5 Years">5 Years</option>
                                                        <option value="5 years & Above">5 years & Above</option>
                                                    </select>
                                                    {errors.totalBusinessExp && <div className="invalid-feedback">{errors.totalBusinessExp}</div>}
                                                </div>
                                            </div>
                                        </Col>

                                        <Col lg={4}>
                                            <div className="loanperform">
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputEmail1">Property Type</label>
                                                    <select className={`form-control ${errors.propertyType ? 'is-invalid' : ''}`} name="propertyType" value={formData.propertyType} onChange={handleInputChange}>
                                                        <option value="Select Your Property Type" disabled>
                                                            Select Your Property Type
                                                        </option>
                                                        <option value="Residential">Residential</option>
                                                        <option value="Commercial">Commercial </option>
                                                        <option value="Industrial Unit">Industrial Unit </option>
                                                        <option value="Land">Land</option>
                                                        <option value="Others">Others</option>
                                                    </select>
                                                    {errors.propertyType && <div className="invalid-feedback">{errors.propertyType}</div>}
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={4}>
                                            <div className="loanperform">
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputEmail1">Email ID</label>
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
                                                    <label htmlFor="exampleInputEmail1">Existing EMI (Amount)</label>
                                                    <input
                                                        type="text"
                                                        className={`form-control ${errors.existingEmi ? 'is-invalid' : ''}`}
                                                        placeholder="Enter Your Existing EMI (Amount)"
                                                        name="existingEmi"
                                                        value={formData.existingEmi}
                                                        onChange={handleInputChange}
                                                    />
                                                    {errors.existingEmi && <div className="invalid-feedback">{errors.existingEmi}</div>}
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={4}>
                                            <div className="loanperform">
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputEmail1">PAN No</label>
                                                    <input
                                                        type="text"
                                                        className={`form-control ${errors.panno ? 'is-invalid' : ''}`}
                                                        placeholder="Enter Your PAN No"
                                                        name="panno"
                                                        value={formData.panno}
                                                        onChange={handleInputChange}
                                                    />
                                                    {errors.panno && <div className="invalid-feedback">{errors.panno}</div>}
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={4}>
                                            <div className="loanperform">
                                                <div className="form-group">
                                                    <label htmlFor="existingLoan">Existing Loan</label>
                                                    <input
                                                        type="text"
                                                        className={`form-control ${errors.existingLoan ? 'is-invalid' : ''}`}
                                                        name="existingLoan"
                                                        id="existingLoan"
                                                        placeholder="Enter your Existing Loan"
                                                        value={formData.existingLoan}
                                                        onChange={handleInputChange}
                                                    />
                                                    {errors.existingLoan && (
                                                        <div className="invalid-feedback">{errors.existingLoan}</div>
                                                    )}
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={4}>
                                            <div className="loanperform">
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputEmail1">Date of Birth</label>
                                                    <input
                                                        type="date"
                                                        className={`form-control ${errors.dob ? 'is-invalid' : ''}`}
                                                        placeholder="Enter Your Date Of Birth"
                                                        name="dob"
                                                        value={formData.dob}
                                                        onChange={handleInputChange}
                                                    />
                                                    {errors.dob && <div className="invalid-feedback">{errors.dob}</div>}
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
                        )}
                    </Form>
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
