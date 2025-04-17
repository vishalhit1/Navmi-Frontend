import { Row, Col } from "react-bootstrap"
import Pseudo from '../../../../assets/Homepage/pseudo.svg'
import mens1 from '../../../../assets/reviews/1.png'
import mens2 from '../../../../assets/reviews/2.png'
import mens3 from '../../../../assets/reviews/3.png'
import mens4 from '../../../../assets/reviews/4.png'
import mens5 from '../../../../assets/reviews/5.png'
import mens6 from '../../../../assets/reviews/7.png'
import womens from '../../../../assets/reviews/12.png'
import womens1 from '../../../../assets/reviews/13.png'
import ApplyLoan from "../ApplyLoan"
const ReviewsData = () => {
    return (
        <>
            <ApplyLoan/>
            <section className="sidecontent">
                <h3>Reviews</h3>
                <p style={{ marginTop: '60px' }}></p>
                <Row>
                    <Col lg={4} md={12} sm={12} className="mb-5">
                        <div className="profiledata">
                            <img style={{ marginLeft: 'auto', marginRight: 'auto' }} src={mens1} alt="" />
                            <h1 className="mt-3 mb-3">Shahin</h1>
                        </div>
                        <div className="testi" style={{ margin: '0px', marginBottom: '50px', position: 'relative' }}>
                            <div className="starss">
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <p>"I’m extremely pleased with the personal loan service provided by Navmi Finserrv. The team was incredibly professional, ensuring a smooth and quick process from start to finish. They offered tailored solutions to meet my needs, and the entire experience was seamless. I highly recommend Navmi Finserrv to anyone looking for reliable financial services and expert guidance on personal loans."</p>
                            <img className="pseudoo" src={Pseudo} alt="" />
                        </div>
                    </Col>
                    <Col lg={4} md={12} sm={12} className="mb-5">
                        <div className="profiledata">
                            <img style={{ marginLeft: 'auto', marginRight: 'auto' }} src={womens} alt="" />
                            <h1 className="mt-3 mb-3">Soniya</h1>
                        </div>
                        <div className="testi" style={{ margin: '0px', marginBottom: '50px', position: 'relative' }}>
                            <div className="starss">
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <p>"I had a wonderful experience with Navmi Finserrv while applying for a personal loan. The team was highly professional and efficient, guiding me through the entire process with clear communication and quick approval. I felt well-supported and confident throughout. I highly recommend their services to anyone in need of a reliable financial partner."
                            </p>
                            <img className="pseudoo" src={Pseudo} alt="" />
                        </div>
                    </Col>
                    <Col lg={4} md={12} sm={12} className="mb-5">
                        <div className="profiledata">
                            <img style={{ marginLeft: 'auto', marginRight: 'auto' }} src={mens2} alt="" />
                            <h1 className="mt-3 mb-3">Abhishek</h1>
                        </div>
                        <div className="testi" style={{ margin: '0px', marginBottom: '50px', position: 'relative' }}>
                            <div className="starss">
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <p>"I had a wonderful experience with Navmi Finserrv while securing my personal loan. The entire process was smooth and hassle-free. The team, especially Mr. Ashish Joshi, was extremely professional and guided me every step of the way. With a wide range of options from multiple banks and NBFCs, I got the best deal that suited my needs. Highly recommend Navmi Finserrv for anyone looking for reliable and efficient loan services!"
                            </p>
                            <img className="pseudoo" src={Pseudo} alt="" />
                        </div>
                    </Col>
                    <Col lg={4} md={12} sm={12} className="mb-5">
                        <div className="profiledata">
                            <img style={{ marginLeft: 'auto', marginRight: 'auto' }} src={mens3} alt="" />
                            <h1 className="mt-3 mb-3">Suni</h1>
                        </div>
                        <div className="testi" style={{ margin: '0px', marginBottom: '50px', position: 'relative' }}>
                            <div className="starss">
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <p>"I had an excellent experience with Navmi Finserrv for my personal loan. The team was incredibly professional, guiding me through every step of the process with clarity and ease. The loan was processed quickly, and I received the funds in no time. They offered great interest rates and flexible terms, making it a hassle-free experience. Highly recommend their services for anyone looking for a reliable and efficient loan provider!"
                            </p>
                            <img className="pseudoo" src={Pseudo} alt="" />
                        </div>
                    </Col>
                    <Col lg={4} md={12} sm={12} className="mb-5">
                        <div className="profiledata">
                            <img style={{ marginLeft: 'auto', marginRight: 'auto' }} src={womens1} alt="" />
                            <h1 className="mt-3 mb-3">Reshma</h1>
                        </div>
                        <div className="testi" style={{ margin: '0px', marginBottom: '50px', position: 'relative' }}>
                            <div className="starss">
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <p>"I had a great experience with Navmi Finserrv while applying for a personal loan. The process was smooth and efficient, with clear communication from start to finish. Their team guided me through the paperwork and ensured I got the best rates from trusted banks and NBFCs. Thanks to Mr. Ashish Joshi and the entire team for their professionalism and support. Highly recommend their services!"
                            </p>
                            <img className="pseudoo" src={Pseudo} alt="" />
                        </div>
                    </Col>
                    <Col lg={4} md={12} sm={12} className="mb-5">
                        <div className="profiledata">
                            <img style={{ marginLeft: 'auto', marginRight: 'auto' }} src={mens4} alt="" />
                            <h1 className="mt-3 mb-3">Sundarraju</h1>
                        </div>
                        <div className="testi" style={{ margin: '0px', marginBottom: '50px', position: 'relative' }}>
                            <div className="starss">
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <p>"Had an amazing experience with Navmi Finserrv! The team was incredibly professional and efficient in helping me secure a personal loan. Their process was smooth, transparent, and quick. I truly appreciated the personalized support from Mr. Ashish Joshi, who made sure all my questions were answered. Highly recommend them for anyone looking for reliable loan services!"
                            </p>
                            <img className="pseudoo" src={Pseudo} alt="" />
                        </div>
                    </Col>
                    <Col lg={4} md={12} sm={12} className="mb-5">
                        <div className="profiledata">
                            <img style={{ marginLeft: 'auto', marginRight: 'auto' }} src={mens5} alt="" />
                            <h1 className="mt-3 mb-3">Deepak</h1>
                        </div>
                        <div className="testi" style={{ margin: '0px', marginBottom: '50px', position: 'relative' }}>
                            <div className="starss">
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <p>“I had a great experience with Navmi Finserrv Pvt. Ltd. for my personal loan. The process was smooth, transparent, and quick. Their team guided me at every step and helped me get the best loan deal from top banks. Highly recommended for hassle-free financial solutions!”
                            </p>
                            <img className="pseudoo" src={Pseudo} alt="" />
                        </div>
                    </Col>
                    <Col lg={4} md={12} sm={12} className="mb-5">
                        <div className="profiledata">
                            <img style={{ marginLeft: 'auto', marginRight: 'auto' }} src={mens6} alt="" />
                            <h1 className="mt-3 mb-3">Vinod</h1>
                        </div>
                        <div className="testi" style={{ margin: '0px', marginBottom: '50px', position: 'relative' }}>
                            <div className="starss">
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <p>“I had a great experience with Navmi Finserrv for my personal loan. The team was professional, transparent, and guided me through the entire process smoothly. They helped me secure the best deal with minimal hassle. Highly recommended for anyone looking for quick and reliable loan assistance!”
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
