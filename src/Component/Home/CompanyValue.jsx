import { Container, Row, Col } from "react-bootstrap"
import Company from "../../assets/Homepage/Company.jpeg"
import Innovative from "../../assets/Homepage/innovative.svg"
import Talent from "../../assets/Homepage/talent.svg"
import Enable from "../../assets/Homepage/enabling.svg"
import Responsible from "../../assets/Homepage/responsible.svg"
import { Link } from "react-router-dom"
const CompanyValue = () => {
    return (
        <div>
            <section className="companyvalues creditandloan1">
                <Container>
                    <Row>
                        <Col lg={4} md={12} sm={12}>
                            <div className="companyvalueimg">
                                <img className="w-100" src={Company} alt="" />
                            </div>
                        </Col>
                        <Col lg={5} md={12} sm={12}>
                            <div className="companyvalue">
                                <h3>Company values are a guide on how the company should run in the future.</h3>
                                <p>
                                    Navmi Finserrv is a guiding framework for how the organization should operate and grow in the future. These values define the principles, ethics, and culture that shape our decision-making, employee conduct, and client relationships.
                                </p>
                                <p>
                                    Adhering to these core values ensures trust, transparency, and excellence in our financial services. They drive our commitment to customer satisfaction, innovation and long-term success, positioning Navmi Finserrv as a trusted partner in the financial industry.
                                </p>
                                <ul className="listnew">
                                    <li><img src={Innovative} alt="" /> Defining Our Values</li>
                                    <li><img src={Talent} alt="" />  Principles and Ethics</li>
                                    <li><img src={Enable} alt="" />  Commitment to Trust</li>
                                    <li><img src={Responsible} alt="" />  Driving Success</li>
                                </ul>
                                <Link to="/about-us"><button className="viewmore mt-4">Read More</button></Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
}

export default CompanyValue
