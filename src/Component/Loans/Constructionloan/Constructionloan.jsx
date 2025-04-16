import { Breadcrumb, Col, Container, Row } from "react-bootstrap"
import Accordion from 'react-bootstrap/Accordion';

import IntroDuctionData from "./OverviewData/IntroductionData";
import { useState } from "react";
import EligibilityData from "./OverviewData/EligibilityData";
import InterestRateData from "./OverviewData/InterestRateData";
import DocumentRequiredData from "./OverviewData/DocumentRequiredData";
import FeesandChargesData from "./OverviewData/FeesandChargesData";
import FeaturesData from "./OverviewData/FeaturesData";
import ReviewsData from "./OverviewData/ReviewsData";
import FaqData from "./OverviewData/FaqData";
import EmiCalculatorData from "./OverviewData/EmiCalculatorData";
import HDFCPersonalLoanData from "./BankLoan.jsx/HDFCPersonalLoanData";
import PersonalLoanAmount from "./LoanAmount/PersonalLoanAmount";

import personalimg from "../../../assets/loans/constloan.jpeg"

const Constructionloan = () => {
    const [data, setData] = useState({
        Introduction: true,
        Eligibility: false,
        InterestRate: false,
        DocumentRequired: false,
        EMICalculator: false,
        FeesandCharges: false,
        Features: false,
        Reviews: false,
        FAQs: false,
        HDFCPersonalLoan: false,
        PersonalLoanAmount: false,
    });
    return (
        <div className="mb-5">
            <img className="w-100 mb-4 mt-4" src={personalimg} alt="" />
            <Container fluid>
                <Breadcrumb className="breadcrumsvss">
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item href="#">Loans</Breadcrumb.Item>
                    <Breadcrumb.Item active>Construction Loan</Breadcrumb.Item>
                </Breadcrumb>
                <Row>
                    <Col lg={3} md={12} sm={12}>
                        <div className="sidebar">
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Construction Loan Overview</Accordion.Header>
                                    <Accordion.Body>
                                        <ul className="loanlists">
                                            <li><a
                                                className={`${data.Introduction && 'active'}`}
                                                style={{ cursor: 'pointer' }}
                                                onClick={() => {
                                                    setData((prev) => ({ ...Object.fromEntries(Object.keys(prev).map(key => [key, key === 'Introduction'])) }));
                                                }}>Overview</a></li>
                                            <li><a
                                                className={`${data.Features && 'active'}`}
                                                style={{ cursor: 'pointer' }}
                                                onClick={() => {
                                                    setData((prev) => ({ ...Object.fromEntries(Object.keys(prev).map(key => [key, key === 'Features'])) }));
                                                }}>Key Features</a></li>
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
                                                }}>Benefits of Construction Loans</a></li>
                                            <li><a className={`${data.FeesandCharges && 'active'}`}
                                                style={{ cursor: 'pointer' }}
                                                onClick={() => {
                                                    setData((prev) => ({ ...Object.fromEntries(Object.keys(prev).map(key => [key, key === 'FeesandCharges'])) }));
                                                }}>How Construction Loans Work?</a></li>
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
                        {data.InterestRate && (<InterestRateData />)}
                        {data.DocumentRequired && (<DocumentRequiredData />)}
                        {data.FeesandCharges && (<FeesandChargesData />)}
                        {data.Features && (<FeaturesData />)}
                        {data.Reviews && (<ReviewsData />)}
                        {data.FAQs && (<FaqData />)}
                        {data.HDFCPersonalLoan && (<HDFCPersonalLoanData />)}
                        {data.PersonalLoanAmount && (<PersonalLoanAmount />)}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Constructionloan
