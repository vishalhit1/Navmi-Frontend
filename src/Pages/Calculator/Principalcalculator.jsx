import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Breadcrumb, Table, Nav, Tab } from 'react-bootstrap';

// Format Rupee with commas
const formatRupee = (num) => {
  if (!num) return '₹ 0';

  const numValue = typeof num === 'string'
    ? parseFloat(num.replace(/₹|,|\s/g, ''))
    : num;

  if (isNaN(numValue)) return '₹ 0';

  return `₹ ${Number(numValue).toLocaleString('en-IN', {
    maximumFractionDigits: 0,
    minimumFractionDigits: 0
  })}`;
};

// Strip Rupee format for calculations
const stripRupee = (value) => {
  if (typeof value === 'string') {
    return parseFloat(value.replace(/₹|,|\s/g, '')) || 0;
  }
  return value;
};

const PrincipalCalculator = () => {
  const [emi, setEmi] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [tenure, setTenure] = useState('');
  const [tenureType, setTenureType] = useState('years');
  const [calculationResult, setCalculationResult] = useState(null);
  const [monthlySchedule, setMonthlySchedule] = useState([]);
  const [yearlySchedule, setYearlySchedule] = useState([]);
  const [errors, setErrors] = useState({});
  const [showSchedule, setShowSchedule] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!emi || parseFloat(stripRupee(emi)) <= 0) {
      newErrors.emi = 'Monthly EMI must be a positive number';
    }

    if (!interestRate || parseFloat(interestRate) <= 0 || parseFloat(interestRate) > 100) {
      newErrors.interestRate = 'Interest Rate must be between 0 and 100';
    }

    if (!tenure || parseFloat(tenure) <= 0) {
      newErrors.tenure = 'Tenure must be a positive number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleEmiChange = (e) => {
    let value = e.target.value;

    // Remove Rupee symbol and existing formatting
    value = value.replace(/₹|,|\s/g, '');
    value = value.replace(/[^0-9.]/g, '');

    const decimalParts = value.split('.');
    if (decimalParts.length > 2) {
      value = decimalParts[0] + '.' + decimalParts.slice(1).join('');
    }

    setEmi(formatRupee(value));
  };

  const calculatePrincipalDetails = () => {
    if (!validateForm()) return;

    const monthlyEMI = parseFloat(stripRupee(emi));
    const annualInterestRate = parseFloat(interestRate);
    const monthlyInterestRate = annualInterestRate / 12 / 100;
    const totalMonths = tenureType === 'years'
      ? parseFloat(tenure) * 12
      : parseFloat(tenure);

    // Calculate Loan Amount (Principal)
    const loanAmount = monthlyEMI * ((1 - Math.pow(1 + monthlyInterestRate, -totalMonths)) / monthlyInterestRate);

    const schedule = generateDetailedSchedule(
      loanAmount,
      monthlyInterestRate,
      totalMonths,
      monthlyEMI
    );

    setCalculationResult({
      loanAmount: loanAmount.toFixed(2),
      principalAmount: loanAmount.toFixed(2),
      totalInterest: (monthlyEMI * totalMonths - loanAmount).toFixed(2),
      totalPayment: (monthlyEMI * totalMonths).toFixed(2)
    });

    setMonthlySchedule(schedule);
    setYearlySchedule(generateYearlySchedule(schedule));
    setShowSchedule(true);
  };

  const generateDetailedSchedule = (principal, monthlyRate, totalMonths, monthlyEMI) => {
    let remainingBalance = principal;
    const schedule = [];

    for (let month = 1; month <= totalMonths; month++) {
      const interestPayment = remainingBalance * monthlyRate;
      const principalPayment = monthlyEMI - interestPayment;
      remainingBalance -= principalPayment;

      schedule.push({
        month,
        openingBalance: (remainingBalance + principalPayment).toFixed(2),
        emi: monthlyEMI.toFixed(2),
        principalPayment: principalPayment.toFixed(2),
        interestPayment: interestPayment.toFixed(2),
        closingBalance: Math.max(0, remainingBalance).toFixed(2)
      });
    }

    return schedule;
  };

  const generateYearlySchedule = (monthlySchedule) => {
    if (!monthlySchedule.length) return [];

    const yearlyData = [];
    let currentYear = 1;
    let yearlyEmi = 0;
    let yearlyPrincipal = 0;
    let yearlyInterest = 0;
    let openingBalanceForYear = parseFloat(monthlySchedule[0].openingBalance);
    
    monthlySchedule.forEach((month, index) => {
      yearlyEmi += parseFloat(month.emi);
      yearlyPrincipal += parseFloat(month.principalPayment);
      yearlyInterest += parseFloat(month.interestPayment);

      // Check if it's the last month of the year or the last month overall
      if ((index + 1) % 12 === 0 || index === monthlySchedule.length - 1) {
        const closingBalanceForYear = parseFloat(month.closingBalance);
        
        yearlyData.push({
          year: currentYear,
          openingBalance: openingBalanceForYear.toFixed(2),
          yearlyEmi: yearlyEmi.toFixed(2),
          yearlyPrincipal: yearlyPrincipal.toFixed(2),
          yearlyInterest: yearlyInterest.toFixed(2),
          closingBalance: closingBalanceForYear.toFixed(2)
        });

        // Reset for next year
        currentYear++;
        yearlyEmi = 0;
        yearlyPrincipal = 0;
        yearlyInterest = 0;
        openingBalanceForYear = closingBalanceForYear;
      }
    });

    return yearlyData;
  };

  return (
    <>
      <section className="introduction">
        <h3>Calculate Principal</h3>
      </section>

      <Breadcrumb className="mt-3 ms-4">
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/emi-calculator-list">Emi Calculator List</Breadcrumb.Item>
        <Breadcrumb.Item active>Calculate Principal</Breadcrumb.Item>
      </Breadcrumb>
      
      <Container className="mt-5">
        <Row style={{ justifyContent: 'center' }}>
          <Col lg={6}>
            <div className='tenure-calculator'>
              <Form noValidate>
                <Row className="mb-3">
                  <Col lg={12}>
                    <Form.Group className="mb-3">
                      <Form.Label>Monthly EMI</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Monthly EMI"
                        value={emi}
                        onChange={handleEmiChange}
                        isInvalid={!!errors.emi}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.emi}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>

                  <Col lg={12}>
                    <Form.Group className="mb-3">
                      <Form.Label>Interest Rate</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Interest Rate (%)"
                        value={interestRate}
                        onChange={(e) => setInterestRate(e.target.value)}
                        isInvalid={!!errors.interestRate}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.interestRate}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>

                  <Col>
                    <Form.Group as={Row}>
                      <Col xs={8}>
                        <Form.Group className="mb-3">
                          <Form.Label>Tenure</Form.Label>
                          <Form.Control
                            type="number"
                            placeholder="Tenure"
                            value={tenure}
                            onChange={(e) => setTenure(e.target.value)}
                            isInvalid={!!errors.tenure}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.tenure}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                      <Col xs={4}>
                        <Form.Group className="mb-3">
                          <Form.Label>Select Months/Years</Form.Label>
                          <Form.Select
                            value={tenureType}
                            onChange={(e) => setTenureType(e.target.value)}
                          >
                            <option value="years">Years</option>
                            <option value="months">Months</option>
                          </Form.Select>
                        </Form.Group>
                      </Col>
                    </Form.Group>
                  </Col>
                </Row>
              </Form>

              <div className="text-center mb-3">
                <Button
                  onClick={calculatePrincipalDetails}
                  className="calculate-results1 btn btn-primary"
                >
                  Calculate Principal
                </Button>
              </div>
            </div>
          </Col>
        </Row>

        {calculationResult && (
          <div className='loan-tenure-summary'>
            <Card className="mt-4">
              <Card.Header as="h4" className="text-center">Loan Summary</Card.Header>
              <Card.Body>
                <div className="d-flex justify-content-around">
                  <div className="text-center">
                    <h5>Loan Amount</h5>
                    <p>{formatRupee(calculationResult.loanAmount)}</p>
                  </div>
                  <div className="text-center">
                    <h5>Principal Amount</h5>
                    <p>{formatRupee(calculationResult.principalAmount)}</p>
                  </div>
                  <div className="text-center">
                    <h5>Interest Payable</h5>
                    <p>{formatRupee(calculationResult.totalInterest)}</p>
                  </div>
                  <div className="text-center">
                    <h5>Total Repayment</h5>
                    <p>{formatRupee(calculationResult.totalPayment)}</p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
        )}

        {showSchedule && (
          <div className="repayment-schedule mt-4">
            <Card>
              <Card.Header as="h4" className="text-center">Repayment Schedule</Card.Header>
              <Card.Body>
                <Tab.Container defaultActiveKey="monthly">
                  <Nav variant="tabs" className="mb-3">
                    <Nav.Item>
                      <Nav.Link eventKey="monthly">Monthly Schedule</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="yearly">Yearly Schedule</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content>
                    <Tab.Pane eventKey="monthly">
                      <div className="table-responsive">
                        <Table striped bordered hover>
                          <thead>
                            <tr>
                              <th>Month</th>
                              <th>Opening Balance</th>
                              <th>EMI</th>
                              <th>Principal</th>
                              <th>Interest</th>
                              <th>Closing Balance</th>
                            </tr>
                          </thead>
                          <tbody>
                            {monthlySchedule.map((month) => (
                              <tr key={`month-${month.month}`}>
                                <td>{month.month}</td>
                                <td>{formatRupee(month.openingBalance)}</td>
                                <td>{formatRupee(month.emi)}</td>
                                <td>{formatRupee(month.principalPayment)}</td>
                                <td>{formatRupee(month.interestPayment)}</td>
                                <td>{formatRupee(month.closingBalance)}</td>
                              </tr>
                            ))}
                          </tbody>
                        </Table>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="yearly">
                      <div className="table-responsive">
                        <Table striped bordered hover>
                          <thead>
                            <tr>
                              <th>Year</th>
                              <th>Opening Balance</th>
                              <th>Total EMI Paid</th>
                              <th>Total Principal Paid</th>
                              <th>Total Interest Paid</th>
                              <th>Closing Balance</th>
                            </tr>
                          </thead>
                          <tbody>
                            {yearlySchedule.map((year) => (
                              <tr key={`year-${year.year}`}>
                                <td>{year.year}</td>
                                <td>{formatRupee(year.openingBalance)}</td>
                                <td>{formatRupee(year.yearlyEmi)}</td>
                                <td>{formatRupee(year.yearlyPrincipal)}</td>
                                <td>{formatRupee(year.yearlyInterest)}</td>
                                <td>{formatRupee(year.closingBalance)}</td>
                              </tr>
                            ))}
                          </tbody>
                        </Table>
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </Card.Body>
            </Card>
          </div>
        )}
      </Container>
    </>
  );
};

export default PrincipalCalculator;