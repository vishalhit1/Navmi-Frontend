import { Row, Col } from "react-bootstrap"
import Dollar from "../../../../assets/Homepage/dollar.svg"
import ApplyLoan from "../../Personalloans/ApplyLoan"
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
                            <img src={Dollar} alt="" />
                            <h2>Marriage in The Family</h2>
                        </div>
                    </Col>
                    <Col lg={4} md={12} sm={12} className="mb-5">
                        <div className="featurelist">
                            <img src={Dollar} alt="" />
                            <h2>Festival Expenses</h2>
                        </div>
                    </Col>
                    <Col lg={4} md={12} sm={12} className="mb-5">
                        <div className="featurelist">
                            <img src={Dollar} alt="" />
                            <h2>Medical Emergencies</h2>
                        </div>
                    </Col>
                    <Col lg={4} md={12} sm={12} className="mb-5">
                        <div className="featurelist">
                            <img src={Dollar} alt="" />
                            <h2>Furnishing or Renovation of House</h2>
                        </div>
                    </Col>
                    <Col lg={4} md={12} sm={12} className="mb-5">
                        <div className="featurelist">
                            <img src={Dollar} alt="" />
                            <h2>Purchase of High End Consumer Goods</h2>
                        </div>
                    </Col>
                    <Col lg={4} md={12} sm={12} className="mb-5">
                        <div className="featurelist">
                            <img src={Dollar} alt="" />
                            <h2>Purchase of High End Lifestyle Products</h2>
                        </div>
                    </Col>
                </Row>
            </section>
        </>
    )
}

export default FeaturesData
