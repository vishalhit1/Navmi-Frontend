import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Col, Accordion } from "react-bootstrap";
const Faqs = () => {
    return (
        <div>
            <section className="introduction">
                <h3>Frequently Asked Questions</h3>
            </section>
            <section className="creditandloan">
                <div>
                    <Container>
                        <Col lg={12} className="Newfaqs">
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>1. Can I get an in-principle approval and actually avail of the loan later?</Accordion.Header>
                                    <Accordion.Body>
                                        Yes you can get in-principle and avail it within 90 days.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>2. How long is this approval valid?</Accordion.Header>
                                    <Accordion.Body>
                                        Approval is valid for 90 days.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>3. What are the documents required?</Accordion.Header>
                                    <Accordion.Body>
                                        Photo, Pan Card, current residence proof and income proof.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>4. What is Balance Transfer?</Accordion.Header>
                                    <Accordion.Body>
                                        Balance transfer is the transfer of your existing loan from one bank to another loan to reduce your rate of interest and EMI and to reduce your outgoing.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4">
                                    <Accordion.Header>5. Does my CIBIL score effect the Balance Transfer?</Accordion.Header>
                                    <Accordion.Body>
                                        To a certain extent your existing loan has to be regular without late payments.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="5">
                                    <Accordion.Header>6. Does my loan tenure get reduced?</Accordion.Header>
                                    <Accordion.Body>
                                        Depends on your comfortability on repaying tenure is flexible.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="6">
                                    <Accordion.Header>7. Does my loan EMI increase?</Accordion.Header>
                                    <Accordion.Body>
                                        Emi will increase only if you reduce the tenure of your existing loan.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="7">
                                    <Accordion.Header>8. Can I merge more than one loan into a single loan that you are offering?</Accordion.Header>
                                    <Accordion.Body>
                                        Yes, we can merge the loans and make one consolidated loan and that is the most beneficial and is also your monthly outgoing saver.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="8">
                                    <Accordion.Header>9. What are the maximum number of loans that can be merged?</Accordion.Header>
                                    <Accordion.Body>
                                        It depends on your eligibility.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="9">
                                    <Accordion.Header>10. What is the minimum amount of loan that you allow in balance transfer?</Accordion.Header>
                                    <Accordion.Body>
                                        Any amount.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="10">
                                    <Accordion.Header>11. How old should be my current loan?</Accordion.Header>
                                    <Accordion.Body>
                                        6 months repayment schedule
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="11">
                                    <Accordion.Header>12. How long does it take to get my loan sanctioned?</Accordion.Header>
                                    <Accordion.Body>
                                        It takes 7 - 10 working days
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Col>
                    </Container>
                </div>
            </section>
        </div >
    )
}

export default Faqs
