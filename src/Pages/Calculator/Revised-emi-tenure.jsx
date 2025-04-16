import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Tabs, Tab, Breadcrumb } from 'react-bootstrap';

function RevisedEMICalculator() {
    const [activeTab, setActiveTab] = useState('prepayment');
    const [outstandingAmount, setOutstandingAmount] = useState('');
    const [currentInterestRate, setCurrentInterestRate] = useState('');
    const [currentEMI, setCurrentEMI] = useState('');
    const [prepaymentAmount, setPrepaymentAmount] = useState('');
    const [revisedInterestRate, setRevisedInterestRate] = useState('');
    const [emiChangeResult, setEmiChangeResult] = useState(null);
    const [tenureChangeResult, setTenureChangeResult] = useState(null);

    // Format rupee with commas (Indian number system)
    const formatRupee = (num) => {
        if (!num || isNaN(num)) return '₹ 0';
        return `₹ ${Number(num).toLocaleString('en-IN', { 
            maximumFractionDigits: 0, 
            minimumFractionDigits: 0 
        })}`;
    };

    // Strip rupee format for calculations
    const stripRupee = (value) => {
        if (typeof value === 'string') {
            return value.replace(/₹|,|\s/g, '');
        }
        return value;
    };

    // Handle input change with automatic formatting for rupee fields
    const handleAmountChange = (value, setter) => {
        const strippedValue = stripRupee(value);
        setter(strippedValue);
    };

    const calculatePrepayment = () => {
        if (!outstandingAmount || !currentInterestRate || !currentEMI || !prepaymentAmount) {
            return;
        }

        const P = parseFloat(stripRupee(outstandingAmount));
        const prepay = parseFloat(stripRupee(prepaymentAmount));
        const reducedPrincipal = P - prepay;
        const r = parseFloat(currentInterestRate) / 12 / 100;
        const emi = parseFloat(stripRupee(currentEMI));

        // Old Tenure Calculation (using formula: N = -log(1 - P*r/EMI) / log(1+r))
        const nOld = Math.ceil(-Math.log(1 - (P * r / emi)) / Math.log(1 + r));

        // New EMI with same tenure
        const newEmi = (reducedPrincipal * r * Math.pow(1 + r, nOld)) / (Math.pow(1 + r, nOld) - 1);

        // New tenure with same EMI (using the same formula)
        const newTenure = Math.ceil(-Math.log(1 - (reducedPrincipal * r / emi)) / Math.log(1 + r));

        setEmiChangeResult({
            newEMI: Math.round(newEmi),
            oldEMI: Math.round(emi),
            difference: Math.round(emi - newEmi),
        });

        setTenureChangeResult({
            newTenure: newTenure,
            oldTenure: nOld,
            difference: nOld - newTenure,
        });
    };

    const calculateROIChange = () => {
        if (!outstandingAmount || !currentInterestRate || !currentEMI || !revisedInterestRate) {
            return;
        }

        const P = parseFloat(stripRupee(outstandingAmount));
        const emi = parseFloat(stripRupee(currentEMI));
        const rOld = parseFloat(currentInterestRate) / 12 / 100;
        const rNew = parseFloat(revisedInterestRate) / 12 / 100;

        // Old Tenure Calculation
        const nOld = Math.ceil(-Math.log(1 - (P * rOld / emi)) / Math.log(1 + rOld));

        // New EMI with same tenure
        const newEmi = (P * rNew * Math.pow(1 + rNew, nOld)) / (Math.pow(1 + rNew, nOld) - 1);

        // New tenure with same EMI
        const newTenure = Math.ceil(-Math.log(1 - (P * rNew / emi)) / Math.log(1 + rNew));

        setEmiChangeResult({
            newEMI: Math.round(newEmi),
            oldEMI: Math.round(emi),
            difference: Math.round(emi - newEmi),
        });

        setTenureChangeResult({
            newTenure: newTenure,
            oldTenure: nOld,
            difference: nOld - newTenure,
        });
    };

    return (
        <>
            <section className="introduction">
                <h3>Revised EMI & Tenure Calculator</h3>
            </section>
            <Breadcrumb className="mt-3 ms-4">
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="/emi-calculator-list">Emi Calculator List</Breadcrumb.Item>
                <Breadcrumb.Item active>Revised EMI & Tenure Calculator</Breadcrumb.Item>
            </Breadcrumb>
            <Container className="mt-4">
                <Row className="justify-content-center">
                    <Col md={6}>
                        <div className='tenure-calculator mb-5'>
                            <Tabs activeKey={activeTab} onSelect={(tab) => setActiveTab(tab)} className="mb-3 dssdsd">
                                <Tab eventKey="prepayment" title="Pre Payment">
                                    <Card className="p-4">
                                        <Row>
                                            <Col md={6}>
                                                <Form.Group>
                                                    <Form.Label>Outstanding Amount</Form.Label>
                                                    <Form.Control 
                                                        type="text" 
                                                        value={outstandingAmount ? formatRupee(outstandingAmount).replace('₹ ', '') : ''} 
                                                        onChange={(e) => handleAmountChange(e.target.value, setOutstandingAmount)}
                                                        onBlur={(e) => setOutstandingAmount(stripRupee(e.target.value))}
                                                        placeholder="₹"
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group>
                                                    <Form.Label>Current Interest Rate (%)</Form.Label>
                                                    <Form.Control 
                                                        type="number" 
                                                        value={currentInterestRate}
                                                        onChange={(e) => setCurrentInterestRate(e.target.value)} 
                                                    />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row className="mt-3">
                                            <Col md={6}>
                                                <Form.Group>
                                                    <Form.Label>Current EMI</Form.Label>
                                                    <Form.Control 
                                                        type="text" 
                                                        value={currentEMI ? formatRupee(currentEMI).replace('₹ ', '') : ''} 
                                                        onChange={(e) => handleAmountChange(e.target.value, setCurrentEMI)}
                                                        onBlur={(e) => setCurrentEMI(stripRupee(e.target.value))}
                                                        placeholder="₹"
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group>
                                                    <Form.Label>Prepayment Amount</Form.Label>
                                                    <Form.Control 
                                                        type="text" 
                                                        value={prepaymentAmount ? formatRupee(prepaymentAmount).replace('₹ ', '') : ''} 
                                                        onChange={(e) => handleAmountChange(e.target.value, setPrepaymentAmount)}
                                                        onBlur={(e) => setPrepaymentAmount(stripRupee(e.target.value))}
                                                        placeholder="₹"
                                                    />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Button 
                                            className="calculate-results1 btn btn-primary mt-3" 
                                            onClick={calculatePrepayment}
                                            disabled={!outstandingAmount || !currentInterestRate || !currentEMI || !prepaymentAmount}
                                        >
                                            Calculate Details
                                        </Button>
                                    </Card>
                                </Tab>

                                <Tab eventKey="roi" title="ROI Change">
                                    <Card className="p-4">
                                        <Row>
                                            <Col md={6}>
                                                <Form.Group>
                                                    <Form.Label>Outstanding Amount</Form.Label>
                                                    <Form.Control 
                                                        type="text" 
                                                        value={outstandingAmount ? formatRupee(outstandingAmount).replace('₹ ', '') : ''} 
                                                        onChange={(e) => handleAmountChange(e.target.value, setOutstandingAmount)}
                                                        onBlur={(e) => setOutstandingAmount(stripRupee(e.target.value))}
                                                        placeholder="₹"
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group>
                                                    <Form.Label>Current Interest Rate (%)</Form.Label>
                                                    <Form.Control 
                                                        type="number" 
                                                        value={currentInterestRate}
                                                        onChange={(e) => setCurrentInterestRate(e.target.value)} 
                                                    />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row className="mt-3">
                                            <Col md={6}>
                                                <Form.Group>
                                                    <Form.Label>Current EMI</Form.Label>
                                                    <Form.Control 
                                                        type="text" 
                                                        value={currentEMI ? formatRupee(currentEMI).replace('₹ ', '') : ''} 
                                                        onChange={(e) => handleAmountChange(e.target.value, setCurrentEMI)}
                                                        onBlur={(e) => setCurrentEMI(stripRupee(e.target.value))}
                                                        placeholder="₹"
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>
                                                <Form.Group>
                                                    <Form.Label>Revised Interest Rate (%)</Form.Label>
                                                    <Form.Control 
                                                        type="number" 
                                                        value={revisedInterestRate}
                                                        onChange={(e) => setRevisedInterestRate(e.target.value)} 
                                                    />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Button 
                                            className="calculate-results1 btn btn-primary mt-3" 
                                            onClick={calculateROIChange}
                                            disabled={!outstandingAmount || !currentInterestRate || !currentEMI || !revisedInterestRate}
                                        >
                                            Calculate Details
                                        </Button>
                                    </Card>
                                </Tab>
                            </Tabs>
                        </div>
                    </Col>
                </Row>

                {emiChangeResult && (
                    <div className='loan-tenure-summary'>
                        <Card className="mt-4">
                            <Card.Header as="h4" className="text-center">If you want to change EMI then</Card.Header>
                            <Card.Body>
                                <div className="d-flex justify-content-around">
                                    <div className="text-center">
                                        <h5>New EMI</h5>
                                        <p>{formatRupee(emiChangeResult.newEMI)}</p>
                                    </div>
                                    <div className="text-center">
                                        <h5>Old EMI</h5>
                                        <p>{formatRupee(emiChangeResult.oldEMI)}</p>
                                    </div>
                                    <div className="text-center">
                                        <h5>Difference</h5>
                                        <p>{formatRupee(Math.abs(emiChangeResult.difference))}</p>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                )}
                
                {tenureChangeResult && (
                    <div className='loan-tenure-summary'>
                        <Card className="mt-4">
                            <Card.Header as="h4" className="text-center">If you want to change Tenure then</Card.Header>
                            <Card.Body>
                                <div className="d-flex justify-content-around">
                                    <div className="text-center">
                                        <h5>New Tenure</h5>
                                        <p>{tenureChangeResult.newTenure} Months</p>
                                    </div>
                                    <div className="text-center">
                                        <h5>Old Tenure</h5>
                                        <p>{tenureChangeResult.oldTenure} Months</p>
                                    </div>
                                    <div className="text-center">
                                        <h5>Difference</h5>
                                        <p>{Math.abs(tenureChangeResult.difference)} Months</p>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                )}
            </Container>
        </>
    );
}

export default RevisedEMICalculator;