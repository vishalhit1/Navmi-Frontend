import { Col, Container, Row } from "react-bootstrap";
import aboutus from "../assets/aboutus.png"
import Slider from "react-slick";
import first from "../assets/awards/1.jpeg"
import two from "../assets/awards/2.jpeg"
import three from "../assets/awards/3.jpeg"
import four from "../assets/awards/4.jpeg"
import five from "../assets/awards/5.jpeg"
import Abcd from "../assets/Blogs/image1.png"
import social1 from "../assets/facebookk.svg"
import social2 from "../assets/instagramm.svg"
import social3 from "../assets/twitterr.svg"
import social4 from "../assets/linkdien.svg"
import welcomenavmi from "../assets/welcometonavmi.jpeg"
import whattoexpect from "../assets/whattoexpect.jpeg"
import whatweoffer from "../assets/whatweoffer.jpeg"
import about12 from "../assets/group/1.jpeg"
import about13 from "../assets/group/2.jpeg"
import about14 from "../assets/group/3.jpeg"
import about15 from "../assets/group/4.jpeg"
import conduct1 from "../assets/conduct/1.jpeg"
import conduct2 from "../assets/conduct/2.jpeg"
import conduct3 from "../assets/conduct/3.jpeg"
import conduct4 from "../assets/conduct/4.jpeg"
import about121 from "../assets/group/5.jpeg"
import ashish from "../assets/ashish.jpeg"
import jigar from "../assets/jigar.jpeg"
import nishita from "../assets/nishita.jpeg"
import ashishjo from "../assets/ashishjo.jpeg"
const AboutUs = () => {
  const settings1 = {
    dots: false,
    autoplay: false,
    infinite: false,
    autoplaySpeed: 2500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
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
  const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 2500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true
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
      <section className="aboutuscxz">
        <Container>
          <Row className="mb-5">
            <Col lg={4} md={6} sm={12} xs={12}>
              <img className="w-100" src={welcomenavmi} alt="aboutus" />
            </Col>
            <Col lg={8} md={6} sm={12} xs={12}>
              <h1>Welcome to Navmi Finserrv Pvt. Ltd.</h1>
              <p>
                3M Finance Solutions has now been transformed into Navmi Finserrv Pvt. Ltd.!
                For nearly 14 incredible years, 3M Finance Solutions has been a trusted partner in fulfilling financial aspirations. As part of our journey of growth and innovation, we are thrilled to share that we have now transformed into Navmi Finserrv Pvt. Ltd., a name that represents our commitment to evolving with you.
              </p><p>Operating as Navmi Finserrv for the past 2 years, we continue to deliver excellence in financial services as proud channel partners with over 40 leading banks and NBFCs. With a renewed vision, we are dedicated to offering seamless solutions tailored to your financial needs.
              </p> <p>Stay tuned for more updates as we move forward with the same reliability, trust, and dedication that have been our hallmark since the beginning!
                Over the years, we successfully built relationships with various business entities and our salaried clients. Our consistently growing client list includes top-league corporates from various business backgrounds and their employees.
              </p><p>Our team, associates and all the clients have raised Navmi Finserrv Solutions with their support and by showing their faith and trust in us. We will keep growing together and aim to be the most promising and renowned name in the loan industry.
              </p>
            </Col>
          </Row>
          <Row>
            <Col lg={12} md={6} sm={12} xs={12}>
              <h5 className="chose-h5">Why Choose Navmi Finserrv Pvt. Ltd.?</h5>
              <h6 className="chose-p">With a legacy of trust and over 14 years of expertise, Navmi Finserrv Pvt. Ltd. offers unmatched benefits to its clients:</h6>
              <Row>
                <Col lg={3}>
                  <div className="choose-box">
                    <h2>Extensive Channel Partnerships</h2>
                    <p>Partnered with over 40 leading banks and NBFCs, we provide you with a wide range of financial products and services
                      tailored to your needs.</p>
                  </div>
                </Col>
                <Col lg={3}>
                  <div className="choose-box">
                    <h2>One-Stop Financial Solution</h2>
                    <p>From personal loans to business funding, home loans, vehicle financing, and more – we cater to all your financial
                      requirements under one roof.</p>
                  </div>
                </Col>
                <Col lg={3}>
                  <div className="choose-box">
                    <h2>Customized Loan Solutions</h2>
                    <p>Our experts help you find the most suitable loan options with competitive interest rates and terms that fit your
                      unique financial situation.</p>
                  </div>
                </Col>
                <Col lg={3}>
                  <div className="choose-box">
                    <h2>Fast Approvals and Hassle-Free Process</h2>
                    <p>We streamline the application process to ensure quick approvals, minimal documentation, and a smooth experience for
                      every client.</p>
                  </div>
                </Col>
                <Col lg={3}>
                  <div className="choose-box">
                    <h2>Expert Guidance</h2>
                    <p>With years of experience and a team of skilled financial advisors, we help you make informed decisions to achieve
                      your goals.</p>
                  </div>
                </Col>
                <Col lg={3}>
                  <div className="choose-box">
                    <h2>Transparent Operations</h2>
                    <p>Trust and transparency are at the core of everything we do. No hidden fees, clear communication, and ethical
                      practices define our services.</p>
                  </div>
                </Col>
                <Col lg={3}>
                  <div className="choose-box">
                    <h2>Pan-India Reach</h2>
                    <p>Whether you're in a metro city or a smaller town, our network and partnerships ensure that our services are
                      accessible across India.</p>
                  </div>
                </Col>
                <Col lg={3}>
                  <div className="choose-box">
                    <h2>Customer-Centric Approach</h2>
                    <p>We prioritize your satisfaction and success, working closely with you to turn your financial dreams into reality.</p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="comparision groupcompa">
        <Container fluid style={{ padding: '0px' }}>
          <Col lg={12} md={12} sm={12} xs={12}>
            <img className="w-100" src={about121} alt="logobg" />
          </Col>
        </Container>
      </section>
      <h3 className="titleco mt-5">"The more you dream, the more you act, so you achieve<br />So dream big, act fast and keep on achieving"</h3>
      <section className="aboutuscxz">
        <Container>
          <Row className="mb-5">
            <Col lg={4} md={6} sm={12} xs={12}>
              <img className="w-100" src={ashishjo} alt="aboutus" />
            </Col>
            <Col lg={8} md={6} sm={12} xs={12}>
              <h1>Meet Mr. Ashish Joshi – The Visionary Leader Behind Navmi Finserrv Pvt. Ltd.</h1>
              <p>
                With an impressive 15 years of experience in the financial sector, <b>Mr. Ashish Joshi</b> plays a pivotal role as the key person of Navmi Finserrv Pvt. Ltd. His vast expertise and strategic insights have been instrumental in transforming the company from its roots as 3M Finance Solutions into a trusted financial powerhouse.
              </p>
              <p>
                Mr. Joshi’s leadership reflects a strong commitment to innovation, customer satisfaction, and operational excellence. His ability to build strong partnerships with over 40+ banks and NBFCs has made Navmi Finserrv a go-to solution for diverse financial needs across India.
              </p>
              <p>
                Under his guidance, the company has thrived, offering transparent, reliable, and customer-centric services, earning the trust of countless individuals and businesses.
              </p>
            </Col>
          </Row>
          <Row className="mb-5">
            <Col lg={8} md={6} sm={12} xs={12}>
              <h1>What We Offer?</h1>
              <p>We are adhered to our working style and the principle of client satisfaction wherein our client gets the non-biased information and clarity on the deal which is in favour of the client only. Our consultants and advisers ensure that the services are in compliance with honesty and integrity.</p>

              <p>We help you compare diverse products such as Personal Loan, Home Loan, Loan Against Property, Business loan etc. on the parameters which matter the most. Along with the product details and comparisons of various banks, we also help you make the best deal for you and assist you during the complete transaction process with the bank.</p>
            </Col>
            <Col lg={4} md={6} sm={12} xs={12}>
              <img className="w-100" src={whatweoffer} alt="aboutus" />
            </Col>
          </Row>
          <Row className="mb-5">
            <Col lg={4} md={6} sm={12} xs={12}>
              <img className="w-100" src={whattoexpect} alt="aboutus" />
            </Col>
            <Col lg={8} md={6} sm={12} xs={12}>
              <h1>What To Expect?</h1>
              <p>Navmi Finserrv Loans provides you brilliant comparison tools which give you all options to fit your profile and your needs. Being an official service provider for all the banks, we expedite the entire process and keep our customers updated. Navmi Finserrv Loans helps assist you to take smarter decisions. In the rare cases or issues of any further queries, our expert executives are just a call away.</p>

              <p>We advise you to save yourself from the inaccurate and biased information from agents and consultants. Please compare and conclude here, at Navmi Finserrv Loans, and get the right information about the product as we believe that your need is our priority.</p>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="aboutus-content">
        <Container>
          <Row>
            <p>We help you compare diverse products such as Personal Loan, Home Loan, Loan Against Property, Business loan etc. on the parameters which matter the most. Along with the product deta.ls and comparisons of various banks, we also help you make the best deal for you and assist you during the complete transaction process with the bank</p>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <h3 className="titleco mt-5">Code of Conduct:</h3>
          <p className="text-center">Over the years we have successfully built relationships with various business entities and our salaried clients. Our consistently growing client list includes top league corporates from various business backgrounds and their employees.</p>
          <Row className="mt-5">
            <Col lg={6}>
              <div className="deal_block">
                <img
                  className="scale-with-grid"
                  src={conduct2}
                  alt="Refer Your Friends"
                />
                <h3>Client Satisfaction Methodology </h3>
                <p>
                  We are adhered to our working style and the principle of client
                  satisfaction wherein our client gets the non-biased information
                  and clarity on the deal which is in favour of the client only. Our
                  consultants and advisers ensure that the services are in
                  compliance with honesty and integrity.
                </p>
              </div>
            </Col>
            <Col lg={6}>
              <div className="deal_block">
                <img
                  className="scale-with-grid"
                  src={conduct3}
                  alt="Apply Online"
                />
                <h3>Client’s Need is Our Priority </h3>
                <p>
                  We have been able to maintain our trust and credibility in the
                  market because of our client-centric approach. The strategic
                  financial suggestions are appreciated for their ability to even
                  cater to complex financial requirements. This, apparently, is
                  shooting up the structure and numbers of our client base.
                </p>
              </div>
            </Col>
            <Col lg={6}>
              <div className="deal_block">
                <img
                  className="scale-with-grid"
                  src={conduct1}
                  alt="Balance Transfer"
                />
                <h3>We Understand Your Money </h3>
                <p>
                  We are here to guide you on how to go ahead about your needs and
                  which lender will give you the best possible deal as per your
                  profile. Our expert team will help you and educate you about the
                  comparison / options available, so that you are benefited and save
                  more money.{" "}
                </p>
              </div>
            </Col>
            <Col lg={6}>
              <div className="deal_block">
                <img
                  className="scale-with-grid"
                  src={conduct4}
                  alt="Let Your Fingers Do The Talking"
                />
                <h3>Let Your Fingers Do The Talking</h3>
                <p>
                  Let your fingers walk on our portal and allow us to run for you.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <div className="our-teass">
        <Container>
          <section className="our-teamss mt-5 mb-5">
            <h5>Our Expert Team</h5>
            <Slider {...settings1}>
              <div>
                <div className="teammm">
                  <img className="teammemberimg" src={ashish} alt="" />
                  <h3>Mr. Ashish Joshi </h3>
                  <h6>Founder</h6>
                  <h6>Managing Director</h6>
                  <h6>Navmi Finserrv / 3M Solutions / 3M Finserrv</h6>
                  <div className="socialiconssss">
                    <img src={social1} alt="" />
                    <img src={social2} alt="" />
                    <img src={social3} alt="" />
                    <img src={social4} alt="" />
                  </div>
                </div>
              </div>
              <div>
                <div className="teammm">
                  <img className="teammemberimg" src={nishita} alt="" />
                  <h3>Nishita Joshi </h3>
                  <h6>Co-founder. </h6>
                  <h6>Senior Manager</h6>
                  <h6>Navmi Finserrv / 3M Solutions / 3M Finserrv</h6>
                  <div className="socialiconssss">
                    <img src={social1} alt="" />
                    <img src={social2} alt="" />
                    <img src={social3} alt="" />
                    <img src={social4} alt="" />
                  </div>
                </div>
              </div>
              <div>
                <div className="teammm">
                  <img className="teammemberimg" style={{borderRadius:'100%'}} src={jigar} alt="" />
                  <h3>Jigar Nathwani</h3>
                  <h6 style={{visibility:'hidden'}}>Co-founder. </h6>
                  <h6>Technical Manager</h6>
                  <h6>Navmi Finserrv / 3M Solutions / 3M Finserrv</h6>
                  <div className="socialiconssss">
                    <a target="_blank" href="https://www.facebook.com/jigar.nathwani/"><img src={social1} alt="" /></a>
                    <a target="_blank" href="https://www.instagram.com/jdjigar/"><img src={social2} alt="" /></a>
                    <a target="_blank" href="https://twitter.com/imnathwani"><img src={social3} alt="" /></a>
                    <a target="_blank" href="https://in.linkedin.com/company/handsintechnology"><img src={social4} alt="" /></a>
                  </div>
                </div>
              </div>
            </Slider>
          </section>
        </Container>
      </div>

      <section className="groupcompa1">
        <h3>Awards and Recognized</h3>
        <Container>
          <Slider {...settings}>
            <div>
              <Row>
                <img className="w-100" src={first} alt="" />
              </Row>
            </div>
            <div>
              <Row>
                <img className="w-100" src={two} alt="" />
              </Row>
            </div>
            <div>
              <Row>
                <img className="w-100" src={three} alt="" />
              </Row>
            </div>
            <div>
              <Row>
                <img className="w-100" src={four} alt="" />
              </Row>
            </div>
            <div>
              <Row>
                <img className="w-100" src={five} alt="" />
              </Row>
            </div>
            <div>
              <Row>
                <img className="w-100" src={first} alt="" />
              </Row>
            </div>
            <div>
              <Row>
                <img className="w-100" src={two} alt="" />
              </Row>
            </div>
            <div>
              <Row>
                <img className="w-100" src={three} alt="" />
              </Row>
            </div>
            <div>
              <Row>
                <img className="w-100" src={four} alt="" />
              </Row>
            </div>
            <div>
              <Row>
                <img className="w-100" src={five} alt="" />
              </Row>
            </div>
          </Slider>
        </Container>
      </section>
      <section className="groupcompa">
        <h3>Group Companies</h3>
        <Container>
          <Slider {...settings}>
            <div>
              <Row>
                <img className="w-100" src={about12} alt="" />
              </Row>
            </div>
            <div>
              <Row>
                <img className="w-100" src={about14} alt="" />
              </Row>
            </div>
            <div>
              <Row>
                <img className="w-100" src={about13} alt="" />
              </Row>
            </div>
            <div>
              <Row>
                <img className="w-100" src={about15} alt="" />
              </Row>
            </div>
            <div>
              <Row>
                <img className="w-100" src={about12} alt="" />
              </Row>
            </div>
            <div>
              <Row>
                <img className="w-100" src={about13} alt="" />
              </Row>
            </div>
            <div>
              <Row>
                <img className="w-100" src={about14} alt="" />
              </Row>
            </div>
            <div>
              <Row>
                <img className="w-100" src={about15} alt="" />
              </Row>
            </div>
          </Slider>
        </Container>
      </section>
      <section className="about-gallery">
        <Container>
          <Row>
            <Col lg={3}>
              <div className="image-container">
                <img src={Abcd} className="w-100" alt="" />
              </div>
              <div className="image-container">
                <img src={Abcd} className="w-100" alt="" />
              </div>
            </Col>
            <Col lg={3}>
              <div className="image-container">
                <img src={Abcd} className="w-100" alt="" />
              </div>
              <div className="image-container">
                <img src={Abcd} className="w-100" alt="" />
              </div>
            </Col>
            <Col lg={3}>
              <div className="image-container">
                <img src="https://mysso.handsintechnology.in/assets/3-CI69MGI6.png" className="w-100" alt="" />
              </div>
            </Col>
            <Col lg={3}>
              <div className="image-container">
                <img src="https://mysso.handsintechnology.in/assets/4-CJh0HqAj.png" className="w-100" alt="" />
              </div>
              <div className="image-container">
                <img src="https://mysso.handsintechnology.in/assets/4-CJh0HqAj.png" className="w-100" alt="" />
              </div>
              <div className="image-container">
                <img src="https://mysso.handsintechnology.in/assets/4-CJh0HqAj.png" className="w-100" alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default AboutUs;
