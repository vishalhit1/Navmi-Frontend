import React, { useState } from 'react';
import { Container, Form, Button, Card, Row, Col, Breadcrumb, Table, Nav, Tab } from 'react-bootstrap';

const RoiCalculator = () => {
  const [principal, setPrincipal] = useState('');
  const [emi, setEmi] = useState('');
  const [tenure, setTenure] = useState('');
  const [tenureType, setTenureType] = useState('months');
  const [totalRepayment, setTotalRepayment] = useState(null);
  const [interestPayable, setInterestPayable] = useState(null);
  const [interestRate, setInterestRate] = useState(null);
  const [validated, setValidated] = useState(false);
  const [repaymentSchedule, setRepaymentSchedule] = useState([]);
  const [yearlySchedule, setYearlySchedule] = useState([]);
  const [showSchedule, setShowSchedule] = useState(false);

  // Function to format Rupee with commas (Indian number format)
  const formatRupee = (num) => {
    if (!num || isNaN(num)) return '₹ 0';
    return `₹ ${Number(num).toLocaleString('en-IN', {
      maximumFractionDigits: 0,
      minimumFractionDigits: 0
    })}`;
  };

  // Function to strip Rupee format for calculations
  const stripRupee = (value) => {
    if (typeof value === 'string') {
      return value.replace(/₹|,|\s/g, '');
    }
    return value;
  };

  // Function to handle principal input with Rupee formatting
  const handlePrincipalChange = (e) => {
    const rawValue = stripRupee(e.target.value);
    if (rawValue === '') {
      setPrincipal('');
      return;
    }

    if (/^\d*$/.test(rawValue)) {
      setPrincipal(rawValue);
      e.target.value = formatRupee(rawValue);
    }
  };

  // Function to handle EMI input with Rupee formatting
  const handleEmiChange = (e) => {
    const rawValue = stripRupee(e.target.value);
    if (rawValue === '') {
      setEmi('');
      return;
    }

    if (/^\d*$/.test(rawValue)) {
      setEmi(rawValue);
      e.target.value = formatRupee(rawValue);
    }
  };

  // Function to handle tenure input
  const handleTenureChange = (e) => {
    const value = e.target.value;
    if (value === '' || /^\d*$/.test(value)) {
      setTenure(value);
    }
  };

  // Function to accurately calculate the interest rate using binary search
  const calculateInterestRate = (principal, emi, months) => {
    let low = 0.0;
    let high = 100.0;
    let tolerance = 0.0001;
    let rate = 0;

    while ((high - low) > tolerance) {
      rate = (low + high) / 2;
      const monthlyRate = rate / 12 / 100;

      const calcEmi = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
        (Math.pow(1 + monthlyRate, months) - 1);

      if (calcEmi < emi) {
        low = rate;
      } else {
        high = rate;
      }
    }

    return rate.toFixed(2);
  };

  // Function to generate amortization schedule with correct calculations
  const generateAmortizationSchedule = (principal, emi, months, interestRate) => {
    const monthlyRate = parseFloat(interestRate) / 12 / 100;
    let remainingBalance = principal;
    const schedule = [];
    let totalInterest = 0;
    let totalPrincipalPaid = 0;

    for (let month = 1; month <= months; month++) {
      // Calculate interest for this month
      const interestForMonth = remainingBalance * monthlyRate;
      
      // Calculate principal for this month
      let principalForMonth = emi - interestForMonth;
      
      // Handle the last payment (adjusting for any rounding issues)
      if (month === months) {
        principalForMonth = remainingBalance;
        // Recalculate the final EMI to account for rounding
        const finalEmi = principalForMonth + interestForMonth;
        
        totalInterest += interestForMonth;
        totalPrincipalPaid += principalForMonth;
        remainingBalance = 0;
        
        schedule.push({
          month,
          emi: finalEmi,
          principalPayment: principalForMonth,
          interestPayment: interestForMonth,
          totalPrincipal: totalPrincipalPaid,
          totalInterest,
          balance: 0
        });
      } else {
        // Regular month calculation
        totalInterest += interestForMonth;
        totalPrincipalPaid += principalForMonth;
        remainingBalance -= principalForMonth;
        
        schedule.push({
          month,
          emi,
          principalPayment: principalForMonth,
          interestPayment: interestForMonth,
          totalPrincipal: totalPrincipalPaid,
          totalInterest,
          balance: remainingBalance
        });
      }
    }

    return schedule;
  };

  // Function to generate yearly summary with corrected calculation
  const generateYearlySummary = (monthlySchedule, totalMonths) => {
    const years = Math.ceil(totalMonths / 12);
    const yearlySummary = [];
    
    for (let year = 1; year <= years; year++) {
      // Calculate the start and end month indices for this year
      const startMonthIndex = (year - 1) * 12;
      const endMonthIndex = Math.min(year * 12, totalMonths) - 1;
      
      // Get the data for the months in this year
      const yearMonths = monthlySchedule.slice(startMonthIndex, endMonthIndex + 1);
      
      if (yearMonths.length > 0) {
        // Sum up the values for this year
        const yearlyEmi = yearMonths.reduce((sum, month) => sum + parseFloat(month.emi), 0);
        const yearlyPrincipal = yearMonths.reduce((sum, month) => sum + parseFloat(month.principalPayment), 0);
        const yearlyInterest = yearMonths.reduce((sum, month) => sum + parseFloat(month.interestPayment), 0);
        
        // Get the remaining balance at the end of the year
        const balanceAtEndOfYear = yearMonths[yearMonths.length - 1].balance;
        
        yearlySummary.push({
          year,
          yearlyEmi,
          yearlyPrincipal,
          yearlyInterest,
          balance: balanceAtEndOfYear
        });
      }
    }
    
    return yearlySummary;
  };

  const checkEmiIsReasonable = (principalNum, emiNum, months) => {
    // Check if EMI is reasonable (higher than what would be needed to cover interest)
    return emiNum * months > principalNum;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    // Check form validity first
    if (!form.checkValidity()) {
      event.stopPropagation();
      setValidated(true);
      return;
    }

    const principalNum = parseFloat(stripRupee(principal));
    const emiNum = parseFloat(stripRupee(emi));
    const months = tenureType === 'years' ? parseInt(tenure) * 12 : parseInt(tenure);

    // Additional validation for EMI being reasonable
    if (!checkEmiIsReasonable(principalNum, emiNum, months)) {
      setValidated(true);
      return;
    }

    // Calculate if all validations pass
    const totalPaid = emiNum * months;
    const interest = totalPaid - principalNum;
    const accurateRate = calculateInterestRate(principalNum, emiNum, months);

    setInterestPayable(interest.toFixed(2));
    setTotalRepayment(totalPaid.toFixed(2));
    setInterestRate(accurateRate);
    setValidated(true);

    // Generate repayment schedule with corrected calculation
    const schedule = generateAmortizationSchedule(principalNum, emiNum, months, accurateRate);
    setRepaymentSchedule(schedule);

    // Generate yearly summary with corrected calculation
    const yearlySummary = generateYearlySummary(schedule, months);
    setYearlySchedule(yearlySummary);

    // Show the schedule section
    setShowSchedule(true);
  };

  // Reset validation when user starts typing
  const handleInputFocus = () => {
    if (validated) {
      setValidated(false);
    }
  };

  return (
    <>
      <section className="introduction">
        <h3>Interest Calculator</h3>
      </section>
      <Breadcrumb className="breadcrumsvss mt-3 ms-4">
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/emi-calculator-list">Emi Calculator List</Breadcrumb.Item>
        <Breadcrumb.Item active>Interest Calculator</Breadcrumb.Item>
      </Breadcrumb>
      <Container className="mt-5">
        <Row style={{ justifyContent: 'center' }}>
          <Col lg={6}>
            <div className='tenure-calculator'>
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-3">
                  <Col md={12}>
                    <Form.Group className="mb-3">
                      <Form.Label>Principal Amount</Form.Label>
                      <Form.Control
                        type="text"
                        defaultValue={principal ? formatRupee(principal) : ''}
                        onChange={handlePrincipalChange}
                        placeholder="Enter Principal Amount"
                        onFocus={(e) => {
                          handleInputFocus();
                          e.target.value = stripRupee(e.target.value);
                        }}
                        onBlur={(e) => {
                          e.target.value = principal ? formatRupee(principal) : '';
                        }}
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Please enter a valid principal amount.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>

                  <Col md={12}>
                    <Form.Group className="mb-3">
                      <Form.Label>EMI Amount</Form.Label>
                      <Form.Control
                        type="text"
                        defaultValue={emi ? formatRupee(emi) : ''}
                        onChange={handleEmiChange}
                        placeholder="Enter EMI Amount"
                        onFocus={(e) => {
                          handleInputFocus();
                          e.target.value = stripRupee(e.target.value);
                        }}
                        onBlur={(e) => {
                          e.target.value = emi ? formatRupee(emi) : '';
                        }}
                        required
                        isInvalid={
                          validated &&
                          principal &&
                          emi &&
                          tenure &&
                          !checkEmiIsReasonable(
                            parseFloat(stripRupee(principal)),
                            parseFloat(stripRupee(emi)),
                            tenureType === 'years' ? parseInt(tenure) * 12 : parseInt(tenure)
                          )
                        }
                      />
                      <Form.Control.Feedback type="invalid">
                        {principal && emi && tenure && !checkEmiIsReasonable(
                          parseFloat(stripRupee(principal)),
                          parseFloat(stripRupee(emi)),
                          tenureType === 'years' ? parseInt(tenure) * 12 : parseInt(tenure)
                        )
                          ? "EMI amount is too low to repay the loan within the given tenure."
                          : "Please enter a valid EMI amount."}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col xs={8}>
                    <Form.Group className="mb-3">
                      <Form.Label>Tenure</Form.Label>
                      <Form.Control
                        type="number"
                        value={tenure}
                        onChange={handleTenureChange}
                        placeholder="Enter Tenure"
                        min="1"
                        onFocus={handleInputFocus}
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Tenure must be a positive integer.
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col xs={4}>
                    <Form.Group className="mb-3">
                      <Form.Label>Select Tenure</Form.Label>
                      <Form.Select
                        value={tenureType}
                        onChange={(e) => setTenureType(e.target.value)}
                        onFocus={handleInputFocus}
                      >
                        <option value="months">Months</option>
                        <option value="years">Years</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>

                <Button className="calculate-results1 btn btn-primary" type="submit">Calculate ROI</Button>
              </Form>
            </div>
          </Col>
        </Row>
        {totalRepayment && (
          <div className='loan-tenure-summary'>
            <Card className="mt-4">
              <Card.Header as="h4" className="text-center">Loan Summary</Card.Header>
              <Card.Body>
                {interestRate !== null && (
                  <div className='loan-estimated'>
                    Interest Rate: {interestRate}%
                  </div>
                )}
                <div className="d-flex justify-content-around">
                  <div className="text-center">
                    <h5>Principal Amount</h5>
                    <p>{formatRupee(stripRupee(principal))}</p>
                  </div>
                  <div className="text-center">
                    <h5>Interest Payable</h5>
                    <p>{formatRupee(interestPayable)}</p>
                  </div>
                  <div className="text-center">
                    <h5>Total Repayment</h5>
                    <p>{formatRupee(totalRepayment)}</p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
        )}

        {/* Repayment Schedule Section */}
        {showSchedule && (
           <div class="loan-tenure-summary">
          <div className="repayment-schedule mt-5">
            <Card>
              <Card.Header as="h4" className="text-center">Repayment Schedule</Card.Header>
              <Card.Body>
                <Tab.Container id="schedule-tabs" defaultActiveKey="monthly">
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
                        <Table className='mt-4' striped>
                          <thead>
                            <tr>
                              <th>Month</th>
                              <th>EMI</th>
                              <th>Principal</th>
                              <th>Interest</th>
                              <th>Total Principal Paid</th>
                              <th>Total Interest Paid</th>
                              <th>Balance</th>
                            </tr>
                          </thead>
                          <tbody>
                            {repaymentSchedule.map((item) => (
                              <tr key={`month-${item.month}`}>
                                <td>{item.month}</td>
                                <td>{formatRupee(item.emi)}</td>
                                <td>{formatRupee(item.principalPayment)}</td>
                                <td>{formatRupee(item.interestPayment)}</td>
                                <td>{formatRupee(item.totalPrincipal)}</td>
                                <td>{formatRupee(item.totalInterest)}</td>
                                <td>{formatRupee(item.balance)}</td>
                              </tr>
                            ))}
                          </tbody>
                        </Table>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="yearly">
                      <div className="table-responsive">
                        <Table className='mt-4' striped>
                          <thead>
                            <tr>
                              <th>Year</th>
                              <th>Total EMI</th>
                              <th>Principal Paid</th>
                              <th>Interest Paid</th>
                              <th>Balance</th>
                            </tr>
                          </thead>
                          <tbody>
                            {yearlySchedule.map((item) => (
                              <tr key={`year-${item.year}`}>
                                <td>{item.year}</td>
                                <td>{formatRupee(item.yearlyEmi)}</td>
                                <td>{formatRupee(item.yearlyPrincipal)}</td>
                                <td>{formatRupee(item.yearlyInterest)}</td>
                                <td>{formatRupee(item.balance)}</td>
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
          </div>
        )}
      </Container>
    </>
  );
};

export default RoiCalculator;