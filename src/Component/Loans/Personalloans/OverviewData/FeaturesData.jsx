import { Row, Col } from "react-bootstrap"
import Dollar from "../../../../assets/Homepage/dollar.svg"
import ApplyLoan from "../ApplyLoan"
import one from "../../../../assets/loans/features/marriage.jpeg"
import two from "../../../../assets/loans/features/festival.jpeg"
import three from "../../../../assets/loans/features/medical.jpeg"
import four from "../../../../assets/loans/features/renovation.jpeg"
import five from "../../../../assets/loans/features/consumergoods.jpeg"
import six from "../../../../assets/loans/features/goodspurchase.jpeg"

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
                            <h2>Marriage</h2>
                        </div>
                    </Col>
                    <Col lg={4} md={12} sm={12} className="mb-5">
                        <div className="featurelist">
                            <img src={two} alt="" />
                            <h2>Festival Expenses</h2>
                        </div>
                    </Col>
                    <Col lg={4} md={12} sm={12} className="mb-5">
                        <div className="featurelist">
                            <img src={three} alt="" />
                            <h2>Medical Emergencies</h2>
                        </div>
                    </Col>
                    <Col lg={4} md={12} sm={12} className="mb-5">
                        <div className="featurelist">
                            <img src={four} alt="" />
                            <h2>Furnishing or Renovation of House</h2>
                        </div>
                    </Col>
                    <Col lg={4} md={12} sm={12} className="mb-5">
                        <div className="featurelist">
                            <img src={five} alt="" />
                            <h2>Purchase of High End Consumer Goods</h2>
                        </div>
                    </Col>
                    <Col lg={4} md={12} sm={12} className="mb-5">
                        <div className="featurelist">
                            <img src={six} alt="" />
                            <h2>Purchase of High End Lifestyle Products</h2>
                        </div>
                    </Col>
                </Row>
            </section>
        </>
    )
}

export default FeaturesData
