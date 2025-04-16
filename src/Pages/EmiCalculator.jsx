import { Col, Container, Row } from "react-bootstrap"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const EmiCalculator = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 1, 
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div>
            <section className="introduction">
                <h3>EMI Calculator</h3>
            </section>
            <section>
                <Container fluid>
                    <section className="emi-calulatorsss">
                        <Slider {...settings}>
                            <div>
                                <Row>
                                    <i className="fa fa-credit-card" />
                                    <h3>EMI</h3>
                                </Row>
                            </div>
                            <div>
                                <Row>
                                    <i className="fa fa-credit-card" />
                                    <h3>Amount</h3>
                                </Row>
                            </div>
                            <div>
                                <Row>
                                    <i className="fa fa-credit-card" />
                                    <h3>ROI</h3>
                                </Row>
                            </div>
                            <div>
                                <Row>
                                    <i className="fa fa-credit-card" />
                                    <h3>Compare</h3>
                                </Row>
                            </div>
                            <div>
                                <Row>
                                    <i className="fa fa-credit-card" />
                                    <h3>Pre Payment</h3>
                                </Row>
                            </div>
                            <div>
                                <Row>
                                    <i className="fa fa-credit-card" />
                                    <h3>ROI Change</h3>
                                </Row>
                            </div>
                            <div>
                                <Row>
                                    <i className="fa fa-credit-card" />
                                    <h3>Professional</h3>
                                </Row>
                            </div>
                            <div>
                                <Row>
                                    <i className="fa fa-credit-card" />
                                    <h3>Amount</h3>
                                </Row>
                            </div>
                            <div>
                                <Row>
                                    <i className="fa fa-credit-card" />
                                    <h3>ROI</h3>
                                </Row>
                            </div>
                            <div>
                                <Row>
                                    <i className="fa fa-credit-card" />
                                    <h3>Compare</h3>
                                </Row>
                            </div>
                            <div>
                                <Row>
                                    <i className="fa fa-credit-card" />
                                    <h3>Pre Payment</h3>
                                </Row>
                            </div>
                            <div>
                                <Row>
                                    <i className="fa fa-credit-card" />
                                    <h3>ROI Change</h3>
                                </Row>
                            </div>
                            <div>
                                <Row>
                                    <i className="fa fa-credit-card" />
                                    <h3>Professional</h3>
                                </Row>
                            </div>
                        </Slider>
                    </section>
                </Container>
            </section>
            <section className="mt-5 mb-5">
                <Container>
                    <Row style={{ justifyContent: 'space-evenly' }}>
                        <Col lg={4}>
                            <div>
                                <form className="form-calculator">
                                    <div className="form-group">
                                        <label htmlFor="amount">Loan Amount:</label>
                                        <div className="input-group mb-4">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text">$</div>
                                            </div>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="amount"
                                                defaultValue={100000}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="amount">Interest Rate Per Year :</label>
                                        <div className="input-group mb-4">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text">%</div>
                                            </div>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="interest"
                                                defaultValue="10.5"
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="amount">Loan Tenure :</label>
                                        <div className="input-group mb-4">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text">Months</div>
                                            </div>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="tenure"
                                                defaultValue={36}
                                            />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className="emi-details">
                                <div className="emi-details-head">
                                    <h6>Your EMI Details</h6>
                                </div>
                                <div className="emi-details-box">
                                    <p style={{ marginBottom: 5 }}>Loan Amount :</p>
                                    <h5><span>$</span>5247</h5>
                                </div>
                                <div className="emi-details-box">
                                    <Row>
                                        <Col lg={7}>
                                            <p style={{ marginBottom: 5 }}>Total Interest Payable :</p>
                                            <h5><span>$</span>52470</h5>
                                        </Col>
                                        <Col lg={5}>
                                            <p style={{ marginBottom: 15 }}>Loan Tenure :</p>
                                            <h5>36 Months</h5>
                                        </Col>
                                    </Row>
                                </div>
                                <div className="emi-details-box no-bottom-border">
                                    <p style={{ marginBottom: 5 }}>Total Payment</p>
                                    <h5><span>$</span>152470</h5>
                                </div>
                            </div>
                            <button className="schedule">Schedule</button>
                        </Col>
                        <Col lg={4}>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
}

export default EmiCalculator
