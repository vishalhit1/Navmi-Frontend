import { Row, Col } from "react-bootstrap"
import Dollar from "../../../../assets/Homepage/dollar.svg"
import ApplyLoan from "../../Personalloans/ApplyLoan"
const EmiCalculatorData = () => {
    return (
        <>
            <ApplyLoan />
            <section className="sidecontent">
                <h3>Benefits of Construction Loans</h3>
                <Row className="mt-5">
                    <Col lg={4} md={12} sm={12} className="mb-5">
                        <div className="choose-box">
                            <h2>Custom Financing Solutions</h2>
                            <p>Construction loans are tailored to meet the unique needs of each project, whether it’s a new build or significant renovations.</p>
                        </div>
                    </Col>
                    <Col lg={4} md={12} sm={12} className="mb-5">
                        <div className="choose-box">
                            <h2>Cost Management</h2>
                            <p>The phased disbursement structure helps manage costs effectively, allowing borrowers to control their budget and reduce the risk of overspending.</p>
                        </div>
                    </Col>
                    <Col lg={4} md={12} sm={12} className="mb-5">
                        <div className="choose-box">
                            <h2>Potential Tax Benefits</h2>
                            <p>Borrowers might qualify for tax deductions on the interest accrued during the construction phase, offering extra financial perks.</p>
                        </div>
                    </Col>
                    <Col lg={4} md={12} sm={12} className="mb-5">
                        <div className="choose-box">
                            <h2>Flexible Repayment Options</h2>
                            <p>Numerous construction loans provide adaptable repayment plans that cater to different financial circumstances, making it simpler for borrowers to handle their payments.</p>
                        </div>
                    </Col>
                    <Col lg={4} md={12} sm={12} className="mb-5">
                        <div className="choose-box">
                            <h2>Seamless Transition to Permanent Financing</h2>
                            <p>Once the construction project is finished, borrowers can convert their construction loan into a permanent mortgage, streamlining the financing process.</p>
                        </div>
                    </Col>
                </Row>
            </section>
        </>
    )
}

export default EmiCalculatorData
