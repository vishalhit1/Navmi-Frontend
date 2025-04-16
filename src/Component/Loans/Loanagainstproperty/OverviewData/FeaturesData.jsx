import ApplyLoan from "../ApplyLoan"
import { Col, Row } from "react-bootstrap"
const FeaturesData = () => {
    return (
        <>
            <ApplyLoan />
            <section className="sidecontent">
                <h3>Choosing the Right Coverage</h3>
            </section>
            <Row className="mt-5 pt-4">
                <Col lg={4} className="mb-5">
                    <div className="choose-box">
                        <h2>🏡 High Loan Amount</h2>
                        <p>
                            Avail a substantial loan amount against your property’s value.
                        </p>
                    </div>
                </Col>
                <Col lg={4} className="mb-5">
                    <div className="choose-box">
                        <h2>💸 Low Interest Rates</h2>
                        <p>
                            Enjoy competitive interest rates, making repayment affordable.
                        </p>
                    </div>
                </Col>
                <Col lg={4} className="mb-5">
                    <div className="choose-box">
                        <h2>🕒 Flexible Tenure</h2>
                        <p>
                            Choose from flexible repayment tenures up to 20 years.
                        </p>
                    </div>
                </Col>
                <Col lg={4} className="mb-5">
                    <div className="choose-box">
                        <h2>📄 Minimal Documentation</h2>
                        <p>
                            Quick approval with minimal paperwork and hassle-free processing.
                        </p>
                    </div>
                </Col>
                <Col lg={4} className="mb-5">
                    <div className="choose-box">
                        <h2>🔁 Balance Transfer Option</h2>
                        <p>
                            Easily transfer your existing loan for better terms and lower interest rates.
                        </p>
                    </div>
                </Col>
                <Col lg={4} className="mb-5">
                    <div className="choose-box">
                        <h2>🔒 Secured Loan</h2>
                        <p>
                            Your property acts as collateral, ensuring lower interest rates and higher loan amounts.
                        </p>
                    </div>
                </Col>
                <Col lg={4} className="mb-5">
                    <div className="choose-box">
                        <h2>🚀 Fast Processing</h2>
                        <p>
                            Swift loan processing and disbursal to meet your urgent needs.
                        </p>
                    </div>
                </Col>
                <Col lg={4} className="mb-5">
                    <div className="choose-box">
                        <h2>🔄 Multiple Property Types Accepted</h2>
                        <p>
                            Residential, commercial, and industrial properties accepted as collateral.
                        </p>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default FeaturesData
