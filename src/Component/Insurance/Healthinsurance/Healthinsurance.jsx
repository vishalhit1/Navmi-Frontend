import { Breadcrumb, Col, Container, Row } from "react-bootstrap"
import Accordion from 'react-bootstrap/Accordion';

import IntroDuctionData from "./OverviewData/IntroductionData";
import { useState } from "react";
import Keyfeatures from "./OverviewData/Keyfeatures";
import DocumentRequiredData from "./OverviewData/DocumentRequiredData";
import FaqData from "./OverviewData/FaqData";
import Insurancetype from "./OverviewData/Insurancetype";

import personalimg from "../../../assets/loans/health.jpeg"
const Healthinsurance = () => {
    const [data, setData] = useState({
        Introduction: true,
        Keyfeatures: false,
        Buyinsurance: false,
        RightCoverage: false,
        DocumentRequired: false,
        Insurancetype: false,
        Dosdont: false,
        FAQs: false,
    });
    return (
        <div className="mb-5">
            <img className="w-100 mb-4 mt-4" src={personalimg} alt="" />
            <Container fluid>
                <Breadcrumb className="breadcrumsvss">
                    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                    <Breadcrumb.Item href="#">
                        Insurance
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>Health Insurance</Breadcrumb.Item>
                </Breadcrumb>
                <Row>
                    <Col lg={3} md={12} sm={12}>
                        <div className="sidebar">
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Health Insurance Overview</Accordion.Header>
                                    <Accordion.Body>
                                        <ul className="loanlists">
                                            <li><a
                                                className={`${data.Introduction && 'active'}`}
                                                style={{ cursor: 'pointer' }}
                                                onClick={() => {
                                                    setData((prev) => ({ ...Object.fromEntries(Object.keys(prev).map(key => [key, key === 'Introduction'])) }));
                                                }}>Overview</a></li>
                                            <li><a
                                                className={`${data.Keyfeatures && 'active'}`}
                                                style={{ cursor: 'pointer' }}
                                                onClick={() => {
                                                    setData((prev) => ({ ...Object.fromEntries(Object.keys(prev).map(key => [key, key === 'Keyfeatures'])) }));

                                                }}>Key Features and Benefits</a></li>
                                            <li><a className={`${data.DocumentRequired && 'active'}`}
                                                style={{ cursor: 'pointer' }}
                                                onClick={() => {
                                                    setData((prev) => ({ ...Object.fromEntries(Object.keys(prev).map(key => [key, key === 'DocumentRequired'])) }));
                                                }}>Document List for Health Insurance</a></li>
                                            <li><a
                                                className={`${data.Insurancetype && 'active'}`}
                                                style={{ cursor: 'pointer' }}
                                                onClick={() => {
                                                    setData((prev) => ({ ...Object.fromEntries(Object.keys(prev).map(key => [key, key === 'Insurancetype'])) }));
                                                }}>Types of Health Insurance Plans Offered</a></li>
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
                        {data.Keyfeatures && (<Keyfeatures />)}
                        {data.Insurancetype && (<Insurancetype />)}
                        {data.DocumentRequired && (<DocumentRequiredData />)}
                        {data.FAQs && (<FaqData />)}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Healthinsurance
