import { Row, Col } from "react-bootstrap"
import Dollar from "../../../../assets/Homepage/dollar.svg"
import ApplyLoan from "../../Personalloans/ApplyLoan"
const FeaturesData = () => {
    return (
        <>
            <ApplyLoan />
            <section className="sidecontent">
                <h3>Features</h3>
                <Row className="mt-5">
                    <Col lg={4} md={12} sm={12} className="mb-5">
                        <div className="choose-box">
                            <h2>Stage-wise Disbursement</h2>
                            <p>Funds are released in increments, known as draws, based on the completion of specific construction milestones such as laying the foundation, framing, and roofing. This minimizes financial strain by ensuring that money is available when needed.</p>
                        </div>
                    </Col>
                    <Col lg={4} md={12} sm={12} className="mb-5">
                        <div className="choose-box">
                            <h2>Interest-Only Payments</h2>
                            <p>During the construction phase, borrowers may only need to make interest payments on the disbursed amount, which allows for better cash flow management while the home is being built.</p>
                        </div>
                    </Col>
                    <Col lg={4} md={12} sm={12} className="mb-5">
                        <div className="choose-box">
                            <h2>Short-Term Duration</h2>
                            <p>Construction loans usually have a term of one year. Once the construction is finished, borrowers often switch to a long-term mortgage to repay the loan.</p>
                        </div>
                    </Col>
                </Row>
            </section>
        </>
    )
}

export default FeaturesData
