import { Row, Col } from "react-bootstrap"
import mens from '../../../../assets/men.png'
import mens1 from '../../../../assets/reviews/8.png'
import mens2 from '../../../../assets/reviews/2.png'
import womens from '../../../../assets/women.png'
import Pseudo from '../../../../assets/Homepage/pseudo.svg'
import ApplyLoan from "../ApplyLoan"
const ReviewsData = () => {
    return (
        <>
            <ApplyLoan />
            <section className="sidecontent">
                <h3>Reviews</h3>
                <p style={{ marginTop: '60px' }}></p>
                <Row>
                    <Col lg={4} md={12} sm={12} className="mb-5">
                        <div className="profiledata">
                            <img style={{ marginLeft: 'auto', marginRight: 'auto' }} src={mens} alt="" />
                            <h1 className="mt-3 mb-3">Jatin Gandhi</h1>
                        </div>
                        <div className="testi" style={{ margin: '0px', marginBottom: '50px', position: 'relative' }}>
                            <div className="starss">
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <p>
                                "I had a fantastic experience with Navmi Finserrv Pvt. Ltd. for my Loan Against Property. The team was highly knowledgeable and guided me through the entire process with complete transparency. They helped me secure the best deal with a low interest rate and flexible repayment options.
                                Mr. Ashish Joshi and his team provided exceptional support, ensuring a smooth and hassle-free process. Their expertise and prompt service made all the difference. I highly recommend Navmi Finserrv to anyone looking for a reliable financial partner!"
                            </p>
                            <img className="pseudoo" src={Pseudo} alt="" />
                        </div>
                    </Col>
                    <Col lg={4} md={12} sm={12} className="mb-5">
                        <div className="profiledata">
                            <img style={{ marginLeft: 'auto', marginRight: 'auto' }} src={mens1} alt="" />
                            <h1 className="mt-3 mb-3">Firoz Ansari </h1>
                        </div>
                        <div className="testi" style={{ margin: '0px', marginBottom: '50px', position: 'relative' }}>
                            <div className="starss">
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <p>
                                "I recently availed a Loan Against Property through Navmi Finserrv Pvt. Ltd., and I couldn't be more satisfied with their service. The team was extremely professional, knowledgeable, and supportive throughout the process. They provided me with multiple options from leading banks and NBFCs, ensuring I got the best deal with a competitive interest rate and flexible terms.
                                A special thanks to Mr. Ashish Joshi for his expert advice and quick responses. The entire process was smooth, hassle-free, and completed within the promised timeline. I highly recommend Navmi Finserrv to anyone looking for a seamless and reliable loan service!"
                            </p>
                            <img className="pseudoo" src={Pseudo} alt="" />
                        </div>
                    </Col>
                    <Col lg={4} md={12} sm={12} className="mb-5">
                        <div className="profiledata">
                            <img style={{ marginLeft: 'auto', marginRight: 'auto' }} src={mens2} alt="" />
                            <h1 className="mt-3 mb-3">Anand Giri </h1>
                        </div>
                        <div className="testi" style={{ margin: '0px', marginBottom: '50px', position: 'relative' }}>
                            <div className="starss">
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <p>
                                "I had a great experience securing a Loan Against Property with Navmi Finserrv Pvt. Ltd. The team was incredibly professional, and they took the time to understand my needs, offering multiple options from leading banks and financial institutions. They helped me select the best loan package with a competitive interest rate and manageable terms.
                                Mr. Ashish Joshi's support and guidance throughout the entire process were exceptional—he made sure everything was clear and processed smoothly. I truly appreciate their promptness and transparency. Highly recommend Navmi Finserrv for anyone looking to take a loan against property!"

                            </p>
                            <img className="pseudoo" src={Pseudo} alt="" />
                        </div>
                    </Col>
                    <Col lg={4} md={12} sm={12} className="mb-5">
                        <div className="profiledata">
                            <img style={{ marginLeft: 'auto', marginRight: 'auto' }} src={womens} alt="" />
                            <h1 className="mt-3 mb-3">Anita Mayekar</h1>
                        </div>
                        <div className="testi" style={{ margin: '0px', marginBottom: '50px', position: 'relative' }}>
                            <div className="starss">
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <p>
                                "I had the pleasure of working with Navmi Finserrv Pvt. Ltd. for my Loan Against Property, and I couldn't be happier with the experience. From the start, the team was incredibly helpful, providing clear and concise information about my loan options. They took the time to understand my financial situation and found the perfect solution that fit my needs.
                                Mr. Ashish Joshi and his team were always available to answer my questions and guide me through every step of the process. The loan approval was fast, and the entire process was transparent and smooth. I highly recommend Navmi Finserrv to anyone looking for a reliable and trustworthy financial partner."
                            </p>
                            <img className="pseudoo" src={Pseudo} alt="" />
                        </div>
                    </Col>
                </Row>
            </section>
        </>
    )
}

export default ReviewsData
