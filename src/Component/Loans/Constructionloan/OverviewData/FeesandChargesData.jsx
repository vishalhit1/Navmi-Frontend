import { Row, Col } from "react-bootstrap"
import ApplyLoan from "../../Personalloans/ApplyLoan"
const FeesandChargesData = () => {
    return (
        <>
            <ApplyLoan />
            <section className="sidecontent">
                <h3>How Construction Loans Work ?</h3>
                <Row className="mt-5">
                    <Col lg={4} md={12} sm={12} className="mb-5">
                        <div className="choose-box">
                            <h2>Application Process</h2>
                            <p>To obtain a construction loan, borrowers need to submit detailed plans and budgets for their project. Lenders usually require a minimum down payment (typically around 20-25%) and may request documentation related to creditworthiness and project viability.</p>
                        </div>
                    </Col>
                    <Col lg={4} md={12} sm={12} className="mb-5">
                        <div className="choose-box">
                            <h2>Approval and Draw Schedule</h2>
                            <p>After approval, lenders create a draw schedule that corresponds with project milestones. Funds are disbursed once it’s confirmed that each stage has been completed satisfactorily.</p>
                        </div>
                    </Col>
                    <Col lg={4} md={12} sm={12} className="mb-5">
                        <div className="choose-box">
                            <h2>Construction Phase</h2>
                            <p>Throughout construction, borrowers only pay interest on the amounts drawn until the project is fully completed.</p>
                        </div>
                    </Col>
                    <Col lg={4} md={12} sm={12} className="mb-5">
                        <div className="choose-box">
                            <h2>Completion and Transition</h2>
                            <p>After the construction, borrowers can refinance into a long-term mortgage or obtain an end loan to pay off the construction loan. </p>
                        </div>
                    </Col>
                </Row>
            </section>
        </>
    )
}

export default FeesandChargesData
