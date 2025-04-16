import { Breadcrumb, Col, Container, Row } from "react-bootstrap"
import Accordion from 'react-bootstrap/Accordion';

import IntroDuctionData from "./OverviewData/IntroductionData";
import { useState } from "react";
import EligibilityData from "./OverviewData/EligibilityData";
import DocumentRequiredData from "./OverviewData/DocumentRequiredData";
import FeesandChargesData from "./OverviewData/FeesandChargesData";
import FaqData from "./OverviewData/FaqData";
import EmiCalculatorData from "./OverviewData/EmiCalculatorData";

import personalimg from "../../../assets/loans/carloan.jpeg"

const Carloan = () => {
    const [data, setData] = useState({
        Introduction: true,
        Eligibility: false,
        DocumentRequired: false,
        EMICalculator: false,
        FeesandCharges: false,
        FAQs: false,
    });
    return (
        <div className="mb-5">
            <img className="w-100 mb-4 mt-4" src={personalimg} alt="" />
            <Container fluid>
                <Breadcrumb className="breadcrumsvss">
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item href="#">
                        Loans
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>Car Loan</Breadcrumb.Item>
                </Breadcrumb>
                <Row>
                    <Col lg={3} md={12} sm={12}>
                        <div className="sidebar">
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Car Loan Overview</Accordion.Header>
                                    <Accordion.Body>
                                        <ul className="loanlists">
                                            <li><a
                                                className={`${data.Introduction && 'active'}`}
                                                style={{ cursor: 'pointer' }}
                                                onClick={() => {
                                                    setData((prev) => ({ ...Object.fromEntries(Object.keys(prev).map(key => [key, key === 'Introduction'])) }));
                                                }}>Overview</a></li>
                                            <li><a
                                                className={`${data.Eligibility && 'active'}`}
                                                style={{ cursor: 'pointer' }}
                                                onClick={() => {
                                                    setData((prev) => ({ ...Object.fromEntries(Object.keys(prev).map(key => [key, key === 'Eligibility'])) }));

                                                }}>Eligibility</a></li>
                                            <li><a
                                                className={`${data.DocumentRequired && 'active'}`}
                                                style={{ cursor: 'pointer' }}
                                                onClick={() => {
                                                    setData((prev) => ({ ...Object.fromEntries(Object.keys(prev).map(key => [key, key === 'DocumentRequired'])) }));
                                                }}>Document Required</a></li>
                                            <li><a className={`${data.EMICalculator && 'active'}`}
                                                style={{ cursor: 'pointer' }}
                                                onClick={() => {
                                                    setData((prev) => ({ ...Object.fromEntries(Object.keys(prev).map(key => [key, key === 'EMICalculator'])) }));
                                                }}>EMI Calculator</a></li>
                                            <li><a className={`${data.FeesandCharges && 'active'}`}
                                                style={{ cursor: 'pointer' }}
                                                onClick={() => {
                                                    setData((prev) => ({ ...Object.fromEntries(Object.keys(prev).map(key => [key, key === 'FeesandCharges'])) }));
                                                }}>Fees and Charges</a></li>
                                            <li><a
                                                className={`${data.FAQs && 'active'}`}
                                                style={{ cursor: 'pointer' }}
                                                onClick={() => {
                                                    setData((prev) => ({ ...Object.fromEntries(Object.keys(prev).map(key => [key, key === 'FAQs'])) }));
                                                }}>FAQs</a></li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </Col>
                    <Col lg={9} md={12} sm={12}>
                        {data.Introduction && (<IntroDuctionData />)}
                        {data.Eligibility && (<EligibilityData />)}
                        {data.EMICalculator && (<EmiCalculatorData />)}
                        {data.DocumentRequired && (<DocumentRequiredData />)}
                        {data.FeesandCharges && (<FeesandChargesData />)}
                        {data.FAQs && (<FaqData />)}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Carloan
