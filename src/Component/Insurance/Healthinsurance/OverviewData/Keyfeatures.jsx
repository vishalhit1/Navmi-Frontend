import ApplyLoan from "../ApplyLoan"
import { Col, Row } from "react-bootstrap"
const Keyfeatures = () => {
    return (
        <>
            <ApplyLoan />
            <section className="sidecontent">
                <h3>Key Features and Benefits</h3>
                <Row className="mt-5">
                    <Col lg={4} className="mb-5">
                        <div className="choose-box">
                            <h2>In-Hospitalization Coverage</h2>
                            <p>
                                Health insurance plans cover a range of hospitalization costs, including room rent, surgical fees, doctor’s charges, and nursing expenses.
                            </p>
                        </div>
                    </Col>
                    <Col lg={4} className="mb-5">
                        <div className="choose-box">
                            <h2>Pre- and Post-Hospitalization Benefits</h2>
                            <p>
                                Many policies also include coverage for expenses incurred before and after hospitalization, such as diagnostic tests and follow-up visits.
                            </p>
                        </div>
                    </Col>
                    <Col lg={4} className="mb-5">
                        <div className="choose-box">
                            <h2>Critical Illness Coverage</h2>
                            <p>
                                Additional protection for serious illnesses like cancer or heart disease ensures that policyholders receive financial assistance during critical health challenges.
                            </p>
                        </div>
                    </Col>
                    <Col lg={4} className="mb-5">
                        <div className="choose-box">
                            <h2>Cashless Treatment</h2>
                            <p>
                            Through a network of partner hospitals, policyholders can access cashless treatment, where the insurer directly pays the hospital bills.
                            </p>
                        </div>
                    </Col>
                    <Col lg={4} className="mb-5">
                        <div className="choose-box">
                            <h2>Family Floater Plans</h2>
                            <p>
                                These plans offer coverage for multiple family members under one policy, making them a cost-effective option for families.
                            </p>
                        </div>
                    </Col>
                </Row>
            </section>
        </>
    )
}

export default Keyfeatures
