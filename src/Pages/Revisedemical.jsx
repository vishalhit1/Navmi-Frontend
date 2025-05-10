import React from 'react'
import img6 from '../assets/calculator/six.svg'
import { Breadcrumb, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Revisedemical = () => {
    return (
        <div>
            <section className="introduction">
                <h3>Revised Emi Calculator</h3>
            </section>
            <Breadcrumb className="breadcrumsvss mt-3 ms-4">
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item active>Revised Emi Calculator</Breadcrumb.Item>
            </Breadcrumb>
            <section className="contactinfo"></section>
            <section className="loan-calculators mt-5 mb-5">
                <div>
                    <Container>
                        <Row>
                            <Col lg={4}>
                                <Link to="/revised-emi-calculator">
                                    <div className='abcd-sas'>
                                        <img className='loan-iconsas' src={img6} alt="" />
                                        <h3>Revised EMI & Tenure</h3>
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

export default Revisedemical
