import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Blogs1 from "../../assets/Blogs/blog1.png"
import { Link } from "react-router-dom";
const Blogs = () => {
    const settings = {
        dots: true,
        autoplay: true,
        infinite: false,
        autoplaySpeed: 2500,
        slidesToShow: 3,
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
    return (
        <div>
            <section className="blogss pt-5 pb-5">
                <h3>Success story posts</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias,<br /> omnis. Amet repellat, sit necessitatibus.</p>
                <Slider className="container" {...settings}>
                    <div>
                        <div className="blog">
                            <Link to="/blog-details">
                                <img className="w-100" src={Blogs1} alt="" />
                                <div className="blog-content">
                                    <h4>Apply for a Quick Loan</h4>
                                    <h2>Are you looking to apply for a quick loan? Navmi Finserrv gets it - life can throw unexpected expenses your way, and we offer a streamlined application process to get you funds quickly and conveniently.</h2>
                                    <a className="red-ores" href="blog-details">Read More</a>
                                </div>
                            </Link>
                        </div>
                    </div>
                </Slider>
            </section>
        </div>
    )
}

export default Blogs
