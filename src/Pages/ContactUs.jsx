import { useEffect, useState } from 'react';
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import Swal from 'sweetalert2'; // Import SweetAlert

// Import your assets
import user from "../assets/icons/user.svg";
import mail from "../assets/icons/mail.svg";
import phonecall from "../.../../assets/icons/phone-call.svg";
import phonecall1 from "../.../../assets/icons/phone-call (1).svg";
import clock from "../.../../assets/icons/clock.svg";
import helpcircle from "../.../../assets/icons/help-circle.svg";
import description from "../.../../assets/icons/edit-3.svg";
import shadeclock from "../.../../assets/icons/shadeclock.svg";
import shademap from "../.../../assets/icons/shademap.svg";
import shadephone from "../.../../assets/icons/shadephone.svg";

const ContactUs = () => {
    // Form states
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [association, setAssociation] = useState('');
    const [comments, setComments] = useState('');

    // Form validation and submission states
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [shouldSubmit, setShouldSubmit] = useState(false);

    // Form validation function
    const validateForm = () => {
        let tempErrors = {};
        let isValid = true;

        // Name validation
        if (!name.trim()) {
            tempErrors.name = "Name is required";
            isValid = false;
        } else if (name.trim().length < 3) {
            tempErrors.name = "Name must be at least 3 characters";
            isValid = false;
        }

        // Email validation
        if (!email.trim()) {
            tempErrors.email = "Email is required";
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            tempErrors.email = "Email address is invalid";
            isValid = false;
        }

        // Phone validation
        if (!phone.trim()) {
            tempErrors.phone = "Phone number is required";
            isValid = false;
        } else if (!/^\d{10}$/.test(phone.replace(/\s/g, ''))) {
            tempErrors.phone = "Phone number must be 10 digits";
            isValid = false;
        }

        if (!association.trim()) {
            tempErrors.association = "Please enter your association";
            isValid = false;
        }

        // Comments validation
        if (!comments.trim()) {
            tempErrors.comments = "Please enter your comments";
            isValid = false;
        }

        setErrors(tempErrors);
        
        // If there are validation errors, show them in SweetAlert
        if (!isValid) {
            // Create HTML content for each error
            const errorMessages = Object.entries(tempErrors).map(([field, message]) => {
                // Capitalize first letter of field name
                const fieldName = field.charAt(0).toUpperCase() + field.slice(1);
                return `${message}`;
            }).join('<br>');
            
            Swal.fire({
                icon: 'warning',
                title: 'Validation Error',
                text: 'Please check all fields and try again.',
                confirmButtonColor: '#DA3731'
            });
        }
        
        return isValid;
    };

    // Form submission handler
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            setShouldSubmit(true);
        }
    };

    // Reset form after submission
    const resetForm = () => {
        setName('');
        setEmail('');
        setPhone('');
        setAssociation('');
        setComments('');
        setErrors({});
    };

    // UseEffect for handling form submission with try/catch
    useEffect(() => {
        if (!shouldSubmit) return;

        const sendMail = async () => {
            setIsSubmitting(true);
            
            // Show loading state
            Swal.fire({
                title: 'Submitting...',
                text: 'Please wait while we process your query',
                allowOutsideClick: false,
                didOpen: () => {
                    Swal.showLoading();
                }
            });
            
            try {
                const response = await axios.post("http://localhost:8000/mail/contactform", {
                    name,
                    email,
                    phone,
                    association,
                    comments
                });

                console.log("Form submission response:", response.data);

                // Show success SweetAlert
                Swal.fire({
                    title: 'Thank You!',
                    text: 'Your message has been sent successfully. We will get back to you soon.',
                    icon: 'success',
                    confirmButtonText: 'Great!'
                });

                // Reset form after successful submission
                resetForm();

            } catch (error) {
                console.error("Form submission error:", error);

                // Show error SweetAlert with specific error if available
                Swal.fire({
                    title: 'Submission Failed',
                    text: error.response?.data?.message || 'Something went wrong. Please try again.',
                    icon: 'error',
                    confirmButtonText: 'Try Again'
                });

            } finally {
                setIsSubmitting(false);
                setShouldSubmit(false);
            }
        };

        sendMail();
    }, [shouldSubmit, name, email, phone, association, comments]);

    return (
        <div>
            <section className="introduction">
                <h3>Contact Us</h3>
            </section>
            <section className="contactinfo">
                <Container>
                    <Row className="mt-5">
                        <Col lg={4} md={12} sm={12}>
                            <Row className="leftsaass">
                                <Col lg={3} md={12} sm={12}>
                                    <i className='fa fa-location-arrow'></i>
                                </Col>
                                <Col lg={9} md={12} sm={12}>
                                    <h4>Our Address</h4>
                                    <p>605, Aravalli Business Center, R C Patel Road, Opp. Croma, Above Jana Sahakari Bank, Near by station, Borivali West, 400092, Mumbai.</p>
                                    <img className="shadeimg" src={shademap} alt="Map icon" />
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={4} md={12} sm={12}>
                            <Row className="leftsaass">
                                <Col lg={3} md={12} sm={12}>
                                    <img src={phonecall1} alt="Phone icon" />
                                </Col>
                                <Col lg={9} md={12} sm={12}>
                                    <h4>Contact</h4>
                                    <p>Mobile: +91 9594450450</p>
                                    <p>E-mail: aj@navmifinserrv.com</p>
                                    <img className="shadeimg" src={shadephone} alt="Phone shade icon" />
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={4} md={12} sm={12}>
                            <Row className="leftsaass">
                                <Col lg={3} md={12} sm={12}>
                                    <img src={clock} alt="Clock icon" />
                                </Col>
                                <Col lg={9} md={12} sm={12}>
                                    <h4>Hours of Operation</h4>
                                    <p>Monday to Saturday  10:00 to 20:00</p>
                                    <img className="shadeimg" src={shadeclock} alt="Clock shade icon" />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="contactus">
                <Container>
                    <Row>
                        <Col lg={6} md={12} sm={12}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.1569718787237!2d72.84931177520929!3d19.23198948200496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b10062ddd33f%3A0xa6a7e80bebc5a8c0!2sAravalli%20business%20center!5e0!3m2!1sen!2sin!4v1737617245191!5m2!1sen!2sin"
                                width={'100%'}
                                height={450}
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Navmi Finserrv Office Location"
                            />
                        </Col>
                        <Col lg={5} md={12} sm={12}>
                            <div className="contact">
                                <h2>Let's Conversation With Navmi</h2>
                                <form onSubmit={handleSubmit}>
                                    <div style={{ position: 'relative' }}>
                                        <input
                                            type="text"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                            placeholder="Your name *"
                                        />
                                        <img className="users" src={user} alt="User icon" />
                                        {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                                    </div>
                                    <div style={{ position: 'relative' }}>
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                            placeholder="Your email *"
                                        />
                                        <img className="email" src={mail} alt="Email icon" />
                                        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                                    </div>
                                    <div style={{ position: 'relative' }}>
                                        <input
                                            type="tel"
                                            value={phone}
                                            onChange={(e) => {
                                                // Only allow numbers
                                                const re = /^[0-9\b]+$/;
                                                if (e.target.value === '' || re.test(e.target.value)) {
                                                    setPhone(e.target.value);
                                                }
                                            }}
                                            maxLength="10"
                                            className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                                            placeholder="Your phone *"
                                        />
                                        <img className="phone" src={phonecall} alt="Phone icon" />
                                        {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                                    </div>
                                    <div style={{ position: 'relative' }}>
                                        <input
                                            type="text"
                                            value={association}
                                            onChange={(e) => setAssociation(e.target.value)}
                                            className={`form-control ${errors.association ? 'is-invalid' : ''}`}
                                            placeholder="Your Association"
                                        />
                                        <img className="subject" src={helpcircle} alt="Help icon" />
                                        {errors.association && <div className="invalid-feedback">{errors.association}</div>}
                                    </div>
                                    <div style={{ position: 'relative' }}>
                                        <textarea
                                            value={comments}
                                            onChange={(e) => setComments(e.target.value)}
                                            style={{ height: 'auto' }}
                                            placeholder="Your Comments *"
                                            className={`form-control ${errors.comments ? 'is-invalid' : ''}`}
                                            cols="10"
                                            rows="3"
                                        ></textarea>
                                        <img className="message" src={description} alt="Description icon" />
                                        {errors.comments && <div className="invalid-feedback">{errors.comments}</div>}
                                    </div>
                                    <button
                                        type="submit"
                                        className="Send Now"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? 'Submitting Query...' : 'Submit Now'}
                                    </button>
                                </form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default ContactUs;