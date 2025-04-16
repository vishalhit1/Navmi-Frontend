import React, { useState, useEffect } from 'react';
import { Breadcrumb, Form, Button, Table, Container, Row, Col, Card, Nav, Tab } from 'react-bootstrap';

const EMICalculator = () => {
  const [principal, setPrincipal] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [tenureValue, setTenureValue] = useState('');
  const [tenureType, setTenureType] = useState('years');
  const [result, setResult] = useState(null);
  const [repaymentSchedule, setRepaymentSchedule] = useState({ monthly: [], yearly: [] });
  const [formErrors, setFormErrors] = useState({
    principal: '',
    interestRate: '',
    tenureValue: ''
  });

  // Format amount with Indian Rupee style (no decimals)
  const formatIndianRupee = (amount) => {
    if (!amount || isNaN(amount)) return '₹ 0';

    const numStr = String(Math.round(amount)).replace(/[^0-9]/g, '');
    let formattedInteger = '';
    let count = 0;

    for (let i = numStr.length - 1; i >= 0; i--) {
      count++;
      formattedInteger = numStr.charAt(i) + formattedInteger;

      if (i > 0 && (count === 3 || (count > 3 && (count - 3) % 2 === 0))) {
        formattedInteger = ',' + formattedInteger;
      }
    }

    return `₹ ${formattedInteger}`;
  };

  // Strip Rupee format for calculations
  const stripRupee = (value) => value.replace(/₹|,|\s|,/g, '');

  // Validation function
  const validateForm = () => {
    const errors = { principal: '', interestRate: '', tenureValue: '' };
    let isValid = true;

    const principalValue = stripRupee(principal);
    if (!principalValue) {
      errors.principal = 'Principal amount is required';
      isValid = false;
    } else if (isNaN(principalValue) || parseFloat(principalValue) <= 0) {
      errors.principal = 'Please enter a valid principal amount';
      isValid = false;
    }

    if (!interestRate) {
      errors.interestRate = 'Interest rate is required';
      isValid = false;
    } else if (isNaN(interestRate) || parseFloat(interestRate) <= 0) {
      errors.interestRate = 'Please enter a valid interest rate';
      isValid = false;
    }

    if (!tenureValue) {
      errors.tenureValue = 'Loan tenure is required';
      isValid = false;
    } else if (isNaN(tenureValue) || parseInt(tenureValue) <= 0) {
      errors.tenureValue = 'Please enter a valid tenure';
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  // Generate repayment schedule
  const generateRepaymentSchedule = (principalAmount, rate, tenure, tenureInMonths) => {
    const monthlyRate = rate / 12 / 100;
    const emi = (principalAmount * monthlyRate * Math.pow(1 + monthlyRate, tenureInMonths)) / 
               (Math.pow(1 + monthlyRate, tenureInMonths) - 1);
    
    let balance = principalAmount;
    let monthlySchedule = [];
    let yearlyData = [];
    let yearlyTotalPrincipal = 0;
    let yearlyTotalInterest = 0;
    
    for (let month = 1; month <= tenureInMonths; month++) {
      const interestPayment = balance * monthlyRate;
      const principalPayment = emi - interestPayment;
      balance = balance - principalPayment;
      
      // Ensure balance doesn't go below zero due to rounding errors
      if (balance < 0) balance = 0;
      
      // Add to monthly schedule
      monthlySchedule.push({
        month,
        emi: Math.round(emi),
        principal: Math.round(principalPayment),
        interest: Math.round(interestPayment),
        balance: Math.round(balance)
      });
      
      // Accumulate for yearly data
      yearlyTotalPrincipal += principalPayment;
      yearlyTotalInterest += interestPayment;
      
      // If it's the end of a year or the last month, add to yearly data
      if (month % 12 === 0 || month === tenureInMonths) {
        const yearNumber = Math.ceil(month / 12);
        yearlyData.push({
          year: yearNumber,
          principalPaid: Math.round(yearlyTotalPrincipal),
          interestPaid: Math.round(yearlyTotalInterest),
          totalPayment: Math.round(yearlyTotalPrincipal + yearlyTotalInterest),
          remainingBalance: Math.round(balance)
        });
        
        // Reset yearly accumulators
        yearlyTotalPrincipal = 0;
        yearlyTotalInterest = 0;
      }
    }
    
    return { monthly: monthlySchedule, yearly: yearlyData };
  };

  // EMI calculation function
  const calculateEMI = (event) => {
    event.preventDefault();
    const isValid = validateForm();

    if (!isValid) {
      return;
    }

    const P = parseFloat(stripRupee(principal));
    const R = parseFloat(interestRate) / 12 / 100;
    let N = parseFloat(tenureValue);

    const tenureInMonths = tenureType === 'years' ? N * 12 : N;

    if (P > 0 && R > 0 && tenureInMonths > 0) {
      const emi = (P * R * Math.pow(1 + R, tenureInMonths)) / (Math.pow(1 + R, tenureInMonths) - 1);
      const totalPayment = emi * tenureInMonths;
      const totalInterest = totalPayment - P;

      setResult({
        monthlyEMI: formatIndianRupee(emi),
        totalPayment: formatIndianRupee(totalPayment),
        totalInterest: formatIndianRupee(totalInterest),
      });

      // Generate repayment schedule
      const schedule = generateRepaymentSchedule(P, parseFloat(interestRate), N, tenureInMonths);
      setRepaymentSchedule(schedule);
    } else {
      setResult(null);
      setRepaymentSchedule({ monthly: [], yearly: [] });
    }
  };

  // Auto-format principal field
  const handlePrincipalChange = (value) => {
    const cleanValue = value.replace(/₹|,|\s/g, '');

    if (cleanValue === '' || (!isNaN(cleanValue) && !cleanValue.includes('.'))) {
      setPrincipal(cleanValue === '' ? '' : formatIndianRupee(cleanValue));
    }
  };

  // Automatically format principal on initial render
  useEffect(() => {
    if (principal && !principal.includes('₹')) {
      handlePrincipalChange(principal);
    }
  }, []);

  return (
    <>
      <section className="introduction">
        <h3>Calculate EMI</h3>
      </section>

      <Breadcrumb className="mt-3 ms-4">
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/emi-calculator-list">Emi Calculator List</Breadcrumb.Item>
        <Breadcrumb.Item active>Calculate EMI</Breadcrumb.Item>
      </Breadcrumb>

      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col md={6}>
            <div className='tenure-calculator'>
              <Form noValidate onSubmit={calculateEMI}>
                <Form.Group className="mb-3">
                  <Form.Label>Principal Amount</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="₹ Enter Principal Amount"
                    value={principal}
                    onChange={(e) => handlePrincipalChange(e.target.value)}
                    isInvalid={!!formErrors.principal}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formErrors.principal}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Interest Rate (%)</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter Interest Rate"
                    value={interestRate}
                    onChange={(e) => setInterestRate(e.target.value)}
                    step="0.1"
                    min="0"
                    isInvalid={!!formErrors.interestRate}
                  />
                  <Form.Control.Feedback type="invalid">
                    {formErrors.interestRate}
                  </Form.Control.Feedback>
                </Form.Group>

                <Row className="mb-3">
                  <Col>
                    <Form.Group>
                      <Form.Label>Loan Tenure</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Enter Tenure"
                        value={tenureValue}
                        onChange={(e) => setTenureValue(e.target.value)}
                        min="1"
                        isInvalid={!!formErrors.tenureValue}
                      />
                      <Form.Control.Feedback type="invalid">
                        {formErrors.tenureValue}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label>Tenure Type</Form.Label>
                      <Form.Select
                        value={tenureType}
                        onChange={(e) => setTenureType(e.target.value)}
                      >
                        <option value="years">Years</option>
                        <option value="months">Months</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>

                <div className="d-grid">
                  <Button type="submit" className="calculate-results1 btn btn-primary">
                    Calculate EMI
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>

        {result && (
          <>
            <div className='loan-tenure-summary'>
              <Card className="mt-4">
                <Card.Header as="h4" className="text-center">EMI Summary</Card.Header>
                <Card.Body>
                  <div className='loan-estimated'>
                    Monthly EMI : {result.monthlyEMI}
                  </div>
                  <div className="d-flex justify-content-around">
                    <div className="text-center">
                      <h5>Principal Amount</h5>
                      <p>{formatIndianRupee(stripRupee(principal))}</p>
                    </div>
                    <div className="text-center">
                      <h5>Total Interest</h5>
                      <p>{result.totalInterest}</p>
                    </div>
                    <div className="text-center">
                      <h5>Total Payment</h5>
                      <p>{result.totalPayment}</p>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>

            {/* Repayment Schedule Section */}
            <Card className="mt-4">
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
                              <th>EMI</th>
                              <th>Principal</th>
                              <th>Interest</th>
                              <th>Balance</th>
                            </tr>
                          </thead>
                          <tbody>
                            {repaymentSchedule.monthly.map((item) => (
                              <tr key={`month-${item.month}`}>
                                <td>{item.month}</td>
                                <td>{formatIndianRupee(item.emi)}</td>
                                <td>{formatIndianRupee(item.principal)}</td>
                                <td>{formatIndianRupee(item.interest)}</td>
                                <td>{formatIndianRupee(item.balance)}</td>
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
                              <th>Principal Paid</th>
                              <th>Interest Paid</th>
                              <th>Total Payment</th>
                              <th>Balance</th>
                            </tr>
                          </thead>
                          <tbody>
                            {repaymentSchedule.yearly.map((item) => (
                              <tr key={`year-${item.year}`}>
                                <td>{item.year}</td>
                                <td>{formatIndianRupee(item.principalPaid)}</td>
                                <td>{formatIndianRupee(item.interestPaid)}</td>
                                <td>{formatIndianRupee(item.totalPayment)}</td>
                                <td>{formatIndianRupee(item.remainingBalance)}</td>
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
          </>
        )}
      </Container>
    </>
  );
};

export default EMICalculator;