// import { Row, Col } from "react-bootstrap"
// import ApplyLoan from "../ApplyLoan"

// const EmiCalculatorData = () => {
//     return (
//         <>
//             <ApplyLoan />
//             <section className="sidecontent">
//                 <h3>EMI Calculator</h3>
//                 <p style={{ marginTop: '60px' }}>Managing your Home finances effectively is key to long-term growth and success. Our Home Loan EMI Calculator helps you calculate the monthly EMI (Equated Monthly Installment) payments based on your loan amount, interest rate, and tenure.</p>
//                 <Row style={{ justifyContent: 'space-evenly' }}>
//                     <Col lg={5}>
//                         <div>
//                             <form className="form-calculator">
//                                 <div className="form-group">
//                                     <label htmlFor="amount">Loan Amount:</label>
//                                     <div className="input-group mb-4">
//                                         <div className="input-group-prepend">
//                                             <div className="input-group-text">$</div>
//                                         </div>
//                                         <input
//                                             type="text"
//                                             className="form-control"
//                                             id="amount"
//                                             defaultValue={100000}
//                                         />
//                                     </div>
//                                 </div>
//                                 <div className="form-group">
//                                     <label htmlFor="amount">Interest Rate Per Year :</label>
//                                     <div className="input-group mb-4">
//                                         <div className="input-group-prepend">
//                                             <div className="input-group-text">%</div>
//                                         </div>
//                                         <input
//                                             type="text"
//                                             className="form-control"
//                                             id="interest"
//                                             defaultValue="10.5"
//                                         />
//                                     </div>
//                                 </div>
//                                 <div className="form-group">
//                                     <label htmlFor="amount">Loan Tenure :</label>
//                                     <div className="input-group mb-4">
//                                         <div className="input-group-prepend">
//                                             <div className="input-group-text">Months</div>
//                                         </div>
//                                         <input
//                                             type="text"
//                                             className="form-control"
//                                             id="tenure"
//                                             defaultValue={36}
//                                         />
//                                     </div>
//                                 </div>
//                             </form>
//                         </div>
//                     </Col>
//                     <Col lg={5}>
//                         <div className="emi-details">
//                             <div className="emi-details-head">
//                                 <h6>Your EMI Details</h6>
//                             </div>
//                             <div className="emi-details-box">
//                                 <p style={{ marginBottom: 5 }}>Loan Amount :</p>
//                                 <h5><span>$</span>5247</h5>
//                             </div>
//                             <div className="emi-details-box">
//                                 <Row>
//                                     <Col lg={6}>
//                                         <p style={{ marginBottom: 5 }}>Total Interest Payable :</p>
//                                         <h5><span>$</span>52470</h5>
//                                     </Col>
//                                     <Col lg={6}>
//                                         <p style={{ marginBottom: 15 }}>Loan Tenure :</p>
//                                         <h5>36 Months</h5>
//                                     </Col>
//                                 </Row>
//                             </div>
//                             <div className="emi-details-box no-bottom-border">
//                                 <p style={{ marginBottom: 5 }}>Total Payment</p>
//                                 <h5><span>$</span>152470</h5>
//                             </div>
//                         </div>
//                         <button className="schedule">Schedule</button>
//                     </Col>
//                 </Row>
//             </section>
//         </>
//     )
// }

// export default EmiCalculatorData


import React, { useState, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const EmiCalculatorData = () => {
  const [loanAmount, setLoanAmount] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [interestRateInput, setInterestRateInput] = useState('');
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
    { name: 'Principal Amount', value: loanAmount > 0 ? loanAmount : 0, color: '#2E8B57' },
    { name: 'Total Interest', value: totalInterest > 0 ? totalInterest : 0, color: '#4169E1' }
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
    <div className="car-loan-emi-calculator">
      <section className="sidecontent">
        <h3>Car Loan EMI Calculator</h3>
        <p style={{ marginTop: '60px' }}>
          Plan your car purchase effectively with our Car Loan EMI Calculator. 
          Understand your monthly installments, total interest, and total payment 
          before making a financial commitment to your dream car.
        </p>
        <Row style={{ justifyContent: 'space-evenly' }}>
          <Col lg={5}>
            <div>
              <form className="form-calculator">
                <div className="form-group">
                  <label htmlFor="amount">Car Loan Amount:</label>
                  <div className="input-group mb-4">
                    <input
                      type="text"
                      className="form-control"
                      id="amount"
                      value={loanAmount === 0 ? '' : loanAmount}
                      onChange={(e) => handleInputChange(e, setLoanAmount)}
                      placeholder="Enter car loan amount"
                    />
                    <div className="input-group-append">
                      <div className="input-group-text">₹</div>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="interest">Car Loan Interest Rate Per Year:</label>
                  <div className="input-group mb-4">
                    <input
                      type="text"
                      className="form-control"
                      id="interest"
                      value={interestRateInput}
                      onChange={handleInterestChange}
                      placeholder="Enter interest rate (e.g. 9.5)"
                    />
                    <div className="input-group-append">
                      <div className="input-group-text">%</div>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="tenure">Car Loan Tenure:</label>
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
                <h6>Your Car Loan EMI Details</h6>
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
        
        {/* Chart Section */}
        <Row className="mt-4">
          <Col lg={12}>
            <div className="chart-container" style={{ height: '320px', marginTop: '20px', border: '1px solid #eee', borderRadius: '8px', padding: '20px', marginBottom:'40px' }}>
              <h6 className="text-center mb-3">Car Loan Graphical View</h6>
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
                    <span style={{ display: 'inline-block', width: '16px', height: '16px', backgroundColor: '#2E8B57', marginRight: '5px', verticalAlign: 'middle' }}></span>
                    <span style={{ fontWeight: 'bold' }}>Principal: ₹{loanAmount.toFixed(2)}</span>
                  </div>
                  <div className="mx-4">
                    <span style={{ display: 'inline-block', width: '16px', height: '16px', backgroundColor: '#4169E1', marginRight: '5px', verticalAlign: 'middle' }}></span>
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