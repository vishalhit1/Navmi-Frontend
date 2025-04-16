import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Table, Breadcrumb } from "react-bootstrap";

const LoanComparision = () => {
  const [loan1, setLoan1] = useState({ principal: '', interest: '', tenure: '', tenureType: 'years' });
  const [loan2, setLoan2] = useState({ principal: '', interest: '', tenure: '', tenureType: 'years' });
  const [result, setResult] = useState(null);
  const [validated, setValidated] = useState(false);

  // Format Rupee with commas
  const formatRupee = (num) => {
    if (!num || isNaN(num)) return '₹ 0';
    return `₹ ${Number(num).toLocaleString('en-IN', {
      maximumFractionDigits: 0,
      minimumFractionDigits: 0
    })}`;
  };

  // Strip Rupee format for calculations
  const stripRupee = (value) => value.replace(/₹|,|\s/g, '');

  const handleChange = (e, loan) => {
    const { name, value } = e.target;

    if (name === 'principal') {
      // Remove invalid characters but keep Rupee format
      const rawValue = value.replace(/[^0-9]/g, '');
      const formattedValue = rawValue ? formatRupee(rawValue) : '';
      
      if (loan === "loan1") {
        setLoan1({ ...loan1, [name]: formattedValue });
      } else {
        setLoan2({ ...loan2, [name]: formattedValue });
      }
    } else if (name === 'interest') {
      // Allow decimal values for interest rate
      const regex = /^[0-9]*\.?[0-9]*$/;
      if (value === '' || regex.test(value)) {
        if (loan === "loan1") {
          setLoan1({ ...loan1, [name]: value });
        } else {
          setLoan2({ ...loan2, [name]: value });
        }
      }
    } else if (name === 'tenureType') {
      if (loan === "loan1") {
        setLoan1({ ...loan1, [name]: value });
      } else {
        setLoan2({ ...loan2, [name]: value });
      }
    } else {
      // For tenure - just use the numeric value
      if (loan === "loan1") {
        setLoan1({ ...loan1, [name]: value });
      } else {
        setLoan2({ ...loan2, [name]: value });
      }
    }
  };

  const calculateEMI = (principal, interest, tenure, tenureType) => {
    const p = parseFloat(stripRupee(principal));
    const r = parseFloat(interest) / 12 / 100;
    // Convert to months based on tenure type
    const n = tenureType === 'years' ? parseFloat(tenure) * 12 : parseFloat(tenure);

    if (!p || !r || !n) return 0;

    const emi = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    return Math.round(emi);
  };

  const calculateResults = () => {
    const form = document.getElementById('loanComparisonForm');
    if (form.checkValidity() === false) {
      setValidated(true);
      return;
    }
  
    // Ensure clean numeric values
    const cleanPrincipal1 = parseFloat(stripRupee(loan1.principal));
    const cleanPrincipal2 = parseFloat(stripRupee(loan2.principal));
    const interest1 = parseFloat(loan1.interest);
    const interest2 = parseFloat(loan2.interest);
    const tenure1 = parseFloat(loan1.tenure);
    const tenure2 = parseFloat(loan2.tenure);
    const tenureType1 = loan1.tenureType;
    const tenureType2 = loan2.tenureType;
  
    // Validate inputs
    if (!cleanPrincipal1 || !cleanPrincipal2 || 
        !interest1 || !interest2 || 
        !tenure1 || !tenure2 || 
        cleanPrincipal1 <= 0 || cleanPrincipal2 <= 0 || 
        interest1 <= 0 || interest2 <= 0 || 
        tenure1 <= 0 || tenure2 <= 0) {
      alert('Please enter valid loan details');
      return;
    }
  
    // Precise EMI calculation with monthly interest rate
    const calculatePreciseEMI = (principal, annualInterest, tenure, tenureType) => {
      const monthlyInterestRate = annualInterest / 12 / 100;
      const totalMonths = tenureType === 'years' ? tenure * 12 : tenure;
      
      const emi = principal * 
        (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalMonths)) / 
        (Math.pow(1 + monthlyInterestRate, totalMonths) - 1);
      
      return emi;
    };
  
    // Calculate precise EMIs
    const preciseEmi1 = calculatePreciseEMI(cleanPrincipal1, interest1, tenure1, tenureType1);
    const preciseEmi2 = calculatePreciseEMI(cleanPrincipal2, interest2, tenure2, tenureType2);
  
    // Total payments with precise calculation
    const totalMonths1 = tenureType1 === 'years' ? tenure1 * 12 : tenure1;
    const totalMonths2 = tenureType2 === 'years' ? tenure2 * 12 : tenure2;
    
    const totalPayment1 = preciseEmi1 * totalMonths1;
    const totalPayment2 = preciseEmi2 * totalMonths2;
  
    // Interest payable
    const interestPayable1 = totalPayment1 - cleanPrincipal1;
    const interestPayable2 = totalPayment2 - cleanPrincipal2;
  
    setResult({
      emi1: preciseEmi1,
      emi2: preciseEmi2,
      emiDiff: Math.abs(preciseEmi1 - preciseEmi2),
      interest1: interestPayable1,
      interest2: interestPayable2,
      interestDiff: Math.abs(interestPayable1 - interestPayable2),
      totalPayment1: totalPayment1,
      totalPayment2: totalPayment2,
      totalPaymentDiff: Math.abs(totalPayment1 - totalPayment2)
    });
  };

  return (
    <>
      <section className="introduction">
        <h3>Compare Loans</h3>
      </section>
      <Breadcrumb className="breadcrumsvss mt-3 ms-4">
      <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="/emi-calculator-list">Emi Calculator List</Breadcrumb.Item>
        <Breadcrumb.Item active>Compare Loans</Breadcrumb.Item>
      </Breadcrumb>
      <Container className="mt-5">
        <Row>
          {/* Loan 1 */}
          <Col md={6}>
            <div className="compare-loans">
              <h4>Loan 1</h4>
              <Form id="loanComparisonForm" noValidate validated={validated}>
                <Form.Group>
                  <Form.Label>Principal Amount</Form.Label>
                  <Form.Control
                    type="text"
                    required
                    name="principal"
                    value={loan1.principal}
                    onChange={(e) => handleChange(e, "loan1")}
                    placeholder="Enter Principal"
                    isInvalid={validated && !loan1.principal}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter a valid Principal Amount.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mt-3">
                  <Form.Label>Interest Rate (%)</Form.Label>
                  <Form.Control
                    type="text"
                    required
                    name="interest"
                    value={loan1.interest}
                    onChange={(e) => handleChange(e, "loan1")}
                    placeholder="Enter Interest Rate (e.g. 8.5)"
                    isInvalid={validated && !loan1.interest}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter a valid Interest Rate.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mt-3">
                  <Form.Label>Tenure</Form.Label>
                  <Row>
                    <Col sm={8}>
                      <Form.Control
                        type="number"
                        required
                        name="tenure"
                        value={loan1.tenure}
                        onChange={(e) => handleChange(e, "loan1")}
                        placeholder="Enter Tenure"
                        isInvalid={validated && !loan1.tenure}
                      />
                      <Form.Control.Feedback type="invalid">
                        Please enter a valid Tenure.
                      </Form.Control.Feedback>
                    </Col>
                    <Col sm={4}>
                      <Form.Select
                        name="tenureType"
                        value={loan1.tenureType}
                        onChange={(e) => handleChange(e, "loan1")}
                      >
                        <option value="years">Years</option>
                        <option value="months">Months</option>
                      </Form.Select>
                    </Col>
                  </Row>
                </Form.Group>
              </Form>
            </div>
          </Col>

          {/* Loan 2 */}
          <Col md={6}>
            <div className="compare-loans">
              <h4>Loan 2</h4>
              <Form noValidate validated={validated}>
                <Form.Group>
                  <Form.Label>Principal Amount</Form.Label>
                  <Form.Control
                    type="text"
                    required
                    name="principal"
                    value={loan2.principal}
                    onChange={(e) => handleChange(e, "loan2")}
                    placeholder="Enter Principal"
                    isInvalid={validated && !loan2.principal}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter a valid Principal Amount.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mt-3">
                  <Form.Label>Interest Rate (%)</Form.Label>
                  <Form.Control
                    type="text"
                    required
                    name="interest"
                    value={loan2.interest}
                    onChange={(e) => handleChange(e, "loan2")}
                    placeholder="Enter Interest Rate (e.g. 9.25)"
                    isInvalid={validated && !loan2.interest}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter a valid Interest Rate.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mt-3">
                  <Form.Label>Tenure</Form.Label>
                  <Row>
                    <Col sm={8}>
                      <Form.Control
                        type="number"
                        required
                        name="tenure"
                        value={loan2.tenure}
                        onChange={(e) => handleChange(e, "loan2")}
                        placeholder="Enter Tenure"
                        isInvalid={validated && !loan2.tenure}
                      />
                      <Form.Control.Feedback type="invalid">
                        Please enter a valid Tenure.
                      </Form.Control.Feedback>
                    </Col>
                    <Col sm={4}>
                      <Form.Select
                        name="tenureType"
                        value={loan2.tenureType}
                        onChange={(e) => handleChange(e, "loan2")}
                      >
                        <option value="years">Years</option>
                        <option value="months">Months</option>
                      </Form.Select>
                    </Col>
                  </Row>
                </Form.Group>
              </Form>
            </div>
          </Col>
        </Row>

        <div className="text-center mt-4">
          <Button onClick={calculateResults} className="calculate-results">
            Compare Loans
          </Button>
        </div>

        {result && (
          <div className="compare-loans mt-4">
            <h4>Comparison Results</h4>
            <Table striped className="mt-4">
              <thead>
                <tr>
                  <th>Parameter</th>
                  <th>Loan 1</th>
                  <th>Loan 2</th>
                  <th>Difference</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Monthly EMI</td>
                  <td>{formatRupee(result.emi1)}</td>
                  <td>{formatRupee(result.emi2)}</td>
                  <td>{formatRupee(result.emiDiff)}</td>
                </tr>
                <tr>
                  <td>Total Interest Payable</td>
                  <td>{formatRupee(result.interest1)}</td>
                  <td>{formatRupee(result.interest2)}</td>
                  <td>{formatRupee(result.interestDiff)}</td>
                </tr>
                <tr>
                  <td>Total Payment</td>
                  <td>{formatRupee(result.totalPayment1)}</td>
                  <td>{formatRupee(result.totalPayment2)}</td>
                  <td>{formatRupee(result.totalPaymentDiff)}</td>
                </tr>
              </tbody>
            </Table>
          </div>
        )}
      </Container>
    </>
  );
};

export default LoanComparision;