import React from 'react'
import img1 from '../assets/calculator/first.svg'
import img2 from '../assets/calculator/two.svg'
import img3 from '../assets/calculator/three.svg'
import img4 from '../assets/calculator/four.svg'
import { Breadcrumb, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Emicalculatorlist = () => {
    return (
        <div>
            <section className="introduction">
                <h3>Emi Calculator</h3>
            </section>
            <Breadcrumb className="breadcrumsvss mt-3 ms-4">
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item active>Emi Calculator</Breadcrumb.Item>
            </Breadcrumb>
            <section className="contactinfo"></section>
            <section className="loan-calculators mt-5 mb-5">
                <div>
                    <Container>
                        <Row>
                            <Col lg={4}>
                                <Link to="/emi-calculator">
                                    <div className='abcd-sas'>
                                        <img className='loan-iconsas' src={img1} alt="" />
                                        <h3>Calculate EMI</h3>
                                    </div>
                                </Link>
                            </Col>
                            <Col lg={4}>
                                <Link to="/principal-calculator">
                                    <div className='abcd-sas'>
                                        <img className='loan-iconsas' src={img2} alt="" />
                                        <h3>Calculate Principal</h3>
                                    </div>
                                </Link>
                            </Col>
                            <Col lg={4}>
                                <Link to="/tenure-calculator">
                                    <div className='abcd-sas'>
                                        <img className='loan-iconsas' src={img3} alt="" />
                                        <h3>Calculate Tenure</h3>
                                    </div>
                                </Link>
                            </Col>
                            <Col lg={4}>
                                <Link to="/roi-calculator">
                                    <div className='abcd-sas'>
                                        <img className='loan-iconsas' src={img4} alt="" />
                                        <h3>Calculate Interest</h3>
                                    </div>
                                </Link>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
        </div>
    )
}

export default Emicalculatorlist
