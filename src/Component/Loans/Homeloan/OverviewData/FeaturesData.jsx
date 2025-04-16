import { Row, Col } from "react-bootstrap"
import Dollar from "../../../../assets/Homepage/dollar.svg"
import ApplyLoan from "../ApplyLoan"
import one from "../../../../assets/loans/features/attractrates.jpg"
import two from "../../../../assets/loans/features/minimaldocument.jpg"
import three from "../../../../assets/loans/features/30years.jpg"

const FeaturesData = () => {
    return (
        <>
            <ApplyLoan/>
            <section className="sidecontent">
                <h3>Features</h3>
                <Row className="mt-5">
                    <Col lg={4} md={12} sm={12} className="mb-5">
                        <div className="featurelist">
                            <img src={one} alt="" />
                            <h2>Attractive Intrest Rates</h2>
                        </div>
                    </Col>
                    <Col lg={4} md={12} sm={12} className="mb-5">
                        <div className="featurelist">
                            <img src={two} alt="" />
                            <h2>Minimal Documentation</h2>
                        </div>
                    </Col>
                    <Col lg={4} md={12} sm={12} className="mb-5">
                        <div className="featurelist">
                            <img src={three} alt="" />
                            <h2>Maximum 30 Years of Tenure</h2>
                        </div>
                    </Col>
                </Row>
            </section>
        </>
    )
}

export default FeaturesData
