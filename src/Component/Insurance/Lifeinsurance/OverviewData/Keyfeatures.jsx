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
                            <h2>Financial Security</h2>
                            <p>
                                Life insurance offers crucial financial assistance to your family during tough times.
                            </p>
                        </div>
                    </Col>
                    <Col lg={4} className="mb-5">
                        <div className="choose-box">
                            <h2>Flexible Premium Options</h2>
                            <p>
                                Select from a range of premium payment plans that align with your financial situation.
                            </p>
                        </div>
                    </Col>
                    <Col lg={4} className="mb-5">
                        <div className="choose-box">
                            <h2>Critical Illness Coveragee</h2>
                            <p>
                                Many policies include protection for serious illnesses, helping you manage medical costs
                            </p>
                        </div>
                    </Col>
                    <Col lg={4} className="mb-5">
                        <div className="choose-box">
                            <h2>Return of Premium Benefit</h2>
                            <p>
                                Certain plans refund the premiums paid if no claim is made during the policy term.
                            </p>
                        </div>
                    </Col>
                    <Col lg={4} className="mb-5">
                        <div className="choose-box">
                            <h2>Add-On Coverages</h2>
                            <p>
                                Enhance your policy with extra riders for accidental death benefits or critical illness coverage.
                            </p>
                        </div>
                    </Col>
                </Row>
            </section>
        </>
    )
}

export default Keyfeatures
