import { useState } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Container, Row, Col, Modal, Form } from "react-bootstrap";

import Arrow from '../assets/Homepage/arrow.svg'
import Icon from '../assets/icons/Icon.svg'
import Icon1 from '../assets/icons/Icon-1.svg'
import Icon2 from '../assets/icons/Icon-2.svg'

const SelfEmployed = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <section className="introduction">
                <h3>Self - Employed</h3>
            </section>
            <section className="creditandloan">
                <div>
                    <div className="maincom text-center">
                        <h2 className="mb-5">Which Loan Are You Looking For ?</h2>
                    </div>
                    <Container>
                        <Row style={{ justifyContent: 'center' }}>
                            <Col lg={4}>
                                <div className="creditloan" onClick={handleShow}>
                                    <img src={Icon} alt="" />
                                    <h3>Business Loan</h3>
                                    <p>It is a very good product for all Traders, Businessmen and Professionals to start or expand their business by length and breadth. The Business Loan is an unsecured loan given on the capacity of ITR.</p>
                                    <img src={Arrow} alt="" />
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div className="creditloan" onClick={handleShow}>
                                    <img src={Icon2} alt="" />
                                    <h3>Home Loan</h3>
                                    <p>A Home Loan is a secured loan wherein the bank or lender lends you money to help you purchase your dream home. It is given for a longer tenure than the Personal Loan.</p>
                                    <img src={Arrow} alt="" />
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div className="creditloan" onClick={handleShow}>
                                    <img src={Icon1} alt="" />
                                    <h3>Mortgage Loan</h3>
                                    <p>A mortgage is an agreement between you and a lender that gives the lender the right to take your property if you don't repay the money you've borrowed plus interest.</p>
                                    <img src={Arrow} alt="" />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
            <Modal show={show} onHide={handleClose} centered size="xl">
                <Modal.Header
                    closeButton
                    style={{ justifyContent: "center", marginTop: "40px" }}
                >
                    <Modal.Title>
                        <h3
                            style={{
                                fontWeight: "600",
                                letterSpacing: "0em",
                                textAlign: "center",
                                marginBottom: "40px",
                            }}
                        >
                            Business Loan Self Employed
                        </h3>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="loanpopup">
                        <Row>
                            <Col lg={6}>
                                <div className="loanperform">
                                    <form>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Loan Amount</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                placeholder="Enter Your Loan Amount ( In Lakhs )"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Annual Turnover</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter Annual Turnover"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">
                                            Annual Net Profit
                                            </label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                placeholder="Enter Your Annual Net Profit"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Residence Type</label>
                                            <select name="" className="form-control">
                                                <option value="Select Your Residence Type" disabled>
                                                    Select Your Residence Type
                                                </option>
                                                <option value="1">1</option>
                                                <option value="1">1</option>
                                                <option value="1">1</option>
                                                <option value="1">1</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Select Office</label>
                                            <select name="" className="form-control">
                                                <option value="Select Your Residence Type" disabled>
                                                    Select Your Residence Type
                                                </option>
                                                <option value="1">1</option>
                                                <option value="1">1</option>
                                                <option value="1">1</option>
                                                <option value="1">1</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Email ID</label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                placeholder="Enter Email Id"
                                            />
                                        </div>
                                    </form>
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="loanperform">
                                    <form>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Existing EMI</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                placeholder="Enter Your Existing EMI ( Amount )"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">
                                                Date of personal loan
                                            </label>
                                            <input
                                                type="date"
                                                className="form-control"
                                                placeholder="Enter Your Date Of Birth"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Phone Number</label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                placeholder="Enter Your Phone Number"
                                            />
                                        </div>
                                        
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Full name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter Full name"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Own Business Since (In Years)</label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                placeholder="Enter your Own Business Since (In Years)"
                                            />
                                        </div>
                                    </form>
                                </div>
                            </Col>
                            <div
                                className="submitbuttonloanform"
                                style={{ textAlign: "center" }}
                            >
                                <button className="submit12">Submit</button>
                            </div>
                        </Row>
                    </div>
                    <h3 className="mandoty">
                        *Required documents shared to your mail id
                    </h3>
                </Modal.Body>
            </Modal>
        </div >
    )
}

export default SelfEmployed
