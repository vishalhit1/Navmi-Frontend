import { Breadcrumb, Col, Container, Row } from "react-bootstrap"
import Accordion from 'react-bootstrap/Accordion';
import IntroDuctionData from "./OverviewData/IntroductionData";
import { useState } from "react";
import EligibilityData from "./OverviewData/EligibilityData";
import InterestRateData from "./OverviewData/InterestRateData";
import DocumentRequiredData from "./OverviewData/DocumentRequiredData";
import FeesandChargesData from "./OverviewData/FeesandChargesData";
import ReviewsData from "./OverviewData/ReviewsData";
import FaqData from "./OverviewData/FaqData";
import EmiCalculatorData from "./OverviewData/EmiCalculatorData";
import HDFCPersonalLoanData from "./BankLoan.jsx/HDFCPersonalLoanData";
import DocumentSalaried from "./OverviewData/DocumentSalaried";
import DocumentSelfEmployed from "./OverviewData/DocumentSelfEmployed"
import personalimg from "../../../assets/loans/lap.jpeg"
import FeaturesData from "./OverviewData/FeaturesData";

const Loanagainstproperty = () => {
    const [data, setData] = useState({
        Introduction: true,
        Eligibility: false,
        InterestRate: false,
        DocumentRequired: false,
        DocumentSalaried: false,
        DocumentSelfEmployed: false,
        EMICalculator: false,
        FeaturesData: false,
        FeesandCharges: false,
        Reviews: false,
        FAQs: false,
        HDFCPersonalLoan: false,
    });

    const handleSalariedClick = () => {
        setData((prev) => ({ ...Object.fromEntries(Object.keys(prev).map(key => [key, key === 'DocumentSalaried'])) }));
    };

    const handleSelfEmployedClick = () => {
        setData((prev) => ({ ...Object.fromEntries(Object.keys(prev).map(key => [key, key === 'DocumentSelfEmployed'])) }));
    };
    return (
        <div className="mb-5 new-css">
            <img className="w-100 image-css-abcds" src={personalimg} alt="" />
            <Container fluid>
                <Breadcrumb className="breadcrumsvss">
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item href="#">
                        Loans
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>Loan Aganist Property</Breadcrumb.Item>
                </Breadcrumb>
                <Row>
                    <Col lg={3} md={12} sm={12}>
                        <div className="sidebar">
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Loan Against Property Overview</Accordion.Header>
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
                                                className={`${data.FeaturesData && 'active'}`}
                                                style={{ cursor: 'pointer' }}
                                                onClick={() => {
                                                    setData((prev) => ({ ...Object.fromEntries(Object.keys(prev).map(key => [key, key === 'FeaturesData'])) }));
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
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Document Required</Accordion.Header>
                                    <Accordion.Body>
                                        <ul className="loanlists">
                                            <li>
                                                <a
                                                    className={`${data.DocumentSalaried && 'active'}`}
                                                    style={{ cursor: 'pointer' }}
                                                    onClick={handleSalariedClick}>
                                                    Salaried
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className={`${data.DocumentSelfEmployed && 'active'}`}
                                                    style={{ cursor: 'pointer' }}
                                                    onClick={handleSelfEmployedClick}>
                                                    Self Employed
                                                </a>
                                            </li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                                {/* <Accordion.Item eventKey="2">
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
                        {data.InterestRate && (<InterestRateData />)}
                        {data.DocumentRequired && (<DocumentRequiredData />)}
                        {data.DocumentSalaried && (<DocumentSalaried type="salaried" />)}
                        {data.DocumentSelfEmployed && (<DocumentSelfEmployed type="selfEmployed" />)}
                        {data.FeesandCharges && (<FeesandChargesData />)}
                        {data.FeaturesData && (<FeaturesData />)}
                        {data.Reviews && (<ReviewsData />)}
                        {data.FAQs && (<FaqData />)}
                        {data.HDFCPersonalLoan && (<HDFCPersonalLoanData />)}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Loanagainstproperty
