import { Row, Col } from "react-bootstrap"
import Dollar from "../../../../assets/Homepage/dollar.svg"
import ApplyLoan from "../ApplyLoan"
import one from "../../../../assets/loans/features/termslife.jpg"
import two from "../../../../assets/loans/features/workingcapital.jpg"
import three from "../../../../assets/loans/features/businessexpan.jpg"
import four from "../../../../assets/loans/features/equipmentfinanc.jpg"
import five from "../../../../assets/loans/features/machinary.jpg"


const FeaturesData = () => {
    return (
        <>
            <ApplyLoan/>
            <section className="sidecontent">
                <h3>Features</h3>
                <p style={{ marginTop: '60px' }}>The product itself justifies the meaning - any of your personal needs which includes…</p>
                <Row>
                    <Col lg={4} md={12} sm={12} className="mb-5">
                        <div className="featurelist">
                            <img src={one} alt="" />
                            <h2>Terms Loans</h2>
                        </div>
                    </Col>
                    <Col lg={4} md={12} sm={12} className="mb-5">
                        <div className="featurelist">
                            <img src={two} alt="" />
                            <h2>Working Capital</h2>
                        </div>
                    </Col>
                    <Col lg={4} md={12} sm={12} className="mb-5">
                        <div className="featurelist">
                            <img src={three} alt="" />
                            <h2>Business Expansion</h2>
                        </div>
                    </Col>
                    <Col lg={4} md={12} sm={12} className="mb-5">
                        <div className="featurelist">
                            <img src={four} alt="" />
                            <h2>Equipment Financing</h2>
                        </div>
                    </Col>
                    <Col lg={4} md={12} sm={12} className="mb-5">
                        <div className="featurelist">
                            <img src={five} alt="" />
                            <h2>Machinery</h2>
                        </div>
                    </Col>
                </Row>
            </section>
        </>
    )
}

export default FeaturesData
