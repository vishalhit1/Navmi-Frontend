import { Breadcrumb, Col, Container, Row } from "react-bootstrap"
import Accordion from 'react-bootstrap/Accordion';

import IntroDuctionData from "./OverviewData/IntroductionData";
import { useState } from "react";
import EligibilityData from "./OverviewData/EligibilityData";
import DocumentRequiredData from "./OverviewData/DocumentRequiredData";
import EmiCalculatorData from "./OverviewData/EmiCalculatorData";

import personalimg from "../../../assets/loans/workingloan.jpeg"

const Workingcapital = () => {
    const [data, setData] = useState({
        Introduction: true,
        Eligibility: false,
        DocumentRequired: false,
    });
    return (
        <div className="mb-5">
            <img className="w-100 mb-4 mt-4" src={personalimg} alt="" />
            <Container fluid>
            <Breadcrumb className="breadcrumsvss">
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item href="#">Loans</Breadcrumb.Item>
                    <Breadcrumb.Item active>Working Capital</Breadcrumb.Item>
                </Breadcrumb>
                <Row>
                    <Col lg={3} md={12} sm={12}>
                        <div className="sidebar">
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Working Capital Overview</Accordion.Header>
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
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Workingcapital
