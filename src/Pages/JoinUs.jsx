import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import user from '../assets/icons/user.svg';
import mail from '../assets/icons/mail.svg';
import phonecall from '../assets/icons/phone-call.svg';
import helpcircle from '../assets/icons/help-circle.svg';
import description from '../assets/icons/edit-3.svg';
import Joinimg from '../assets/icons/joinimg.png';
import Joinimg1 from '../assets/Homepage/joinus.svg';

const Joinus = () => {
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
            <section className="introduction">
                <h3>Join Us</h3>
            </section>
            <section className="allblogs">
                <Container>
                    <Row style={{ justifyContent: 'space-around', alignItems: 'center' }}>
                        <Col lg={5} md={12} sm={12}>
                            <div className="contact">
                                <h2 style={{ fontSize: '27px' }}>Join Our Team</h2>
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
                        <Col lg={6} md={12} sm={12}>
                            <img className="w-100" src={Joinimg} alt="" />
                        </Col>
                    </Row>
                </Container>
            </section>
            <Container>
                <p className="paara">As a growing prominent referral of all the best banks and NBFC in the market, we are deeply concerned about your business and your clients’ needs. We, Navmi Finserrv Pvt. Ltd, the Direct Sales Associates of the banks will do our best to ensure that you are fully supported in meeting these requirements. As we are committed to become the most pragmatic and accountable team in the market. Welcoming you to be a part of fastest growing team.</p>
                <h3 className="titleco">COMING TOGETHER IS A BEGINNING  <br />KEEPING TOGETHER IS PROGRESS WORKING TOGETHER IS SUCCESS</h3>
                <Row className="joinref">
                    <Col lg={4} md={12} sm={12}>
                        <img className="w-100" src={Joinimg1} alt="" />
                    </Col>
                    <Col lg={8} md={12} sm={12}>
                        <h3>REFERRAL PROGRAMS</h3>
                        <p>All the connectors, freelancers and agents are invited to be a part of our team. Navmi Finserrv Pvt. Ltd will head you to the conversions and will lead you to get more business and grow with our excellent commercials.. Welcoming you to be a part of fastest growing team.</p>
                        <h3>CA Association Program</h3>
                        <p>We invite our Esteemed Chartered Accountants to support us and get benefited. We, Navmi Finserrv Pvt. Ltd, consider you as a financial engineer who derive the financial structure of their clients. We invite you for the association and get benefited.</p>
                        <h3>Real Estate Brigade</h3>
                        <p>Navmi Finserrv Pvt. Ltd Welcomes all our Real Estate Agents, The Real Home Providers. Navmi Finserrv Pvt. Ltd gets you extra benefits on your exclusive deals. Navmi Finserrv Pvt. Ltd will help you to serve your clients better so that you can find home and arrange finance as well for your clients. This will enhance your services and client reaches.</p>
                    </Col>
                </Row>
                <h3 className="titleco  mb-5">LET'S INCREASE THE STRENGTH AND CREATE THE NUMBERS</h3>
            </Container>
        </div>
    )
}

export default Joinus
