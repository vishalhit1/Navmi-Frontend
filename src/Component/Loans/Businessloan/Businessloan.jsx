import { Breadcrumb, Col, Container, Row } from "react-bootstrap"
import Accordion from 'react-bootstrap/Accordion';
import IntroDuctionData from "./OverviewData/IntroductionData";
import { useState } from "react";
import EligibilityData from "./OverviewData/EligibilityData";
import DocumentRequiredData from "./OverviewData/DocumentRequiredData";
import FeesandChargesData from "./OverviewData/FeesandChargesData";
import FeaturesData from "./OverviewData/FeaturesData";
import ReviewsData from "./OverviewData/ReviewsData";
import FaqData from "./OverviewData/FaqData";
import EmiCalculatorData from "./OverviewData/EmiCalculatorData";
import HDFCPersonalLoanData from "./BankLoan.jsx/HDFCPersonalLoanData";

import personalimg from "../../../assets/loans/businessloan.jpeg"

const Businessloan = () => {
    const [data, setData] = useState({
        Introduction: true,
        Eligibility: false,
        DocumentRequired: false,
        EMICalculator: false,
        FeesandCharges: false,
        Features: false,
        Reviews: false,
        FAQs: false,
        HDFCPersonalLoan: false,
    });
    return (
        <div className="mb-5 new-css">
            <img className="w-100 image-css-abcds" src={personalimg} alt="" />
            <Container fluid>
                <Breadcrumb className="breadcrumsvss">
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item href="#">
                        Loans
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>Business Loan</Breadcrumb.Item>
                </Breadcrumb>
                <Row>
                    <Col lg={3} md={12} sm={12}>
                        <div className="sidebar">
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Business Loan Overview</Accordion.Header>
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
                                                className={`${data.Features && 'active'}`}
                                                style={{ cursor: 'pointer' }}
                                                onClick={() => {
                                                    setData((prev) => ({ ...Object.fromEntries(Object.keys(prev).map(key => [key, key === 'Features'])) }));
                                                }}>Features</a></li>
                                            <li><a
                                                className={`${data.Reviews && 'active'}`}
                                                style={{ cursor: 'pointer' }}
                                                onClick={() => {
                                                    setData((prev) => ({ ...Object.fromEntries(Object.keys(prev).map(key => [key, key === 'Reviews'])) }));
                                                }}>Reviews</a></li>
                                            <li><a
                                                className={`${data.FAQs && 'active'}`}
                                                style={{ cursor: 'pointer' }}
                                                onClick={() => {
                                                    setData((prev) => ({ ...Object.fromEntries(Object.keys(prev).map(key => [key, key === 'FAQs'])) }));
                                                }}>FAQs</a></li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                                {/* <Accordion.Item eventKey="1">
                                    <Accordion.Header>Banks and NBFCs</Accordion.Header>
                                    <Accordion.Body>
                                        <ul className="loanlists">
                                            <li><a
                                                className={`${data.HDFCPersonalLoan && 'active'}`}
                                                style={{ cursor: 'pointer' }}
                                                onClick={() => {
                                                    setData((prev) => ({ ...Object.fromEntries(Object.keys(prev).map(key => [key, key === 'HDFCPersonalLoan'])) }));
                                                }}>Banks and NBFCs ROI</a></li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item> */}
                            </Accordion>
                            <ul className="loanlists loans-abcss">
                                <li><a
                                    className={`${data.HDFCPersonalLoan && 'active'}`}
                                    style={{ cursor: 'pointer' }}
                                    onClick={() => {
                                        setData((prev) => ({ ...Object.fromEntries(Object.keys(prev).map(key => [key, key === 'HDFCPersonalLoan'])) }));
                                    }}>Banks and NBFCs ROI</a></li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg={9} md={12} sm={12}>
                        {data.Introduction && (<IntroDuctionData />)}
                        {data.Eligibility && (<EligibilityData />)}
                        {data.EMICalculator && (<EmiCalculatorData />)}
                        {data.DocumentRequired && (<DocumentRequiredData />)}
                        {data.FeesandCharges && (<FeesandChargesData />)}
                        {data.Features && (<FeaturesData />)}
                        {data.Reviews && (<ReviewsData />)}
                        {data.FAQs && (<FaqData />)}
                        {data.HDFCPersonalLoan && (<HDFCPersonalLoanData />)}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Businessloan
