import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from '../../assets/banks/1.png'
import image2 from '../../assets/banks/2.png'
import image3 from '../../assets/banks/3.png'
import image4 from '../../assets/banks/4.png'
import image5 from '../../assets/banks/5.png'
import image6 from '../../assets/banks/6.png'
import image7 from '../../assets/banks/7.png'
import image8 from '../../assets/banks/8.png'
import image9 from '../../assets/banks/9.png'
import image10 from '../../assets/banks/10.png'
import image11 from '../../assets/banks/11.png'
import image12 from '../../assets/banks/12.png'
import image13 from '../../assets/banks/13.png'
import image14 from '../../assets/banks/14.png'
import image15 from '../../assets/banks/15.png'
import image16 from '../../assets/banks/16.png'
import image17 from '../../assets/banks/17.png'
import image18 from '../../assets/banks/18.png'
import image19 from '../../assets/banks/19.png'
import image20 from '../../assets/banks/20.png'

const OurClients = () => {
    const settings = {
        dots: false,
        autoplay:true,
        infinite: true,
        autoplaySpeed:2500,
        slidesToShow: 7,
        slidesToScroll: 7,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 7,
                    slidesToScroll: 7,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    };

    return (
        <div>
            <section className="ourclients">
                <Slider {...settings}>
                    <div>
                        <img src={image1} alt="" />
                    </div>
                    <div>
                        <img src={image2} alt="" />
                    </div>
                    <div>
                        <img src={image3} alt="" />
                    </div>
                    <div>
                        <img src={image4} alt="" />
                    </div>
                    <div>
                        <img src={image5} alt="" />
                    </div>
                    <div>
                        <img src={image6} alt="" />
                    </div>
                    <div>
                        <img src={image7} alt="" />
                    </div>
                    <div>
                        <img src={image8} alt="" />
                    </div>
                    <div>
                        <img src={image9} alt="" />
                    </div>
                    <div>
                        <img src={image10} alt="" />
                    </div>
                    <div>
                        <img src={image11} alt="" />
                    </div>
                    <div>
                        <img src={image12} alt="" />
                    </div>
                    <div>
                        <img src={image13} alt="" />
                    </div>
                    <div>
                        <img src={image14} alt="" />
                    </div>
                    <div>
                        <img src={image15} alt="" />
                    </div>
                    <div>
                        <img src={image16} alt="" />
                    </div>
                    <div>
                        <img src={image17} alt="" />
                    </div>
                    <div>
                        <img src={image18} alt="" />
                    </div>
                    <div>
                        <img src={image19} alt="" />
                    </div>
                    <div>
                        <img src={image20} alt="" />
                    </div>
                </Slider>
            </section>
        </div>
    )
}

export default OurClients
