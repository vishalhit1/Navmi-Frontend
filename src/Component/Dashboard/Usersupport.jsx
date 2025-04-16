import { useEffect, useState } from 'react';
import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "./Sidebar";
import clock from "../../assets/icons/clock.svg"
import phonecall1 from "../../assets/icons/phone-call (1).svg"
import Headerdashboard from './Headerdashboard';
import Footerdashboard from './Footerdashboard';
import user from '../../assets/icons/user.svg';
import mail from '../../assets/icons/mail.svg';
import phonecall from '../../assets/icons/phone-call.svg';
import helpcircle from '../../assets/icons/help-circle.svg';
import description from '../../assets/icons/edit-3.svg';
const Usersupport = () => {
    const [isOpened, setIsOpened] = useState(null)

    const toggleSidebars = (val) => {
        setIsOpened(val)
    }

    useEffect(() => {

    }, []);

    // State variables for form fields and validation
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [association, setAssociation] = useState('');
    const [comments, setComments] = useState('');

    const [formErrors, setFormErrors] = useState({});

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Simple validation
        let errors = {};
        if (!name.trim()) {
            errors.name = 'Name is required';
        }
        if (!email.trim()) {
            errors.email = 'Email is required';
        }
        if (!phone.trim()) {
            errors.phone = 'Phone number is required';
        }
        if (!association.trim()) {
            errors.association = 'Association is required';
        }

        // Set errors object in state
        setFormErrors(errors);

        // If no errors, proceed with form submission
        if (Object.keys(errors).length === 0) {
            // Handle form submission logic here (e.g., API call or further processing)
            alert('Form submitted successfully!');
            // Clear form fields after successful submission
            setName('');
            setEmail('');
            setPhone('');
            setAssociation('');
            setComments('');
        }
    };
    return (
        <div>
            <Headerdashboard />
            <Container fluid>
                <Row>
                    <Sidebar toggleSidebars={toggleSidebars} />
                    <Col lg={9} className={`sidebarcontent ${isOpened ? '' : 'full-width'}`}>
                        <h3>Customer Support</h3>
                        <Row>
                            <Col lg={4}>
                                <div className="profiledetails12 creditcare12">
                                    <div className="leftsaass row">
                                        <div className="col-lg-3 col-md-12 col-sm-12">
                                            <img src={clock} alt="" />
                                        </div>
                                        <div className="col-lg-9 col-md-12 col-sm-12">
                                            <h4>Our Address</h4>
                                            <p>
                                                Bloomdesk, 1st Floor, Ghanshyam Enclave, Off. Dhanukarwadi link Road,
                                                Kandivali (W), Mumbai 400067
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </Col>
                            <Col lg={4}>
                                <div className="profiledetails12 creditcare12">
                                    <div className="leftsaass row">
                                        <div className="col-lg-3 col-md-12 col-sm-12">
                                            <img src={phonecall1} alt="" />
                                        </div>
                                        <div className="col-lg-9 col-md-12 col-sm-12">
                                            <h4>Contact</h4>
                                            <p>Mobile: +91-7365060606</p>
                                            <p>E-mail: info@navmi.in</p>
                                        </div>
                                    </div>

                                </div>
                            </Col>
                            <Col lg={4}>
                                <div className="profiledetails12 creditcare12">
                                    <div className="leftsaass row">
                                        <div className="col-lg-3 col-md-12 col-sm-12">
                                            <img src={clock} alt="" />
                                        </div>
                                        <div className="col-lg-9 col-md-12 col-sm-12">
                                            <h4>Hours of Opertation</h4>
                                            <p>Monday - Friday: 09:00 - 20:00</p>
                                            <p>Sunday &amp; Saturday: 10:30 -22:00</p>
                                        </div>
                                    </div>

                                </div>
                            </Col>
                        </Row>

                        <section className="contactus" style={{paddingTop:'0px'}}>
                            <Container>
                                <Row>
                                    <Col lg={6} md={12} sm={12}>
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.817748577375!2d72.83200177520858!3d19.203160982027804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7c1f5ea4caf%3A0x320523c92a3473a3!2sBloomdesk%20Coworking%20Space%204.0!5e0!3m2!1sen!2sin!4v1705391289547!5m2!1sen!2sin"
                                            width={'100%'}
                                            height={450}
                                            style={{ border: 0 }}
                                            allowFullScreen=""
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                        />

                                    </Col>
                                    <Col lg={5} md={12} sm={12}>
                                        <div className="contact">
                                            <h2 style={{lineHeight: '1.5',fontSize:'18px'}}>Feel Free to contact us any time. We will get back to you as soon as we can!.</h2>
                                            <form onSubmit={handleSubmit}>
                                                <div style={{ position: 'relative' }}>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Your name *"
                                                        value={name}
                                                        onChange={(e) => setName(e.target.value)}
                                                    />
                                                    <img className="users" src={user} alt="" />
                                                </div>
                                                {formErrors.name && <span className="error">{formErrors.name}</span>}
                                                <div style={{ position: 'relative' }}>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Your mail *"
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                    />
                                                    <img className="email" src={mail} alt="" />
                                                </div>
                                                {formErrors.email && <span className="error">{formErrors.email}</span>}
                                                <div style={{ position: 'relative' }}>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Your phone *"
                                                        value={phone}
                                                        onChange={(e) => setPhone(e.target.value)}
                                                    />
                                                    <img className="phone" src={phonecall} alt="" />
                                                </div>
                                                {formErrors.phone && <span className="error">{formErrors.phone}</span>}
                                                <div style={{ position: 'relative' }}>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Your Association"
                                                        value={association}
                                                        onChange={(e) => setAssociation(e.target.value)}
                                                    />
                                                    <img className="subject" src={helpcircle} alt="" />
                                                </div>
                                                {formErrors.association && <span className="error">{formErrors.association}</span>}
                                                <div style={{ position: 'relative' }}>
                                                    <textarea
                                                        style={{ height: 'auto' }}
                                                        placeholder="Your Comments"
                                                        className="form-control"
                                                        value={comments}
                                                        onChange={(e) => setComments(e.target.value)}
                                                        cols="10"
                                                        rows="3"
                                                    ></textarea>
                                                    <img className="message" src={description} alt="" />
                                                </div>
                                                <button type="submit" className="Send Now">
                                                    Send Now
                                                </button>
                                            </form>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </section>
                    </Col>
                </Row>
            </Container>
            <Footerdashboard />
        </div>

    );
};

export default Usersupport;
