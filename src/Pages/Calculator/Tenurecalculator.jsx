import React, { useState } from 'react';
import { Container, Form, Button, Card, Row, Col, Breadcrumb, Table, Nav } from 'react-bootstrap';

// Utility function to format Rupee with commas
const formatRupee = (num) => {
  if (!num || isNaN(num)) return '₹ 0';
  return `₹ ${Number(num).toLocaleString('en-IN', {
    maximumFractionDigits: 0,
    minimumFractionDigits: 0
  })}`;
};

// Utility function to strip Rupee format for calculations
const stripRupee = (value) => {
  if (typeof value === 'string') {
    return parseFloat(value.replace(/₹|,|\s/g, '')) || 0;
  }
  return value;
};

const Tenurecalculator = () => {
  const [principal, setPrincipal] = useState('');
  const [emi, setEmi] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [tenure, setTenure] = useState(null);
  const [monthlySchedule, setMonthlySchedule] = useState([]);
  const [yearlySchedule, setYearlySchedule] = useState([]);
  const [activeTab, setActiveTab] = useState('monthly');

  // Form validation states
  const [errors, setErrors] = useState({
    principal: '',
    emi: '',
    interestRate: ''
  });

  // New state for overall totals
  const [totalPrincipal, setTotalPrincipal] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalRepayment, setTotalRepayment] = useState(0);

  // Validation function
  const validateForm = () => {
    const newErrors = {
      principal: '',
      emi: '',
      interestRate: ''
    };

    const principalNum = stripRupee(principal);
    const emiNum = stripRupee(emi);
    const interestRateNum = parseFloat(interestRate);

    // Principal validation
    if (!principalNum || principalNum <= 0) {
      newErrors.principal = 'Principal amount must be a positive number';
    }

    // EMI validation
    if (!emiNum || emiNum <= 0) {
      newErrors.emi = 'Monthly EMI must be a positive number';
    } else if (emiNum >= principalNum) {
      newErrors.emi = 'EMI cannot be greater than or equal to the principal amount';
    }

    // Interest rate validation
    if (!interestRate || isNaN(interestRateNum) || interestRateNum <= 0) {
      newErrors.interestRate = 'Interest rate must be a positive number';
    }

    setErrors(newErrors);
    return Object.values(newErrors).every(error => error === '');
  };

  const calculateTenure = () => {
    // Reset previous calculations
    setTenure(null);
    setMonthlySchedule([]);
    setYearlySchedule([]);

    // Validate form first
    if (!validateForm()) {
      return;
    }

    const principalNum = stripRupee(principal);
    const emiNum = stripRupee(emi);
    const interestRateNum = parseFloat(interestRate);

    const monthlyRate = interestRateNum / 12 / 100;
    const tenureMonths = Math.log(emiNum / (emiNum - principalNum * monthlyRate)) / Math.log(1 + monthlyRate);
    const roundedTenure = Math.ceil(tenureMonths);
    setTenure(roundedTenure);

    let remainingBalance = principalNum;
    const monthly = [];
    const yearly = [];

    let cumulativePrincipalPaid = 0;
    let cumulativeInterestPaid = 0;

    let yearlyPrincipal = 0;
    let yearlyInterest = 0;

    for (let month = 1; month <= roundedTenure; month++) {
      const monthlyInterest = remainingBalance * monthlyRate;
      const monthlyPrincipal = emiNum - monthlyInterest;

      // Accumulate totals
      cumulativePrincipalPaid += monthlyPrincipal;
      cumulativeInterestPaid += monthlyInterest;

      monthly.push({
        month,
        year: Math.ceil(month / 12),
        principal: monthlyPrincipal,
        interest: monthlyInterest,
        totalRepayment: monthlyPrincipal + monthlyInterest,
        remainingBalance: Math.max(remainingBalance - monthlyPrincipal, 0)
      });

      yearlyPrincipal += monthlyPrincipal;
      yearlyInterest += monthlyInterest;

      if (month % 12 === 0 || month === roundedTenure) {
        yearly.push({
          year: Math.ceil(month / 12),
          totalPrincipal: yearlyPrincipal,
          totalInterest: yearlyInterest,
          totalRepayment: yearlyPrincipal + yearlyInterest
        });

        yearlyPrincipal = 0;
        yearlyInterest = 0;
      }

      remainingBalance -= monthlyPrincipal;
      if (remainingBalance <= 0.01) break;
    }

    setMonthlySchedule(monthly);
    setYearlySchedule(yearly);

    // Precise interest calculation
    const totalEMI = emiNum * roundedTenure;
    const preciseInterest = totalEMI - principalNum;

    // Set totals for separate view
    setTotalPrincipal(principalNum);
    setTotalInterest(preciseInterest);
    setTotalRepayment(totalEMI);
  };

  return (
    <>
      <section className="introduction">
        <h3>Calculate Tenure</h3>
      </section>
      <Breadcrumb className="breadcrumsvss mt-3 ms-4">
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/emi-calculator-list">Emi Calculator List</Breadcrumb.Item>
        <Breadcrumb.Item active>Calculate Tenure</Breadcrumb.Item>
      </Breadcrumb>
      <Container className="mt-5">
        <Row style={{ justifyContent: 'center' }}>
          <Col lg={6}>
            <div className='tenure-calculator'>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Principal Amount</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter principal amount"
                    value={principal}
                    onChange={(e) => {
                      setPrincipal(formatRupee(stripRupee(e.target.value)));
                      setErrors(prev => ({ ...prev, principal: '' }));
                    }}
                    isInvalid={!!errors.principal}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.principal}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Monthly EMI</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter monthly EMI"
                    value={emi}
                    onChange={(e) => {
                      setEmi(formatRupee(stripRupee(e.target.value)));
                      setErrors(prev => ({ ...prev, emi: '' }));
                    }}
                    isInvalid={!!errors.emi}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.emi}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Annual Interest Rate (%)</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter interest rate"
                    value={interestRate}
                    onChange={(e) => {
                      setInterestRate(e.target.value);
                      setErrors(prev => ({ ...prev, interestRate: '' }));
                    }}
                    isInvalid={!!errors.interestRate}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.interestRate}
                  </Form.Control.Feedback>
                </Form.Group>

                <Button
                  onClick={calculateTenure}
                  className="calculate-results1 btn btn-primary w-100"
                >
                  Calculate Tenure
                </Button>
              </Form>
            </div>
          </Col>
        </Row>

        {(totalPrincipal > 0 || totalInterest > 0) && (
          <div className='loan-tenure-summary'>
            <Card className="mt-4">
              <Card.Header as="h4" className="text-center">Loan Summary</Card.Header>
              <Card.Body>
                {tenure !== null && (
                  <div className='loan-estimated text-center mb-4'>
                    <h5>Estimated Loan Tenure: <span className="text-primary">{tenure} months ({(tenure / 12).toFixed(1)} years)</span></h5>
                  </div>
                )}
                <div className="d-flex justify-content-around">
                  <div className="text-center">
                    <h5>Principal Amount</h5>
                    <p className="text-primary fw-bold fs-5">{formatRupee(totalPrincipal)}</p>
                  </div>
                  <div className="text-center">
                    <h5>Interest Payable</h5>
                    <p className="text-primary fw-bold fs-5">{formatRupee(totalInterest)}</p>
                  </div>
                  <div className="text-center">
                    <h5>Total Repayment</h5>
                    <p className="text-primary fw-bold fs-5">{formatRupee(totalRepayment)}</p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
        )}

        {/* Repayment Schedule Section */}
        {(monthlySchedule.length > 0 || yearlySchedule.length > 0) && (
          <Card className="mt-4 mb-5">
            <Card.Header as="h4" className="text-center">Repayment Schedule</Card.Header>
            <Card.Body>
              <Nav fill variant="tabs" defaultActiveKey="monthly" className="mb-3" onSelect={(k) => setActiveTab(k)}>
                <Nav.Item>
                  <Nav.Link eventKey="monthly">Monthly Schedule</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="yearly">Yearly Schedule</Nav.Link>
                </Nav.Item>
              </Nav>

              {activeTab === 'monthly' && (
                <div className="table-responsive">
                  <Table striped bordered hover>
                    <thead className="bg-light">
                      <tr>
                        <th>Month</th>
                        <th>Year</th>
                        <th>Principal (₹)</th>
                        <th>Interest (₹)</th>
                        <th>EMI (₹)</th>
                        <th>Balance (₹)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {monthlySchedule.map((entry, index) => (
                        <tr key={index}>
                          <td>{entry.month}</td>
                          <td>{entry.year}</td>
                          <td>{Math.round(entry.principal).toLocaleString('en-IN')}</td>
                          <td>{Math.round(entry.interest).toLocaleString('en-IN')}</td>
                          <td>{Math.round(entry.totalRepayment).toLocaleString('en-IN')}</td>
                          <td>{Math.round(entry.remainingBalance).toLocaleString('en-IN')}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              )}

              {activeTab === 'yearly' && (
                <div className="table-responsive">
                  <Table striped bordered hover>
                    <thead className="bg-light">
                      <tr>
                        <th>Year</th>
                        <th>Principal Paid (₹)</th>
                        <th>Interest Paid (₹)</th>
                        <th>Total Payment (₹)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {yearlySchedule.map((entry, index) => (
                        <tr key={index}>
                          <td>{entry.year}</td>
                          <td>{Math.round(entry.totalPrincipal).toLocaleString('en-IN')}</td>
                          <td>{Math.round(entry.totalInterest).toLocaleString('en-IN')}</td>
                          <td>{Math.round(entry.totalRepayment).toLocaleString('en-IN')}</td>
                        </tr>
                      ))}
                      <tr className="table-primary fw-bold">
                        <td>Total</td>
                        <td>{Math.round(totalPrincipal).toLocaleString('en-IN')}</td>
                        <td>{Math.round(totalInterest).toLocaleString('en-IN')}</td>
                        <td>{Math.round(totalRepayment).toLocaleString('en-IN')}</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              )}
            </Card.Body>
          </Card>
        )}
      </Container>
    </>
  );
};

export default Tenurecalculator;