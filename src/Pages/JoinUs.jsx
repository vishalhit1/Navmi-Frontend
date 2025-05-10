import { useEffect, useState } from 'react';
import axios from "axios";
import { Col, Container, Row } from 'react-bootstrap';
import user from '../assets/icons/user.svg';
import mail from '../assets/icons/mail.svg';
import phonecall from '../assets/icons/phone-call.svg';
import helpcircle from '../assets/icons/help-circle.svg';
import description from '../assets/icons/edit-3.svg';
import Joinimg from '../assets/icons/joinimg.png';
import Joinimg1 from '../assets/Homepage/joinus.svg';
import Swal from 'sweetalert2'; // Import SweetAlert
const Joinus = () => {
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
                const response = await axios.post("http://localhost:8000/mail/joinus", {
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
