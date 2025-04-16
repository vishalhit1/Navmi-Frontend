import ApplyLoan from "../../Personalloans/ApplyLoan"
import { Col, Row } from "react-bootstrap"
const EligibilityData = () => {
    return (
        <>
            <ApplyLoan />
            <section className="sidecontent">
                <h3>Key Features & Benefits</h3>
                <Row className="mt-5 pt-4">
                <Col lg={4} className="mb-5">
                    <div className="choose-box">
                        <h2>Loan Amount: Up to ₹50 Lakhs</h2>
                    </div>
                </Col>
                <Col lg={4} className="mb-5">
                    <div className="choose-box">
                        <h2>Minimal Documentation & Quick Processing</h2>
                    </div>
                </Col>
                <Col lg={4} className="mb-5">
                    <div className="choose-box">
                        <h2>Competitive Interest Rates</h2>
                    </div>
                </Col>
                <Col lg={4} className="mb-5">
                    <div className="choose-box">
                        <h2>Collateral-Free Loan Options Available</h2>
                    </div>
                </Col>
                <Col lg={4} className="mb-5">
                    <div className="choose-box">
                        <h2>Tenure Up to 7 Years</h2>
                    </div>
                </Col>
            </Row>
            </section>
        </>
    )
}

export default EligibilityData
