import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Users from '../../assets/Homepage/users.svg'
import mens from '../../assets/men.png'
import mens1 from '../../assets/reviews/8.png'
import mens2 from '../../assets/reviews/2.png'
import mens3 from '../../assets/reviews/3.png'
import mens4 from '../../assets/reviews/4.png'
import mens5 from '../../assets/reviews/5.png'
import mens7 from '../../assets/reviews/9.png'
const Testimonials = () => {
    const settings = {
        dots: true,
        
        autoplay:true,
        infinite: true,
        autoplaySpeed:2500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
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
    return (
        <div>
            <section className="testimonails">
                <div className="maincom text-center">
                    <h2>What They’re Talking?</h2>
                </div>
                <Slider className="container" {...settings}>
                    <div>
                        <div className="profiledata">
                            <img style={{ marginLeft: 'auto', marginRight: 'auto' }} src={mens} alt="" />
                            <h3>Jatin</h3>
                        </div>
                        <div className="testi">
                            <div className="starss">
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <p>"I had a fantastic experience with Navmi Finserrv Pvt. Ltd. for my Loan Against Property. The team was highly knowledgeable and guided me through the entire process with complete transparency. They helped me secure the best deal with a low interest rate and flexible repayment options. Mr. Ashish Joshi and his team provided exceptional support, ensuring a smooth and hassle-free process. Their expertise and prompt service made all the difference. I highly recommend Navmi Finserrv to anyone looking for a reliable financial partner!"</p>
                        </div>
                    </div>
                    <div>
                        <div className="profiledata">
                            <img style={{ marginLeft: 'auto', marginRight: 'auto' }} src={mens1} alt="" />
                            <h3>Firoz</h3>
                        </div>
                        <div className="testi">
                            <div className="starss">
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <p>"I recently availed a Loan Against Property through Navmi Finserrv Pvt. Ltd., and I couldn't be more satisfied with their service. The team was extremely professional, knowledgeable, and supportive throughout the process. They provided me with multiple options from leading banks and NBFCs, ensuring I got the best deal with a competitive interest rate and flexible terms. A special thanks to Mr. Ashish Joshi for his expert advice and quick responses. The entire process was smooth, hassle-free, and completed within the promised timeline. I highly recommend Navmi Finserrv to anyone looking for a seamless and reliable loan service!"</p>
                        </div>
                    </div>
                    <div>
                        <div className="profiledata">
                            <img style={{ marginLeft: 'auto', marginRight: 'auto' }} src={mens2} alt="" />
                            <h3>Anand</h3>
                        </div>
                        <div className="testi">
                            <div className="starss">
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <p>"I had a great experience securing a Loan Against Property with Navmi Finserrv Pvt. Ltd. The team was incredibly professional, and they took the time to understand my needs, offering multiple options from leading banks and financial institutions. They helped me select the best loan package with a competitive interest rate and manageable terms. Mr. Ashish Joshi's support and guidance throughout the entire process were exceptional—he made sure everything was clear and processed smoothly. I truly appreciate their promptness and transparency. Highly recommend Navmi Finserrv for anyone looking to take a loan against property!"</p>
                        </div>
                    </div>
                    <div>
                        <div className="profiledata">
                            <img style={{ marginLeft: 'auto', marginRight: 'auto' }} src={mens3} alt="" />
                            <h3>Anita</h3>
                        </div>
                        <div className="testi">
                            <div className="starss">
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <p>"I had the pleasure of working with Navmi Finserrv Pvt. Ltd. for my Loan Against Property, and I couldn't be happier with the experience. From the start, the team was incredibly helpful, providing clear and concise information about my loan options. They took the time to understand my financial situation and found the perfect solution that fit my needs. Mr. Ashish Joshi and his team were always available to answer my questions and guide me through every step of the process. The loan approval was fast, and the entire process was transparent and smooth. I highly recommend Navmi Finserrv to anyone looking for a reliable and trustworthy financial partner."</p>
                        </div>
                    </div>
                    <div>
                        <div className="profiledata">
                            <img style={{ marginLeft: 'auto', marginRight: 'auto' }} src={mens4} alt="" />
                            <h3>DhanRaj</h3>
                        </div>
                        <div className="testi">
                            <div className="starss">
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <p>"Navmi Finserrv made my Business loan process seamless and stress-free! Their team guided me through every step, ensuring quick approval and the best deal from top banks. Highly professional, transparent, and efficient service. Highly recommend!"</p>
                        </div>
                    </div>
                    <div>
                        <div className="profiledata">
                            <img style={{ marginLeft: 'auto', marginRight: 'auto' }} src={mens5} alt="" />
                            <h3>Vishal</h3>
                        </div>
                        <div className="testi">
                            <div className="starss">
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <p>"Excellent Service for Business Loan! Navmi Finserrv made my Business loan process smooth and hassle-free. Their team provided expert guidance, quick approvals, and the best loan options tailored to my needs. A special thanks to Mr. Ashish Joshi for his professionalism and support. Highly recommended for anyone seeking business financing!"</p>
                        </div>
                    </div>
                    <div>
                        <div className="profiledata">
                            <img style={{ marginLeft: 'auto', marginRight: 'auto' }} src={mens7} alt="" />
                            <h3>Sanjit</h3>
                        </div>
                        <div className="testi">
                            <div className="starss">
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <p>"I had a fantastic experience with Navmi Finserrv Pvt. Ltd. for my Business loan. Their team provided expert guidance, quick processing, and multiple loan options from top banks. Thanks to their support, I secured the best deal with minimal hassle. Highly recommended for seamless and professional financial services!"</p>
                        </div>
                    </div>
                    <div>
                        <div className="profiledata">
                            <img style={{ marginLeft: 'auto', marginRight: 'auto' }} src={mens} alt="" />
                            <h3>DhanRaj</h3>
                        </div>
                        <div className="testi">
                            <div className="starss">
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <p>"Excellent Business Loan Services! Navmi Finserrv made my Business loan process smooth and hassle-free. Their team guided me at every step, ensuring quick approval with the best interest rates. Special thanks to Mr. Ashish Joshi for his expertise and support. Highly recommended for anyone looking for a reliable financial partner!"</p>
                        </div>
                    </div>
                    <div>
                        <div className="profiledata">
                            <img style={{ marginLeft: 'auto', marginRight: 'auto' }} src={mens1} alt="" />
                            <h3>Haresh</h3>
                        </div>
                        <div className="testi">
                            <div className="starss">
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <p>"I had a great experience with Navmi Finserrv for my Business loan. The team was professional, transparent, and guided me through the entire process smoothly. They helped me get the best loan option with minimal hassle and quick approval. Highly recommended for anyone looking for financial support!"</p>
                        </div>
                    </div>
                    <div>
                        <div className="profiledata">
                            <img style={{ marginLeft: 'auto', marginRight: 'auto' }} src={mens2} alt="" />
                            <h3>Surendra</h3>
                        </div>
                        <div className="testi">
                            <div className="starss">
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <p>“Navmi Finserrv made my Business loan process seamless and hassle-free! Their team provided expert guidance, quick approvals, and the best loan options from multiple banks. Highly professional and trustworthy service. Highly recommended for anyone looking for business financing!"</p>
                        </div>
                    </div>
                    <div>
                        <div className="profiledata">
                            <img style={{ marginLeft: 'auto', marginRight: 'auto' }} src={mens3}alt="" />
                            <h3>Balveer</h3>
                        </div>
                        <div className="testi">
                            <div className="starss">
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                            </div>
                            <p>“Navmi Finserrv made securing a Business loan a seamless process. Their team was knowledgeable and quick to respond, offering personalized solutions that perfectly matched my needs. The loan approval was fast, and the entire experience was smooth from start to finish. Highly recommend their services for anyone seeking financial support!”</p>
                        </div>
                    </div>
                </Slider>
            </section>
        </div>
    )
}

export default Testimonials
