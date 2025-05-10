import { useState } from "react";
import { Col, Container, Form, Modal, Row, Table } from "react-bootstrap";
import Swal from "sweetalert2";
import LoginModal from "../../Common/LoginModal";
const ApplyLoan = () => {
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const [employmentType, setEmploymentType] = useState("salaried");


    const [formData, setFormData] = useState({
        // Common fields
        fullName: "",
        loanamount: "",
        companyname: "",
        emailId: "",
        panno: "",
        existingLoan: "",
        existingEmi: "",

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
            newErrors.existingEmi = "EMI amount must be a number";
            isValid = false;
        }

        if (!formData.existingLoan.trim()) {
            newErrors.existingLoan = "Existing loan is required";
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
        console.log("errors", errors.existingEmi);
        console.log("errors", errors.existingLoan);

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

            await fetch("http://localhost:8000/mail/carloans", {
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

    // Function to handle successful login
    const handleLoginSuccess = () => {
        handleClose2(); // Close login modal
        setShow(true);  // Open the insurance modal
    }

    const handleEmploymentTypeChange = (type) => {
        setFormData({
            fullName: "",
            loanamount: "",
            companyname: "",
            emailId: "",
            panno: "",
            existingLoan: "",
            existingEmi: "",
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
                                                        className={`form-control ${errors.loanamount ? 'is-invalid' : ''}`}
                                                        name="loanamount"
                                                        placeholder="Enter Loan Amount"
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
                                                    <label htmlFor="netSalary">Net Salary</label>
                                                    <input
                                                        type="text"
                                                        className={`form-control ${errors.netSalary ? 'is-invalid' : ''}`}
                                                        name="netSalary"
                                                        placeholder="Enter Net Salary"
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
                                                    <select name="currentCompanyExp" className={`form-control ${errors.currentCompanyExp ? 'is-invalid' : ''}`} value={formData.currentCompanyExp} onChange={handleInputChange}>
                                                        <option value="Select Your Current Company Exp (In years)" disabled>
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
                                                    <select name="totalexp" className={`form-control ${errors.totalexp ? 'is-invalid' : ''}`} value={formData.totalexp} onChange={handleInputChange}>
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
                                                    <label htmlFor="exampleInputEmail1">Existing Loan</label>
                                                    <input
                                                        type="text"
                                                        name="existingLoan"
                                                        className={`form-control ${errors.existingLoan ? 'is-invalid' : ''}`}
                                                        value={formData.existingLoan}
                                                        onChange={handleInputChange}
                                                        placeholder="Enter Your Existing Loan"
                                                    />
                                                    {errors.existingLoan && <div className="invalid-feedback">{errors.existingLoan}</div>}
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
                                            disabled={submitting}
                                        >
                                            <button className="submit12">
                                                {submitting ? 'Submitting...' : 'Submit'}
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
                                                        placeholder="Enter Your Loan Amount"
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
                                                    <label htmlFor="turnover">Turn Over</label>
                                                    <input
                                                        type="text"
                                                        name="turnover"
                                                        className={`form-control ${errors.turnover ? 'is-invalid' : ''}`}
                                                        placeholder="Enter Your Turn Over"
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
                                                    <select name="companyType" className={`form-control ${errors.companyType ? 'is-invalid' : ''}`} value={formData.companyType} onChange={handleInputChange}>
                                                        <option value="Select Your Company Type" disabled>
                                                            Select Your Company Type
                                                        </option>
                                                        <option value="1">Proprietor</option>
                                                        <option value="1">Partnership</option>
                                                        <option value="1">Private Limited / Limited</option>
                                                        <option value="1">LLP</option>
                                                    </select>
                                                    {errors.companyType && <div className="invalid-feedback">{errors.companyType}</div>}
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={4}>
                                            <div className="loanperform">
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputEmail1">Line of Business</label>
                                                    <select name="lineofbusiess" className={`form-control ${errors.lineofbusiess ? 'is-invalid' : ''}`} value={formData.lineofbusiess} onChange={handleInputChange}>
                                                        <option value="Select Your Line of Business" disabled>
                                                            Select Your Line of Business
                                                        </option>
                                                        <option value="1">Manufacturer</option>
                                                        <option value="1">Retailer / Traders</option>
                                                        <option value="1">Service Provider</option>
                                                        <option value="1">Professionals</option>
                                                        <option value="1">Others</option>
                                                    </select>
                                                    {errors.lineofbusiess && <div className="invalid-feedback">{errors.lineofbusiess}</div>}
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
                                                    <label htmlFor="exampleInputEmail1">Total Business Experience (In Years)</label>
                                                    <select name="totalBusinessExp" className={`form-control ${errors.totalBusinessExp ? 'is-invalid' : ''}`} value={formData.totalBusinessExp} onChange={handleInputChange}>
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
                                                    <label htmlFor="exampleInputEmail1">Existing Loan</label>
                                                    <input
                                                        type="text"
                                                        name="existingLoan"
                                                        className={`form-control ${errors.existingLoan ? 'is-invalid' : ''}`}
                                                        value={formData.existingLoan}
                                                        onChange={handleInputChange}
                                                        placeholder="Enter Your Existing Loan"
                                                    />
                                                    {errors.existingLoan && <div className="invalid-feedback">{errors.existingLoan}</div>}
                                                </div>
                                            </div>
                                        </Col>

                                        <div
                                            className="submitbuttonloanform"
                                            style={{ textAlign: "center" }}
                                            disabled={submitting}
                                        >
                                            <button type="submit" className="submit12" >
                                                {submitting ? 'Submitting...' : 'Submit'}
                                            </button>
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
                    <LoginModal handleClose2={handleClose2} onLoginSuccess={handleLoginSuccess} />
                </Modal.Body>
            </Modal>
        </>
    )
}

export default ApplyLoan
