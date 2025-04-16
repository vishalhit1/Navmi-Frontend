import React, { useState } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Row, Col, Modal } from "react-bootstrap";
import Creditscore from '../../assets/creditscore.jpeg';
import Banner1 from '../../assets/Homepage/Banner 1.png'
import Banner3 from '../../assets/Homepage/Banner 3.png'
import Partner from '../../assets/Homepage/partner.png'
import Referral from '../../assets/Homepage/referral.png'
import Arrow from '../../assets/Homepage/arrow.svg'
import Fade from 'react-reveal/Fade';
import personalloan from '../../assets/loanicons/2.png'
import homeloan from '../../assets/loanicons/3.png'
import carloan from '../../assets/loanicons/4.png'
import businessloan from '../../assets/loanicons/5.png'
import loanaganist from '../../assets/loanicons/6.png'
import professionalloan from '../../assets/loanicons/7.png'
import constloan from '../../assets/loanicons/8.png'
import balancetra from '../../assets/loanicons/9.png'
import workingcapital from '../../assets/loanicons/10.png'
import Marquee from "react-fast-marquee";

import { Link } from 'react-router-dom';
const HomeComponent = () => {
    const [show1, setShow1] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);
    const { ref, inView } = useInView({
        triggerOnce: true, // Ensures animation runs only once
        threshold: 0.3, // Triggers when 30% of the element is visible
    });
    const settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        autoplaySpeed: 2500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
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

    const settings1 = {
        autoplay: true,
        infinite: true,
        loop: true,
        autoplaySpeed: 2500,
        slidesToShow: 2,
        margin: 40,
        speed: 500,
        rows: 2,
        slidesPerRow: 2,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    rows: 2,
                    slidesPerRow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    rows: 2,
                    slidesPerRow: 1,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const settings2 = {
        autoplay: true,
        infinite: true,
        loop: true,
        autoplaySpeed: 2500,
        slidesToShow: 4,
        margin: 40,
        speed: 500,
        rows: 1,
        slidesPerRow: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    rows: 1,
                    slidesPerRow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    rows: 1,
                    slidesPerRow: 1,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div>
            <Marquee className='mqrue-loans'>
                <span>Access Loans from Over 40+ Banks & NBFCs—Find Your Best Fit!</span>
                <span>Get Home Loans with 0% Processing Fees & No Stamp Duty!</span>
                <span>Fast & Flexible Business Loans—Unsecured, No Collateral Needed!</span>
                <span>Manage Your Cash Flow with Flexible Unsecured Overdraft Facilities!</span>
            </Marquee>
            <section className="banner">
                <Slider {...settings}>
                    <div>
                        <Row>
                            <Link to="/about-us"><img className="w-100" src={Banner1} alt="" /></Link>
                        </Row>
                    </div>
                    <div>
                        <Row>
                            <Link to="/became-a-partner"><img className="w-100" src={Banner3} alt="" /></Link>
                        </Row>
                    </div>
                </Slider>
            </section>
            <section className="businesspartner">
                <Fade bottom>
                    <Container>
                        <Row>
                            <Col lg={3}>
                                <img className="w-100" src={Partner} alt="" />
                            </Col>
                            <Col lg={7}>
                                <div className="businesspartner-content">
                                    <h1>Become Our Business Partner</h1>
                                    <p>Loans are advantageous as a relatively inexpensive way of borrowing money.<br />
                                        Start or grow your own business</p>
                                    <Link to="/became-a-partner"><button className="viewmore1">View More</button></Link>
                                </div>
                            </Col>

                        </Row>
                    </Container>
                </Fade>
            </section>
            <section className="creditandloan">
                <div>
                    <div className="maincom text-center mb-5">
                        <h2>Loans & Cibil Score</h2>
                    </div>
                    <Container>
                        <Slider {...settings1}>
                            <div>
                                <Link to="/personal-loan">
                                    <div className="creditloan">
                                        <img className='loan-iconsas' src={personalloan} alt="" />
                                        <h3>Personal Loan</h3>
                                        <p>Personal Loan is an unsecured loan for salaried and self-employed wherein no security is required against the loan.</p>
                                        <img src={Arrow} alt="" />
                                    </div>
                                </Link>
                            </div>
                            <div>
                                <Link to="/home-loan">
                                    <div className="creditloan">
                                        <img className='loan-iconsas' src={homeloan} alt="" />
                                        <h3>Home Loan</h3>
                                        <p>A Home Loan is a secured loan wherein the bank or lender lends you money to help you purchase your dream home.</p>
                                        <img src={Arrow} alt="" />
                                    </div>
                                </Link>
                            </div>
                            <div>
                                <Link to="/car-loan">
                                    <div className="creditloan">
                                        <img className='loan-iconsas' src={carloan} alt="" />
                                        <h3>Car Loan</h3>
                                        <p>At Navmi Finserrv Pvt. Ltd., we believe that owning your dream car should be a seamless and exciting experience.</p>
                                        <img src={Arrow} alt="" />
                                    </div>
                                </Link>
                            </div>
                            <div>
                                <Link to="/business-loan">
                                    <div className="creditloan">
                                        <img className='loan-iconsas' src={businessloan} alt="" />
                                        <h3>Business Loan</h3>
                                        <p>It is a very good product for all Traders, Businessmen and Professionals to start or expand their business by length and breadth.</p>
                                        <img src={Arrow} alt="" />
                                    </div>
                                </Link>
                            </div>
                            <div>
                                <Link to="/loan-against-property">
                                    <div className="creditloan">
                                        <img className='loan-iconsas' src={loanaganist} alt="" />
                                        <h3>Loan Against Property</h3>
                                        <p>Mortgage Loan commonly known as ‘Loan Against Property’ in India is a secured loan that is sanctioned against fully constructed.</p>
                                        <img src={Arrow} alt="" />
                                    </div>
                                </Link>
                            </div>
                            <div>
                                <Link to="/professional-loan">
                                    <div className="creditloan">
                                        <img className='loan-iconsas' src={professionalloan} alt="" />
                                        <h3>Professional Loan</h3>
                                        <p>Are you a doctor, chartered accountant, architect, or any other professional looking for financial support to expand your practice?</p>
                                        <img src={Arrow} alt="" />
                                    </div>
                                </Link>
                            </div>
                            <div>
                                <Link to="/construction-loan">
                                    <div className="creditloan">
                                        <img className='loan-iconsas' src={constloan} alt="" />
                                        <h3>Construction Loan</h3>
                                        <p>Construction loans are specialized financial products designed to support the building or renovation of residential properties.</p>
                                        <img src={Arrow} alt="" />
                                    </div>
                                </Link>
                            </div>
                            <div>
                                <Link to="/balance-transfer">
                                    <div className="creditloan">
                                        <img className='loan-iconsas' src={balancetra} alt="" />
                                        <h3>Balance Transfer</h3>
                                        <p>Balance Transfer is a special feature offered by banks to reduce your Monthly Outgoing wherein you can transfer your existing Loan.</p>
                                        <img src={Arrow} alt="" />
                                    </div>
                                </Link>
                            </div>
                            <div>
                                <Link to="/working-capital">
                                    <div className="creditloan">
                                        <img className='loan-iconsas' src={workingcapital} alt="" />
                                        <h3>Working Capital</h3>
                                        <p>Is your business in need of funds to manage day-to-day operations, pay suppliers, or expand?</p>
                                        <img src={Arrow} alt="" />
                                    </div>
                                </Link>
                            </div>
                            <div>
                                <Link to="/cgtmse">
                                    <div className="creditloan">
                                        <img className='loan-iconsas' src={personalloan} alt="" />
                                        <h3>CGTMSE Loan</h3>
                                        <p>Are you a Micro or Small Enterprise looking for easy access to credit? The Credit Guarantee Fund Trust for Micro and Small Enterprises</p>
                                        <img src={Arrow} alt="" />
                                    </div>
                                </Link>
                            </div>
                            <div>
                                <Link to="/personal-loan">
                                    <div className="creditloan">
                                        <img className='loan-iconsas' src={personalloan} alt="" />
                                        <h3>Personal Loan</h3>
                                        <p>Personal Loan is an unsecured loan for salaried and self-employed wherein no security is required against the loan.</p>
                                        <img src={Arrow} alt="" />
                                    </div>
                                </Link>
                            </div>
                            <div>
                                <Link to="/home-loan">
                                    <div className="creditloan">
                                        <img className='loan-iconsas' src={homeloan} alt="" />
                                        <h3>Home Loan</h3>
                                        <p>A Home Loan is a secured loan wherein the bank or lender lends you money to help you purchase your dream home.</p>
                                        <img src={Arrow} alt="" />
                                    </div>
                                </Link>
                            </div>
                        </Slider>
                    </Container>
                </div>
            </section>
            <section className="quoyee mt-5 mb-5">
                <Container ref={ref}>
                    <Slider {...settings2}>
                        <div>
                            <div className="d-flex123">
                                <img src="https://cdn-icons-png.flaticon.com/512/5460/5460427.png" alt="" />
                                <h2>Satisfied Clients <br />
                                    {inView && <CountUp end={352399} duration={3} />}
                                </h2>
                            </div>
                        </div>
                        <div>
                            <div className="d-flex123">
                                <img src="https://cdn-icons-png.flaticon.com/512/5256/5256228.png" alt="" />
                                <h2>Loan Disbursement <br />
                                    {inView && <CountUp end={60000} prefix="₹ " suffix=" cr+" duration={3} />}
                                </h2>
                            </div>
                        </div>
                        <div>
                            <div className="d-flex123">
                                <img src="https://cdn-icons-png.flaticon.com/512/2534/2534183.png" alt="" />
                                <h2>Dynamic Agents <br />
                                    {inView && <CountUp end={179} duration={3} />}
                                </h2>
                            </div>
                        </div>
                        <div>
                            <div className="d-flex123">
                                <img src="https://cdn-icons-png.flaticon.com/512/5566/5566871.png" alt="" />
                                <h2>Partner Banks & NBFCs <br />
                                    {inView && <CountUp end={40} suffix="+" duration={3} />}
                                </h2>
                            </div>
                        </div>
                        <div>
                            <div className="d-flex123">
                                <img src="https://cdn-icons-png.flaticon.com/512/14594/14594349.png" alt="" />
                                <h2>Years of Experience <br />
                                    {inView && <CountUp end={15} suffix="+" duration={3} />}
                                </h2>
                            </div>
                        </div>
                    </Slider>
                </Container>
            </section>
            <section className="referralpartner mb-3">
                <Fade bottom>
                    <Container>
                        <Row>
                            <Col lg={7}>
                                <div className="businesspartner-content">
                                    <h1>You deserve a better loan</h1>
                                    <p>Loans are advantageous as a relatively inexpensive way of borrowing money.<br />
                                        Start or grow your own business</p>
                                    <Link to="/about-us"><button className="viewmore1">View More</button></Link>
                                </div>
                            </Col>
                            <Col lg={3}>
                                <img className="w-100" src={Referral} alt="" />
                            </Col>
                        </Row>
                    </Container>
                </Fade>
            </section>
            <Modal className='QuickEnqu' size="xl"
                aria-labelledby="contained-modal-title-vcenter"
                centered show={show1} onHide={handleClose1}>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <div className="LoginPopup">
                        <Row>
                            <Col lg={6}>
                                <div className='loginform'>
                                    <h3 style={{ fontWeight: '600', letterSpacing: '0em', textAlign: 'center', marginBottom: '40px' }}>Free Credit Score and Report</h3>
                                    <form>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Enter Your Mobile Number</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                placeholder="Enter Phone Number"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Enter Your OTP Code</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                placeholder="Enter Your OTP Code"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Enter Your PAN Number</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                placeholder="Enter Your PAN Number"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Enter Your Pin Code</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                placeholder="Enter Your Pin Code"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Enter Your Date Of Birth</label>
                                            <input
                                                type="date"
                                                className="form-control"
                                                placeholder="Enter Your Date Of Birth"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Your Email Id</label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                placeholder="Enter Email Id"
                                            />
                                        </div>
                                        <button className="submit12">Submit</button>
                                    </form>
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div style={{ background: 'white' }}>
                                    <img className='w-100' src={Creditscore} alt="" />
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Modal.Body>
            </Modal>
        </div >
    )
}

export default HomeComponent
