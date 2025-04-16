import React, { useState, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import ApplyLoan from "../ApplyLoan";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const EmiCalculatorData = () => {
  const [loanAmount, setLoanAmount] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [interestRateInput, setInterestRateInput] = useState(''); // New state for handling the text input
  const [loanTenure, setLoanTenure] = useState(0);
  const [emi, setEmi] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);
  
  // Function to calculate EMI
  const calculateEmi = () => {
    const principal = parseFloat(loanAmount);
    const rateOfInterest = parseFloat(interestRate) / 100 / 12; // Monthly interest rate
    const time = parseFloat(loanTenure); // Time in months
    
    // Handle edge cases to prevent NaN or Infinity results
    if (principal <= 0 || rateOfInterest <= 0 || time <= 0) {
      setEmi(0);
      setTotalInterest(0);
      setTotalPayment(0);
      return { emiValue: 0, totalPaymentValue: 0, totalInterestValue: 0 };
    }
    
    // EMI formula: EMI = [P x R x (1+R)^N]/[(1+R)^N-1]
    const emiValue = principal * rateOfInterest * Math.pow(1 + rateOfInterest, time) / (Math.pow(1 + rateOfInterest, time) - 1);
    
    const totalPaymentValue = emiValue * time;
    const totalInterestValue = totalPaymentValue - principal;
    
    setEmi(emiValue);
    setTotalInterest(totalInterestValue);
    setTotalPayment(totalPaymentValue);
    
    return { emiValue, totalPaymentValue, totalInterestValue };
  };
  
  useEffect(() => {
    calculateEmi();
  }, [loanAmount, interestRate, loanTenure]);
  
  // Handle regular input changes
  const handleInputChange = (e, setter) => {
    const value = e.target.value;
    if (!isNaN(value) && value !== '') {
      setter(parseFloat(value));
    } else {
      setter(0);
    }
  };
  
  // Special handler for interest rate to properly allow decimal inputs
  const handleInterestChange = (e) => {
    const value = e.target.value;
    
    // Allow empty string, numbers, and decimal points in the input field
    // This regex allows for decimal notation (e.g., "10.5")
    if (value === '' || /^[0-9]*\.?[0-9]*$/.test(value)) {
      setInterestRateInput(value);
      
      // Only update the actual interest rate if we have a valid number
      if (value !== '' && !isNaN(parseFloat(value))) {
        setInterestRate(parseFloat(value));
      } else {
        setInterestRate(0);
      }
    }
  };
  
  // Data for donut chart
  const chartData = [
    { name: 'Principal Amount', value: loanAmount > 0 ? loanAmount : 0, color: '#283E87' },
    { name: 'Total Interest', value: totalInterest > 0 ? totalInterest : 0, color: '#DA3731' }
  ];
  
  // Custom tooltip for the chart
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip" style={{ backgroundColor: 'white', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
          <p>{`${payload[0].name}: ₹${payload[0].value.toFixed(2)}`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="home-loan-emi-calculator">
      <ApplyLoan />
      <section className="sidecontent">
        <h3>Home Loan EMI Calculator</h3>
        <p style={{ marginTop: '60px' }}>Managing your Home finances effectively is key to long-term growth and success. Our Home Loan EMI Calculator helps you calculate the monthly EMI (Equated Monthly Installment) payments based on your loan amount, interest rate, and tenure.</p>
        <Row style={{ justifyContent: 'space-evenly' }}>
          <Col lg={5}>
            <div>
              <form className="form-calculator">
                <div className="form-group">
                  <label htmlFor="amount">Home Loan Amount:</label>
                  <div className="input-group mb-4">
                    <input
                      type="text"
                      className="form-control"
                      id="amount"
                      value={loanAmount === 0 ? '' : loanAmount}
                      onChange={(e) => handleInputChange(e, setLoanAmount)}
                      placeholder="Enter home loan amount"
                    />
                    <div className="input-group-append">
                      <div className="input-group-text">₹</div>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="interest">Home Loan Interest Rate Per Year:</label>
                  <div className="input-group mb-4">
                    <input
                      type="text"
                      className="form-control"
                      id="interest"
                      value={interestRateInput}
                      onChange={handleInterestChange}
                      placeholder="Enter interest rate (e.g. 10.5)"
                    />
                    <div className="input-group-append">
                      <div className="input-group-text">%</div>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="tenure">Home Loan Tenure:</label>
                  <div className="input-group mb-4">
                    <input
                      type="text"
                      className="form-control"
                      id="tenure"
                      value={loanTenure === 0 ? '' : loanTenure}
                      onChange={(e) => handleInputChange(e, setLoanTenure)}
                      placeholder="Enter loan tenure"
                    />
                    <div className="input-group-append">
                      <div className="input-group-text">Months</div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </Col>
          <Col lg={5}>
            <div className="emi-details">
              <div className="emi-details-head">
                <h6>Your Home Loan EMI Details</h6>
              </div>
              <div className="emi-details-box">
                <p style={{ marginBottom: 5 }}>Monthly EMI:</p>
                <h5><span>₹</span>{isNaN(emi) ? '0.00' : emi.toFixed(2)}</h5>
              </div>
              <div className="emi-details-box">
                <Row>
                  <Col lg={6}>
                    <p style={{ marginBottom: 5 }}>Total Interest Payable:</p>
                    <h5><span>₹</span>{isNaN(totalInterest) ? '0.00' : totalInterest.toFixed(2)}</h5>
                  </Col>
                  <Col lg={6}>
                    <p style={{ marginBottom: 5 }}>Loan Tenure:</p>
                    <h5>{loanTenure} Months</h5>
                  </Col>
                </Row>
              </div>
              <div className="emi-details-box no-bottom-border">
                <p style={{ marginBottom: 5 }}>Total Payment:</p>
                <h5><span>₹</span>{isNaN(totalPayment) ? '0.00' : totalPayment.toFixed(2)}</h5>
              </div>
            </div>
          </Col>
        </Row>
        
        {/* Larger Chart Section - Full Width */}
        <Row className="mt-4">
          <Col lg={12}>
            <div className="chart-container" style={{ height: '320px', marginTop: '20px', border: '1px solid #eee', borderRadius: '8px', padding: '20px',marginBottom:'40px' }}>
              <h6 className="text-center mb-3">Home Loan Graphical View</h6>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={chartData}
                    cx="50%"
                    cy="50%"
                    innerRadius={80}
                    outerRadius={120}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                </PieChart>
              </ResponsiveContainer>
              <div className="chart-legend text-center">
                <div className="d-flex justify-content-center mt-2">
                  <div className="mx-4">
                    <span style={{ display: 'inline-block', width: '16px', height: '16px', backgroundColor: '#283E87', marginRight: '5px', verticalAlign: 'middle' }}></span>
                    <span style={{ fontWeight: 'bold' }}>Principal: ₹{loanAmount.toFixed(2)}</span>
                  </div>
                  <div className="mx-4">
                    <span style={{ display: 'inline-block', width: '16px', height: '16px', backgroundColor: '#DA3731', marginRight: '5px', verticalAlign: 'middle' }}></span>
                    <span style={{ fontWeight: 'bold' }}>Interest: ₹{totalInterest.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </section>
    </div>
  );
};

export default EmiCalculatorData;