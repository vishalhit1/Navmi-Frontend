import ApplyLoan from "../ApplyLoan"
import { Col, Row } from "react-bootstrap"
const RightCoverage = () => {
    return (
        <>
            <ApplyLoan />
            <section className="sidecontent">
                <h3>Choosing the Right Coverage</h3>
            </section>
            <h3 className='itro-sxssa mt-5'>When selecting a life insurance plan, keep the following in mind:</h3>
            <Row className="mt-5">
                <Col lg={4} className="mb-5">
                    <div className="choose-box">
                        <h2>Income Replacement Needs</h2>
                        <p>
                        Aim for coverage 10-15 times your annual income.
                        </p>
                    </div>
                </Col>
                <Col lg={4} className="mb-5">
                    <div className="choose-box">
                        <h2>Debt Obligations</h2>
                        <p>
                        Ensure your coverage is adequate to settle any outstanding debts.
                        </p>
                    </div>
                </Col>
                <Col lg={4} className="mb-5">
                    <div className="choose-box">
                        <h2>Future Financial Goals</h2>
                        <p>
                        Consider significant future expenses such as your children’s education or marriage.
                        </p>
                    </div>
                </Col>
                <Col lg={4} className="mb-5">
                    <div className="choose-box">
                        <h2>Living Expenses for Dependents</h2>
                        <p>
                        Your coverage should provide ongoing financial support.
                        </p>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default RightCoverage
