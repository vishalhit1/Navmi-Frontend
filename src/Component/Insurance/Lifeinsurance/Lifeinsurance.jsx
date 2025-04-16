import { Breadcrumb, Col, Container, Row } from "react-bootstrap"
import Accordion from 'react-bootstrap/Accordion';

import IntroDuctionData from "./OverviewData/IntroductionData";
import { useState } from "react";
import Keyfeatures from "./OverviewData/Keyfeatures";
import DocumentRequiredData from "./OverviewData/DocumentRequiredData";
import Dosdont from "./OverviewData/Dosdont";
import FaqData from "./OverviewData/FaqData";
import Insurancetype from "./OverviewData/Insurancetype";

import personalimg from "../../../assets/loans/lifeins.jpeg"
import RightCoverage from "./OverviewData/Rightcoverage";
import Buyinsurance from "./OverviewData/Buyinsurance";

const Lifeinsurance = () => {
    const [data, setData] = useState({
        Introduction: true,
        Keyfeatures: false,
        Buyinsurance:false,
        RightCoverage:false,
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
                    <Breadcrumb.Item active>Life Insurance</Breadcrumb.Item>
                </Breadcrumb>
                <Row>
                    <Col lg={3} md={12} sm={12}>
                        <div className="sidebar">
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Life Insurance Overview</Accordion.Header>
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
                                            <li><a
                                                className={`${data.Insurancetype && 'active'}`}
                                                style={{ cursor: 'pointer' }}
                                                onClick={() => {
                                                    setData((prev) => ({ ...Object.fromEntries(Object.keys(prev).map(key => [key, key === 'Insurancetype'])) }));
                                                }}>Types of Life Insurance Plans Offered</a></li>
                                            <li><a className={`${data.DocumentRequired && 'active'}`}
                                                style={{ cursor: 'pointer' }}
                                                onClick={() => {
                                                    setData((prev) => ({ ...Object.fromEntries(Object.keys(prev).map(key => [key, key === 'DocumentRequired'])) }));
                                                }}>Document List for Life Insurance</a></li>
                                            <li><a className={`${data.Buyinsurance && 'active'}`}
                                                style={{ cursor: 'pointer' }}
                                                onClick={() => {
                                                    setData((prev) => ({ ...Object.fromEntries(Object.keys(prev).map(key => [key, key === 'Buyinsurance'])) }));
                                                }}>Who Should Buy Life Insurance?</a></li>
                                            <li><a className={`${data.RightCoverage && 'active'}`}
                                                style={{ cursor: 'pointer' }}
                                                onClick={() => {
                                                    setData((prev) => ({ ...Object.fromEntries(Object.keys(prev).map(key => [key, key === 'RightCoverage'])) }));
                                                }}>Choosing the Right Coverage</a></li>
                                            <li><a className={`${data.Dosdont && 'active'}`}
                                                style={{ cursor: 'pointer' }}
                                                onClick={() => {
                                                    setData((prev) => ({ ...Object.fromEntries(Object.keys(prev).map(key => [key, key === 'Dosdont'])) }));
                                                }}>Dos and Don'ts of Life Insurance Policies</a></li>
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
                        {data.RightCoverage && (<RightCoverage />)}
                        {data.Buyinsurance && (<Buyinsurance />)}
                        {data.Insurancetype && (<Insurancetype />)}
                        {data.DocumentRequired && (<DocumentRequiredData />)}
                        {data.Dosdont && (<Dosdont />)}
                        {data.FAQs && (<FaqData />)}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Lifeinsurance
