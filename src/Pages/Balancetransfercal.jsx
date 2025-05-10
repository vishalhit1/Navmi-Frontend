import React from 'react'
import img5 from '../assets/calculator/five.svg'
import { Breadcrumb, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Balancetransfercal = () => {
    return (
        <div>
            <section className="introduction">
                <h3>Balance Transfer Calculator</h3>
            </section>
            <Breadcrumb className="breadcrumsvss mt-3 ms-4">
                <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item active>Balance Transfer Calculator</Breadcrumb.Item>
            </Breadcrumb>
            <section className="contactinfo"></section>
            <section className="loan-calculators mt-5 mb-5">
                <div>
                    <Container>
                        <Row>
                            <Col lg={4}>
                                <Link to="/loan-comparision">
                                    <div className='abcd-sas'>
                                        <img className='loan-iconsas' src={img5} alt="" />
                                        <h3>Compare Loans</h3>
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

export default Balancetransfercal
